const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// GET /api/scores/:userId --> get user score
router.get("/:userId", async (req, res) => {
    try {
        const userScore = await Score.findOne({ userId: req.params.userId });
        if (!userScore) {
            return res.status(404).json({ message: "User score not found" });
        }
        res.json(userScore);
    } catch (error) {
        console.error("Error fetching user score:", error);
        res.status(500).json({ message: "Error fetching user score", error });
    }
});

// POST /api/scores --> create or update user score
router.post("/", async (req, res) => {
    try {
        const { userId, score } = req.body;

        // upsert (create or update)
        const updatedScore = await Score.findOneAndUpdate(
            { userId },
            { score, lastUpdated: new Date() },
            { new: true, upsert: true }
        );

        res.status(201).json(updatedScore);
    } catch (error) {
        console.error("Error saving user score:", error);
        res.status(500).json({ message: "Error saving user score", error });
    }
});

module.exports = router;
