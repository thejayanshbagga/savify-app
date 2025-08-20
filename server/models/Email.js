const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Email", EmailSchema);
