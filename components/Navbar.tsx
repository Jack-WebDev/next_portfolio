import { Download } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            href="#hero"
            className="text-white text-xl sm:text-2xl font-bold hover:text-blue-400 transition-colors duration-300"
          >
            Jack
          </Link>

          <a
            className="group flex items-center gap-2 bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            href="/cv.pdf"
            download="cv.pdf"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            <span className="hidden sm:inline">RESUME</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
