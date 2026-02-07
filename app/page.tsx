
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { BentoProjects } from "@/components/sections/BentoProjects";
import { Footer } from "@/components/sections/Footer";
import { EducationCertifications } from "@/components/sections/EducationCertifications";

export default function Home() {
  return (
    <main className="relative bg-zinc-950 min-h-screen selection:bg-blue-500/30 selection:text-white">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <div id="home"><Hero /></div>
        <div id="stack"><TechStack /></div>
        <div id="work"><ExperienceTimeline /></div>
        <div id="projects"><BentoProjects /></div>
        <div id="education"><EducationCertifications /></div>
        <div id="contact"><Footer /></div>
      </div>
    </main>
  );
}
