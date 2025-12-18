import express from 'express';
import { Notification } from '../models.js';
import { authenticateToken } from '../middleware.js';

const router = express.Router();

// List notifications
router.get('/', authenticateToken, async (req, res) => {
  try {
    const query = req.user.role === 'admin' 
      ? {} 
      : { $or: [{ to: req.user._id }, { from: req.user._id }] };

    const notifications = await Notification.find(query)
      .populate('from', 'username email')
      .populate('to', 'username email')
      .sort('-createdAt');
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error getting notifications', error: error.message });
  }
});

// Create notification
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { type, message, to } = req.body;
    
    const notification = await Notification.create({
      type,
      message,
      from: req.user._id,
      to,
      handled: false
    });

    await notification.populate('from', 'username email');
    await notification.populate('to', 'username email');

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error: error.message });
  }
});

// Mark notification as handled
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    // Only admin or recipient can handle notifications
    if (req.user.role !== 'admin' && notification.to.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    notification.handled = true;
    await notification.save();
    
    await notification.populate('from', 'username email');
    await notification.populate('to', 'username email');

    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error updating notification', error: error.message });
  }
});

export default router;