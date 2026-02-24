export default function Abundata({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">ABUNDATA</h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Création d’une identité et d’un concept digital visant à sensibiliser
          les 18–25 ans aux excès de la surconsommation hérités des Trente
          Glorieuses.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/Abundata/image1.png"
          alt="Logo final Abundata"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          ABUNDATA est un projet de création de marque et de plateforme
          pédagogique destiné à interpeller les jeunes générations sur les
          conséquences environnementales, économiques et sociales de la
          surconsommation.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          L’objectif était de transformer les spectateurs en consom’acteurs
          éclairés en reconnectant l’histoire des Trente Glorieuses aux enjeux
          contemporains.
        </p>
      </section>

      {/* POSITIONNEMENT */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Positionnement</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          ABUNDATA se positionne comme un média digital engagé, à la croisée de
          l’histoire, de la data et du storytelling. Le projet associe mémoire
          collective, analyse critique et identité visuelle forte pour créer un
          impact générationnel.
        </p>
      </section>

      {/* NAMING */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Naming & Concept</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Le nom ABUNDATA est la contraction de "abundance" et "data". Il
          symbolise à la fois l’abondance matérielle héritée des Trente
          Glorieuses et la masse de données contemporaines nécessaires pour en
          comprendre les impacts.
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Abondance → excès, accumulation, saturation</li>
          <li>Data → mémoire, traces, rationalité numérique</li>
          <li>Équilibre → transition vers une consommation consciente</li>
        </ul>
      </section>

      {/* RECHERCHE LOGO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Recherche & Construction du logo
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-8">
          Le logo met en scène une canette froissée intégrant la planète Terre.
          Ce symbole illustre la réduction du monde à un produit jetable,
          soulignant l’épuisement des ressources et la critique du modèle
          consumériste.
        </p>
        <br />
        <a
          href="/Abundata/test_logo.png"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Test logo
        </a>
      </section>

      {/* IDENTITÉ VISUELLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Identité visuelle</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Typographie grasse, inspirée des affiches industrielles 50-70</li>
          <li>Palette rouge/blanc évoquant la publicité vintage</li>
          <li>Contours noirs inspirés du street art contemporain</li>
        </ul>

        <p className="text-gray-600 mt-4 max-w-3xl">
          L’identité mélange nostalgie et critique moderne, créant un contraste
          volontaire entre héritage publicitaire et engagement militant.
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
        <div className="flex justify-center">
          <div className="w-[1000px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/Abundata/video.mp4"
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
          Ce projet m’a permis de travailler en profondeur la construction d’un
          univers de marque cohérent : naming, symbolique, direction artistique
          et stratégie de message.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Il m’a également confrontée à la nécessité de traduire un sujet
          complexe en un système visuel clair, compréhensible et impactant pour
          une cible jeune.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/Abundata/dossier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le dossier
          </a>
          <a
            href="https://www.figma.com/proto/yQKn6ZrZBmWlKHyEvuNtxM/Abundata--FENOUILLET_Shelley_RENAULT_Emile_DOS-SANTOS_Oc%C3%A9ane_LUBET_Julie-?node-id=1003-8857&t=L34l6VmTEckjJDu5-0&scaling=contain&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=1003%3A8857"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le prototype
          </a>
          <a
            href="https://www.figma.com/design/yQKn6ZrZBmWlKHyEvuNtxM/Abundata--FENOUILLET_Shelley_RENAULT_Emile_DOS-SANTOS_Oc%C3%A9ane_LUBET_Julie-?node-id=85-3"
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
