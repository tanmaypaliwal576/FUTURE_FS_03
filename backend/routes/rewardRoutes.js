import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getRewardTiers,
  getUserRewards,
  addRewardPoints,
} from "../controllers/rewardController.js";

const router = express.Router();

// GET Tiers (public)
router.get("/tiers", getRewardTiers);

// GET User Reward Info (logged in)
router.get("/my-rewards", protect, getUserRewards);

// Add Reward Points (logged in)
router.post("/add", protect, addRewardPoints);

export default router;
