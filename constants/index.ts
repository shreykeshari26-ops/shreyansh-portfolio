import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ── Languages ────────────────────────────────────────────────────────────────
export const Languages = [
  { skill_name: "Java", image: "/skills/java.png", width: 70, height: 70 },
  { skill_name: "Python", image: "/skills/python.jpeg", width: 70, height: 70 },
  { skill_name: "TypeScript", image: "/skills/ts.png", width: 80, height: 80 },
] as const;

// ── AI Tools ─────────────────────────────────────────────────────────────────
export const AI_Tools = [
  { skill_name: "Gemini", image: "/skills/gemini.jpeg", width: 65, height: 65 },
  { skill_name: "Antigravity", image: "/skills/Antigravity.png", width: 65, height: 65 },
  { skill_name: "Claude", image: "/skills/Claude.png", width: 65, height: 65 },
  { skill_name: "Ollama", image: "/skills/Ollama.png", width: 65, height: 65 },
  { skill_name: "ChatGPT", image: "/skills/chatgpt.png", width: 65, height: 65 },
  { skill_name: "Google AI Studio", image: "/skills/google-ai-studio.png", width: 65, height: 65 },
  { skill_name: "GitHub Copilot", image: "", width: 65, height: 65 },
] as const;

// ── Frameworks & Tools ─────────────────────────────────────────────────────
export const Frameworks = [
  { skill_name: "Next.js", image: "/skills/next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "/skills/tailwind.png", width: 80, height: 80 },
  { skill_name: "AWS", image: "/skills/aws.png", width: 65, height: 65 },
  { skill_name: "Vercel", image: "/skills/vercel.png", width: 65, height: 65 },
  { skill_name: "Figma", image: "/skills/figma.png", width: 65, height: 65 },
  { skill_name: "Supabase", image: "/skills/supabase.png", width: 65, height: 65 },
  { skill_name: "Firebase", image: "", width: 65, height: 65 },
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
    image: "/projects/fs-image-1.png",
    link: "https://github.com/CodeHorizon-X/fashion-sensor",
  },
  {
    title: "PlaceMind AI",
    description:
      "• Developed an AI ecosystem for automated resume analysis and intelligent skill-gap assessments.\n• Integrated LLM features to generate dynamic interview questions and personalized preparation roadmaps.\n• Engineered a structured backend to manage complex user data and concurrent AI requests efficiently.\n• Contributed during the Bharatex Hackathon, solving student challenges through smart logic and intuitive design.",
    image: "/projects/placemind-img-2.png",
    link: "https://github.com/PlaceMinds/Bharatex-Hakathon",
  },
] as const;

export const FREELANCE_PROJECTS = [
  {
    title: "Artisan Coffee Works",
    description:
      "• Engineered a premium, scroll-responsive brand splash overlay with GSAP-driven fade-out animations.\n• Integrated Playfair Display typography to elevate the application aesthetic.\n• Designed a high-performance frontend with optimized Lenis inertia scrolling.",
    image: "/projects/artisan-coffee.png",
    link: "#",
  },
  {
    title: "Dream Home Reality",
    description:
      "• Built a dark theme real estate platform with luxurious gold and marble accents.\n• Implemented interactive animations including parallax zoom effects via Framer Motion.\n• Architected a responsive structure optimized for premium property viewing.",
    image: "/projects/dream-home.png",
    link: "#",
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
  sourceCode: "/projects/Shreyansh Keshari Resume 2.5.pdf",
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
