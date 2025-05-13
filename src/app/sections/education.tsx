import React from "react";

function Education() {
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">Education</h1>
      <div className="space-y-4">
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100 rounded"
        >
          <h2 className="text-xl min-w-[10rem] text-gray-500">
            2025 -{" "}
            <span className="text-emerald-500 font-semibold">Present</span>
          </h2>
          <div>
            <h2 className="text-xl font-semibold">UC San Diego</h2>
            <h3>M.S. in Computer Science</h3>
          </div>
        </a>
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100 rounded"
        >
          <h2 className="text-xl min-w-[10rem] text-gray-500">2021 - 2025</h2>
          <div>
            <h2 className="text-xl font-semibold">UC San Diego</h2>
            <h3>B.S. in Computer Science</h3>
            <h4>GPA: 3.95/4.0</h4>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Education;
