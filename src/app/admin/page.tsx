import { cookies } from "next/headers";
import BlogModalForm from "./BlogModalForm";
import TagModalForm from "./TagModalForm";
import { getAllTags } from "./tag-actions";
import { Tag } from "@/components/Tag";
import BlogCard from "@/components/BlogCard"; // adjust path
import { getBlogs } from "./blog-actions";
import NoteModalForm from "./NoteModalForm";
import { getNotes } from "./note-actions";

export default async function AdminPage() {
  const blogs = await getBlogs();
  const notes = await getNotes();
  const tags = await getAllTags();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-2">
        <BlogModalForm />
        <NoteModalForm />
        <TagModalForm />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">All Notes</h2>
        <div className="flex flex-col gap-4">
          {notes.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              url={
                blog.link.startsWith("http") ? blog.link : `/blogs/${blog.link}`
              }
              date={new Date(blog.createdAt)}
              description={blog.content.slice(0, 100)}
              tags={blog.tags?.map(({ tag }) => tag) || []}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              url={
                blog.link.startsWith("http") ? blog.link : `/blogs/${blog.link}`
              }
              date={new Date(blog.createdAt)}
              description={blog.content.slice(0, 100)}
              tags={blog.tags?.map(({ tag }) => tag) || []}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">All Tags</h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
