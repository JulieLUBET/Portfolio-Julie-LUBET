import ContactSection from "../components/ContactSection";
import ExperiencesSection from "../components/ExperiencesSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperiencesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
