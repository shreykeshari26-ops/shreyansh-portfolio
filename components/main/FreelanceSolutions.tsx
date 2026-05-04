"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const freelanceProjects = [
  {
    title: "Artisan Coffee Works",
    description:
      "Your Daily Mood Booster. Premium E-Commerce for artisan brands featuring QR checkout.",
    image: "/projects/coffee-1.png",
    link: "https://artisan-coffee-blond.vercel.app/",
    tags: ["E-Commerce", "QR Checkout", "Brand Storytelling"],
  },
  {
    title: "Dream Home Reality",
    description:
      "Specializing in Luxury Flats & Authority Plots in Noida Extension. A premium Real Estate discovery engine.",
    image: "/projects/dream-home-1.png",
    link: "https://github.com/shreykeshari26-ops/web-studio/tree/main/dream-home-reality",
    tags: ["Real Estate", "Multi-Page Routing", "Premium Search"],
  },
];

type Project = (typeof freelanceProjects)[0];

const TiltCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex flex-col w-full h-full rounded-2xl bg-[#0d0d1a]/80 backdrop-blur-xl border border-white/5 overflow-hidden group hover:border-transparent transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
    >
      {/* Corporate Glow border */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#7042f8] via-[#00d4ff] to-[#7042f8] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
      <div className="absolute inset-0 bg-[#0d0d1a] rounded-2xl -z-10" />

      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] to-transparent opacity-80" />
      </div>

      {/* Card Content */}
      <div
        className="relative p-6 flex flex-col flex-grow"
        style={{ transform: "translateZ(40px)" }}
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3 drop-shadow-[0_0_8px_rgba(112,66,248,0.4)]">
          {project.title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full shadow-[0_0_8px_rgba(0,212,255,0.1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-5">
          {project.description}
        </p>

        {/* Live Link CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          onClick={(e) => e.stopPropagation()}
          className="group/btn self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#00d4ff]/50 text-[#00d4ff] text-sm font-semibold bg-[#00d4ff]/5 shadow-[0_0_12px_rgba(0,212,255,0.15)] hover:bg-[#00d4ff]/15 hover:border-[#00d4ff] hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          Live Link
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export const FreelanceSolutions = () => {
  return (
    <section
      id="freelance"
      className="flex flex-col items-center justify-center py-20 relative z-[20] w-full"
      style={{ perspective: "1500px" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Freelance Solutions
      </h1>

      {/* Glow Tab */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14 z-20">
        <div className="px-6 py-3 rounded-full font-semibold bg-[#7042f8]/20 border border-[#7042f8] text-white shadow-[0_0_15px_rgba(112,66,248,0.5)] cursor-default">
          Commercial Projects
        </div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-10">
        {freelanceProjects.map((project) => (
          <TiltCard key={project.title} project={project} />
        ))}
      </div>

      {/* Pulsing Hire Me CTA */}
      <div className="mt-20 flex items-center justify-center">
        <Link
          href="#contact"
          className="relative group px-10 py-4 rounded-full bg-gradient-to-r from-[#7042f8] to-[#00d4ff] text-white font-bold text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
        >
          <div className="absolute inset-0 rounded-full animate-pulse opacity-40 bg-white" />
          <span className="relative z-10 flex items-center gap-2">
            Hire Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};
