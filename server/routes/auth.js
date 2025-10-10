const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Login Route (fixed)
router.post("/login", async (req, res) => {
  console.log("🔹 Login Route Hit", req.body);

  try {
    const { email, password } = req.body;
    console.log(`🔹 Checking user: ${email}`);

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login successful, token generated");
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Server Error on Login:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});



// Signup Route (now returns token immediately)
router.post("/signup", async (req, res) => {
  console.log("🔹 Signup Route Hit", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword });
    await user.save();

    // Generate JWT Token right after signup
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("User registered and token generated:", { email: user.email });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error, try again later" });
  }
});


// Google OAuth route
router.post("/google/token", async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ message: "No ID token provided" });

    // Verify Google ID token
    const { OAuth2Client } = require("google-auth-library");
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const email = payload.email;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, password: null });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.json({
      message: "Google sign-in successful",
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    console.error("Google sign-in error:", err);
    res.status(500).json({ message: "Google authentication failed" });
  }
});

module.exports = router;