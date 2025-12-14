import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@gmail\.com$/i, 'Please enter a valid Gmail address']
  },
  password: {
    type: String,
    required: true
  },
  clientHashed: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'user'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Automatically hash password before saving if it was modified
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Instance method to compare plaintext password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model('User', userSchema);

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  parts: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cover: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

export const Course = mongoose.model('Course', courseSchema);

const subscriptionSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paymentPlan: {
    type: String,
    enum: ['full', 'two'],
    required: true
  },
  payments: [{
    amount: {
      type: String,
      enum: ['full', 'half'],
      required: true
    },
    paid: {
      type: Boolean,
      default: false
    },
    paidAt: Date
  }],
  active: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Subscription = mongoose.model('Subscription', subscriptionSchema);

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true
  },
  handled: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Notification = mongoose.model('Notification', notificationSchema);

const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  permitted: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Teacher = mongoose.model('Teacher', teacherSchema);

const uploadSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalName: String,
  url: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Upload = mongoose.model('Upload', uploadSchema);