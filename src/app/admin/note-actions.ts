"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const content = formData.get("content") as string;
  const tags = formData.getAll("tags") as string[];

  if (!content) {
    throw new Error("All fields required.");
  }

  const tagIds = tags
    .map((id) => Number(id))
    .filter((id) => !isNaN(id) && id > 0);

  await prisma.note.create({
    data: {
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
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  return notes.map((note) => ({
    ...note,
    tags: note.tags.map((nt) => nt.tag),
  }));
}
