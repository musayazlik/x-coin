import mongoose from "mongoose";

const ApiDataSchema = new mongoose.Schema({
  totalMarketCap: {
    type: Object,
    default: {},
  },

  subcoinmix: {
    type: Array,
    default: [],
  },
});

export default mongoose.models.ApiData ||
  mongoose.model("ApiData", ApiDataSchema);
