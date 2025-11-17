import User from "../models/userModel.js"; // <-- REQUIRED
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { aj } from "../config/arcjet.js";

// SIGNUP
export const signupUser = async (req, res) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      return res
        .status(429)
        .json({ message: "Too many signup attempts. Please try again later." });
    }

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({ message: "Signup successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      return res
        .status(429)
        .json({ message: "Too many login attempts. Please try again later." });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
