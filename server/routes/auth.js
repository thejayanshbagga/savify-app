const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Login Route (with 2FA support)
router.post("/login", async (req, res) => {
  console.log("Login Route Hit", req.body);

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // If 2FA is enabled, do NOT send the token yet
    if (user.twoFactorEnabled) {
      console.log("2FA required for:", user.email);

      // Email method
      if (user.twoFactorMethod === "email") {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        user.twoFactorEmailCode = code;
        user.emailCodeExpires = Date.now() + 5 * 60 * 1000;

        // Send email using nodemailer
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: user.email,
          subject: "Savify Login Code",
          text: `Your login verification code is ${code}`
        });

        await user.save();

        return res.json({
          requires2FA: true,
          method: "email",
          userId: user._id
        });
      }

      // SMS method
      if (user.twoFactorMethod === "sms") {
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        user.twoFactorSMSCode = code;
        user.smsCodeExpires = Date.now() + 5 * 60 * 1000;

        const twilio = require("twilio");
        const smsClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

        await smsClient.messages.create({
          body: `Your Savify login code is ${code}`,
          from: process.env.TWILIO_PHONE,
          to: user.phoneNumber
        });

        await user.save();

        return res.json({
          requires2FA: true,
          method: "sms",
          userId: user._id
        });
      }

      // Authenticator App method (TOTP)
      if (user.twoFactorMethod === "totp") {
        return res.json({
          requires2FA: true,
          method: "totp",
          userId: user._id
        });
      }
    }

    // If 2FA OFF, send token normally
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



// Signup Route (now returns token immediately)
router.post("/signup", async (req, res) => {
  console.log("🔹 Signup Route Hit", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "❌ Email and password required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "⚠️ Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword });
    await user.save();

    // Generate JWT Token right after signup
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ User registered and token generated:", { email: user.email });

    res.status(201).json({
      message: "✅ User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("❌ Signup Error:", error);
    res.status(500).json({ message: "⚠️ Server error, try again later" });
  }
});


module.exports = router;