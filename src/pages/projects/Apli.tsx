export default function APLI({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Refonte de l’application APLI
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Refonte UX/UI d’une application destinée aux éleveurs laitiers.
          L’objectif : simplifier l’accès aux informations essentielles et
          proposer une interface claire, synthétique et consultable rapidement.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/apli/logo.png"
          alt="Aperçu APLI"
          className="w-full h-[550px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          APLI est une application créée en 2008 destinée aux éleveurs laitiers.
          La version existante présentait une interface dense, peu hiérarchisée
          et difficilement consultable sur mobile.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Le projet consistait à repenser entièrement l’expérience afin
          d’adapter l’outil aux usages actuels et aux contraintes du terrain.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment synthétiser les informations pour les producteurs de lait
          afin qu’elles soient consultables simplement et rapidement ?
        </p>
      </section>

      {/* DÉMARCHE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Démarche Design Thinking</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2 max-w-3xl">
          <li>Analyse de la version existante</li>
          <li>Identification des besoins utilisateurs</li>
          <li>Définition des priorités d’information</li>
          <li>Création de wireframes</li>
          <li>Prototype interactif sur Figma</li>
        </ul>
      </section>

      {/* ORIENTATION VISUELLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Orientation visuelle & Moodboard
        </h2>

        <p className="text-gray-600 max-w-3xl mb-6">
          L’orientation visuelle s’appuie sur trois axes principaux :
          clarté, dynamisme et synthétisation des données.
        </p>

        <div className="grid md:grid-cols-1">
          <img src="/apli/image1.png" className="rounded-xl" />
        </div>
      </section>

      {/* DEMO VIDEO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Démonstration du prototype
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
          Le prototype final propose une interface simplifiée,
          structurée autour d’une navigation claire et d’un accès rapide
          aux informations prioritaires.
        </p>
        <p>video à faire</p>
        <div className="flex justify-center">
          <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              src=""
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* APPRENTISSAGES */}
      <section className="mb-20">
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ce projet m’a permis de comprendre l’importance de la synthèse
          d’information dans des environnements professionnels.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Concevoir pour un public spécifique implique d’adapter le design
          à des usages concrets et à des contraintes réelles.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/apli/APLI-refonte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le dossier
          </a>

          <a
            href="/apli/APLI-Emile_ Julie_ Shelley_Océane.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir la présentation
          </a>

          <a
            href="https://www.figma.com/proto/bZ4ZmuTJJ6ydKwGyP13fwT/APLI?node-id=396-531&t=GLezQy0nLAS6tsIR-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=396%3A531&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le prototype interactif
          </a>

          <a
            href="https://www.figma.com/design/bZ4ZmuTJJ6ydKwGyP13fwT/APLI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le figma du projet
          </a>
        </div>
      </section>

      {/* RETOUR */}
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
