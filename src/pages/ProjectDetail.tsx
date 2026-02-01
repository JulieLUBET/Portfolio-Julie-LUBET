export default function ProjectDetail({ project }: any) {
  return (
    <section className="px-12 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>

      <p className="text-gray-600 mb-4">
        <strong>Catégorie :</strong> {project.category}
      </p>

      <p className="text-gray-700 leading-relaxed">
        {project.description}.  
        Ce projet a été réalisé dans le cadre de ma formation à l’ICAN et illustre
        ma démarche UX/UI, de la réflexion à la conception.
      </p>
    </section>
  );
}
