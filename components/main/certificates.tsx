"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Certificates } from "@/constants";

// Badge icons per cert title
const certIcon: Record<string, string> = {
  "AWS Academy Cloud Foundation": "☁️",
  "Palo Alto Network Security": "🛡️",
  "Palo Alto Cybersecurity": "🔐",
  "Google Gemini Certificate": "✨",
  "IAENG Membership": "🏛️",
  "IITD Campus Ambassador": "🎓",
};

export const CertificatesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-14"
      >
        <div className="py-[8px] px-[14px] border border-[#7042f88b] rounded-full bg-[#0d0d1a] mb-4 flex items-center gap-2">
          <span className="text-[#b49bff] text-sm">🏅</span>
          <span className="text-[#b49bff] text-[13px] font-medium tracking-wide">
            Verified Credentials
          </span>
        </div>
        <h2 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Certifications
        </h2>
        <p className="text-gray-400 mt-3 text-center max-w-[500px] text-sm">
          Industry-recognized credentials validating my expertise in cloud,
          AI, and cybersecurity.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[900px]"
      >
        {Certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={cert.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col gap-3 p-6 rounded-2xl border border-[#7042f840] bg-[#0d0d1a]/80 backdrop-blur-sm hover:border-[#7042f8] hover:shadow-[0_0_24px_#7042f840] transition-all duration-300 h-full"
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#7042f820] border border-[#7042f850] text-2xl shrink-0 group-hover:bg-[#7042f840] transition-colors duration-300">
                  {certIcon[cert.title] ?? "🎓"}
                </div>
                <h3 className="text-white font-semibold text-[15px] leading-tight group-hover:text-[#b49bff] transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed pl-14">
                {cert.description}
              </p>

              {/* View credential */}
              <div className="pl-14 mt-auto">
                <span className="text-[#7042f8] text-xs font-medium group-hover:text-[#a78bfa] transition-colors duration-200 flex items-center gap-1">
                  View Credential
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 flex justify-center w-full"
      >
        <a
          href="https://drive.google.com/drive/folders/1_RMiJpH_8CVMluNOUbblLWYkvj1hKFiB?usp=drive_link"
          target="_blank"
          rel="noreferrer noopener"
          className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl overflow-hidden font-bold text-white shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.6)] transition-all duration-300"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-[#7042f8] to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Content */}
          <span className="relative z-10 tracking-wide">
            All Certificates & Achievements
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 relative z-10 -translate-y-[1px] group-hover:translate-x-1 group-hover:-translate-y-[2px] transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
