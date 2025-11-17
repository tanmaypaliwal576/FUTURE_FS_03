import express from "express";
import { signupUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Signup
router.post("/signup", signupUser);

// Login
router.post("/login", loginUser);

export default router;
