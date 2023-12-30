import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ActiviteRecyclage = Schema({
  ActivityID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ActivityID",
  },
  dateAndTime: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recyclableMaterial: {
    type: String,
    enum: ["plastic", "paper", "glass", "metal", "other"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("ActiviteRecyclage", ActiviteRecyclage);
