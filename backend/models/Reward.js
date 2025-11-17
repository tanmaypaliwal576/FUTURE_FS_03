import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stars: {
      type: Number,
      default: 0,
    },
    tier: {
      type: String,
      enum: ["Green", "Gold", "Platinum"],
      default: "Green",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reward", rewardSchema);
