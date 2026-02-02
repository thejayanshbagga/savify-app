// models/User.js
// ---------------------------------------------------------------------------
// ADD these three fields to your existing User schema.  The rest of the schema
// (email, password, timestamps, etc.) stays exactly as it is.
// ---------------------------------------------------------------------------

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email:    { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    resetPasswordToken: { type: String, },
    resetPasswordExpires: { type: Date,},


    // ── 2FA fields (new) ──────────────────────────────────────────────────
    twoFactorSecret:  { type: String, default: null, select: false }, // encrypted base32 secret
    twoFactorEnabled: { type: Boolean, default: false },              // true once enrollment is confirmed
    // ──────────────────────────────────────────────────────────────────────
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);