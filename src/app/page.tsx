import About from "../components/About";
import Skills from "../components/skills/Skills";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import Contact from "../components/contact/Contact";
import Navbar from "../components/NavBar";
import ProjectsSection from "../components/projects/ProjectSection";


export default function App() {
  
  return (
    <main>
      <Navbar />
      <About />
      <ProjectsSection />
      <Skills />
      <TestimonialsSection />
      <Contact />
    </main>
  );
}
