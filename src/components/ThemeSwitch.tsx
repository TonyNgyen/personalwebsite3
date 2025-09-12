"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const options = [
    {
      value: "light",
      label: "Light",
      icon: <FiSun className="w-4 h-4 mr-2" />,
    },
    { value: "dark", label: "Dark", icon: <FiMoon className="w-4 h-4 mr-2" /> },
    {
      value: "system",
      label: "System",
      icon: <FiMonitor className="w-4 h-4 mr-2" />,
    },
  ];
  return (
    <div className="relative w-fit">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white font-medium pl-3 pr-10 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="dark:bg-gray-900 dark:text-white bg-white text-black"
          >
            {opt.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400">
        {options.find((opt) => opt.value === theme)?.icon}
      </div>
    </div>
  );
};

export default ThemeSwitch;
