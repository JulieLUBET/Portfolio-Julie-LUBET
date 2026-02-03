export default function WebDesign({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">Projets académiques – ICAN</p>
        <h1 className="text-4xl font-bold mb-4">
          Conception de sites web
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Ensemble de projets web réalisés durant ma formation,
          axés sur la structure, le design et l’expérience utilisateur.
        </p>
      </section>

      <section className="mb-20">
        <div className="w-full h-[380px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          Zone captures de sites
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ces projets avaient pour objectif d’apprendre à concevoir des sites web
          clairs, structurés et accessibles, en tenant compte des besoins utilisateurs.
        </p>
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Travail réalisé</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wireframes et maquettes</li>
            <li>Hiérarchisation de l’information</li>
            <li>Design responsive</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Compétences mobilisées</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Web design</li>
            <li>UX</li>
            <li>HTML / CSS</li>
            <li>Notions d’intégration</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Apprentissages</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ces projets ont renforcé mon intérêt pour le web design
          et m’ont permis de mieux comprendre l’importance de la structure
          et de la cohérence visuelle.
        </p>
      </section>

      <div className="flex justify-center">
        <button
          onClick={goBack}
          className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
        >
          ← Retour aux projets
        </button>
      </div>

    </main>
  );
}
