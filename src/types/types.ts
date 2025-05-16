export type Blog = {
  id: number;
  title: string;
  link: string;
  content: string;
  createdAt: Date;
  tags?: Tag[];
};

export type Note = {
  id: number;
  title: string;
  link: string;
  content: string;
  createdAt: Date;
  tags?: Tag[];
};

export type Tag = {
  id: number;
  label: string;
  emoji: string | null;
  bgColor: string;     // Tailwind class, e.g. "bg-blue-100"
  textColor: string; // Tailwind class, e.g. "border-blue-500"
};

export type BlogTag = {
  id: number;
  blogId: number;
  tagId: number;
};

export type NoteTag = {
  id: number;
  noteId: number;
  tagId: number;
};
