"use server";

import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export type BlogSection = {
  id: string;
  type: string;
  content: string;
};

// Create or update a blog (handles both drafts and published)
export async function saveBlog(data: {
  id?: number; // If provided, update existing blog
  title: string;
  link: string;
  description: string;
  isPublished: boolean;
  tagIds: number[];
  sections: BlogSection[];
}) {
  try {
    const { id, title, link, description, isPublished, tagIds, sections } =
      data;

    if (id) {
      // Update existing blog
      await prisma.blog.update({
        where: { id },
        data: {
          title,
          link,
          description,
          isPublished,
          // Delete existing sections and tags, then recreate
          sections: {
            deleteMany: {},
            create: sections.map((section, index) => ({
              content: section.content,
              sortOrder: index,
              type: section.type,
            })),
          },
          tags: {
            deleteMany: {},
            create: tagIds.map((tagId) => ({
              tagId,
            })),
          },
        },
      });
    } else {
      // Create new blog
      await prisma.blog.create({
        data: {
          title,
          link,
          description,
          isPublished,
          sections: {
            create: sections.map((section, index) => ({
              content: section.content,
              sortOrder: index,
              type: section.type,
            })),
          },
          tags: {
            create: tagIds.map((tagId) => ({
              tagId,
            })),
          },
        },
      });
    }

    revalidatePath("/blogs");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error saving blog:", error);
    return { success: false, error: "Failed to save blog" };
  }
}

// Get all published blogs (for public view)
export async function getPublishedBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { isPublished: true },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return blogs.map((blog) => ({
      ...blog,
      tags: blog.tags.map((bt) => bt.tag),
    }));
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    return [];
  }
}

// Get all blogs including drafts (for admin view)
export async function getAllBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    return blogs.map((blog) => ({
      ...blog,
      tags: blog.tags.map((bt) => bt.tag),
    }));
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
}

// Get a single blog by link with all its sections
export async function getBlogByLink(link: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { link },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
        sections: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });

    if (!blog) return null;

    return {
      ...blog,
      tags: blog.tags.map((bt) => bt.tag),
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Delete a blog
export async function deleteBlog(id: number) {
  try {
    await prisma.blog.delete({
      where: { id },
    });

    revalidatePath("/blogs");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Failed to delete blog" };
  }
}

// Toggle publish status
export async function toggleBlogPublish(id: number) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      select: { isPublished: true },
    });

    if (!blog) {
      return { success: false, error: "Blog not found" };
    }

    await prisma.blog.update({
      where: { id },
      data: { isPublished: !blog.isPublished },
    });

    revalidatePath("/blogs");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error toggling blog publish status:", error);
    return { success: false, error: "Failed to toggle publish status" };
  }
}

export async function getBlogById(id: number) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
        sections: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });

    if (!blog) return null;

    return {
      ...blog,
      tags: blog.tags.map((bt) => bt.tag),
    };
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return null;
  }
}
