import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <div className="mt-[10rem] max-w-7xl space-y-8 mx-auto">
      <h1
        className="animate-fade-up bg-gradient-to-br from-[#22c1c3] via-zinc-100 to-[#fdbb2d]  text-transparent bg-clip-text text-center text-5xl/[3rem] font-bold opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
        style={{
          animationDelay: "0.20s",
          animationFillMode: "forwards",
        }}
      >
        Hi there! I&apos;m Jack
        <Balancer>
          a{" "}
          <span className="underline decoration-red-700 decoration-wavy decoration-from-font underline-offset-4 pb-8">
            Software Developer. <br />
          </span>
        </Balancer>
        <br />I build accessible, inclusive products and digital experiences for
        the web.
      </h1>

      <ul className="flex items-center justify-center gap-x-4 mt-12">
        <Link href={"https://github.com/Jack-WebDev"} target="_blank">
          <FaGithub className="text-[#94A3B8] text-2xl lg:text-4xl hover:text-white" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/katlegomabaso/"}
          target="_blank"
        >
          <FaLinkedin className="text-[#94A3B8] text-2xl lg:text-4xl hover:text-white" />
        </Link>
      </ul>
    </div>
  );
}
