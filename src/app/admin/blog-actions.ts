"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string; // initial text section
  const tags = formData.getAll("tags") as string[];

  if (!title || !link || !description || !content) {
    throw new Error("All fields required.");
  }

  const tagIds = tags
    .map(Number)
    .filter((id) => Number.isInteger(id) && id > 0);

  await prisma.blog.create({
    data: {
      title,
      link,
      description,
      tags: {
        create: tagIds.map((tagId) => ({
          tag: { connect: { id: tagId } },
        })),
      },
      sections: {
        create: [
          {
            content,
            type: "text",
            sortOrder: 0,
          },
        ],
      },
    },
  });

  revalidatePath("/");
}

export async function getBlogs() {
  return await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      tags: {
        include: {
          tag: true, // Include tag details like `label`
        },
      },
    },
  });
}
