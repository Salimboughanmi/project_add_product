import express from "express";
import { createRating } from "../Controllers/RatingActivite.controller.js";

const router = express.Router();

router.route("/add").post(createRating);

export default router;
