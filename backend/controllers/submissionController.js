import Submission from "../models/Submission.js";

// ===============================
// Student submits assignment
// ===============================
export const submitAssignment = async (req, res) => {
  try {
    const { assignmentId, file } = req.body;

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user.id,
      file,
    });

    res.json({
      message: "Assignment submitted",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Teacher views all submissions
// ===============================
export const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("student", "name")
      .populate("assignment", "title");

    res.json(submissions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Teacher gives marks + remark
// ===============================
export const gradeSubmission = async (req, res) => {
  try {
    const { marks, remark } = req.body;

    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        message: "Submission not found",
      });
    }

    submission.marks = marks;
    submission.remark = remark;

    await submission.save();

    res.json({
      message: "Marks added successfully",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};