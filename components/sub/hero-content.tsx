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
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        SHREYANSH KESHARI
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium tracking-wide mb-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span>Building Intelligent Digital Experiences</span>
      </motion.p>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg text-gray-400 max-w-[600px] mb-10 leading-relaxed"
      >
        AI-Focused Full Stack Developer crafting scalable web applications and
        integrating Generative AI to create smart, user-centric products.
        Turning complex ideas into seamless, real-world solutions.
      </motion.p>

      {/* Glassmorphism Stats Panel */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-2xl bg-[#0d0d1a]/40 backdrop-blur-xl border border-[#00d4ff]/30 shadow-[0_0_30px_rgba(0,212,255,0.1)] relative overflow-hidden"
      >
        {/* Neon Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8]/10 via-[#00d4ff]/10 to-[#ff00ff]/10 blur-xl -z-10" />

        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center px-4 md:px-8 py-2 md:py-4 border-b md:border-b-0 md:border-r border-gray-700/50">
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1 md:mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            5+
          </span>
          <span className="text-[10px] md:text-sm text-gray-400 tracking-wider uppercase font-semibold">
            Projects
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center px-4 md:px-8 py-2 md:py-4 border-b md:border-b-0 md:border-r border-gray-700/50">
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1 md:mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            5+
          </span>
          <span className="text-[10px] md:text-sm text-gray-400 tracking-wider uppercase font-semibold">
            Certifications
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center px-4 md:px-8 py-2 md:py-4">
          <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1 md:mb-2 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            AI
          </span>
          <span className="text-[10px] md:text-sm text-gray-400 tracking-wider uppercase font-semibold">
            Powered Solutions
          </span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto px-4">
        <motion.a
          variants={itemVariants}
          href="#projects"
          className="flex-1 sm:flex-none px-8 py-4 rounded-xl bg-[#7042f8] text-white font-semibold shadow-[0_0_20px_rgba(112,66,248,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300 text-center"
        >
          View Projects
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="/projects/Shreyansh Keshari Resume 2.5.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none px-8 py-4 rounded-xl border border-[#00d4ff] text-[#00d4ff] font-semibold hover:bg-[#00d4ff]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 text-center"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Mantra Line */}
      <motion.p
        variants={itemVariants}
        className="mt-8 text-xs md:text-sm text-gray-500 font-medium tracking-[0.2em] uppercase opacity-60"
      >
        Focused on AI • Full Stack • Scalable Systems
      </motion.p>
    </motion.div>
  );
};
