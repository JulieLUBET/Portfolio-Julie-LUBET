export default function AwakenMemory({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – EPITA
        </p>

        <h1 className="text-4xl font-bold mb-4">Awaken Memory</h1>

        <p className="text-gray-600 max-w-2xl">
          Création d’un site web visant à promouvoir un jeu vidéo indépendant.
          Ce projet m’a permis d’expérimenter mes premières réflexions UX,
          notamment sur la hiérarchisation de l’information.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/images/AwakenMemory.jpg"
          alt="Awaken Memory preview"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Réalisé durant mon année préparatoire à EPITA, ce projet s’inscrivait
          dans un travail de groupe visant à concevoir un jeux vidéo avec son
          site de promossion Il s’agissait d’un de mes premiers projets mêlant
          conception UI/UX et développement web.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-3">
          La problèmatique a été de réussir à structurer un site web afin de :
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          - Présenter clairement l’univers du jeu <br />
          - Donner envie d’en savoir plus <br />- Guider l’utilisateur vers une
          action (découvrir, télécharger, suivre)
        </p>
      </section>

      {/* OBJECTIFS UX */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Objectifs UX</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Créer une hiérarchie claire des informations</li>
            <li>Valoriser l’univers graphique du jeu</li>
            <li>Faciliter la navigation</li>
            <li>Mettre en avant les éléments clés</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Compétences mobilisées</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Structure HTML & CSS</li>
            <li>Premières réflexions UX</li>
            <li>Organisation de contenu</li>
            <li>Travail collaboratif</li>
          </ul>
        </div>
      </section>

      {/* DÉMARCHE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Démarche</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          J'ai d’abord défini les sections essentielles du site : <br />
          présentation du jeu, univers visuel, fonctionnalités et informations
          clés. J’ai particulièrement travaillé sur l’organisation du contenu et
          la logique de navigation afin d’assurer une lecture fluide.
        </p>
      </section>

      {/* MEDIA */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Aperçu du projet</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <img
            src="/Awaken-memory/image9.png"
            className="rounded-xl object-cover h-56"
            alt="Awaken Memory screen 1"
          />
          <img
            src="/Awaken-memory/image7.png"
            className="rounded-xl object-cover h-56"
            alt="Awaken Memory screen 2"
          />
        </div>

        <a href="https://julielubet.github.io/Site-Awaken-Memory/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">
          Voir le projet
        </a>
      </section>

      {/* APPRENTISSAGES */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Ce que ce projet m’a apporté
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Même s’il s’agissait d’un projet débutant, il a été déterminant dans
          mon parcours. <br />
          <br />
          C’est à travers ce travail que j’ai compris que je prenais davantage
          de plaisir à concevoir des interfaces et à créer des expériences
          concrètes pour des utilisateurs, plutôt qu’à développer des
          programmes. <br />
          <br />
          Le fait de travailler sur un site web m’a permis de voir un résultat
          visible et directement utilisable. Cette partie créative et concrète
          du numérique : créer, structurer, rendre une interface claire et
          accessible. A été un véritable déclic. <br />
          <br />
          Ce projet a ainsi marqué le début de ma transition vers le web et
          l’UX/UI, et m’a conduite à intégrer une école davantage orientée vers
          la création de solutions digitales concrètes.
        </p>
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
