"use client";

import React from "react";
import BlogContainer from "@/components/BlogComponents/BlogContainer";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogSection from "@/components/BlogComponents/BlogSection";
import BlogCard from "@/components/BlogCard";
import { Tag } from "@/types/types";
import { saveBlog, getBlogById } from "./blog-actions";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllTags } from "../tag-actions";

function BlogCreatorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [isLoadingBlog, setIsLoadingBlog] = React.useState(!!editId);
  const [blogId, setBlogId] = React.useState<number | undefined>(
    editId ? parseInt(editId) : undefined
  );
  const [blogTitle, setBlogTitle] = React.useState("");
  const [blogDate, setBlogDate] = React.useState("");
  const [blogLink, setBlogLink] = React.useState("");
  const [blogDescription, setBlogDescription] = React.useState("");
  const [isSaving, setIsSaving] = React.useState(false);

  // Tags
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = React.useState<number[]>([]);

  // Draft sections being edited
  const [draftSections, setDraftSections] = React.useState<
    Array<{ id: string; type: string; content: string }>
  >([]);

  // Published sections for preview
  const [publishedSections, setPublishedSections] = React.useState<
    Array<{ id: string; type: string; content: string }>
  >([]);

  const [showPreview, setShowPreview] = React.useState(false);

  // Fetch tags on mount
  React.useEffect(() => {
    getAllTags().then(setTags);
  }, []);

  // Load blog data if editing
  React.useEffect(() => {
    if (editId) {
      const loadBlog = async () => {
        setIsLoadingBlog(true);
        const blog = await getBlogById(parseInt(editId));

        if (blog) {
          setBlogTitle(blog.title);
          setBlogLink(blog.link);
          setBlogDescription(blog.description);
          setSelectedTagIds(blog.tags.map((tag) => tag.id));

          // Convert BlogContent sections to our format
          const loadedSections = blog.sections.map((section) => ({
            id: section.id.toString(),
            type: section.type,
            content: section.content,
          }));
          setPublishedSections(loadedSections);
        } else {
          alert("Blog not found");
          router.push("/admin");
        }

        setIsLoadingBlog(false);
      };

      loadBlog();
    }
  }, [editId, router]);

  function toggleTag(tagId: number) {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  }

  const handleDeleteDraft = (id: string) => {
    setDraftSections(draftSections.filter((section) => section.id !== id));
  };

  const handleAddDraft = () => {
    setDraftSections([
      ...draftSections,
      { id: Date.now().toString(), type: "text", content: "" },
    ]);
  };

  const handleEditDraft = (id: string, field: string, value: string) => {
    setDraftSections(
      draftSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handlePublishSection = (id: string) => {
    const sectionToPublish = draftSections.find((s) => s.id === id);
    if (sectionToPublish) {
      setPublishedSections([...publishedSections, sectionToPublish]);
      handleDeleteDraft(id);
    }
  };

  const handleUnpublishSection = (id: string) => {
    const sectionToEdit = publishedSections.find((s) => s.id === id);
    if (sectionToEdit) {
      setDraftSections([...draftSections, sectionToEdit]);
      setPublishedSections(publishedSections.filter((s) => s.id !== id));
    }
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...publishedSections];
    [newSections[index - 1], newSections[index]] = [
      newSections[index],
      newSections[index - 1],
    ];
    setPublishedSections(newSections);
  };

  const handleMoveDown = (index: number) => {
    if (index === publishedSections.length - 1) return;
    const newSections = [...publishedSections];
    [newSections[index], newSections[index + 1]] = [
      newSections[index + 1],
      newSections[index],
    ];
    setPublishedSections(newSections);
  };

  const handleInsertBefore = (index: number) => {
    const newSection = {
      id: Date.now().toString(),
      type: "text",
      content: "",
    };
    const newSections = [...publishedSections];
    newSections.splice(index, 0, newSection);
    setPublishedSections(newSections);
  };

  const handleInsertAfter = (index: number) => {
    const newSection = {
      id: Date.now().toString(),
      type: "text",
      content: "",
    };
    const newSections = [...publishedSections];
    newSections.splice(index + 1, 0, newSection);
    setPublishedSections(newSections);
  };

  const handleSave = async (isPublished: boolean) => {
    if (!blogTitle || !blogLink || !blogDescription) {
      alert("Please fill in title, link, and description");
      return;
    }

    if (publishedSections.length === 0) {
      alert("Please add at least one section to your blog");
      return;
    }

    setIsSaving(true);
    const result = await saveBlog({
      id: blogId, // Will be undefined for new blogs, number for editing
      title: blogTitle,
      link: blogLink,
      description: blogDescription,
      isPublished,
      tagIds: selectedTagIds,
      sections: publishedSections,
    });

    setIsSaving(false);

    if (result.success) {
      alert(
        blogId
          ? isPublished
            ? "Blog updated and published!"
            : "Blog updated as draft!"
          : isPublished
          ? "Blog published successfully!"
          : "Blog saved as draft!"
      );
      router.push("/admin");
    } else {
      alert("Failed to save blog: " + result.error);
    }
  };

  if (isLoadingBlog) {
    return (
      <div className="max-w-4xl mx-auto p-8 flex items-center justify-center min-h-[60vh]">
        <p className="text-xl text-gray-600">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {blogId ? "Edit Blog" : "Create New Blog"}
        </h1>
        {blogId && (
          <p className="text-gray-600 dark:text-gray-400">
            Editing: {blogTitle || "Untitled"}
          </p>
        )}
      </div>

      {/* Toggle View Button */}
      <div className="mb-6 flex gap-4 items-center">
        <button
          className={`px-4 py-2 rounded ${
            !showPreview
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setShowPreview(false)}
        >
          Edit Mode
        </button>
        <button
          className={`px-4 py-2 rounded ${
            showPreview ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setShowPreview(true)}
        >
          Preview
        </button>

        {/* Save buttons */}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => router.push("/admin")}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={isSaving}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save as Draft"}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={isSaving}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            {isSaving ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </div>

      {!showPreview ? (
        /* Edit Mode */
        <div>
          {/* Blog Metadata */}
          <div className="mb-8 space-y-4 border-2 border-gray-300 rounded p-6 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Blog Metadata</h2>

            <div>
              <label className="block mb-2 font-semibold">Blog Title:</label>
              <input
                type="text"
                className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter blog title..."
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Link (slug):</label>
              <input
                type="text"
                className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600"
                value={blogLink}
                onChange={(e) => setBlogLink(e.target.value)}
                placeholder="e.g., summer-break-plans"
              />
              <p className="text-sm text-gray-500 mt-1">
                This will be the URL: /blogs/{blogLink || "your-link-here"}
              </p>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Description:</label>
              <textarea
                className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600"
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
                placeholder="Brief description for the blog card..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto border rounded p-2 bg-white dark:bg-gray-700 dark:border-gray-600">
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

            {/* BlogCard Preview */}
            {blogTitle && blogDescription && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Card Preview:</h3>
                <BlogCard
                  title={blogTitle}
                  url={blogLink ? `/blogs/${blogLink}` : "#"}
                  date={new Date()}
                  description={blogDescription}
                  tags={tags.filter((tag) => selectedTagIds.includes(tag.id))}
                />
              </div>
            )}
          </div>

          {/* Draft Sections */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Draft Sections (WIP)</h2>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
              onClick={handleAddDraft}
            >
              Add Draft Section
            </button>

            <div className="space-y-4">
              {draftSections.map((section) => (
                <div
                  key={section.id}
                  className="border p-4 rounded bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700"
                >
                  <label className="block mb-2 font-semibold">
                    Section Type:
                    <select
                      className="ml-2 border rounded p-1 dark:bg-gray-700 dark:border-gray-600"
                      value={section.type}
                      onChange={(e) =>
                        handleEditDraft(section.id, "type", e.target.value)
                      }
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                    </select>
                  </label>
                  <textarea
                    className="w-full border rounded p-2 mb-2 dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Enter content here..."
                    value={section.content}
                    onChange={(e) =>
                      handleEditDraft(section.id, "content", e.target.value)
                    }
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => handlePublishSection(section.id)}
                    >
                      Publish to Blog
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDeleteDraft(section.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Published Sections with Controls */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Published Sections</h2>
            <div className="space-y-4">
              {publishedSections.map((section, index) => (
                <div
                  key={section.id}
                  className="border p-4 rounded bg-green-50 dark:bg-green-900/20 dark:border-green-700 relative"
                >
                  <div className="mb-2">
                    <span className="font-semibold">
                      Type: {section.type === "text" ? "Text" : "Image"}
                    </span>
                  </div>
                  <div className="mb-4 p-2 bg-white dark:bg-gray-800 rounded border dark:border-gray-600">
                    {section.type === "text" ? (
                      <p className="text-lg">{section.content}</p>
                    ) : (
                      <img
                        src={section.content}
                        alt={`Section ${index}`}
                        className="max-w-full h-auto"
                      />
                    )}
                  </div>

                  {/* Control Buttons */}
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                    >
                      ↑ Move Up
                    </button>
                    <button
                      className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === publishedSections.length - 1}
                    >
                      ↓ Move Down
                    </button>
                    <button
                      className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                      onClick={() => handleInsertBefore(index)}
                    >
                      + Insert Before
                    </button>
                    <button
                      className="px-2 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                      onClick={() => handleInsertAfter(index)}
                    >
                      + Insert After
                    </button>
                    <button
                      className="px-2 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                      onClick={() => handleUnpublishSection(section.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Preview Mode - Matches your blog style */
        <BlogContainer>
          <div>
            <BlogHeader
              date={
                blogDate ||
                new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }
            >
              {blogTitle || "Untitled Blog"}
            </BlogHeader>
          </div>
          {publishedSections.length === 0 ? (
            <p className="text-gray-400 italic">
              No sections published yet. Switch to Edit Mode to add sections.
            </p>
          ) : (
            publishedSections.map((section) => (
              <BlogSection key={section.id}>
                {section.type === "text" ? (
                  section.content
                ) : (
                  <img
                    src={section.content}
                    alt="Blog content"
                    className="max-w-full h-auto"
                  />
                )}
              </BlogSection>
            ))
          )}
        </BlogContainer>
      )}
    </div>
  );
}

export default BlogCreatorPage;
