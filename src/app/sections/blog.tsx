import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { FiChevronRight, FiInfo } from "react-icons/fi";

function Blog() {
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <div className="flex items-center pl-4">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <Tooltip text="In-depth posts on projects, app updates, and topics I care about.">
          <button className="ml-2 flex items-center text-2xl text-emerald-500">
            <FiInfo />
          </button>
        </Tooltip>
      </div>

      <div className="space-y-4">
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex  duration-200 flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100/50 border-1 border-transparent hover:border hover:border-gray-100 rounded"
        >
          <div>
            <h2 className="text-xl font-semibold">
              Personal Website{" "}
              <span className="text-emerald-500 font-bold">·</span>{" "}
              <span className="text-gray-500">March 03, 2025</span>
            </h2>
            <h3>My personal website! Built with simplicity in mind.</h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex  duration-200 flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100/50 border-1 border-transparent hover:border hover:border-gray-100 rounded"
        >
          <div>
            <h2 className="text-xl font-semibold">
              Personal Website{" "}
              <span className="text-emerald-500 font-bold">·</span>{" "}
              <span className="text-gray-500">March 03, 2025</span>
            </h2>
            <h3>My personal website! Built with simplicity in mind.</h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex  duration-200 flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100/50 border-1 border-transparent hover:border hover:border-gray-100 rounded"
        >
          <div>
            <h2 className="text-xl font-semibold">
              Personal Website{" "}
              <span className="text-emerald-500 font-bold">·</span>{" "}
              <span className="text-gray-500">March 03, 2025</span>
            </h2>
            <h3>My personal website! Built with simplicity in mind.</h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <a href="" className="group flex items-center gap-2">
        <h2 className="pl-4 text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 group-hover:underline-offset-4 transition-all duration-200">
          View All Blogs
        </h2>
        <FiChevronRight className="text-2xl transition-transform duration-200 group-hover:translate-x-2 group-hover:text-emerald-500" />
      </a>
    </div>
  );
}

export default Blog;
