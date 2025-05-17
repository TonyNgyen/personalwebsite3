import React from "react";

function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold border-b-[6px] border-emerald-500 inline-block pb-2">
        Hey, I&apos;m Tony!
      </h1>
      <h2 className="text-xl tracking-wide leading-9">
        I&apos;m a Full-Stack Developer focused on building clean, scalable web &
        mobile apps. I specialize in React, React Native, Next.js, Supabase, and
        modern UI design with Tailwind & NativeWind — creating seamless
        experiences across platforms with performance in mind.
      </h2>
      <h2 className="text-xl tracking-wide leading-9">
        Currently, I&apos;m a Master&apos;s student at UCSD studying computer science, and
        building apps that solve everyday problems and make life more
        convenient. Right now, my focus is on helping people live healthier
        lives through fitness and meal tracking with{" "}
        <span className="font-bold">Toned</span> and
        <span className="font-bold"> Prep</span>.
      </h2>
      <h2 className="text-xl tracking-wide leading-9">
        When I&apos;m not coding, I enjoy weight-lifting, learning woodworking and
        spending time with my friends and family.
      </h2>
    </div>
  );
}

export default About;
