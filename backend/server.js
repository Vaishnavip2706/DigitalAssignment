import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/StudentRoutes.js";
import assignmentRoutes from "./routes/AssignmentRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ---------------- ROUTES ----------------
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/notes", noteRoutes);
// ---------------- DATABASE CONNECTION ----------------
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// ---------------- DEFAULT ROUTE ----------------
app.get("/", (req, res) => {
  res.send("API is running fine...");
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5050;

app.listen(PORT, () =>
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
);