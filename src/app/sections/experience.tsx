import React from "react";

function Experience() {
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">Experience</h1>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4">
          <h2 className="text-xl min-w-[10rem] text-gray-500">
            2023 -{" "}
            <span className="text-emerald-500 font-semibold">Present</span>
          </h2>
          <div>
            <h2 className="text-xl font-semibold">
              UCSD Computer Science Department
            </h2>
            <h2 className="text-lg font-semibold mb-2 text-gray-500">
              Instructional Assistant
            </h2>
            <h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="pl-1">
                  Instructional Assistant for Software Engineering, Design &
                  Analysis of Algorithms, and Theory of Computation courses.
                </li>
                <li className="pl-1">
                  Collaborated with the instructional team to elevate the
                  quality of education delivered to students within the
                  university's computer science department.
                </li>
                <li className="pl-1">
                  Held regular office hours, providing a supportive environment
                  for students
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4">
          <h2 className="text-xl min-w-[10rem] text-gray-500">2024 - 2025</h2>
          <div>
            <h2 className="text-xl font-semibold">Choir Power</h2>
            <h2 className="text-lg font-semibold mb-2 text-gray-500">
              Software Engineer Intern
            </h2>
            <h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="pl-1">
                  Developed a dashboard containing graphs using React, HTML, and
                  CSS.
                </li>
                <li className="pl-1">
                  Identified and removed unnecessary features, leading to a
                  user-friendly UI/UX.
                </li>
                <li className="pl-1">
                  Integrated an existing AWS API with dashboard to provide
                  real-time updates to dashboard for users. Collaborated with
                  backend engineer to optimize AWS API calls and return only
                  necessary data.
                </li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
