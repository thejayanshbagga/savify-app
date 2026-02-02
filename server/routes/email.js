import express from 'express';
import mongoose from 'mongoose';
import Email from '../models/Email.js';

const router = express.Router();

// Email Subscription Route
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(201).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error subscribing email:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
