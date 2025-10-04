"use client";

import Image, { StaticImageData } from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  img: string | StaticImageData;
  title: string;
  description: string;
  link?: string;
  gitHubLink: string;
  tools: string[];
  inDev?: boolean;
};

export default function ProjectCards({
  img,
  title,
  description,
  link,
  gitHubLink,
  tools,
  inDev,
}: ProjectCardProps) {
  return (
    <div className="group w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30">
      <div className="relative overflow-hidden">
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {inDev && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              In Development
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            {inDev ? (
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-1 justify-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <FaGithub className="text-gray-400 hover:text-white text-2xl lg:text-3xl transition-colors duration-300" />
                View Github
              </a>
            ) : (
              <>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
                <a
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}