
import React from "react";
import { getNotes } from "../admin/note-actions";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";

async function BlogPage() {
  const notes = await getNotes();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">All Notes</h1>
      {notes.length != 0 ? (
        <div className="space-y-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="pl-4">
          <div className="text-xl font-semibold mb-4">
            There are no notes yet...
          </div>
          <Link href="/" className="group flex items-center gap-2">
            <FiChevronLeft className="text-2xl transition-transform duration-200 group-hover:-translate-x-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-300" />

            <h2 className="text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 dark:group-hover:decoration-emerald-300 group-hover:underline-offset-4 transition-all duration-200">
              Go back home
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
