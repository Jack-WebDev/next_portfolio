"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900" />

      <div className="relative max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-center">
          <h1
            className="animate-fade-up bg-gradient-to-br from-[#22c1c3] via-zinc-100 to-[#fdbb2d] text-transparent bg-clip-text text-4xl/tight sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-bold opacity-0 drop-shadow-sm"
            style={{
              animationDelay: "0.20s",
              animationFillMode: "forwards",
            }}
          >
            <Balancer>
              Hi there! I&apos;m Jack, a{" "}
              <span className="relative inline-block">
                <span className="underline decoration-red-500 decoration-wavy decoration-2 underline-offset-8 text-white/60">
                  Software Developer
                </span>
              </span>
            </Balancer>
          </h1>

          <p
            className="animate-fade-up text-white text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-0"
            style={{
              animationDelay: "0.30s",
              animationFillMode: "forwards",
            }}
          >
            I build accessible, inclusive products and digital experiences for
            the web
          </p>

          <div
            className="animate-fade-up opacity-0 flex items-center justify-center gap-4 pt-8"
            style={{
              animationDelay: "0.40s",
              animationFillMode: "forwards",
            }}
          >
            <Link href="https://github.com/Jack-WebDev" target="_blank">
              <div className="group p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <FaGithub className="text-gray-400 group-hover:text-white text-2xl lg:text-3xl transition-colors duration-300" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/katlegomabaso/"
              target="_blank"
            >
              <div className="group p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <FaLinkedin className="text-gray-400 group-hover:text-blue-400 text-2xl lg:text-3xl transition-colors duration-300" />
              </div>
            </Link>
          </div>

          <div
            className="animate-fade-up opacity-0 pt-16"
            style={{
              animationDelay: "0.50s",
              animationFillMode: "forwards",
            }}
          >
            <div className="flex flex-col items-center gap-2 text-white animate-bounce">
              <span className="text-sm uppercase tracking-wider">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
