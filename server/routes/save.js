import express from 'express';
import Save from '../models/Save.js';

const router = express.Router();

// POST /api/saves
router.post('/', async (req, res) => {
  try {
    const { userId, goal, amount, progress } = req.body;
    const save = new Save({ userId, goal, amount, progress });
    await save.save();
    res.status(201).json(save);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data', error });
  }
});

// GET /api/saves/:userId
router.get('/:userId', async (req, res) => {
  try {
    const saves = await Save.find({ userId: req.params.userId });
    res.json(saves);
  } catch (error) {
    console.error('Error fetching saves:', error);
    res.status(500).json({ message: 'Error fetching saves', error });
  }
});

export default router;
