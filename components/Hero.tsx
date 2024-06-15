import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="mt-[10rem] w-[90%] mx-auto">
      <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[4rem]">
        Hi!
        <span className="text-[hsl(200,100%,60%)]"> I&apos;m Jack</span>
        <br />
        <span className="sm:whitespace-nowrap text-[#BB33FF]">
          A Software Developer
        </span>
        <br />
        <br />I build accessible, inclusive products and digital experiences for
        the web.
      </h1>

      <ul className="flex items-center justify-center gap-x-4 mt-12">
        <Link href={"https://github.com/Jack-WebDev"} target="_blank"><FaGithub className="text-[#94A3B8] text-2xl lg:text-4xl hover:text-white" /></Link>
        <Link href={"https://www.linkedin.com/in/katlegomabaso/"} target="_blank"><FaLinkedin className="text-[#94A3B8] text-2xl lg:text-4xl hover:text-white" /></Link>
      </ul>
    </div>
  );
}
