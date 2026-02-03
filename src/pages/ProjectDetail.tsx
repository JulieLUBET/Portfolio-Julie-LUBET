export default function ProjectDetail({ project }: any) {
  if (!project || project.type !== "epita") return null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-14">
        <p className="text-indigo-500 font-medium mb-2">
          Parcours académique
        </p>
        <h1 className="text-3xl font-bold mb-4">
          EPITA — Année préparatoire
        </h1>
        <p className="text-gray-600">
          Première immersion dans l’informatique et découverte progressive
          de mon intérêt pour le web et le design.
        </p>
      </section>

      {/* IMAGE PRINCIPALE */}
      <section className="mb-16">
        <img
          src="/images/Epita.png"
          alt="Projet EPITA"
          className="w-full h-[300px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Contexte</h2>
        <p className="text-gray-600 leading-relaxed">
          J’ai intégré EPITA dans le cadre d’une année préparatoire en informatique.
          Cette formation m’a permis d’acquérir des bases solides en logique,
          en programmation et en raisonnement technique.
        </p>
      </section>

      {/* PROJET */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">
          Projet de fin de première année
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lors d’un projet d’une durée d’environ six mois, j’ai travaillé sur
          un projet informatique complet.  
          Même si le résultat n’était pas techniquement abouti, ce projet a été
          déterminant dans mon parcours.
        </p>
      </section>

      {/* MEDIA */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">
          Aperçu du projet
        </h2>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src="/images/epita-1.png"
            alt="Projet EPITA aperçu 1"
            className="w-full h-48 object-cover rounded-xl bg-gray-100"
          />
          <img
            src="/images/epita-2.png"
            alt="Projet EPITA aperçu 2"
            className="w-full h-48 object-cover rounded-xl bg-gray-100"
          />
        </div>

        {/* Liens / Vidéo */}
        <div className="space-y-3">
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
            className="block text-indigo-500 underline"
          >
            Voir le projet (lien externe)
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-indigo-500 underline"
          >
            Voir la vidéo de présentation
          </a>
        </div>
      </section>

      {/* REFLEXION */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">
          Ce que ce projet m’a apporté
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ce projet m’a permis de comprendre que, bien que j’apprécie
          l’informatique, je m’épanouissais davantage dans les aspects liés
          au web, à la conception d’interfaces et à l’expérience utilisateur.
        </p>
      </section>

      {/* ORIENTATION */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">
          Réorientation vers le web et le design
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Cette prise de conscience m’a conduite à intégrer une école comme
          l’ICAN, qui propose une spécialisation en web et UX/UI, ainsi qu’un
          modèle en alternance, plus concret et professionnalisant.
        </p>
      </section>

      {/* BOUTON RETOUR */}
      <div className="flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          ← Retour
        </button>
      </div>
    </main>
  );
}
