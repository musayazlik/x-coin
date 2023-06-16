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
    unique: true,
    default: "",
  },
  email: {
    type: String,
    unique: true,
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
