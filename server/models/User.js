const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, select: false }, // Optional for Google users
  googleId: { type: String, unique: true, sparse: true }, // Only for Google users
  name: { type: String },
  picture: { type: String },
});

// ✅ Hash password before saving (only if password is present)
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // Prevent re-hashing if already hashed
  if (this.password?.startsWith("$2b$")) {
    console.log(`🔹 Password for ${this.email} already hashed. Skipping.`);
    return next();
  }

  console.log(`🔹 Hashing password for: ${this.email}`);
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);