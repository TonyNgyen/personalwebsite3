"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import VerticalChipCarousel from "./VerticalChipCarousel";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

export default function Sidebar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const chips = ["Coding", "Making", "Learning", "Lifting", "Exploring"];

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-6 z-50 p-2 bg-gray-800 dark:bg-gray-950 text-white rounded"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-gray-800 dark:bg-gray-950 text-white 
          flex flex-col p-10 py-24 space-y-8 z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div className="">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <h1 className="text-2xl font-bold">Tony</h1>
            </Link>
            <VerticalChipCarousel chips={chips} interval={3000} />
          </div>

          <p className="text-gray-300 dark:text-gray-200">I build things</p>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            About
          </Link>
          <Link
            href="/#education"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            Education
          </Link>
          <Link
            href="/#experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            Projects
          </Link>
          <Link
            href="/#notes"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            Notes
          </Link>
          <Link
            href="/#blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
          >
            Blog
          </Link>

          {/* Show admin dashboard and logout if logged in */}
          {isLoggedIn && (
            <>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
              >
                Admin Dashboard
              </Link>
              <LogoutButton />
            </>
          )}
        </nav>
        <div className="flex-1" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center mb-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-md font-semibold tracking-wide transition-colors duration-100 ease-in"
            >
              Resume
            </Link>
            <div className="h-5 border-l border-gray-500 mx-2" />
            <Link
              href="https://github.com/TonyNgyen"
              target="_blank"
              className="hover:text-gray-300 text-2xl font-semibold tracking-wide transition-colors duration-100 ease-in"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tony-nguyen-813923212/"
              target="_blank"
              className="hover:text-gray-300 text-2xl font-semibold tracking-wide transition-colors duration-100 ease-in"
            >
              <FaLinkedin />
            </Link>
          </div>
          <ThemeSwitch />
        </div>
      </aside>
    </>
  );
}
