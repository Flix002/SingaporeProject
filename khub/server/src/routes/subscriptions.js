import express from 'express';
import { Subscription } from '../models.js';
import { authenticateToken } from '../middleware.js';

const router = express.Router();

// List subscriptions for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user._id })
      .populate('course', 'title description price parts')
      .sort('-createdAt');
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error getting subscriptions', error: error.message });
  }
});

// Create subscription
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { courseId, paymentPlan = 'full' } = req.body;

    const subscription = await Subscription.create({
      course: courseId,
      user: req.user._id,
      paymentPlan,
      payments: paymentPlan === 'full' 
        ? [{ amount: 'full', paid: true, paidAt: new Date() }]
        : [
            { amount: 'half', paid: true, paidAt: new Date() },
            { amount: 'half', paid: false }
          ],
      active: paymentPlan === 'full'
    });

    await subscription.populate('course', 'title description price parts');
    
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error: error.message });
  }
});

// Make payment
router.post('/:id/pay', authenticateToken, async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    const unpaidPayment = subscription.payments.find(p => !p.paid);
    if (!unpaidPayment) {
      return res.status(400).json({ message: 'No pending payments' });
    }

    unpaidPayment.paid = true;
    unpaidPayment.paidAt = new Date();
    subscription.active = subscription.payments.every(p => p.paid);
    
    await subscription.save();
    await subscription.populate('course', 'title description price parts');

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error: error.message });
  }
});

export default router;