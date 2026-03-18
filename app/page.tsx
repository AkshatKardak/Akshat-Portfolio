import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleCanvas from "./components/ParticleCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
