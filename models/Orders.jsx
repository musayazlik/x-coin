import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    default: 0,
  },
  memberShipDate: {
    type: Date,
    default: Date.now,
  },
  memberShipEndDate: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
  },
  memberShipPriod: {
    type: String,
  },
  memberShipType: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
