import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// 🔐 Register User (Student / Teacher)
router.post("/register", register);

// 🔐 Login User
router.post("/login", login);

export default router;