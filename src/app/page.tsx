import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
