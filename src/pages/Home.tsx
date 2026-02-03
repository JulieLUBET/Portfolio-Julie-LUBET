import ContactSection from "../components/ContactSection";
import ExperiencesSection from "../components/ExperiencesSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

export default function Home({
  openProject,
}: {
  openProject: (projectId: string) => void;
}) {
  return (
    <>
      <Hero />
      <ExperiencesSection />
      <ProjectsSection openProject={openProject} />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
