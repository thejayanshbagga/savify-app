const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Education', 'Others'],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        enum: ['expense', 'income'],
        default: 'expense',
    },
}, { timestamps: true });

module.exports = mongoose.model("Expense", ExpenseSchema);