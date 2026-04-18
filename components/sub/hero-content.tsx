"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.8,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
  };

  const textBlocks = [
    { text: "I am a Software Engineer driven by the intersection of", highlight: false },
    { text: "Generative AI", highlight: true },
    { text: "and", highlight: false },
    { text: "scalable architecture.", highlight: true },
    { text: "From building intelligent recruitment ecosystems like", highlight: false },
    { text: "PlaceMind AI", highlight: true },
    { text: "to designing responsive, user-centric interfaces, I focus on turning complex technical challenges into seamless digital experiences. With a foundation in Java and Python, I build tools that don't just solve problems—they predict them.", highlight: false },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        {/* Animated AI Architect Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-lg text-gray-300 my-5 max-w-[650px] leading-relaxed p-6 rounded-2xl border border-[#7042f830] bg-[#0d0d1a]/50 backdrop-blur-md shadow-[0_0_30px_#7042f820]"
        >
          {/* Neon Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl -z-10 rounded-2xl pointer-events-none" />
          
          {textBlocks.map((block, index) => (
            <span key={index}>
              {block.text.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={wordVariants}
                  className={`inline-block mr-[0.25em] ${
                    block.highlight
                      ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_8px_rgba(112,66,248,0.5)]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
