import express from "express";
import {
  addActivite,
  getActivites,
  getActivite,
  updateActivite,
  deleteActivite,
  getActivitiesByUser,
  getMaterialStatistics,
} from "../Controllers/Activite.controller.js";

const router = express.Router();

router.route("/").get(getActivites);
router.route("/get/:userId").get(getActivitiesByUser);
router.route("/add").post(addActivite);
router.route("/:id").get(getActivite);
router.route("/update/:id").patch(updateActivite);
router.route("/delete/:id").delete(deleteActivite);
router.get("/statistics/material", getMaterialStatistics);

export default router;
