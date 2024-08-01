import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="mb-[10rem]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Projects/> */}
    </div>
  );
}
