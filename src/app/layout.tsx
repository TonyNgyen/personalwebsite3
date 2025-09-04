import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Tony Nguyen",
  description: "Tony's Personal Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head />
        <body className="flex min-h-screen">
          <ThemeProvider>
            <Sidebar />
            <main
              className="ml-72 flex-1 py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-96
          bg-[radial-gradient(#E7E7E7_1px,transparent_2px)]
          [background-size:40px_40px] bg-[#fbfbfc] dark:bg-gray-900 dark:bg-[radial-gradient(#292929_1px,transparent_2px)]"
            >
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
