"use client";

export default function Roadmap() {
  const projects = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "FinTrack",
      subtitle: "Your Personal Finance Companion",
      description:
        "Designed to help you manage your money effortlessly and achieve your financial goals.",
      gradient: "from-blue-500 to-blue-600",
      accentColor: "blue",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "StreamIt",
      subtitle: "Your Ultimate Entertainment Hub",
      description:
        "Experience endless entertainment with StreamIt, the ultimate Netflix-inspired streaming platform. Dive into a vast library of movies, TV shows, and original content tailored to your preferences.",
      gradient: "from-red-500 to-pink-600",
      accentColor: "red",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      title: "Chirp",
      subtitle: "Connect, Share, Engage",
      description:
        "Welcome to Chirp, the social media platform where your voice takes center stage! Inspired by Twitter, Chirp allows you to connect with the world and share your thoughts in real time.",
      gradient: "from-cyan-500 to-blue-600",
      accentColor: "cyan",
    },
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white  to-blue-200 bg-clip-text text-transparent">
            Future Projects
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            These are some of the exciting projects I have planned for the
            future. Each project will leverage the latest technologies,
            including{" "}
            <span className="text-white font-semibold">Next.js 15</span>,{" "}
            <span className="text-white font-semibold">React 19</span>,{" "}
            <span className="text-white font-semibold">Hono.js</span>,{" "}
            <span className="text-white font-semibold">Drizzle</span>,{" "}
            <span className="text-white font-semibold">Fastify</span> and{" "}
            <span className="text-white font-semibold">TRPC</span>.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative opacity-0 animate-fade-in ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="hidden md:flex absolute left-1/2 top-8 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-900 shadow-lg  transform -translate-x-1/2 z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 md:max-w-lg">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`}
                  />

                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}
                      >
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm font-medium text-${project.accentColor}-400`}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-[15px] ml-16 sm:ml-18">
                      {project.description}
                    </p>

                    <div className="mt-5 ml-16 sm:ml-18">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 text-xs font-semibold rounded-lg border border-yellow-500/20">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        In Planning Phase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
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
