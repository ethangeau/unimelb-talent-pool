import express from "express";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  updateRecommendations,
} from "../controllers/profile.js";

import { signIn, signUp } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProfiles);
router.post("/", auth, createProfile);
router.patch("/:id", auth, updateProfile);
router.delete("/:id", auth, deleteProfile);
router.patch("/:id/recommendations", auth, updateRecommendations);

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
