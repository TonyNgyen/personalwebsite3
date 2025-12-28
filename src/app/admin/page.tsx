import BlogModalForm from "./BlogModalForm";
import TagModalForm from "./TagModalForm";
import { getAllTags } from "./tag-actions";
import { Tag } from "@/components/Tag";
import BlogCard from "@/components/BlogCard";
import NoteModalForm from "./NoteModalForm";
import { getNotes } from "./note-actions";
import { getAllBlogs } from "./blog-creator/blog-actions";
import BlogAdminCard from "@/components/BlogAdminCard";

export default async function AdminPage() {
  const blogs = await getAllBlogs(); // This gets ALL blogs including drafts
  const notes = await getNotes();
  const tags = await getAllTags();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="space-x-2">
        <BlogModalForm />
        <NoteModalForm />
        <TagModalForm />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <a href="/admin/blog-creator">Create Blog</a>
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">All Notes</h2>
        <div className="flex flex-col gap-4">
          {notes.map((note) => (
            <BlogCard
              key={note.id}
              title={note.title}
              url={
                note.link.startsWith("http") ? note.link : `/notes/${note.link}`
              }
              date={new Date(note.createdAt)}
              description=""
              tags={note.tags?.map(({ tag }) => tag) || []}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <BlogAdminCard key={blog.id} blog={blog} />
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
