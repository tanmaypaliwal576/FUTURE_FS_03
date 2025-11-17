import Product from "../models/productModel.js";

// ==========================
// GET ALL PRODUCTS
// ==========================
export const getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Search by name
    if (search) {
      query.name = { $regex: search, $options: "i" }; // case-insensitive
    }

    const products = await Product.find(query).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ==========================
// GET SINGLE PRODUCT
// ==========================
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ==========================
// CREATE PRODUCT
// ==========================
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    if (!name || !description || !price || !category) {
      return res
        .status(400)
        .json({ message: "All fields except image are required" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      image: image || "", // Allow optional image
      category,
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ==========================
// UPDATE PRODUCT
// ==========================
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ==========================
// DELETE PRODUCT
// ==========================
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
