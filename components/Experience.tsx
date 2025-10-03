"use client";

import Cards from "./ExperienceCards";

export default function Experience() {
  const experiences = [
    {
      duration: "2024-Present",
      company: "Software Developer - New Dawn Technologies",
      description:
        "I am responsible for designing, developing, and testing software applications using React.js with Next.js for the front-end and Node.js with Express for the back-end. I ensure the implementation of clean, maintainable, and efficient code, adhering to industry best practices. My work involves close collaboration with cross-functional teams, including designers and product managers, to understand and implement project requirements effectively.",
      tools: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "TypeScript",
        "Node.js",
        "Figma",
      ],
    },
    {
      duration: "2022-Present",
      company: "Software Developer/UI Designer - Freelancer",
      description:
        "As a software developer freelancer, I'm involved in collaborating with clients to understand their requirements, designing and implementing software solutions, conducting thorough testing, and delivering high-quality, customized projects. I enjoy managing project timelines and communication while leveraging my expertise to provide efficient and tailored software solutions.",
      tools: ["React", "Express.js", "Bootstrap V5", "Node.js"],
    },
    {
      duration: "2019-2020",
      company: "WhiteFox Ltd. - Supervisor",
      description:
        "As a supervisor of an online delivery service, my duties included overseeing daily operations, managing delivery staff, and ensuring timely and accurate order fulfilment. I coordinated logistics, tracked deliveries, and addressed customer inquiries. I had to maintain efficiency, ensuring customer satisfaction, and optimizing the delivery process.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-[90%] sm:w-[90%] lg:w-[70%] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white  to-blue-200 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500  to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-slide-in-left"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="hidden lg:block absolute left-6 top-10 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 shadow-lg shadow-blue-500/50 z-10">
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                </div>

                <div className="lg:ml-20">
                  <Cards
                    duration={exp.duration}
                    company={exp.company}
                    description={exp.description}
                    tools={exp.tools}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
