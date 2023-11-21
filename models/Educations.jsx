import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  instructor: {
    type: String,
    default: 'TraderEdit',
  },

  instructorImage: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: '',
  },
  video: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
    enum: ['free-trainings', 'paid-trainings', 'live-trainings'],
    default: 'free-trainings',
  },
  status: {
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

export default mongoose.models.Education || mongoose.model("Education", EducationSchema);