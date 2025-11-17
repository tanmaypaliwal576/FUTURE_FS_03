import Reward from "../models/Reward.js";

// =========================
// STATIC TIER DATA
// =========================
const tiers = [
  {
    name: "Green",
    range: "0-24 stars",
    min: 0,
    max: 24,
    benefits: ["Earn stars on purchases", "Birthday reward", "Order ahead"],
  },
  {
    name: "Gold",
    range: "25-99 stars",
    min: 25,
    max: 99,
    benefits: [
      "All Green benefits",
      "Free drink every 25 stars",
      "Exclusive offers",
    ],
  },
  {
    name: "Platinum",
    range: "100+ stars",
    min: 100,
    max: 9999,
    benefits: [
      "All Gold benefits",
      "Priority service",
      "Early product access",
      "VIP events",
    ],
  },
];

// Helper function to detect tier
const calculateTier = (stars) => {
  if (stars >= 100) return "Platinum";
  if (stars >= 25) return "Gold";
  return "Green";
};

// =========================
// GET ALL TIERS (STATIC)
// =========================
export const getRewardTiers = (req, res) => {
  res.status(200).json(tiers);
};

// =========================
// GET USER REWARDS
// =========================
export const getUserRewards = async (req, res) => {
  try {
    let reward = await Reward.findOne({ user: req.user.id });

    // Create reward record if not exists
    if (!reward) {
      reward = await Reward.create({ user: req.user.id });
    }

    res.status(200).json(reward);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// =========================
// ADD REWARD POINTS
// =========================
export const addRewardPoints = async (req, res) => {
  try {
    const { points } = req.body;

    if (!points) {
      return res.status(400).json({ message: "Points value is required" });
    }

    let reward = await Reward.findOne({ user: req.user.id });

    if (!reward) {
      reward = await Reward.create({ user: req.user.id });
    }

    reward.stars += points;
    reward.tier = calculateTier(reward.stars);

    await reward.save();

    res.status(200).json({
      message: "Reward points added",
      reward,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
