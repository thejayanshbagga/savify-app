import express from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { authenticator } from 'otplib';
import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js';

dotenv.config();

const router = express.Router();



// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

// Simple XOR-based encrypt/decrypt using your JWT_SECRET as the key.
// Keeps the secret out of the DB in plain text without adding a full KMS dep.
function xorEncrypt(text) {
  const key  = process.env.JWT_SECRET;
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return Buffer.from(result, "binary").toString("base64");
}

function xorDecrypt(b64) {
  const key  = process.env.JWT_SECRET;
  const text = Buffer.from(b64, "base64").toString("binary");
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
}

// Middleware: verify a *full* JWT and attach user id to req
function requireAuth(req, res, next) {

  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// Middleware: verify a *pending-2FA* short-lived token
function requirePending2FA(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
    if (decoded.stage !== "pending_2fa") {
      return res.status(401).json({ message: "Invalid pending token" });
    }
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// ---------------------------------------------------------------------------
// LOGIN  (modified — two-phase when 2FA is enabled)
// ---------------------------------------------------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password +twoFactorSecret");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ── If 2FA is enabled, return a short-lived PENDING token ──────────
    if (user.twoFactorEnabled) {
      const pendingToken = jwt.sign(
        { userId: user._id, stage: "pending_2fa" },
        process.env.JWT_SECRET,
        { expiresIn: "5m" }          // very short — only valid long enough to enter the code
      );
      return res.json({
        message:        "2FA required",
        requires2FA:    true,
        pendingToken,               // frontend holds this, sends it with the verify call
      });
    }

    // ── No 2FA — issue full session token as before ────────────────────
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({
      message: "Login successful",
      requires2FA: false,
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error, try again later" });
  }
});

// FORGOT PASSWORD

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ success: true });
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  await user.save();

  const resetUrl = `savify://reset-password?token=${resetToken}`;

  await sendEmail({
    to: email,
    subject: 'Reset your Savify password',
    text: `Reset your password here:\n\n${resetUrl}`,
  });

  res.json({ success: true });
});

// RESET PASSWORD

router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  user.password = await bcrypt.hash(newPassword, 12);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.json({ success: true });
});


// ---------------------------------------------------------------------------
// SIGNUP  (unchanged logic, just tidied)
// ---------------------------------------------------------------------------
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }


    let user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email: email.toLowerCase(), password: hashedPassword });
    await user.save();



    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error, try again later" });
  }
});

// ---------------------------------------------------------------------------
// 2FA – STEP 1: SETUP   (generates secret + otpauth URI for QR code)
// POST /api/auth/2fa/setup   — requires full session token
// ---------------------------------------------------------------------------
router.post("/2fa/setup", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("+twoFactorSecret");
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.twoFactorEnabled) {
      return res.status(400).json({ message: "2FA is already enabled" });
    }

    // Generate a fresh secret every time setup is called (idempotent re-tries are safe)
    const secret = authenticator.generateSecret();

    // Build the otpauth:// URI that authenticator apps parse from a QR code
    const otpAuthUri = authenticator.keyuri(
      user.email,           // account label shown in the app
      "Savify",             // issuer (your app name)
      secret
    );

    // Store the secret ENCRYPTED but do NOT set twoFactorEnabled yet.
    // It only flips to true after the user proves they can generate a valid code.
    user.twoFactorSecret = xorEncrypt(secret);
    await user.save();

    return res.json({
      message:    "2FA setup initiated",
      otpAuthUri, // frontend renders this as a QR code
    });
  } catch (error) {
    console.error("2FA setup error:", error);
    return res.status(500).json({ message: "Server error during 2FA setup" });
  }
});

// ---------------------------------------------------------------------------
// 2FA – STEP 2: VERIFY SETUP   (confirms enrollment before enabling)
// POST /api/auth/2fa/verify-setup   — requires full session token
// Body: { code: "123456" }
// ---------------------------------------------------------------------------
router.post("/2fa/verify-setup", requireAuth, async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findById(req.userId).select("+twoFactorSecret");
    if (!user || !user.twoFactorSecret) {
      return res.status(400).json({ message: "2FA setup not initiated" });
    }

    const secret = xorDecrypt(user.twoFactorSecret);

    if (!authenticator.verify({ token: code, secret })) {
      return res.status(400).json({ message: "Invalid code. Try again." });
    }

    // Code is valid — NOW we commit: mark 2FA as enabled
    user.twoFactorEnabled = true;
    await user.save();

    return res.json({ message: "2FA enabled successfully" });
  } catch (error) {
    console.error("2FA verify-setup error:", error);
    return res.status(500).json({ message: "Server error during 2FA verification" });
  }
});

// ---------------------------------------------------------------------------
// 2FA – LOGIN VERIFY   (validates code during the login flow)
// POST /api/auth/2fa/verify   — requires the PENDING token from login
// Body: { code: "123456" }
// ---------------------------------------------------------------------------
router.post("/2fa/verify", requirePending2FA, async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findById(req.userId).select("+twoFactorSecret");

    if (!user || !user.twoFactorEnabled || !user.twoFactorSecret) {
      return res.status(400).json({ message: "2FA not configured for this account" });
    }

    const secret = xorDecrypt(user.twoFactorSecret);

    if (!authenticator.verify({ token: code, secret })) {
      return res.status(400).json({ message: "Invalid code. Try again." });
    }

    // Code valid — issue the real full-session token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.error("2FA verify error:", error);
    return res.status(500).json({ message: "Server error during 2FA verification" });
  }
});

// ---------------------------------------------------------------------------
// 2FA – STATUS   (returns whether 2FA is currently enabled)
// GET  /api/auth/2fa/status   — requires full session token
// ---------------------------------------------------------------------------
router.get("/2fa/status", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ enabled: user.twoFactorEnabled });
  } catch (error) {
    console.error("2FA status error:", error);
    return res.status(500).json({ message: "Server error fetching 2FA status" });
  }
});

// ---------------------------------------------------------------------------
// 2FA – DISABLE   (turns off 2FA after re-confirming the current code)
// POST /api/auth/2fa/disable   — requires full session token
// Body: { code: "123456" }
// ---------------------------------------------------------------------------
router.post("/2fa/disable", requireAuth, async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findById(req.userId).select("+twoFactorSecret");

    if (!user || !user.twoFactorEnabled) {
      return res.status(400).json({ message: "2FA is not currently enabled" });
    }

    const secret = xorDecrypt(user.twoFactorSecret);

    // Require a valid code before disabling — prevents accidental or unauthorized removal
    if (!authenticator.verify({ token: code, secret })) {
      return res.status(400).json({ message: "Invalid code. Cannot disable 2FA." });
    }

    user.twoFactorEnabled = false;
    user.twoFactorSecret  = null;
    await user.save();

    return res.json({ message: "2FA disabled successfully" });
  } catch (error) {
    console.error("2FA disable error:", error);
    return res.status(500).json({ message: "Server error while disabling 2FA" });
  }
});

export default router;