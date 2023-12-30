import mongoose from "mongoose";
import ActiviteRecyclage from "./ActiviteRecyclage.js";
const Schema = mongoose.Schema;
const ActiviteRating = Schema({
  activite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ActiviteRecyclage,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
});
export default mongoose.model("ActiviteRating", ActiviteRating);
