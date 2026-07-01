import React from "react";

function Experience() {
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">Experience</h1>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4">
          <h2 className="text-xl min-w-[10rem] text-gray-500 dark:text-gray-200">
            2023 - 2026
          </h2>
          <div>
            <h2 className="text-xl font-semibold">
              UCSD Computer Science Department
            </h2>
            <h2 className="text-lg font-semibold mb-2 text-gray-500 dark:text-gray-200">
              Instructional Assistant
            </h2>
            <h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="pl-1">
                  Design and lead weekly labs for Software Engineering course
                  (200 students), creating labs and tutorials in Java
                </li>
                <li className="pl-1">
                  Develop materials including practice problems and debugging
                  guides used by 700+ students across multiple courses
                </li>
                <li className="pl-1">
                  Conduct office hours for Software Engineering, Algorithms,
                  Python Programming, and Theory of Computation
                </li>
                <li className="pl-1">
                  Mentor student teams on software design patterns, OOP
                  principles, and full-stack project development
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4">
          <h2 className="text-xl min-w-[10rem] text-gray-500 dark:text-gray-200">
            2024 - 2025
          </h2>
          <div>
            <h2 className="text-xl font-semibold">Choir Power</h2>
            <h2 className="text-lg font-semibold mb-2 text-gray-500 dark:text-gray-200">
              Software Engineer Intern
            </h2>
            <h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="pl-1">
                  Built a comprehensive React dashboard for B2B clients to
                  visualize and analyze historical electricity usage patterns,
                  detailed cost analysis metrics, and ML-driven predictive
                  consumption forecasts
                </li>
                <li className="pl-1">
                  Integrated AWS cloud services (Lambda, API Gateway, S3) to
                  deliver real-time smart meter data updates to the dashboard
                  interface, improving API response time by 30%
                </li>
                <li className="pl-1">
                  Optimized frontend performance through code refactoring, lazy
                  loading, and component optimization, reducing dashboard load
                  time by 40% and enhancing user experience for 5 enterprise
                  clients
                </li>
                <li className="pl-1">
                  Participated in Agile development cycles including daily
                  standups, bi-weekly sprint planning sessions, and
                  collaborative code reviews with cross-functional engineering
                  team
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
