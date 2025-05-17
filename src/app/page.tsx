import About from "./sections/about";
import Blog from "./sections/blog";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Notes from "./sections/note";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <div className="space-y-8">
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="education" className="scroll-mt-10">
        <Education />
      </section>
      <section id="experience" className="scroll-mt-10">
        <Experience />
      </section>
      <section id="projects" className="scroll-mt-10">
        <Projects />
      </section>
      <section id="notes" className="scroll-mt-10">
        <Notes />
      </section>
      <section id="blog" className="scroll-mt-10">
        <Blog />
      </section>
    </div>
  );
}
