import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
{
  title: String,
  description: String,
  deadline: Date,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{ timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);