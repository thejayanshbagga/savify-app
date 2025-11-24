const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, select: false },
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String },
  picture: { type: String },

  // 2FA fields
  twoFactorEnabled: { type: Boolean, default: false },
  twoFactorMethod: { type: String, enum: ["email", "sms", "totp"], default: null },

  // Email 2FA
  twoFactorEmailCode: { type: String, default: null },
  emailCodeExpires: { type: Date, default: null },

  // SMS 2FA
  phoneNumber: { type: String, default: null },
  twoFactorSMSCode: { type: String, default: null },
  smsCodeExpires: { type: Date, default: null },

  // Authenticator App 2FA (TOTP)
  totpSecret: { type: String, default: null },
});

// Hash password before saving (only if modified)
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  if (this.password?.startsWith("$2b$")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
