import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  lastUpdated: Date,
});

export default mongoose.model('Score', ScoreSchema);
