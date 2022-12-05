import express from "express";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  updateRecommendations,
} from "../controllers/profile.js";

import { signIn, signUp } from "../controllers/user.js";

const router = express.Router();

router.get("/", getProfiles);
router.post("/", createProfile);
router.patch("/:id", updateProfile);
router.delete("/:id", deleteProfile);
router.patch("/:id/recommendations", updateRecommendations);

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
