import { projects } from "../data/projects";

export default function ProjectsSection({
  openProject,
}: {
  openProject: (project: any) => void;
}) {
  const homeProjects = projects.filter((p) =>
    ["app-design", "animotions", "web-design"].includes(p.id)
  );

  return (
    <section className="px-12 py-24 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-12">
        Projets sélectionnés
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeProjects.map((project) => (
          <button
            key={project.id}
            onClick={() =>
              openProject({
                type: project.id,
              })
            }
            className="text-left bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="h-48 bg-gray-200" />

            <div className="p-6">
              <h3 className="font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
