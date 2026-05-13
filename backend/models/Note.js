import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  file: {
    type: String,
    required: true,
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
},
{ timestamps: true }
);

export default mongoose.model("Note", noteSchema);
