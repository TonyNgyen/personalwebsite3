import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { FiInfo } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { getNotes } from "@/lib/note";
import NoteCard from "@/components/NoteCard";
import { Note, Tag } from "@/types/types";

// export const tags: Tag[] = [
//   {
//     id: 1,
//     label: "Planning",
//     emoji: "🧠",
//     bgColor: "#e5e5e5",
//     textColor: "#18181b",
//   },
//   {
//     id: 2,
//     label: "React",
//     emoji: "⚛️",
//     bgColor: "#e5e5e5",
//     textColor: "#18181b",
//   },
//   {
//     id: 3,
//     label: "Backend",
//     emoji: "🛠️",
//     bgColor: "#e5e5e5",
//     textColor: "#18181b",
//   },
//   {
//     id: 4,
//     label: "Bug",
//     emoji: "🐞",
//     bgColor: "#e5e5e5",
//     textColor: "#18181b",
//   },
//   {
//     id: 5,
//     label: "Learning",
//     emoji: "📚",
//     bgColor: "#e5e5e5",
//     textColor: "#18181b",
//   },
// ];

// export const notes: Note[] = [
//   {
//     id: "note-1",
//     createdAt: "2024-01-01",
//     content:
//       "Project kickoff meeting notes. Defined MVP scope and assigned initial action items.",
//     tags: [tags[0]],
//   },
//   {
//     id: "note-2",
//     createdAt: "2024-01-05",
//     content:
//       "Reviewed React rendering behavior. Identified components that could benefit from memoization.",
//     tags: [tags[1], tags[4]],
//   },
//   {
//     id: "note-3",
//     createdAt: "2024-01-12",
//     content:
//       "Outlined REST API structure with pagination and filtering strategies.",
//     tags: [tags[2]],
//   },
//   {
//     id: "note-4",
//     createdAt: "2024-01-18",
//     content: "Investigated login redirect loop caused by expired sessions.",
//     tags: [tags[3]],
//   },
// ];

async function Notes() {
  const notes = await getNotes();
  // const notes = [];

  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <div className="flex items-center pl-4">
        <h1 className="text-4xl font-semibold">Notes</h1>
        <Tooltip text="Thoughts and notes — from projects to everyday life and everything else.">
          <button className="ml-2 flex items-center text-2xl text-emerald-500 dark:text-emerald-300">
            <FiInfo />
          </button>
        </Tooltip>
      </div>
      {notes.length != 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="pl-4 text-xl font-semibold">
          There are no notes yet...
        </div>
      )}

      <div className="pl-4 text-xl font-semibold">
        There are no notes yet...
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div> */}

      <a href="/notes" className="group flex items-center gap-2">
        <h2 className="pl-4 text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 dark:group-hover:decoration-emerald-300 group-hover:underline-offset-4 transition-all duration-200">
          View All Notes
        </h2>
        <FiChevronRight className="text-2xl transition-transform duration-200 group-hover:translate-x-2 group-hover:text-emerald-500 dark:group-hover:decoration-emerald-300" />
      </a>
    </div>
  );
}

export default Notes;
