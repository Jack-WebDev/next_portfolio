export default function About() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
   
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-blue-100  bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-700/50 shadow-xl space-y-6">
          <p className="text-white/50 text-lg sm:text-xl leading-relaxed">
            My main focus these days is building accessible user interfaces for our
            clients at{" "}
            <span className="text-white font-semibold">New Dawn Technologies</span>. I
            most enjoy building software in the sweet spot where{" "}
            <span className="text-white font-semibold">design</span> and{" "}
            <span className="text-white font-semibold">engineering</span> meet —
            things that look good but are also built well under the hood.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            When I&apos;m not at the computer, I&apos;m usually reading, writing, or
            spending time with family and friends.
          </p>
        </div>
      </div>
    </section>
  );
}
