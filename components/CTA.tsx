import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10  rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-100  bg-clip-text text-transparent">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re interested in collaboration, have an exciting
              opportunity, or just want to discuss potential projects, I&apos;m
              always open to new connections and possibilities.
            </p>
          </div>

          <div className="group relative max-w-2xl mx-auto">
            <div className="absolute -inset-0.5 bg--blue-600  rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
            <a
              href="mailto:jackwebdev31@gmail.com"
              className="relative flex items-center justify-center gap-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl group-hover:text-blue-400 transition-colors duration-300">
                jackwebdev31@gmail.com
              </span>
            </a>
          </div>

     
        </div>
      </div>
    </section>
  );
}