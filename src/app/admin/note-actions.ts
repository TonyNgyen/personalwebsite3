"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const content = formData.get("content") as string;
  const tags = formData.getAll("tags") as string[];

  if (!title || !link || !content) {
    throw new Error("All fields required.");
  }

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

  revalidatePath("/");
}

export async function getNotes() {
  return await prisma.note.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}
