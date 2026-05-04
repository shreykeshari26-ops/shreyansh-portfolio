import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(112,66,248,0.1)] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-500 border border-[#7042f830] bg-[#0d0d1a]/50 backdrop-blur-xl group flex flex-col h-full w-full mx-auto max-w-[400px] md:max-w-none"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] to-transparent opacity-80" />
      </div>

      <div className="relative p-6 flex flex-col flex-grow">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(112,66,248,0.3)]">
          {title}
        </h1>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed whitespace-pre-line flex-grow">
          {description}
        </p>
      </div>
    </Link>
  );
};
