import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-20 z-[20] relative"
    >
      <div className="Welcome-box py-[8px] px-4 border border-[#7042f88b] opacity-[0.9] mb-8 w-full max-w-[90vw] md:w-max flex items-center justify-center">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
        <h2 className="Welcome-text text-[13px] uppercase font-bold tracking-wider text-center">
          About Me
        </h2>
      </div>

      <div className="max-w-[800px] w-full p-6 md:p-10 rounded-2xl bg-[#0d0d1a]/60 backdrop-blur-xl border border-[#7042f830] shadow-[0_0_40px_rgba(112,66,248,0.1)] relative overflow-hidden mx-auto">
        {/* Neon Glow Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00d4ff]/10 to-transparent blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7042f8]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

        <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">
          Where Intelligence Meets Experience
        </h3>

        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            I&apos;m a <span className="text-white font-medium">B.Tech IT student at G.L. Bajaj</span>, exploring the evolving space between AI, software engineering, and digital experience.
          </p>

          <p>
            I don’t just build applications—I build systems that think, adapt, and scale. From developing{" "}
            <span className="text-[#00d4ff] font-semibold drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
              AI-driven platforms
            </span>{" "}
            like{" "}
            <span className="text-[#00d4ff] font-semibold drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
              PlaceMind AI
            </span>{" "}
            to experimenting with{" "}
            <span className="text-[#00d4ff] font-semibold drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
              Generative AI
            </span>{" "}
            in real-world use cases, my focus is on creating impactful, future-ready solutions.
          </p>

          <p>
            At the same time, I believe great software isn’t just powerful—it’s intuitive. That’s why I combine backend logic with clean, user-centric design to craft seamless experiences.
          </p>

          <p>
            Beyond code, I’m constantly learning—diving deeper into Data Structures & Algorithms, cloud technologies, and the next wave of{" "}
            <span className="text-[#00d4ff] font-semibold drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
              Intelligent Systems
            </span>.
          </p>

          <p className="pt-2 text-white font-medium italic">
            I’m building not just skills, but a mindset to create, innovate, and evolve with technology.
          </p>
        </div>
      </div>
    </section>
  );
};
