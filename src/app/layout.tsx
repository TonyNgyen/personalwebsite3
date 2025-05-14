import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tony Nguyen",
  description: "Tony's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <aside className="fixed top-0 left-0 h-screen w-72 bg-gray-800 text-white flex flex-col p-10 py-24 space-y-4">
          <h1 className="text-2xl font-bold">Tony</h1>
          <p className="text-gray-300">I build things</p>
          <nav className="flex flex-col space-y-2">
            <a
              href="#about"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              About
            </a>
            <a
              href="#education"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Education
            </a>
            <a
              href="#experience"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Projects
            </a>
            <a
              href="#notes"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Notes
            </a>
            <a
              href="#blog"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Blog
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main
          className="ml-72 flex-1 py-24 
  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-96 
  bg-[radial-gradient(#EFEFEF_1px,transparent_2px)] 
  [background-size:40px_40px]"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
