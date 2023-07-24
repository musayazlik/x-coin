import mongoose from "mongoose";

const BreakAndIncomeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  content: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.BreakAndIncome ||
  mongoose.model("BreakAndIncome", BreakAndIncomeSchema);
