"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-3 border border-[#7042f88b] opacity-[0.9] flex items-center w-full max-w-[95vw] md:w-max mx-auto"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
        <h1 className="Welcome-text text-[10px] sm:text-xs md:text-sm font-medium tracking-wide text-gray-300 text-center flex-1 whitespace-normal">
          Crafting intelligent web solutions at the intersection of AI and modern design.
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl sm:text-5xl text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Building real-world tools with AI & modern tech.
      </motion.div>


    </div>
  );
};
