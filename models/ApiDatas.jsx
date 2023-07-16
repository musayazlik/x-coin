import mongoose from "mongoose";

const ApiDataSchema = new mongoose.Schema({
  totalMarketCap: {
    type: Object,
    default: {},
  },
});

export default mongoose.models.ApiData ||
  mongoose.model("ApiData", ApiDataSchema);
