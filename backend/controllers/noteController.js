import Note from "../models/Note.js";


// Teacher uploads note
export const uploadNote = async (req, res) => {
  try {
    const { title, subject, file } = req.body;

    const note = await Note.create({
      title,
      subject,
      file,
      teacher: req.user.id,
    });

    res.json({
      message: "Note uploaded successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Student views all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find()
      .populate("teacher", "name");

    res.json(notes);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};