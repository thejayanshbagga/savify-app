import mongoose from 'mongoose';

const InvestmentSchema = new mongoose.Schema({
  userId: String,
  symbol: String,
  name: String,
  type: String,
  shares: Number,
  purchasePrice: Number,
  currentPrice: Number,
  totalValue: Number,
  growth: Number,
  holdingPeriod: String,
  lastUpdated: Date,
});

export default mongoose.model('Investment', InvestmentSchema);
