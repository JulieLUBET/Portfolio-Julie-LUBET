export default function Atalian({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section className="mb-14">
        <p className="text-indigo-500 font-medium mb-2">Entreprise</p>
        <h1 className="text-3xl font-bold mb-4">
          Atalian — Projet en contexte professionnel
        </h1>
        <p className="text-gray-600">
          Expérience en entreprise intégrée à mon parcours de formation.
        </p>
      </section>

      <section className="mb-16">
        <img
          src="/images/Atalian.png"
          alt="Projet Atalian"
          className="w-full h-[280px] object-cover rounded-2xl"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Contexte</h2>
        <p className="text-gray-600 leading-relaxed">
          Dans le cadre de mon parcours, j’ai travaillé sur des projets liés
          aux besoins réels de l’entreprise Atalian, en lien avec la
          communication et les supports numériques.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Rôle</h2>
        <p className="text-gray-600 leading-relaxed">
          J’ai participé à la réflexion UX, à la structuration des contenus
          et à la conception de supports adaptés aux utilisateurs.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Aperçu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img src="/images/atalian-1.png" className="rounded-xl h-48 object-cover" />
          <img src="/images/atalian-2.png" className="rounded-xl h-48 object-cover" />
        </div>

        <a
          href="https://example.com"
          target="_blank"
          className="text-indigo-500 underline"
        >
          Voir le projet
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">Apports</h2>
        <p className="text-gray-600 leading-relaxed">
          Cette expérience m’a permis de travailler sur des problématiques
          concrètes, de comprendre les contraintes d’un environnement
          professionnel et d’adapter mes choix UX/UI en conséquence.
        </p>
      </section>

      <div className="flex justify-center">
        <button
          onClick={goBack}
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          ← Retour
        </button>
      </div>
    </main>
  );
}
