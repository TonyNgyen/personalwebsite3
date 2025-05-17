"use client";

import { useState, useEffect } from "react";
import { createNote } from "./note-actions";
import { getAllTags } from "./tag-actions";
import { Tag } from "@/types/types";
import BlogCard from "@/components/BlogCard";

export default function NoteModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      getAllTags().then(setTags);
    }
  }, [isOpen]);

  function toggleTag(tagId: number) {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  }

  async function handleSubmit(formData: FormData) {
    selectedTagIds.forEach((id) => {
      formData.append("tags", String(id));
    });

    await createNote(formData);
    setIsOpen(false);
    setTitle("");
    setLink("");
    setContent("");
    setSelectedTagIds([]);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        New Note
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Create Note</h2>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label htmlFor="link" className="block text-sm font-medium">
                  Link (slug)
                </label>
                <input
                  id="link"
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={5}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              {/* Tags Selection */}
              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto border rounded p-2">
                  {tags.map((tag) => {
                    const selected = selectedTagIds.includes(tag.id);
                    return (
                      <button
                        key={tag.id}
                        type="button"
                        onClick={() => toggleTag(tag.id)}
                        style={{
                          backgroundColor: tag.bgColor,
                          color: tag.textColor,
                        }}
                        className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                          selected
                            ? "ring-2 ring-green-500"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        {tag.emoji && `${tag.emoji} `}
                        {tag.label}
                      </button>
                    );
                  })}
                  {tags.length === 0 && (
                    <p className="text-gray-500 text-sm">No tags available</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>

              {title && content && (
                <>
                  <h3 className="text-lg font-semibold mt-6 mb-2">Preview</h3>
                  <BlogCard
                    title={title}
                    url={link ? `/blogs/${link}` : "#"}
                    date={new Date()}
                    description={content.slice(0, 100)}
                    tags={tags.filter((tag) => selectedTagIds.includes(tag.id))}
                  />
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
