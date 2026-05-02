/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
"use client";

import { motion } from "framer-motion";

import { SparklesIcon } from "@heroicons/react/24/solid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center px-4 mt-40 w-full z-[20] text-center"
    >
      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        SHREYANSH KESHARI
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-2xl text-gray-200 font-medium tracking-wide mb-12 flex flex-col md:flex-row items-center gap-2 md:gap-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span>Aspiring Full Stack Developer</span>
        <span className="hidden md:inline text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]">•</span>
        <span>AI Enthusiast</span>
      </motion.p>

      {/* Glassmorphism Stats Panel */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-[#0d0d1a]/40 backdrop-blur-xl border border-[#00d4ff]/30 shadow-[0_0_30px_rgba(0,212,255,0.1)] relative overflow-hidden"
      >
        {/* Neon Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8]/10 via-[#00d4ff]/10 to-[#ff00ff]/10 blur-xl -z-10" />

        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center px-8 py-4 border-b md:border-b-0 md:border-r border-gray-700/50">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            5+
          </span>
          <span className="text-sm text-gray-400 tracking-wider uppercase font-semibold">Projects</span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center px-8 py-4 border-b md:border-b-0 md:border-r border-gray-700/50">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            5+
          </span>
          <span className="text-sm text-gray-400 tracking-wider uppercase font-semibold">Certifications</span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center px-8 py-4">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            AI
          </span>
          <span className="text-sm text-gray-400 tracking-wider uppercase font-semibold">Powered Solutions</span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex gap-6 mt-12">
        <a
          href="#projects"
          className="px-8 py-3 rounded-xl bg-[#7042f8] text-white font-semibold shadow-[0_0_20px_rgba(112,66,248,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="/projects/Shreyansh Keshari Resume 2.5.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl border border-[#00d4ff] text-[#00d4ff] font-semibold hover:bg-[#00d4ff]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
};
