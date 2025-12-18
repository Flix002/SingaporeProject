import express from 'express';
import bcrypt from 'bcryptjs';
import { Teacher, User } from '../models.js';
import { authenticateToken, checkRole } from '../middleware.js';

const router = express.Router();

// List teachers (admin only)
router.get('/', authenticateToken, checkRole(['admin']), async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .populate('user', 'username email')
      .sort('-createdAt');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error getting teachers', error: error.message });
  }
});

// Create teacher account (admin only)
router.post('/', authenticateToken, checkRole(['admin']), async (req, res) => {
  try {
    const { name, email, password, permitted = true } = req.body;

    // Validate Gmail
    if (!/^[\w-\.]+@gmail\.com$/i.test(email)) {
      return res.status(400).json({ message: 'Please use a valid Gmail address' });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user account
    const hashedPassword = await bcrypt.hash(password || 'teacherpass', 10);
    const user = await User.create({
      username: name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: 'teacher'
    });

    // Create teacher profile
    const teacher = await Teacher.create({
      user: user._id,
      name,
      permitted
    });

    await teacher.populate('user', 'username email');

    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error creating teacher', error: error.message });
  }
});

// Update teacher permission
router.put('/:id', authenticateToken, checkRole(['admin']), async (req, res) => {
  try {
    const { permitted } = req.body;
    
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { permitted },
      { new: true }
    ).populate('user', 'username email');

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error updating teacher', error: error.message });
  }
});

export default router;