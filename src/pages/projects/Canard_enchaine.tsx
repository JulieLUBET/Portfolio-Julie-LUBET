export default function CanardEnchaine({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Refonte mobile – Le Canard Enchaîné
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Repenser l’expérience de lecture du journal satirique en adaptant son
          format papier au mobile et en intégrant des animations interactives
          fidèles à son identité humoristique.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/canard/logo.png"
          alt="Prototype application Le Canard Enchaîné"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Le Canard Enchaîné est un hebdomadaire satirique historique, reconnu
          pour son indépendance et son ton ironique. Son format numérique actuel
          repose principalement sur un PDF, nécessitant zoom et dézoom pour lire
          les articles sur mobile.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Cette approche freine la lecture et ne correspond pas aux usages
          contemporains de consommation d’information sur smartphone.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment adapter un journal papier satirique au mobile tout en
          conservant son identité forte et son humour décalé, sans le dénaturer
          ?
        </p>
      </section>

      {/* INTENTION UX */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Intention UX</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Adapter la lecture au scroll vertical natif mobile</li>
          <li>Supprimer la contrainte du zoom PDF</li>
          <li>Renforcer l’identité satirique par l’animation</li>
          <li>Stimuler l’attention pendant la lecture</li>
        </ul>
      </section>

      {/* CONCEPT INTERACTIF */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Concept interactif : Le canard comme guide narratif
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Pour enrichir l’expérience utilisateur, nous avons intégré des
          illustrations animées du canard emblématique. Ces animations au format
          GIF accompagnent la lecture et prolongent l’humour éditorial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <img
            src="/canard/home-animation.png"
            alt="Animation page d'accueil"
            className="rounded-xl"
          />
          <img
            src="/canard/lecture-animation.png"
            alt="Animation pendant lecture"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* DÉTAIL DES INTERACTIONS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Animations proposées</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-3">
          <li>
            En page d’accueil : un canard animé annonce une citation ou une
            anecdote marquante à la une.
          </li>
          <li>
            Pendant la lecture : un canard lit confortablement sur son canapé,
            créant une présence complice.
          </li>
          <li>
            Interaction avec les phrases “drapeau” : le canard descend les
            phrases comme des marches d’escalier, renforçant la chute ironique.
          </li>
        </ul>
      </section>

      {/* VALEUR AJOUTÉE */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Valeur ajoutée</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Cette approche transforme une lecture statique en expérience
          immersive, tout en respectant l’ADN du journal. L’animation devient un
          outil éditorial, non un simple élément décoratif.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Le projet démontre comment le motion design peut servir la narration
          journalistique sans en compromettre la crédibilité.
        </p>
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
        <p>video a faire</p>
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
          Ce projet m’a confrontée à un enjeu délicat : moderniser une
          institution sans trahir son identité. Il m’a permis de réfléchir à
          l’intégration du motion design comme outil d’engagement plutôt que
          simple animation décorative.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/canard/dossier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le dossier
          </a>
          <a
            href="https://www.figma.com/proto/VIug56O85Dimi2DsylHjZC/Canard-enchainee?page-id=0%3A1&node-id=185-310&node-type=frame&viewport=-881%2C2716%2C0.28&t=W5R7ZHSJFbKL76Qr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=126%3A40"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le prototype
          </a>
          <a
            href="https://www.figma.com/design/PwVcSJ0C6IQqoILGwmHtev/Le-Canard-Enchain%C3%A9?node-id=0-1&p=f&t=pgnQjFvFSWOU00qo-0"
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
