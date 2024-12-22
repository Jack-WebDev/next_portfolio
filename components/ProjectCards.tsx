"use client"

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  img: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  tools: string[];
};

export default function ProjectCards({
  img,
  title,
  description,
  link,
  tools,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        // whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <div className="relative h-48 sm:h-64 w-full">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <motion.h3
            className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
            whileHover={{ scale: 1.01 }}
          >
            {title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl transition-colors duration-200"
          >
            View Project
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
