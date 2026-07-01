import React from "react";

function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl sm:text-4xl font-bold border-b-[6px] border-accent inline-block pb-2">
        Hey, I&apos;m Tony!
      </h1>
      <h2 className="text-lg sm:text-xl tracking-wide leading-7 sm:leading-9">
        I&apos;m a Full-Stack Developer focused on building clean, scalable web
        & mobile apps. I specialize in React, React Native, Next.js, Supabase,
        and modern UI design with Tailwind in order to create seamless
        experiences across different platforms.
      </h2>
      <h2 className="text-lg sm:text-xl tracking-wide leading-7 sm:leading-9">
        I just graduated from UCSD with a Masters in Computer Science, and I&apos;m building apps that make life a little easier. Right now, my
        focus is on helping people live healthier lives through meal tracking
        and fitness with{" "}
        <a
          href="https://meapprep.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-accent transition-colors"
        >
          meap
        </a>
        .
      </h2>
      <h2 className="text-lg sm:text-xl tracking-wide leading-7 sm:leading-9">
        When I&apos;m not coding, I enjoy weight-lifting, reading and spending
        time with my friends and family.
      </h2>
    </div>
  );
}

export default About;
