import mongoose from 'mongoose';

const SaveSchema = new mongoose.Schema({
  userId: String,
  goal: String,
  amount: Number,
  progress: Number,
});

export default mongoose.model('Save', SaveSchema);
