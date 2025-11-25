import express from 'express';
import { Course } from '../models.js';
import { authenticateToken, checkRole } from '../middleware.js';

const router = express.Router();

// List courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('author', 'username email')
      .sort('-createdAt');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error getting courses', error: error.message });
  }
});

// Get single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('author', 'username email');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error getting course', error: error.message });
  }
});

// Create course (teachers and admins only)
router.post('/', 
  authenticateToken, 
  checkRole(['teacher', 'admin']), 
  async (req, res) => {
    try {
      const { title, price, description, parts } = req.body;
      const course = await Course.create({
        title,
        price,
        description,
        parts,
        author: req.user._id
      });
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Error creating course', error: error.message });
    }
});

// Update course (author or admin only)
router.put('/:id',
  authenticateToken,
  checkRole(['teacher', 'admin']),
  async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      // Check if user is author or admin
      if (course.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not authorized to update this course' });
      }

      const updated = await Course.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: new Date() },
        { new: true }
      ).populate('author', 'username email');

      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: 'Error updating course', error: error.message });
    }
});

// Delete course (admin only)
router.delete('/:id',
  authenticateToken,
  checkRole(['admin']),
  async (req, res) => {
    try {
      const result = await Course.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting course', error: error.message });
    }
});

export default router;