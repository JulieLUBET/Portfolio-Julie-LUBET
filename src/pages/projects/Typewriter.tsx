export default function Typewriter({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Typewriter Scrollytelling
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Refonte interactive d’un article culturel en expérience mobile immersive.
          Transformation d’un contenu éditorial statique en parcours narratif
          scrollytelling inspiré de l’univers mécanique de la machine à écrire.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/typewriter/image2.png"
          alt="Typewriter Scrollytelling preview"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Le projet repose sur l’article “A Visual History of Typewriter Art
          from 1893 to Today”. L’objectif était de transformer ce long
          contenu éditorial en une expérience mobile-first interactive.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Nous devions concevoir une lecture immersive exploitant le
          scrollytelling, les animations typographiques et une narration
          fluide adaptée au smartphone.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment transformer un article long et statique en une
          expérience de lecture dynamique, immersive et adaptée au mobile,
          sans nuire à la lisibilité ni à la richesse du contenu ?
        </p>
      </section>

      {/* RECHERCHE & INSPIRATION */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Recherche & Benchmark</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Nous avons analysé plusieurs références en scrollytelling :
          Snow Fall (NYT), The Boat (SBS), Aeon, Longreads.
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Hiérarchisation forte du contenu</li>
          <li>Alternance texte / image</li>
          <li>Rythme de lecture maîtrisé</li>
          <li>Intégration d’animations contextualisées</li>
        </ul>
      </section>

      {/* CONCEPT */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Concept UX</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          L’expérience utilisateur repose sur une métaphore :
          plonger au cœur de la machine à écrire.
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Animation d’introduction immersive</li>
          <li>Effet “typewriter” lettre par lettre</li>
          <li>Transitions simulant le retour chariot</li>
          <li>Galerie accessible via navigation verticale inversée</li>
          <li>Barre de progression interactive</li>
        </ul>
      </section>

      {/* IDENTITÉ VISUELLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Identité visuelle</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          L’univers graphique mêle minimalisme contemporain et
          références vintage : noir profond, blanc papier, touches
          jaunes inspirées de la source éditoriale.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          La progression typographique accompagne le récit historique :
          plus l’article avance, plus la typographie se modernise.
        </p>
      </section>

      {/* TECHNIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Implémentation technique
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Développement mobile-first</li>
          <li>Animations synchronisées au scroll</li>
          <li>Effets sonores contextualisés</li>
          <li>Gestion fluide des transitions de chapitres</li>
          <li>Optimisation performance mobile</li>
        </ul>
      </section>

      {/* DEMO VIDEO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Démonstration du prototype
        </h2>

        <div className="flex justify-center">
          <div className="w-[300px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/typewriter/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CE QUE CE PROJET M'A APPORTÉ */}
      <section className="mb-20">

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Grace a ce projet, j’ai compris que le design d’expérience
          ne consiste pas uniquement à structurer un contenu, mais à
          créer un rythme, une immersion et une cohérence narrative.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Il m’a permis d’explorer la dimension sensorielle du digital :
          interaction, son, animation et hiérarchisation au service
          d’un récit.
        </p>
      </section>

      {/* RESSOURCES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/typewriter/dossier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le dossier complet (PDF)
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le prototype Figma
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