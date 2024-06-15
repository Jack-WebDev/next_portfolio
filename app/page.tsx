import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mb-[10rem]">
      <p className="flex items-center justify-center bg-white/20 py-2 w-full text-white">Currently in Dev <FaTools className="ml-2"/></p>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      {/* <Projects/> */}
    </div>
  )
}
