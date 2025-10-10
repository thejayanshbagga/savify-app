const mongoose = require('mongoose');

const splitSchema = new mongoose.Schema({
    payer: { type: String, required: true },
    amount: { type: Number, required: true },
    participants: [
        {
            user: { type: String, required: true },
            amount: { type: Number, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Split', splitSchema);
