// VerticalChipCarousel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  chips: string[];
  interval?: number;
};

const CHIP_HEIGHT_PX = 25;
const CHIP_MARGIN_VERTICAL_PX = 4;
const TOTAL_HEIGHT = CHIP_HEIGHT_PX + CHIP_MARGIN_VERTICAL_PX;
const ANIMATION_DURATION_MS = 500;

export default function VerticalChipCarousel({
  chips,
  interval = 2000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayChips = [...chips, chips[0]];
  const totalDisplayChips = displayChips.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    if (index === totalDisplayChips - 1) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);
      }, ANIMATION_DURATION_MS);

      return () => clearTimeout(timeout);
    } else if (index === 0 && !isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, totalDisplayChips, isAnimating]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: `${TOTAL_HEIGHT}px` }}
    >
      <div
        ref={containerRef}
        className={
          isAnimating
            ? `transition-transform duration-${ANIMATION_DURATION_MS} ease-in-out`
            : ""
        }
        style={{
          transform: `translateY(-${index * TOTAL_HEIGHT}px)`,
        }}
      >
        {displayChips.map((chip, i) => (
          <div
            key={`${chip}-${i}`}
            // Add w-fit and px-4 here to control chip width and padding
            className="h-[25px] m-1 flex items-center justify-center bg-gray-700 dark:bg-gray-800 text-gray-200 rounded-full shadow-sm px-4"
            style={{ minHeight: `${CHIP_HEIGHT_PX}px` }}
          >
            {chip}
          </div>
        ))}
      </div>
    </div>
  );
}
