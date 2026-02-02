import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

// POST /api/expenses
router.post('/', async (req, res) => {
  try {
    const { userId, description, amount, category, date, type } = req.body;

    const expense = new Expense({
      userId,
      description,
      amount,
      category,
      date: date || Date.now(),
      type: type || 'expense',
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    console.error('Error creating expense:', error);
    res
      .status(500)
      .json({ message: 'Error creating expense', error: error.message });
  }
});

// GET /api/expenses/:userId
router.get('/:userId', async (req, res) => {
  try {
    const { startDate, endDate, category, type } = req.query;

    const query = { userId: req.params.userId };

    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    if (category) query.category = category;
    if (type) query.type = type;

    const expenses = await Expense.find(query).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res
      .status(500)
      .json({ message: 'Error fetching expenses', error: error.message });
  }
});

// GET /api/expenses/breakdown/:userId
router.get('/breakdown/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;

    const matchQuery = {
      userId,
      type: 'expense',
    };

    if (startDate || endDate) {
      matchQuery.date = {};
      if (startDate) matchQuery.date.$gte = new Date(startDate);
      if (endDate) matchQuery.date.$lte = new Date(endDate);
    }

    const breakdown = await Expense.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: '$category',
          totalAmount: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalAmount: -1 } },
    ]);

    const total = breakdown.reduce((sum, item) => sum + item.totalAmount, 0);

    const result = breakdown.map(item => ({
      category: item._id,
      amount: item.totalAmount,
      percentage: (item.totalAmount / total) * 100,
      count: item.count,
    }));

    res.json(result);
  } catch (error) {
    console.error('Error fetching expense breakdown:', error);
    res.status(500).json({
      message: 'Error fetching expense breakdown',
      error: error.message,
    });
  }
});

// PUT /api/expenses/:id
router.put('/:id', async (req, res) => {
  try {
    const { description, amount, category, date, type } = req.body;

    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { description, amount, category, date, type },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    console.error('Error updating expense:', error);
    res
      .status(500)
      .json({ message: 'Error updating expense', error: error.message });
  }
});

// DELETE /api/expenses/:id
router.delete('/:id', async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully', expense });
  } catch (error) {
    console.error('Error deleting expense:', error);
    res
      .status(500)
      .json({ message: 'Error deleting expense', error: error.message });
  }
});

export default router;
