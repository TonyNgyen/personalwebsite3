import BlogCard from "@/components/BlogCard";
import React from "react";
import { getNotes } from "../admin/note-actions";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

async function BlogPage() {
  const notes = await getNotes();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">All Notes</h1>
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
        <div className="pl-4">
          <div className="text-xl font-semibold mb-4">
            There are no notes yet...
          </div>
          <Link href="/" className="group flex items-center gap-2">
            <FiChevronLeft className="text-2xl transition-transform duration-200 group-hover:-translate-x-2 group-hover:text-emerald-500" />

            <h2 className="text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 group-hover:underline-offset-4 transition-all duration-200">
              Go back home
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
