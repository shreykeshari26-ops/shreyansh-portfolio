"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { AI_Tools, Languages, Frameworks } from "@/constants";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("AI");

  const tabs = [
    { id: "AI", label: "AI Tools", data: AI_Tools },
    { id: "Languages", label: "Languages", data: Languages },
    { id: "Frameworks", label: "Frameworks & Tools", data: Frameworks },
  ];

  const activeData = tabs.find((t) => t.id === activeTab)?.data || AI_Tools;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20 min-h-screen"
    >
      <SkillText />

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-8 z-20 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === tab.id
                ? "bg-[#7042f8]/20 border border-[#7042f8] text-white shadow-[0_0_15px_rgba(112,66,248,0.5)]"
                : "bg-[#0f0f1a] border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-10 z-20 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
          >
            {activeData.map((skill, i) => (
              <motion.div
                key={skill.skill_name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 md:px-8 md:py-4 rounded-xl bg-[#0d0d1a]/50 backdrop-blur-xl border border-[#7042f830] shadow-[0_0_15px_rgba(112,66,248,0.1)] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:border-[#ff00ff]/50 transition-colors duration-300 flex items-center justify-center w-full max-w-[140px] md:max-w-none text-center"
              >
                <span className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 drop-shadow-[0_0_5px_rgba(112,66,248,0.5)] line-clamp-1">
                  {skill.skill_name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
