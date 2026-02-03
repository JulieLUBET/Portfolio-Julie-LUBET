export default function Epita({
  goBack,
}: {
  goBack: () => void;
}) {
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
          Première immersion dans l’informatique et point de départ de ma
          réorientation vers le web et l’UX/UI.
        </p>
      </section>

      {/* IMAGE */}
      <section className="mb-16">
        <img
          src="/images/Epita.png"
          alt="Projet EPITA"
          className="w-full h-[280px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Contexte</h2>
        <p className="text-gray-600 leading-relaxed">
          J’ai suivi une année préparatoire à EPITA afin d’acquérir des bases
          solides en informatique. Cette formation m’a permis de développer
          rigueur, logique et méthode de travail.
        </p>
      </section>

      {/* PROJET */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">
          Projet de fin d’année
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lors d’un projet d’environ six mois, j’ai travaillé sur un projet
          informatique complet. Bien que le résultat soit encore perfectible,
          ce projet a été déterminant dans mon orientation professionnelle.
        </p>
      </section>

      {/* MEDIA */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Aperçu du projet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img
            src="/images/epita-1.png"
            className="rounded-xl object-cover h-48"
          />
          <img
            src="/images/epita-2.png"
            className="rounded-xl object-cover h-48"
          />
        </div>

        <a
          href="https://example.com"
          target="_blank"
          className="text-indigo-500 underline"
        >
          Voir la présentation ou la vidéo
        </a>
      </section>

      {/* CONCLUSION */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-3">
          Ce que ce projet m’a apporté
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ce projet m’a permis de comprendre que je souhaitais évoluer vers
          des domaines plus concrets comme le web, le design d’interfaces
          et l’expérience utilisateur, ce qui m’a conduit à intégrer l’ICAN.
        </p>
      </section>

      {/* RETOUR */}
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
