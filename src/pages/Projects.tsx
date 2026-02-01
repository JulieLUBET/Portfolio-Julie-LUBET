export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h1 className="text-5xl font-bold text-center mb-6">
        My Projects
      </h1>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16">
        Voici une sélection de projets en design et communication visuelle, allant du web au print.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i}>
            <div className="h-48 bg-indigo-200 rounded-xl mb-4" />
            <h3 className="font-semibold">Titre du projet</h3>
            <p className="text-sm text-indigo-500">Web Design</p>
          </div>
        ))}
      </div>

    </section>
  );
}
