import { About } from "@/components/main/about";
import { Education } from "@/components/main/education";
import { CertificatesSection } from "@/components/main/certificates";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { FreelanceSolutions } from "@/components/main/FreelanceSolutions";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <FreelanceSolutions />
        <CertificatesSection />
        <Contact />
      </div>
    </main>
  );
}
