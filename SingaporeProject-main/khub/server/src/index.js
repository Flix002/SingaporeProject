import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'path';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth.js';
import coursesRoutes from './routes/courses.js';
import notificationsRoutes from './routes/notifications.js';
import subscriptionsRoutes from './routes/subscriptions.js';
import teachersRoutes from './routes/teachers.js';
import uploadsRoutes from './routes/uploads.js';

const app = express();

// Middleware
// Security and performance middleware
app.set('trust proxy', 1); // trust first proxy (useful if behind Cloudflare/cPanel proxy)
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiter: basic protection against brute-force and abusive requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/subscriptions', subscriptionsRoutes);
app.use('/api/teachers', teachersRoutes);
app.use('/api/uploads', uploadsRoutes);

// Serve frontend build if present (assumes frontend build output in ../dist)
const frontendDist = path.resolve(process.cwd(), '..', 'dist');
try {
  // Only mount static if directory exists
  if (fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist));

    // For SPA routing, serve index.html for unknown GET routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(frontendDist, 'index.html'));
    });
  }
} catch (err) {
  console.warn('Could not mount frontend static files:', err.message);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});