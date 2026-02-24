import { useState } from "react";
import { projects } from "../data/projects";

const filters = [
  "Tous",
  "UX / UI",
  "Web design",
  "App design",
  "Motion / Animation",
];

export default function Projects({
  onSelectProject,
}: {
  onSelectProject: (project: any) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <main className="px-12 pt-32 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-12">Tous les projets</h1>

      

      <div className="flex flex-wrap gap-3 mb-14">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === filter
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject({ type: project.id })}
            className="text-left bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-48 bg-gray-200 overflow-hidden">
              {project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>

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
    </main>
  );
}
