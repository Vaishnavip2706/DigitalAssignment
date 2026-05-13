import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No token found
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Verify token using SAME secret as login
    const decoded = jwt.verify(token, "secretkey");

    // Get user from DB
    req.user = await User.findById(decoded.id).select("-password");

    next();

  } catch (error) {
    console.log("TOKEN ERROR:", error.message);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

// Teacher only access
export const isTeacher = (req, res, next) => {
  if (req.user && req.user.role === "teacher") {
    next();
  } else {
    return res.status(403).json({
      message: "Teacher access only",
    });
  }
};