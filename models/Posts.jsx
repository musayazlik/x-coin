import mongoose from "mongoose";


const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  homeCategory: {
    type: String,
    default: "analysis",
  },
  category: {
    type: String,
    default: "",
  },
  subCategory: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  iframeText: {
    type: String,
    default: "",
  },

  status: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
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

export default mongoose.models.Post || mongoose.model("Post", postSchema);

