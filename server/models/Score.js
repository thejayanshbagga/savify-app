const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    userId: {
        type: String, // keep string for now (need to switch to ObjectId when users are added)
        required: true,
    },
    score: {
        type: Number,
        default: 0,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model("Score", ScoreSchema);
