import About from "./sections/about";
import Blog from "./sections/blog";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Notes from "./sections/notes";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Education />
      <Experience />
      <Projects />
      <Notes />
      <Blog />
    </div>
  );
}
