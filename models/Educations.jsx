import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
    enum: ['free-trainings', 'paid-trainings', 'live-trainings'],
    default: 'free-trainings',
  },
  instructor: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  duration: {
    type: String,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },

});

export default mongoose.models.Education || mongoose.model("Education", EducationSchema);