"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ChipCyclerProps = {
  items: string[];
  interval?: number; // in ms
};

export default function ChipCycler({
  items,
  interval = 2000,
}: ChipCyclerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={items[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-20"
        >
          <div className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium shadow">
            {items[index]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
