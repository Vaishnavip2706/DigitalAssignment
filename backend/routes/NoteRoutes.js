import express from "express";

import {
  uploadNote,
  getNotes
} from "../controllers/noteController.js";

import {
  protect,
  isTeacher
} from "../middleware/authMiddleware.js";

const router = express.Router();


// Teacher uploads notes
router.post("/", protect, isTeacher, uploadNote);


// Student views notes
router.get("/", protect, getNotes);

export default router;