import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Application mobile – UX/UI",
    category: "UX / UI",
    description: "Création d’une application mobile (projet ICAN)",
  },
  {
    title: "Découverte de Figma",
    category: "UI Design",
    description: "Exercices de prise en main de Figma",
  },
  {
    title: "Animotions",
    category: "Motion / UI",
    description: "Animations et micro-interactions",
  },
  {
    title: "App Brocante Social",
    category: "UX / UI",
    description: "Concept d’application sociale",
  },
  {
    title: "Refonte UX – Article",
    category: "UX / Storytelling",
    description: "Refonte d’un article sur la machine à écrire",
  },
  {
    title: "Surconsommation – 30 Glorieuses",
    category: "Design engagé",
    description: "Projet sur l’impact de la surconsommation",
  },
];

type Props = {
  onSelectProject: (project: any) => void;
};

export default function Projects({ onSelectProject }: Props) {
  return (
    <section className="px-12 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
}
