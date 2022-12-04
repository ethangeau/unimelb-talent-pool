import express from "express";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  updateRecommendations,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", getProfiles);
router.post("/", createProfile);
router.patch("/:id", updateProfile);
router.delete("/:id", deleteProfile);
router.patch("/:id/recommendations", updateRecommendations);

export default router;
