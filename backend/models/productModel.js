import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // image URL
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "Coffee",
        "Espresso",
        "Cold Brew",
        "Frappuccino",
        "Tea",
        "Refreshers",
        "Bakery",
        "Snacks",
      ],
    }, // Coffee, Cold Brew, Food etc.
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
