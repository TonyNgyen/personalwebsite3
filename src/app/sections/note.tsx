import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { FiInfo } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import { getNotes } from "@/lib/note";

async function Notes() {
  const notes = await getNotes();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <div className="flex items-center pl-4">
        <h1 className="text-4xl font-semibold">Notes</h1>
        <Tooltip text="Thoughts and notes — from projects to everyday life and everything else.">
          <button className="ml-2 flex items-center text-2xl text-emerald-500">
            <FiInfo />
          </button>
        </Tooltip>
      </div>
      {notes.length != 0 ? (
        <div className="space-y-4">
          {notes.map((note) => (
            <BlogCard
              key={note.id}
              title={note.title}
              url={
                note.link.startsWith("http") ? note.link : `/notes/${note.link}`
              }
              date={new Date(note.createdAt)}
              description={note.content.slice(0, 100)}
              tags={note.tags?.map(({ tag }) => tag) || []}
            />
          ))}
        </div>
      ) : (
        <div className="pl-4 text-xl font-semibold">
          There are no notes yet...
        </div>
      )}

      <a href="/notes" className="group flex items-center gap-2">
        <h2 className="pl-4 text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 group-hover:underline-offset-4 transition-all duration-200">
          View All Notes
        </h2>
        <FiChevronRight className="text-2xl transition-transform duration-200 group-hover:translate-x-2 group-hover:text-emerald-500" />
      </a>
    </div>
  );
}

export default Notes;
