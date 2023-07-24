import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  surname: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },

  password: {
    type: String,
    default: "",
  },
  walletAddress: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "user",
  },
  memberShipType: {
    type: String,
    default: "free",
  },
  isActive: {
    type: Boolean,
    default: true,
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

export default mongoose.models.User || mongoose.model("User", userSchema);
