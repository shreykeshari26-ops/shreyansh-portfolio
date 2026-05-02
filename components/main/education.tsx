import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Information Technology",
      year: "2024 - 2028",
      description: "G.L. Bajaj Institute of Technology and Management.",
    },
    {
      title: "12th Grade (Senior Secondary)",
      year: "2024",
      description: "Aster Public School, Noida Extension, CBSE (PCM).",
    },
    {
      title: "10th Grade (Secondary)",
      year: "2022",
      description: "Aster Public School, Noida Extension, CBSE.",
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-20 z-[20] relative w-full"
    >
      <div className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-12">
        <AcademicCapIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px] uppercase font-bold tracking-wider">
          Education Timeline
        </h2>
      </div>

      <div className="relative max-w-[800px] w-full">
        {/* Timeline Center Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7042f8] via-[#00d4ff] to-transparent transform md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {educationData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-[11px] md:left-1/2 w-5 h-5 rounded-full bg-[#0d0d1a] border-4 border-[#00d4ff] transform -translate-x-1/2 shadow-[0_0_15px_#00d4ff] z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-[50px] md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="p-6 rounded-2xl bg-[#0d0d1a]/60 backdrop-blur-xl border border-[#7042f830] shadow-[0_0_30px_rgba(112,66,248,0.1)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-shadow duration-300">
                  <div className={`flex items-center gap-4 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#7042f8]/20 text-[#00d4ff] border border-[#00d4ff]/30">
                      {item.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
