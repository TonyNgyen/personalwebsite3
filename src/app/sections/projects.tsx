import React from "react";

function Projects() {
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">Projects</h1>
      <div className="space-y-4">
        <a
          href="https://cse.ucsd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition flex duration-200 flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100/50 border-1 border-transparent hover:border hover:border-gray-100 rounded"
        >
          <div className="min-w-[10rem] flex justify-center">
            <img
              src="/images/projects/prep.png"
              className="h-[10rem] bg-gray-500 rounded transition sm:translate-y-1 border-2 border-gray-200"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-semibold">Prep</h2>
            <h3>
              A web and mobile app for managing your meals, ingredients, and
              goals. Add and organize ingredients with nutrition info, track
              your inventory, log meals and weight, and view nutrition history.
              Set personalized goals and monitor your progress over time.
            </h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-cyan-100 px-3 py-0">
                <p className="text-cyan-600 font-semibold">React</p>
              </div>
              <div className="rounded-full bg-cyan-100 px-3 py-0">
                <p className="text-cyan-600 font-semibold">React Native</p>
              </div>
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">Expo</p>
              </div>
              <div className="rounded-full bg-green-100 px-3 py-0">
                <p className="text-green-600 font-semibold">Supabase</p>
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
          <img
            src="/images/projects/toned.png"
            className="w-[10rem] bg-gray-500 rounded transition sm:translate-y-1 border-2 border-gray-200"
          />
          <div>
            <h2 className="text-xl font-semibold">Toned</h2>
            <h3>
              A web app for managing your workouts, exercises, and goals. Create
              workouts as well as exercises which help you improve your
              weight-lifting journey. The app automatically logs your workouts
              when you're done and saves your workout history and progression.
            </h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-cyan-100 px-3 py-0">
                <p className="text-cyan-600 font-semibold">React</p>
              </div>
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
              <div className="rounded-full bg-green-100 px-3 py-0">
                <p className="text-green-600 font-semibold">MongoDB</p>
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
          <img
            src="/images/projects/personal.png"
            className="w-[10rem] bg-gray-500 rounded transition sm:translate-y-1 border-2 border-gray-200"
          />
          <div>
            <h2 className="text-xl font-semibold">Personal Website</h2>
            <h3>My personal website! Built with simplicity in mind.</h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-cyan-100 px-3 py-0">
                <p className="text-cyan-600 font-semibold">React</p>
              </div>
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
              <div className="rounded-full bg-sky-100 px-3 py-0">
                <p className="text-sky-600 font-semibold">SQL</p>
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
          <img
            src="/images/projects/devlogs.png"
            className="w-[10rem] bg-gray-500 rounded transition sm:translate-y-1 border-2 border-gray-200"
          />
          <div>
            <h2 className="text-xl font-semibold">DevLogs</h2>
            <h3>
              A web app that helps manage projects and thoughts. Similar to a
              notes app and very customizable. Very barebones and simple.
            </h3>
            <div className="flex gap-[6px] mt-3">
              <div className="rounded-full bg-cyan-100 px-3 py-0">
                <p className="text-cyan-600 font-semibold">React</p>
              </div>
              <div className="rounded-full bg-gray-100 px-3 py-0">
                <p className="text-gray-600 font-semibold">NextJS</p>
              </div>
              <div className="rounded-full bg-amber-100 px-3 py-0">
                <p className="text-amber-600 font-semibold">Firebase</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
