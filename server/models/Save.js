const mongoose = require("mongoose");

const saveSchema = new mongoose.Schema({
    userId: {
        type: String, // userId is a simple string filed for now until user authentication is properly setup
        ref: "User",
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    progress: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Save", saveSchema);
