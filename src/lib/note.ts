"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function createNote(formData: FormData) {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const content = formData.get("content") as string;
  // tags will come as a comma-separated string or multiple entries, let's normalize:
  const tags = formData.getAll("tags") as string[]; // getAll to support multiple selections

  if (!title || !link || !content) {
    throw new Error("All fields required.");
  }

  // Convert tag IDs from string to number and filter out invalid entries
  const tagIds = tags
    .map((id) => Number(id))
    .filter((id) => !isNaN(id) && id > 0);

  await prisma.note.create({
    data: {
      title,
      link,
      content,
      tags: {
        create: tagIds.map((tagId) => ({
          tag: {
            connect: { id: tagId },
          },
        })),
      },
    },
  });

  revalidatePath("/"); // Revalidate homepage or blog list if needed
}

export async function getNotes() {
  return await prisma.note.findMany({
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
