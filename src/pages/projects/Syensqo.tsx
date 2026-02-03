export default function Syensqo({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section className="mb-14">
        <p className="text-indigo-500 font-medium mb-2">Stage</p>
        <h1 className="text-3xl font-bold mb-4">
          Syensqo — Communication & design
        </h1>
        <p className="text-gray-600">
          Stage orienté communication visuelle et supports numériques.
        </p>
      </section>

      <section className="mb-16">
        <img
          src="/images/Syensqo.png"
          alt="Projet Syensqo"
          className="w-full h-[280px] object-cover rounded-2xl"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Contexte</h2>
        <p className="text-gray-600 leading-relaxed">
          Lors de ce stage, j’ai travaillé sur différents supports de
          communication, en lien avec l’image de l’entreprise et la
          transmission de messages clairs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Missions</h2>
        <p className="text-gray-600 leading-relaxed">
          J’ai participé à la création de visuels, à la mise en page de
          contenus et à la réflexion sur la lisibilité et l’accessibilité
          des supports.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Aperçu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img src="/images/syensqo-1.png" className="rounded-xl h-48 object-cover" />
          <img src="/images/syensqo-2.png" className="rounded-xl h-48 object-cover" />
        </div>

        <a
          href="https://example.com"
          target="_blank"
          className="text-indigo-500 underline"
        >
          Voir les supports réalisés
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">Ce que j’en retiens</h2>
        <p className="text-gray-600 leading-relaxed">
          Ce stage m’a permis de renforcer mes compétences en communication
          visuelle et de confirmer mon intérêt pour le design appliqué
          à des contextes professionnels.
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
