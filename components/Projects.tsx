"use client"

import ProjectCards from "./ProjectCards";
import audiophile from "@/assets/audiophile.png";
import photosnap from "@/assets/photosnap.png";
import mziyonke from "@/assets/mziyonke.png";

export default function Projects() {
  const projects = [
    {
      img: photosnap,
      title: "Photosnap - Photo Gallery",
      description: "Photosnap is a photo gallery for creatives. With a sleek and modern design, it's the perfect platform for showcasing photography skills.",
      tools: ["Astro.js", "TailwindCSS", "React.js"],
      link: "https://photosnap-silk-six.vercel.app/",
      gitHubLink: "https://github.com/Jack-WebDev/photosnap"
    },
    {
      img: mziyonke,
      title: "Mziyonke Driving School Website",
      description: "I was tasked to revamp the Mziyonke website to give it a modern feel.",
      tools: ["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"],
      link: "https://mziyonke-driving-school.vercel.app/",
      gitHubLink: "https://github.com/Jack-WebDev/mziyonke_driving_school"
    },
    {
      img: audiophile,
      title: "Audiophile E-Commerce",
      description: "Step into the ultimate shopping experience for audio enthusiasts! This cutting-edge e-commerce platform offers a curated selection of premium speakers, earphones, and headphones. Enjoy seamless navigation, dynamic cart updates, and a lightning-fast checkout process with real-time form validation.",
      link: "https://audiophile-eta-ten.vercel.app/",
      tools: ["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"],
      gitHubLink: "https://github.com/Jack-WebDev/audiophile"
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 space-y-4">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-100  bg-clip-text text-transparent">
            My Projects
          </h2>
     
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCards
                img={project.img}
                title={project.title}
                description={project.description}
                tools={project.tools}
                link={project.link}
                gitHubLink={project.gitHubLink}
              />
            </div>
          ))}
          
          {[...Array(Math.max(0, 8 - projects.length))].map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="opacity-0 animate-fade-in group"
              style={{
                animationDelay: `${(projects.length + index) * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-dashed border-gray-700 hover:border-blue-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm min-h-[500px] flex flex-col items-center justify-center p-8 relative">
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    <svg className="w-10 h-10 text-gray-600  transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-500 ">
                      Coming Soon
                    </h3>
         
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}