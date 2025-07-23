import express from "express";
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

router.get("/", authMiddleware, getAllNotes);
router.post("/", authMiddleware, createNote);

router.get("/:id", authMiddleware, getNoteById);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

export default router;