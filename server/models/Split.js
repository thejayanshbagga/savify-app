import mongoose from 'mongoose';

const SplitSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  participants: Array,
});

export default mongoose.model('Split', SplitSchema);
