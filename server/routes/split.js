import express from 'express';
import Split from '../models/Split.js';

const router = express.Router();

// GET all splits
router.get('/', async (req, res) => {
  try {
    const splits = await Split.find();
    res.json(splits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new split
router.post('/', async (req, res) => {
  try {
    const newSplit = new Split(req.body);
    const saved = await newSplit.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a split
router.put('/:id', async (req, res) => {
  try {
    const updated = await Split.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE remove a split
router.delete('/:id', async (req, res) => {
  try {
    await Split.findByIdAndDelete(req.params.id);
    res.json({ message: 'Split deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
