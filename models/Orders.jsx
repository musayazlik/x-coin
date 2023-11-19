import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  education: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Education",
  },
  amount: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
