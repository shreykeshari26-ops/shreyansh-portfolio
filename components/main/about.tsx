import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-20 z-[20] relative"
    >
      <div className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-8">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px] uppercase font-bold tracking-wider">
          About Me
        </h2>
      </div>

      <div className="max-w-[800px] w-full p-8 rounded-2xl bg-[#0d0d1a]/60 backdrop-blur-xl border border-[#7042f830] shadow-[0_0_40px_rgba(112,66,248,0.1)] relative overflow-hidden">
        {/* Neon Glow Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00d4ff]/10 to-transparent blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7042f8]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">
          AI & Full-Stack Enthusiast
        </h3>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I am a passionate software engineer driven by the intersection of <span className="text-[#00d4ff] font-semibold">Generative AI</span> and <span className="text-[#ff00ff] font-semibold">scalable architecture</span>. From building intelligent ecosystems like <span className="text-white font-semibold">PlaceMind AI</span> to designing responsive, user-centric interfaces, I focus on turning complex technical challenges into seamless digital experiences.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          With a strong foundation in <span className="text-[#b49bff] font-semibold">Java</span> and <span className="text-[#b49bff] font-semibold">Python</span>, and a deep interest in multimodal AI development, I don&apos;t just build tools that solve problems—I strive to build solutions that predict them. My goal is to continually push the boundaries of what&apos;s possible on the web, blending high-end design with robust, intelligent backends.
        </p>
      </div>
    </section>
  );
};
