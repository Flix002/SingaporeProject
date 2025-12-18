import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Upload } from '../models.js';
import { authenticateToken } from '../middleware.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow images and videos
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'));
    }
  }
});

// List uploads
router.get('/', authenticateToken, async (req, res) => {
  try {
    const query = req.user.role === 'admin' ? {} : { user: req.user._id };
    const uploads = await Upload.find(query)
      .populate('user', 'username email')
      .sort('-createdAt');
    res.json(uploads);
  } catch (error) {
    res.status(500).json({ message: 'Error listing uploads', error: error.message });
  }
});

// Upload file
router.post('/', authenticateToken, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    const uploadRecord = await Upload.create({
      filename: req.file.filename,
      originalName: req.file.originalname,
      url: fileUrl,
      user: req.user._id
    });

    res.status(201).json(uploadRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
});

// Delete upload
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const upload = await Upload.findById(req.params.id);
    
    if (!upload) {
      return res.status(404).json({ message: 'Upload not found' });
    }

    // Check permission
    if (req.user.role !== 'admin' && upload.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Delete file
    const filePath = path.join(process.cwd(), 'uploads', upload.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete record
    await Upload.findByIdAndDelete(req.params.id);

    res.json({ message: 'Upload deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting upload', error: error.message });
  }
});

// Serve uploads statically
router.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

export default router;