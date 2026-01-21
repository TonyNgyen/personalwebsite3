"use client";

import React, { useEffect, useState } from "react";
import { Note } from "@/types/types";
import { Tag } from "./Tag"; // adjust path if needed

function NoteCard({ note }: { note: Note }) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = new Date(note.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer p-5 transition-all duration-200 
             hover:bg-gray-200/60 bg-gray-100/80 border-1 hover:border hover:border-gray-100 border-gray-200/60 rounded-md dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:bg-gray-800/70 dark:border-gray-800"
      >
        {/* Header: Date + Optional Icon */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-400">
            {formattedDate}
          </span>
        </div>

        {/* Body */}
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed line-clamp-2 mb-4">
          {note.content}
        </p>

        {/* Footer: Tags */}
        {note.tags && note.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap pt-3 border-t border-gray-300 dark:border-gray-500">
            {note.tags.map((tag) => (
              <Tag key={tag.id} tag={tag} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 h-screen"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal content */}
          <div
            className="relative z-10 w-full max-w-lg mx-4
               bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header: Date and Close Button */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {formattedDate}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {note.content}
            </div>

            {note.tags && note.tags.length > 0 && (
              <div className="flex gap-[6px] mt-4 flex-wrap">
                {note.tags.map((tag) => (
                  <Tag key={tag.id} tag={tag} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NoteCard;
