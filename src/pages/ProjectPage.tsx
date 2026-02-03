import { Project } from "../data/projects";

export default function ProjectPage({
  project,
  goBack,
}: {
  project: Project;
  goBack: () => void;
}) {
  return (
    <main className="max-w-4xl mx-auto px-12 py-24">
      <p className="text-indigo-500 mb-2">{project.category}</p>

      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      <p className="text-gray-600 mb-10">{project.longDescription}</p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.images.map((img, index) => (
          <div key={index} className="h-48 bg-gray-200 rounded-xl">
            {/* image */}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={goBack}
        className="border px-6 py-3 rounded-md hover:bg-gray-100"
      >
        ← Retour
      </button>
    </main>
  );
}
