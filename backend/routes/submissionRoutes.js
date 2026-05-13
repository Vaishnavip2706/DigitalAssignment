import express from "express";

import {
  submitAssignment,
  getSubmissions,
  gradeSubmission
} from "../controllers/submissionController.js";

import {
  protect,
  isTeacher
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Student submit assignment
router.post("/", protect, submitAssignment);

// Teacher view all submissions
router.get("/", protect, isTeacher, getSubmissions);

// Teacher gives marks
router.put("/:id/grade", protect, isTeacher, gradeSubmission);

export default router;