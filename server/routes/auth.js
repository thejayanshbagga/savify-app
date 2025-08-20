const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// ✅ Login Route (Fully Fixed)
router.post("/login", async (req, res) => {
    console.log("🔹 Login Route Hit", req.body);

    try {
        const { email, password } = req.body;
        console.log(`🔹 Checking user: ${email}`);

        // ✅ Find user and explicitly select password field
        const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

        if (!user) {
            console.log("❌ User not found");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("✅ User found:", { email: user.email, storedPassword: user.password });

        // ✅ Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("🔹 Comparing:", { enteredPassword: password, storedHashedPassword: user.password });
        console.log("🔹 Password comparison result:", isMatch);

        if (!isMatch) {
            console.log("❌ Password does not match");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate JWT Token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("✅ Login successful, token generated");
        res.json({ message: "Login successful", token });

    } catch (error) {
        console.error("❌ Server Error on Login:", error);
        res.status(500).json({ message: "⚠️ Server error, try again later" });
    }
});

// ✅ Signup Route
router.post("/signup", async (req, res) => {
    console.log("🔹 Signup Route Hit", req.body); // Debugging log

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "❌ Email and password required" });
        }

        // ✅ Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "⚠️ Email already registered" });
        }

        // ✅ Hash Password (Fix)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("🔹 Hashed Password:", hashedPassword); // Debugging log

        // ✅ Save User to MongoDB
        user = new User({ email, password: hashedPassword });  //takes in hashed-  go over it CTO!!!!!!!
        await user.save();

        console.log("✅ User Successfully Registered in DB:", {
            email: user.email,
            password: user.password, // Should be hashed!
        }); // Debugging log

        res.status(201).json({ message: "✅ User registered successfully" });
    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ message: "⚠️ Server error, try again later" });
    }
});

module.exports = router;