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

  const BASE_CONTAINER_CSS = `inset-0 -z-10 bg-[size:6rem_4rem] md:ml-72 flex-1 py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-96 w-full max-w-full `;
  const LIGHT_BACKGROUND_CSS = `bg-[#FAF8F5] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] `;
  const DARK_BACKGROUND_CSS = `dark:bg-[#1e212bcc] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] `;

  return (
    <>
      <html lang="en">
        <head />
        <body className="flex min-h-screen overflow-x-hidden">
          <ThemeProvider>
            <Sidebar isLoggedIn={isLoggedIn} />
            <main
              className={
                BASE_CONTAINER_CSS + LIGHT_BACKGROUND_CSS + DARK_BACKGROUND_CSS
              }
            >
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
