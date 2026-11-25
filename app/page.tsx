import HeroSection from "@/components/sections/HeroSection";
import AboutOverviewSection from "@/components/sections/AboutOverviewSection";
import Micro1SkillsSection from "@/components/sections/Micro1SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TechnicalSkillsSection from "@/components/sections/TechnicalSkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationAchievementsSection from "@/components/sections/EducationAchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div id="main" className="container pb-16 space-y-20">
      <HeroSection />
      <AboutOverviewSection />
      <Micro1SkillsSection />
      <CertificationsSection />
      <TechnicalSkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationAchievementsSection />
      <ContactSection />
    </div>
  );
}
