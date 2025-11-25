require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadJson(filename, fallback = []) {
  ensureDataDir();
  const p = path.join(DATA_DIR, filename);
  try {
    if (!fs.existsSync(p)) { fs.writeFileSync(p, JSON.stringify(fallback, null, 2)); }
    return JSON.parse(fs.readFileSync(p, 'utf8') || '[]');
  } catch (e) {
    return fallback;
  }
}

function saveJson(filename, data) {
  ensureDataDir();
  const p = path.join(DATA_DIR, filename);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

  // Simple in-file "users" store for demos (passwords in cleartext for demo only)
  const USERS_FILE = 'users.json';
  const COURSES_FILE = 'courses.json';
  const NOTIFS_FILE = 'notifications.json';
  const TEACHERS_FILE = 'teachers.json';
  const SUBS_FILE = 'subscriptions.json';

  // uploads directory
  const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
  function ensureUploads() { if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true }); }

  // ensure base demo users exist
  if (loadJson(USERS_FILE, null) === null) {
    saveJson(USERS_FILE, [
      { username: 'Admin User', email: 'admin.example@gmail.com', password: 'adminpass', role: 'admin' },
      { username: 'Teacher Jane', email: 'teacher.example@gmail.com', password: 'teacherpass', role: 'teacher' },
      { username: 'Regular Joe', email: 'user.example@gmail.com', password: 'userpass', role: 'user' },
    ]);
  }

  function findUserByEmail(email) {
    const users = loadJson(USERS_FILE, []);
    return users.find(u => u.email.toLowerCase() === (email||'').toLowerCase());
  }

  // Auth endpoints
  app.post('/signin', (req, res) => {
    const { email, password } = req.body || {};
    const found = findUserByEmail(email);
    if (!found || found.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: found.email, role: found.role }, JWT_SECRET, { expiresIn: '2h' });
    const user = { username: found.username, email: found.email, role: found.role };
    res.json({ token, user });
  });

  app.post('/validate', (req, res) => {
    const { token } = req.body || {};
    if (!token) return res.status(400).json({ valid: false });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ valid: false });
      const found = findUserByEmail(decoded.email);
      if (!found) return res.status(401).json({ valid: false });
      return res.json({ valid: true, user: { username: found.username, email: found.email, role: found.role } });
    });
  });

  // middleware to verify JWT in Authorization header
  function authMiddleware(req, res, next) {
    const auth = req.headers.authorization || req.query.token || req.body.token;
    if (!auth) return res.status(401).json({ message: 'Missing token' });
    const token = (auth || '').replace(/^Bearer\s+/i, '');
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Invalid token' });
      req.user = decoded; next();
    });
  }

  function requireRole(role) {
    return (req, res, next) => {
      if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
      if (req.user.role !== role) return res.status(403).json({ message: 'Forbidden' });
      next();
    };
  }

  // Helper to create id
  function makeId(prefix = '') { return (prefix || '') + Date.now().toString(); }

  // serve uploaded files statically
  ensureUploads();
  app.use('/uploads', express.static(UPLOADS_DIR));

  // file upload handling (multer)
  let multer;
  try {
    multer = require('multer');
  } catch (e) {
    console.warn('multer not installed; upload endpoints will not work until you run `npm install multer` in server folder');
  }
  if (multer) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) { ensureUploads(); cb(null, UPLOADS_DIR); },
      filename: function (req, file, cb) { const safe = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_'); cb(null, safe); }
    });
    const upload = multer({ storage });

    app.post('/api/uploads', authMiddleware, upload.single('file'), (req, res) => {
      if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
      const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      res.json({ url, filename: req.file.filename });
    });
  }

  // Courses API
  app.get('/api/courses', (req, res) => {
    const c = loadJson(COURSES_FILE, []);
    res.json(c);
  });

  app.post('/api/courses', authMiddleware, (req, res) => {
    // only teacher or admin can create
    if (!['admin','teacher'].includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
    const payload = req.body || {};
    const all = loadJson(COURSES_FILE, []);
    const newC = { id: makeId('c'), title: payload.title || 'Untitled', price: payload.price || 0, description: payload.description || '', author: req.user.email, parts: payload.parts || 1, createdAt: new Date().toISOString() };
    all.unshift(newC); saveJson(COURSES_FILE, all); res.json(newC);
  });

  app.put('/api/courses/:id', authMiddleware, (req, res) => {
    if (!['admin','teacher'].includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
    const id = req.params.id; const all = loadJson(COURSES_FILE, []);
    const idx = all.findIndex(x=>x.id===id); if (idx===-1) return res.status(404).json({ message: 'Not found' });
    all[idx] = { ...all[idx], ...req.body, updatedAt: new Date().toISOString() }; saveJson(COURSES_FILE, all); res.json(all[idx]);
  });

  app.delete('/api/courses/:id', authMiddleware, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Only admin may delete' });
    const id = req.params.id; const all = loadJson(COURSES_FILE, []);
    const filtered = all.filter(x=>x.id!==id); saveJson(COURSES_FILE, filtered); res.json({ ok: true });
  });

  // Notifications
  app.get('/api/notifications', authMiddleware, (req, res) => { res.json(loadJson(NOTIFS_FILE, [])); });
  app.post('/api/notifications', authMiddleware, (req, res) => { const p= req.body||{}; const all=loadJson(NOTIFS_FILE, []); const n={ id: makeId('n'), ...p, handled:false, createdAt:new Date().toISOString() }; all.unshift(n); saveJson(NOTIFS_FILE, all); res.json(n); });
  app.put('/api/notifications/:id', authMiddleware, (req, res) => { const id=req.params.id; const all=loadJson(NOTIFS_FILE, []); const idx=all.findIndex(x=>x.id===id); if(idx===-1) return res.status(404).json({message:'Not found'}); all[idx]={...all[idx], ...req.body, updatedAt:new Date().toISOString()}; saveJson(NOTIFS_FILE, all); res.json(all[idx]); });

  // Teachers
  app.get('/api/teachers', authMiddleware, (req, res) => { res.json(loadJson(TEACHERS_FILE, [])); });
  app.post('/api/teachers', authMiddleware, (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Only admin may create teacher accounts' });
    const payload = req.body || {}; const all = loadJson(TEACHERS_FILE, []);
    const t = { id: makeId('t'), name: payload.name || payload.username || '', email: payload.email || '', permitted: payload.permitted===undefined? true : !!payload.permitted, createdAt: new Date().toISOString() };
    all.unshift(t); saveJson(TEACHERS_FILE, all);
    // also optionally add to users list so teacher can sign in (demo password default)
    const users = loadJson(USERS_FILE, []);
    if (!users.find(u=>u.email===t.email)) { users.push({ username: t.name || t.email, email: t.email, password: payload.password || 'teacherpass', role: 'teacher' }); saveJson(USERS_FILE, users); }
    res.json(t);
  });

  // Subscriptions (demo payment flow)
  app.get('/api/subscriptions', authMiddleware, (req, res) => { res.json(loadJson(SUBS_FILE, [])); });

  app.post('/api/subscriptions', authMiddleware, (req, res) => {
    const payload = req.body || {};
    const all = loadJson(SUBS_FILE, []);
    const plan = payload.paymentPlan || 'full';
    const record = { id: makeId('s'), courseId: payload.courseId, userEmail: payload.userEmail || req.user.email, paymentPlan: plan, payments: plan==='full' ? [{ amount:'full', paid:true, at:new Date().toISOString() }] : [{ amount:'half', paid:true, at:new Date().toISOString() }, { amount:'half', paid:false }], active: plan==='full', createdAt: new Date().toISOString() };
    all.unshift(record); saveJson(SUBS_FILE, all); res.json(record);
  });

  app.post('/api/subscriptions/:id/pay', authMiddleware, (req, res) => {
    const id = req.params.id; const all = loadJson(SUBS_FILE, []); const idx = all.findIndex(x=>x.id===id);
    if (idx === -1) return res.status(404).json({ message: 'Subscription not found' });
    const sub = all[idx]; const unpaid = sub.payments.find(p=>!p.paid);
    if (!unpaid) return res.json(sub);
    unpaid.paid = true; unpaid.at = new Date().toISOString(); sub.active = sub.payments.every(p=>p.paid); saveJson(SUBS_FILE, all); res.json(sub);
  });

  // a simple seed endpoint to populate demo data (dev only)
  app.post('/api/seed', (req, res) => {
    saveJson(COURSES_FILE, [ { id:'c1', title:'Intro to Singapore', price:0, author:'admin.example@gmail.com', parts:4, description:'Free intro', createdAt:new Date().toISOString() }, { id:'c2', title:'Advanced Governance', price:100, author:'teacher.example@gmail.com', parts:8, description:'Premium course', createdAt:new Date().toISOString() } ]);
    saveJson(NOTIFS_FILE, [ { id:'n1', type:'meeting', from:'user1@gmail.com', message:'Request private meeting with Teacher A', createdAt:new Date().toISOString(), handled:false } ]);
    saveJson(TEACHERS_FILE, [ { id:'t1', name:'Teacher A', email:'teacher.a@gmail.com', permitted:true, createdAt:new Date().toISOString() } ]);
    saveJson(SUBS_FILE, []);
    res.json({ ok: true });
  });

  return app;
}

function startServer(port = 0) {
  const app = createApp();
  const server = app.listen(port);
  return server;
}

// If run directly, start on default port
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  const server = startServer(PORT);
  console.log(`Mock API server running on http://localhost:${PORT}`);
}

module.exports = { createApp, startServer };
