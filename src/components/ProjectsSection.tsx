import { projects } from "../data/projects";

export default function ProjectsSection({
  openProject,
}: {
  openProject: (projectId: string) => void;
}) {
  return (
    <section className="px-12 py-24 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-12">Projets sélectionnés</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project) => (
          <button
            key={project.id}
            onClick={() => openProject(project.id)}
            className="text-left bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="h-48 bg-gray-200"></div>

            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
