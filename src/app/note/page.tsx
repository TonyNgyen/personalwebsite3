import BlogCard from "@/components/BlogCard";
import React from "react";
import { getNotes } from "../admin/note-actions";

async function BlogPage() {
  const notes = await getNotes();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">All Notes</h1>
      <div className="flex flex-col gap-4">
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
    </div>
  );
}

export default BlogPage;
