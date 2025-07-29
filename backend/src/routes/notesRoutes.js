import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";
import {
  createNote,
  deleteNote,
  getAllNotes, // Renamed from getNotes to match your controller
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";
import authMiddleware from "../middleware/auth.js"; // Import the middleware

const router = express.Router();

// Apply the authMiddleware to all routes in this file
// The middleware will run before any of the controller functions

router.get("/", authMiddleware, rateLimiter, getAllNotes);
router.post("/", authMiddleware, rateLimiter, createNote);

router.get("/:id", authMiddleware, rateLimiter, getNoteById);
router.put("/:id", authMiddleware, rateLimiter, updateNote);
router.delete("/:id", authMiddleware, rateLimiter, deleteNote);

export default router;