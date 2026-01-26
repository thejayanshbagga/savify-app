const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Equity ETF', 'Bond ETF', 'Tech ETF', 'Commodity ETF', 'Real Estate ETF', 'Crypto', 'Other'],
        required: true,
    },
    shares: {
        type: Number,
        required: true,
    },
    purchasePrice: {
        type: Number,
        required: true,
    },
    currentPrice: {
        type: Number,
        required: true,
    },
    holdingPeriod: {
        type: String,
        enum: ['Short-term (< 1 year)', 'Medium-term (1-5 years)', 'Long-term (5+ years)'],
        default: 'Long-term (5+ years)',
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Virtual for total value
InvestmentSchema.virtual('totalValue').get(function() {
    return this.shares * this.currentPrice;
});

// Virtual for growth percentage
InvestmentSchema.virtual('growth').get(function() {
    return ((this.currentPrice - this.purchasePrice) / this.purchasePrice) * 100;
});

// Virtual for total profit/loss
InvestmentSchema.virtual('profitLoss').get(function() {
    return (this.currentPrice - this.purchasePrice) * this.shares;
});

// Ensure virtuals are included in JSON
InvestmentSchema.set('toJSON', { virtuals: true });
InvestmentSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model("Investment", InvestmentSchema);