const express = require("express");
const mongoose = require("mongoose");
const Email = require("../models/Email");

const router = express.Router();

// ✅ Email Subscription Route
router.post("/subscribe", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "❌ Email is required" });
        }

        // Check if email is already registered
        const existingEmail = await Email.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "⚠️ Email already registered!" });
        }

        // Save new email
        const newEmail = new Email({ email });
        await newEmail.save();

        return res.status(201).json({ message: "✅ Successfully subscribed!" });
    } catch (error) {
        console.error("❌ Error subscribing email:", error);
        return res.status(500).json({ message: "⚠️ Server error. Please try again later." });
    }
});

module.exports = router;
