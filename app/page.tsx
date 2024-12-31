import About from "@/components/About";
import CTA from "@/components/CTA";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Roadmap from "@/components/Roadmap";


export default function Home() {
  return (
    <div className="mb-[10rem]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Roadmap/>
      <CTA/>
    </div>
  );
}
