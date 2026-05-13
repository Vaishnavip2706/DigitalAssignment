import express from "express";
import verifyAdmin from "../middleware/adminMiddleware.js";
import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";

const router = express.Router();


// ================= STUDENTS =================

// Get all students
router.get("/students", verifyAdmin, async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Delete student
router.delete("/students/:id", verifyAdmin, async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});


// ================= TEACHERS =================

// Get all teachers
router.get("/teachers", verifyAdmin, async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

// Delete teacher
router.delete("/teachers/:id", verifyAdmin, async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted" });
});

export default router;