// app/components/Sidebar.tsx
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import ChipCycler from "./ChipCycler";

export default async function Sidebar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin-auth")?.value === "true";
  // const tags = [
  //   "Test 2",
  //   "Test 3",
  //   "Test",
  //   "Test 4",
  //   "Test 5",
  // ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-gray-800 text-white flex flex-col p-10 py-24 space-y-4">
      <div className="">
        <Link href="/">
          <h1 className="text-2xl font-bold">Tony</h1>
        </Link>
        {/* <ChipCycler items={tags} interval={3000} /> */}
        <p className="text-gray-300">I build things</p>
      </div>
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
      <div className="flex-1" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-md font-semibold tracking-wide"
          >
            Resume
          </Link>
          <div className="h-5 border-l border-gray-500 mx-2" />
          <Link
            href="https://github.com/TonyNgyen"
            target="_blank"
            className="hover:text-gray-300 text-2xl font-semibold tracking-wide"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tony-nguyen-813923212/"
            target="_blank"
            className="hover:text-gray-300 text-2xl font-semibold tracking-wide"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </aside>
  );
}
