import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
{
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  file: String,

  marks: {
    type: Number,
    default: null,
  },

  remark: {
    type: String,
    default: "",
  },
},
{ timestamps: true }
);

export default mongoose.model("Submission", submissionSchema);