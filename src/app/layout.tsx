import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Tony Nguyen",
  description: "Tony's Personal Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin-auth")?.value === "true";

  return (
    <>
      <html lang="en">
        <head />
        <body className="flex min-h-screen overflow-x-hidden">
          <ThemeProvider>
            <Sidebar isLoggedIn={isLoggedIn} />
            <main
              className="md:ml-72 flex-1 py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-96
          bg-[radial-gradient(#E7E7E7_1px,transparent_2px)]
          [background-size:40px_40px] bg-[#FAF8F5] dark:bg-[#1e212bcc] dark:bg-[radial-gradient(#292929_1px,transparent_2px)]
          w-full max-w-full"
            >
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
