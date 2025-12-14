import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { User, Course, Subscription, Notification, Teacher, Upload } from '../models.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || process.argv[2];
if (!MONGODB_URI) {
  console.error('Please set MONGODB_URI in environment or pass it as the first argument');
  process.exit(1);
}

const DEV_DATA_DIR = path.join(process.cwd(), 'dev-data');

async function readJson(file) {
  const full = path.join(DEV_DATA_DIR, file);
  if (!fs.existsSync(full)) return [];
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

async function seed() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('Connected to MongoDB, clearing collections...');
  await Promise.all([
    User.deleteMany({}),
    Course.deleteMany({}),
    Subscription.deleteMany({}),
    Notification.deleteMany({}),
    Teacher.deleteMany({}),
    Upload.deleteMany({})
  ]);

  // Users
  const users = await readJson('users.json');
  const emailToUser = {};
  for (const u of users) {
    const hashed = await bcrypt.hash(u.password || 'changeme', 10);
    const userDoc = await User.create({
      username: u.username || u.name || 'user',
      email: u.email,
      password: hashed,
      role: u.role || 'user'
    });
    emailToUser[userDoc.email] = userDoc;
    console.log('Created user:', userDoc.email);
  }

  // Courses
  const courses = await readJson('courses.json');
  const devIdToCourse = {};
  for (const c of courses) {
    const authorEmail = c.author;
    const author = emailToUser[authorEmail];
    const courseDoc = await Course.create({
      title: c.title,
      description: c.description || '',
      price: c.price || 0,
      parts: c.parts || 1,
      author: author ? author._id : undefined,
      cover: c.cover || undefined,
      createdAt: c.createdAt ? new Date(c.createdAt) : undefined,
      devId: c.id || undefined
    });
    if (c.id) devIdToCourse[c.id] = courseDoc;
    console.log('Created course:', courseDoc.title);
  }

  // Teachers
  const teachers = await readJson('teachers.json');
  for (const t of teachers) {
    // teachers.json may contain an email, or name only
    const email = t.email || t.userEmail || null;
    let user = email ? emailToUser[email] : null;
    if (!user) {
      // create a basic user for the teacher
      const pwd = 'teacherpass';
      const hashed = await bcrypt.hash(pwd, 10);
      user = await User.create({ username: t.name || 'teacher', email: email || `teacher.${Date.now()}@example.com`, password: hashed, role: 'teacher' });
      emailToUser[user.email] = user;
      console.log('Created teacher user:', user.email);
    }
    await Teacher.create({ user: user._id, name: t.name || user.username, permitted: t.permitted !== false });
    console.log('Created teacher record for:', user.email);
  }

  // Subscriptions
  const subs = await readJson('subscriptions.json');
  for (const s of subs) {
    const user = emailToUser[s.userEmail];
    const course = devIdToCourse[s.courseId];
    if (!user || !course) {
      console.warn('Skipping subscription, missing user or course', s);
      continue;
    }
    const payments = (s.payments || []).map(p => ({ amount: p.amount, paid: !!p.paid, paidAt: p.at ? new Date(p.at) : undefined }));
    await Subscription.create({ course: course._id, user: user._id, paymentPlan: s.paymentPlan || 'full', payments, active: !!s.active, createdAt: s.createdAt ? new Date(s.createdAt) : undefined });
    console.log('Created subscription for user:', user.email);
  }

  // Notifications
  const notes = await readJson('notifications.json');
  for (const n of notes) {
    const fromUser = emailToUser[n.from] || null;
    const toUser = n.to ? emailToUser[n.to] : undefined;
    await Notification.create({ type: n.type || 'info', from: fromUser ? fromUser._id : undefined, to: toUser ? toUser._id : undefined, message: n.message || '', handled: !!n.handled, createdAt: n.createdAt ? new Date(n.createdAt) : undefined });
    console.log('Created notification:', n.message);
  }

  // Uploads: create simple records for files in dev-data
  const devFiles = fs.readdirSync(DEV_DATA_DIR).filter(f => f.startsWith('uploads') || f.startsWith('test-upload'));
  for (const file of devFiles) {
    const filename = file;
    const url = `/uploads/${filename}`;
    await Upload.create({ filename, originalName: filename, url, user: undefined });
    console.log('Created upload record for:', filename);
  }

  console.log('Seeding complete.');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => {
  console.error('Seeding error:', err);
  process.exit(1);
});
