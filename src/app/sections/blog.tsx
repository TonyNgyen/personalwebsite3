import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { FiChevronRight, FiInfo } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import { getPublishedBlogs } from "../admin/blog-creator/blog-actions";
import Link from "next/link";

async function Blog() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <div className="flex items-center pl-4">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <Tooltip text="In-depth posts on projects, app updates, and topics I care about.">
          <button className="ml-2 flex items-center text-2xl text-accent">
            <FiInfo />
          </button>
        </Tooltip>
      </div>
      {blogs.length !== 0 ? (
        <div className="space-y-4">
          {blogs.slice(0,3).map((blog) => (
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
      ) : (
        <div className="pl-4 text-xl font-semibold">
          There are no blogs yet...
        </div>
      )}

      <Link href="/blogs" className="group flex items-center gap-2">
        <h2 className="pl-4 text-xl font-semibold group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 transition-all duration-200">
          View All Blogs
        </h2>
        <FiChevronRight className="text-2xl transition-transform duration-200 group-hover:translate-x-2 group-hover:text-accent" />
      </Link>
    </div>
  );
}

export default Blog;
