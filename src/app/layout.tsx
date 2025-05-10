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
        <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
          <h1 className="text-xl font-bold">Tony</h1>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-red-300 text-lg">
              Home
            </Link>
            <Link href="/projects" className="hover:text-red-300 text-lg">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-red-300 text-lg">
              Blog
            </Link>
            <Link href="/about" className="hover:text-red-300 text-lg">
              About
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
