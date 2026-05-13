import Assignment from "../models/Assignment.js";

// Create Assignment (Teacher only)
export const createAssignment = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    const assignment = await Assignment.create({
      title,
      description,
      deadline,
      teacher: req.user.id,
    });

    res.json({
      message: "Assignment created",
      assignment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find(); // ✅ NO populate

    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all assignments
/*export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("teacher", "name");

    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};*/