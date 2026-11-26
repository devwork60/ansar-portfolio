import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features, Tools, About } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Reviews } from "@/components/proof";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Tools />
      <About />
      <Projects />
      <Services />
      <Process />
      <Skills />
      <Experience />
      <Reviews />
      <Contact />
    </main>
  );
}
