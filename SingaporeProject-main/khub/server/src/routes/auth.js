import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from './models.js';
import { authenticateToken } from './middleware.js';

// SECURITY NOTE:
// This server supports an optional `clientHashed` signup flow where the
// client pre-hashes the password (SHA-256) before sending it to the server.
// When `clientHashed` is true the server stores the received value as the
// user's password and still runs the Mongoose pre-save hook which applies
// bcrypt hashing before persisting to the database. This provides defense-in-depth
// but does NOT replace server-side hashing. Always keep the bcrypt/argon2
// hashing step server-side and never store client-only hashes without salting
// and re-hashing on the server. The `clientHashed` flag exists for optional
// compatibility with client-side hashing components (e.g. `PasswordHasher`).

const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, role = 'user', clientHashed = false } = req.body;

    // Validate Gmail address
    if (!/^[\w-\.]+@gmail\.com$/i.test(email)) {
      return res.status(400).json({ message: 'Please use a valid Gmail address' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user - let model pre-save hook hash the provided password
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      role,
      clientHashed: !!clientHashed
    });

    // Create token and set httpOnly cookie
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      user: {
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Sign in
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If user signed up with client-side hashing, compute SHA-256 of incoming password first
    let candidate = password;
    if (user.clientHashed) {
      // compute sha256 hex
      const hash = crypto.createHash('sha256').update(String(password)).digest('hex');
      candidate = hash;
    }

    // Verify password (bcrypt compare)
    const validPassword = await bcrypt.compare(candidate, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token and set httpOnly cookie
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
      user: {
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
});

// Validate token
router.post('/validate', authenticateToken, async (req, res) => {
  try {
    res.json({
      valid: true,
      user: {
        username: req.user.username,
        email: req.user.email,
        role: req.user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error validating token', error: error.message });
  }
});

export default router;