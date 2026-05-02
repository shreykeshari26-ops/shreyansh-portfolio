import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-5 z-[20] relative"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Let&apos;s Work Together
      </h1>

      <div className="w-full max-w-2xl bg-[#0d0d1a]/50 backdrop-blur-xl border border-[#7042f830] shadow-[0_0_20px_rgba(112,66,248,0.15)] rounded-2xl p-8 md:p-10 text-center">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Whether you need a custom web application, an AI-powered solution, or a complete digital transformation for your business, I am currently available for freelance opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:shrey.keshari26@gmail.com"
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-[#7042f8] text-white font-semibold shadow-[0_0_20px_rgba(112,66,248,0.5)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email Me
          </a>
          
          <a
            href="tel:+917042249976"
            className="w-full md:w-auto px-8 py-3 rounded-xl border border-[#00d4ff] text-[#00d4ff] font-semibold hover:bg-[#00d4ff]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};
