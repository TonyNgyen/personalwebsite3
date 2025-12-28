import BlogCard from "@/components/BlogCard";
import { getPublishedBlogs } from "../admin/blog-creator/blog-actions";

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">All Blogs</h1>
      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            url={`/blogs/${blog.link}`}
            date={new Date(blog.createdAt)}
            description={blog.description}
            tags={blog.tags || []}
          />
        ))}
      </div>
    </div>
  );
}
