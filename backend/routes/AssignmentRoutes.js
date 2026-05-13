import express from "express";
import { createAssignment, getAssignments } from "../controllers/assignmentcontroller.js";
import { protect, isTeacher } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST → create assignment
router.post("/", protect, isTeacher, createAssignment);

// GET → get assignments
router.get("/", protect, getAssignments);

export default router;