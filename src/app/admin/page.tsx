import { cookies } from "next/headers";
import BlogModalForm from "./BlogModalForm";
import { getBlogs } from "@/lib/blogs";
import TagModalForm from "./TagModalForm";
import { getAllTags } from "./tag-actions";
import { Tag } from "@/components/Tag";

export default async function AdminPage() {
  // Since middleware protects this page, user is admin

  async function logout() {
    await fetch("/api/admin-logout", { method: "POST" });
    // Note: can't redirect client from server component — this will be handled client side in real case
  }
  const blogs = await getBlogs();
  const tags = await getAllTags();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <BlogModalForm />
      <TagModalForm />
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
      <div>
        <h1>All Tags</h1>
        <ul>
          {tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))}
        </ul>
      </div>

      {/* Ideally implement logout button in a client component */}
    </div>
  );
}
