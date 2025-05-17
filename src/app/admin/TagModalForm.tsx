"use client";

import { useState } from "react";
import { createTag } from "./tag-actions";
import { ColorSwatchPicker } from "@/components/ColorSwatchPicker";

export default function TagModalForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [label, setLabel] = useState("");
  const [emoji, setEmoji] = useState("");
  const [bgColor, setBgColor] = useState("#f5f5f5");
  const [textColor, setTextColor] = useState("#333333");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("label", label);
    formData.append("emoji", emoji);
    formData.append("bgColor", bgColor);
    formData.append("textColor", textColor);

    await createTag(formData);
    setIsOpen(false);

    // reset fields
    setLabel("");
    setEmoji("");
    setBgColor("#f5f5f5");
    setTextColor("#333333");
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        New Tag
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2 overflow-auto h-11/12">
            <h2 className="text-lg font-semibold mb-4">Create Tag</h2>

            {/* Live Preview */}
            <div
              className="inline-flex items-center rounded-full px-3 py-1 mb-4"
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              <p className="font-semibold">
                {emoji && `${emoji} `}
                {label || "Tag Preview"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Label</label>
                <input
                  name="label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Emoji</label>
                <input
                  name="emoji"
                  value={emoji}
                  onChange={(e) => setEmoji(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="block text-sm font-medium">
                  Background Color
                </label>
                <input
                  name="bgColor"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-14 aspect-square p-1 border border-[#ddd] rounded h-14"
                />
                <ColorSwatchPicker
                  color={bgColor}
                  onChange={setBgColor}
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label className="block text-sm font-medium">Text Color</label>
                <input
                  name="textColor"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-14 aspect-square p-1 border border-[#ddd] rounded h-14"
                />
                <ColorSwatchPicker
                  color={textColor}
                  onChange={setTextColor}
                />
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
            </form>
          </div>
        </div>
      )}
    </>
  );
}
