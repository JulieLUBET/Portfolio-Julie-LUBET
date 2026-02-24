export default function Ephemera({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN 1ere année
        </p>

        <h1 className="text-4xl font-bold mb-4">Ephemera</h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Création d’un site interactif permettant de générer des papillons
          personnalisés à travers un système de curseurs émotionnels. Projet
          réalisé en équipe de trois sur deux mois.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="mb-20">
        <img
          src="/Ephemera/presentation.png"
          alt="Générateur de papillons"
          className="rounded-2xl mb-8"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ephemera est un projet explorant la génération visuelle et
          l’expression émotionnelle à travers la création de papillons.
          L’objectif était de proposer une expérience immersive mêlant
          interaction, symbolique et sensibilisation environnementale.
        </p>
      </section>

      {/* CONCEPT */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Concept</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          L’utilisateur peut générer son propre papillon en manipulant
          différents curseurs influençant les formes, les couleurs et
          l’intensité visuelle.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Chaque variation traduit une émotion à travers une palette chromatique
          inspirée des travaux de Michel Pastoureau sur la symbolique des
          couleurs.
        </p>
      </section>

      {/* GENERATEUR */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Expérience générative</h2>

        

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Interaction par curseurs</li>
          <li>Variation symétrique des ailes</li>
          <li>Couleurs néon sur fond sombre</li>
          <li>Exploration libre et intuitive</li>
        </ul>
      </section>

      {/* DIMENSION ENGAGÉE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Dimension engagée</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Une page dédiée sensibilise aux papillons en voie de disparition en
          France. Les dix pochoirs proposés dans le générateur correspondent à
          des espèces réelles, reliant création artistique et conscience
          écologique.
        </p>
      </section>

      {/* DIRECTION ARTISTIQUE */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Direction artistique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-8">
          Le logo met en avant des lignes fines et symétriques évoquant les
          particules génératives. La typographie Montserrat, linéale et
          contemporaine, assure modernité et neutralité.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Le contraste noir/blanc évoque l’infini et la dualité, tandis que les
          couleurs néon (vert, rouge, jaune, bleu, violet) traduisent
          différentes émotions.
        </p>
        <br />
        <a
          href="/Ephemera/dossier.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Voir le dossier
        </a>
      </section>

      {/* DEMO VIDEO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Démonstration du prototype
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
          Le prototype final propose une interface simplifiée, structurée autour
          d’une navigation claire et d’un accès rapide aux informations
          prioritaires.
        </p>
        <p>faire vidéo</p>
        <div className="flex justify-center">
          <div className="w-[1000px] rounded-3xl overflow-hidden shadow-2xl">
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
          Ephemera m’a permis d’explorer le design génératif et l’impact
          émotionnel des couleurs dans une interface interactive. Il m’a appris
          à équilibrer liberté créative et cohérence visuelle, tout en intégrant
          une dimension pédagogique.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le prototype
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le figma
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
