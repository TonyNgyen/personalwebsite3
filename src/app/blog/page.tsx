import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/blog";
import React from "react";

async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">All Blogs</h1>
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
  );
}

export default BlogPage;
