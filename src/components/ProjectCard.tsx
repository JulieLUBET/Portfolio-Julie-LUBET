type Props = {
  project: any;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
    >
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

      <p className="text-sm text-indigo-500">{project.category}</p>
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-500 mt-2">{project.description}</p>
    </div>
  );
}
