// app/components/Sidebar.tsx
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function Sidebar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin-auth")?.value === "true";

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-gray-800 text-white flex flex-col p-10 py-24 space-y-4">
      <h1 className="text-2xl font-bold">Tony</h1>
      <p className="text-gray-300">I build things</p>
      <nav className="flex flex-col space-y-2">
        <Link
          href="/#about"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          About
        </Link>
        <Link
          href="/#education"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          Education
        </Link>
        <Link
          href="/#experience"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          Experience
        </Link>
        <Link
          href="/#projects"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          Projects
        </Link>
        <Link
          href="/#notes"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          Notes
        </Link>
        <Link
          href="/#blog"
          className="hover:text-gray-300 text-md font-semibold tracking-wide"
        >
          Blog
        </Link>

        {/* Show admin dashboard and logout if logged in */}
        {isLoggedIn && (
          <>
            <Link
              href="/admin"
              className="hover:text-gray-300 text-md font-semibold tracking-wide"
            >
              Admin Dashboard
            </Link>
            <LogoutButton />
          </>
        )}
      </nav>
    </aside>
  );
}
