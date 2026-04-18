import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="w-full h-full bg-transparent text-gray-200 p-[15px] pt-20 pb-10 border-t border-[#2A0E61]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-6xl">
        {/* Glowing Heading */}
        <h2 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-12">
          Contact
        </h2>

        {/* Unified Contact Row / Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 mb-16 w-full px-4 flex-wrap">
          {/* GitHub */}
          <Link
            href="https://github.com/shreykeshari26-ops"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 hover:text-[#b49bff] transition-colors"
          >
            <RxGithubLogo className="h-7 w-7 group-hover:scale-110 transition-transform" />
            <span className="text-[16px] font-medium">GitHub</span>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/shreyansh-keshari-104639362/"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 hover:text-[#b49bff] transition-colors"
          >
            <RxLinkedinLogo className="h-7 w-7 group-hover:scale-110 transition-transform" />
            <span className="text-[16px] font-medium">LinkedIn</span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:shrey.keshari26@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 hover:text-[#b49bff] transition-colors"
          >
            <MdEmail className="h-7 w-7 group-hover:scale-110 transition-transform" />
            <span className="text-[16px] font-medium">shrey.keshari26@gmail.com</span>
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.com/users/shreyke_55032"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 hover:text-[#b49bff] transition-colors"
          >
            <RxDiscordLogo className="h-7 w-7 group-hover:scale-110 transition-transform" />
            <span className="text-[16px] font-medium">shreyke_55032</span>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+917042249976"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-3 hover:text-[#b49bff] transition-colors"
          >
            <MdPhone className="h-7 w-7 group-hover:scale-110 transition-transform" />
            <span className="text-[16px] font-medium">+91 7042249976</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-[14px] text-gray-500 text-center">
          &copy; Shreyansh Keshari {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
