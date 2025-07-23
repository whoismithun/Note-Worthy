import { Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e) => {
    // Stop the link navigation from firing when the delete button is clicked
    e.preventDefault(); 
    e.stopPropagation();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${note._id}`);
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      // The main container with new styling and hover effects
      className="card relative group bg-base-100/50 backdrop-blur-sm border border-base-content/20 
                 p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Delete button positioned at the top-right corner */}
      <button
        onClick={handleDelete}
        // Button is invisible by default but appears on hover for a cleaner look
        className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-base-content/50 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-error/20 hover:text-error"
        aria-label="Delete Note"
      >
        <Trash2Icon className="size-4" />
      </button>

      {/* --- FIX: Removed the invalid comment and the unnecessary curly braces --- */}
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold text-base-content line-clamp-2">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3 mt-2 flex-grow">{note.content}</p>
        <div className="card-actions justify-end items-center mt-4">
          <span className="text-xs text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;