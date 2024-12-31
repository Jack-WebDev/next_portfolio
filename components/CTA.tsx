import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <div className="w-full p-6 sm:p-8 md:p-12 shadow-xl">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Let&apos;s Create Something Amazing Together
        </h2>

        <p className="text-base sm:text-lg text-purple-50 leading-relaxed">
          Whether you&apos;re interested in collaboration, have an exciting
          opportunity, or just want to discuss potential projects, I&apos;m
          always open to new connections and possibilities.
        </p>

        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 sm:p-6 flex items-center justify-center space-x-3 hover:bg-opacity-20 transition-all duration-300">
            <Mail className="w-6 h-6 text-white" />
            <span className="text-white font-medium text-base sm:text-lg">
              jackwebdev31@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
