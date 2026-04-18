"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [imgError, setImgError] = useState(false);

  const animationDelay = 0.1;

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      title={name}
    >
      {imgError ? (
        /* Fallback: styled pill badge with skill name */
        <div
          style={{ minWidth: width, minHeight: height }}
          className="flex items-center justify-center px-4 py-2 rounded-xl border border-[#7042f8] bg-[#0d0d1a] text-white text-sm font-semibold tracking-wide shadow-[0_0_12px_#7042f840] hover:shadow-[0_0_20px_#7042f880] hover:border-[#a78bfa] transition-all duration-300 cursor-default whitespace-nowrap"
        >
          {name}
        </div>
      ) : (
        /* Primary: native img with onError fallback trigger */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          onError={() => setImgError(true)}
          className="object-contain"
          style={{ width, height }}
        />
      )}
    </motion.div>
  );
};
