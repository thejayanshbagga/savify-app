const express = require("express");
const router = express.Router();
const User = require("../models/User");
const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const twilio = require("twilio");

// Twilio credentials (add these to .env.development)
const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_AUTH = process.env.TWILIO_AUTH;
const TWILIO_PHONE = process.env.TWILIO_PHONE;

const smsClient = twilio(TWILIO_SID, TWILIO_AUTH);

// Create reusable email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

// Generate random 6 digit code
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();


// ===================================================
// Step 1: Setup 2FA (Email, SMS, or TOTP)
// ===================================================
router.post("/setup", async (req, res) => {
  try {
    const { userId, method, phoneNumber } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    user.twoFactorMethod = method;

    // Email setup
    if (method === "email") {
      const code = generateCode();
      user.twoFactorEmailCode = code;
      user.emailCodeExpires = Date.now() + 5 * 60 * 1000; // five minutes

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Savify Verification Code",
        text: `Your verification code is ${code}`
      });
    }

    // SMS setup
    if (method === "sms") {
      if (!phoneNumber) {
        return res.json({ success: false, message: "Phone number required" });
      }

      const code = generateCode();
      user.twoFactorSMSCode = code;
      user.smsCodeExpires = Date.now() + 5 * 60 * 1000;
      user.phoneNumber = phoneNumber;

      await smsClient.messages.create({
        body: `Your Savify verification code is ${code}`,
        from: TWILIO_PHONE,
        to: phoneNumber
      });
    }

    // TOTP setup
    if (method === "totp") {
      const secret = speakeasy.generateSecret({
        name: "Savify App"
      });

      user.totpSecret = secret.base32;

      const qr = await QRCode.toDataURL(secret.otpauth_url);

      await user.save();
      return res.json({ success: true, qrCode: qr });
    }

    await user.save();
    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});


// ===================================================
// Step 2: Verify 2FA Setup (Email / SMS / TOTP)
// ===================================================
router.post("/verify-setup", async (req, res) => {
  try {
    const { userId, code } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.json({ success: false });

    if (user.twoFactorMethod === "email") {
      if (user.twoFactorEmailCode === code && Date.now() < user.emailCodeExpires) {
        user.twoFactorEnabled = true;
        user.twoFactorEmailCode = null;
        user.emailCodeExpires = null;
      } else return res.json({ success: false, message: "Invalid or expired code" });
    }

    if (user.twoFactorMethod === "sms") {
      if (user.twoFactorSMSCode === code && Date.now() < user.smsCodeExpires) {
        user.twoFactorEnabled = true;
        user.twoFactorSMSCode = null;
        user.smsCodeExpires = null;
      } else return res.json({ success: false, message: "Invalid or expired code" });
    }

    if (user.twoFactorMethod === "totp") {
      const verified = speakeasy.totp.verify({
        secret: user.totpSecret,
        encoding: "base32",
        token: code
      });

      if (verified) {
        user.twoFactorEnabled = true;
      } else return res.json({ success: false, message: "Invalid TOTP token" });
    }

    await user.save();
    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});


// ===================================================
// Step 3: Disable 2FA
// ===================================================
router.post("/disable", async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.json({ success: false });

  user.twoFactorEnabled = false;
  user.twoFactorMethod = null;
  user.phoneNumber = null;
  user.twoFactorSMSCode = null;
  user.twoFactorEmailCode = null;
  user.totpSecret = null;

  await user.save();

  res.json({ success: true });
});


// ===================================================
// Step 4: Verify login 2FA
// ===================================================
router.post("/verify-login", async (req, res) => {
  try {
    const { userId, code } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.json({ success: false });

    if (user.twoFactorMethod === "email") {
      if (user.twoFactorEmailCode === code) {
        user.twoFactorEmailCode = null;
        return res.json({ success: true });
      }
    }

    if (user.twoFactorMethod === "sms") {
      if (user.twoFactorSMSCode === code) {
        user.twoFactorSMSCode = null;
        return res.json({ success: true });
      }
    }

    if (user.twoFactorMethod === "totp") {
      const verified = speakeasy.totp.verify({
        secret: user.totpSecret,
        encoding: "base32",
        token: code
      });

      if (verified) return res.json({ success: true });
    }

    res.json({ success: false, message: "Invalid code" });

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;