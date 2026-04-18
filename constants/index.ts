import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ── Languages & Web ──────────────────────────────────────────────────────────
export const SKILL_DATA = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

// ── AI Tools ─────────────────────────────────────────────────────────────────
export const AI_SKILL = [
  {
    skill_name: "Gemini",
    image: "gemini.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Claude",
    image: "claude.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Ollama",
    image: "ollama.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Antigravity",
    image: "antigravity.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Google AI Studio",
    image: "google-ai-studio.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "ChatGPT",
    image: "chatgpt.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Codex",
    image: "codex.png",
    width: 65,
    height: 65,
  },
] as const;

// ── Design & Productivity ─────────────────────────────────────────────────────
export const DESIGN_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Framer",
    image: "framer.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Dribbble",
    image: "dribbble.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Notion",
    image: "notion.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Perplexity",
    image: "perplexity.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "GenSpark",
    image: "genspark.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Gamma",
    image: "gamma.png",
    width: 65,
    height: 65,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/shreykeshari26-ops",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shreyansh-keshari-104639362/",
  },
] as const;



export const PROJECTS = [
  {
    title: "Fashion Sensor",
    description:
      "• Engineered a Generative AI engine to provide personalized outfit suggestions based on user context and style trends.\n• Designed a responsive UI using modern UI/UX principles to ensure a seamless and aesthetic user experience.\n• Architected backend infrastructure for multimodal data, streamlining communication between AI models and the frontend.\n• Optimized matching logic for real-time suggestions, focusing on a scalable codebase for future AI integrations.",
    image: "/projects/project-1.png",
    link: "https://github.com/CodeHorizon-X/fashion-sensor",
  },
  {
    title: "PlaceMind AI",
    description:
      "• Developed an AI ecosystem for automated resume analysis and intelligent skill-gap assessments.\n• Integrated LLM features to generate dynamic interview questions and personalized preparation roadmaps.\n• Engineered a structured backend to manage complex user data and concurrent AI requests efficiently.\n• Contributed during the Bharatex Hackathon, solving student challenges through smart logic and intuitive design.",
    image: "/projects/project-2.png",
    link: "https://github.com/PlaceMinds/Bharatex-Hakathon",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/shreykeshari26-ops",
      },
      {
        name: "Discord: shreyke_55032",
        icon: RxDiscordLogo,
        link: "https://discord.com/users/shreyke_55032",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shreyansh-keshari-104639362/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:shrey.keshari26@gmail.com",
      },
      {
        name: "Phone: +91 7042249976",
        icon: null,
        link: "tel:+917042249976",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "/projects/Shreyansh Keshari Resume 2.4.pdf",
};

export const Certificates = [
  {
    title: "AWS Academy Cloud Foundation",
    description: "Cloud Infrastructure & Services (Feb 2026)",
    link: "https://drive.google.com/file/d/1Wui4TAQ5IJb2ggX4jnsGKQ2mVRjL9i80/view?usp=sharing",
  },
  {
    title: "Palo Alto Network Security",
    description: "Network Security Fundamentals Graduate",
    link: "https://drive.google.com/file/d/1kIW25XqSjfoF7WWmLbWTUz6pyivZL3B_/view?usp=drive_link",
  },
  {
    title: "Palo Alto Cybersecurity",
    description: "Cybersecurity Foundation Certification",
    link: "https://drive.google.com/file/d/1f0d0KkNoxdk-jk7Q9PepUJr5mRtSR1fo/view?usp=drive_link",
  },
  {
    title: "Google Gemini Certificate",
    description: "Google for Education AI Specialist",
    link: "https://drive.google.com/file/d/1K1OytvuMUGxemF-UxEssj8X3LT3Njt77/view?usp=drive_link",
  },
  {
    title: "IAENG Membership",
    description: "International Association of Engineers",
    link: "https://drive.google.com/file/d/1ycommFPdQ7O5sWUMvxXCTD0eo2CVLicK/view?usp=drive_link",
  },
  {
    title: "IITD Campus Ambassador",
    description: "EDC IIT Delhi Ambassador Certificate",
    link: "https://drive.google.com/file/d/1USlQEwibQsJvfoMsT-p0-b7nSm27gUqT/view?usp=drive_link",
  },
] as const;
