export default function Trove({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">
          TRŌVE - Trouve ta brocante en 1 click
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Conception d’une application mobile dédiée au recensement des
          brocantes, intégrant géolocalisation, filtres intelligents et
          dimension communautaire. <br />
          Projet réalisé sur 4 mois en équipe de 4.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/trove/image1.png"
          alt="Aperçu application Trove"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Le marché de la seconde main connaît une croissance forte en France.
          Pourtant, les informations liées aux brocantes restent dispersées
          entre affiches locales, réseaux sociaux et sites peu adaptés au
          mobile.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          L’objectif était de proposer une solution numérique centralisant les
          événements tout en conservant la dimension sociale et conviviale
          propre aux brocantes.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment améliorer l’expérience des chineurs en rendant les brocantes
          plus accessibles, plus lisibles et plus conviviales, tout en
          encourageant la mobilité et le lien social ?
        </p>
      </section>

      {/* ÉQUIPE & RÔLE */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Organisation du projet</h3>
          <p className="text-gray-600 leading-relaxed">
            Projet réalisé sur 4 mois en équipe de 4 personnes. Nous avons tous
            participé à :
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
            <li>La recherche utilisateur</li>
            <li>Le benchmark</li>
            <li>La définition de la structure</li>
            <li>La réflexion UX globale</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Mon rôle</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Création du code : HTML / CSS / JS</li>
            <li>Implémentation de la carte (Leaflet)</li>
            <li>Logique de filtres & interactions</li>
            <li>Simulation du flux social</li>
          </ul>
          <p className="text-gray-600 mt-3">
            Deux membres se sont concentrés sur les finitions UI et le design
            system, un membre sur la rédaction du dossier final.
          </p>
        </div>
      </section>

      {/* RECHERCHE UX */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Recherche & Benchmark</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Analyse des plateformes existantes : Vinted, Leboncoin, Brocabrac. Ces
          solutions facilitent la mise en relation, mais restent centrées sur la
          transaction individuelle et peu adaptées aux événements physiques.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Nous avons identifié une opportunité : créer une solution locale,
          événementielle et communautaire.
        </p>
      </section>

      {/* PERSONAS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Cibles & Personas</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Jeunes engagés sensibles aux enjeux écologiques</li>
          <li>Adultes actifs cherchant efficacité et gain de temps</li>
          <li>Collectionneurs passionnés recherchant authenticité</li>
        </ul>
      </section>

      {/* TESTS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tests utilisateurs</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Des tests ont été réalisés sur les prototype Figma. Les retours ont
          permis d’identifier :
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Confusion sur la promesse au premier contact</li>
          <li>Manque de clarté sur la dimension sociale</li>
        </ul>

        <p className="text-gray-600 mt-4 max-w-3xl">
          Ces observations ont conduit à simplifier l’onboarding, clarifier le
          wording et sécuriser les interactions principales.
        </p>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Design System</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          L’identité visuelle adopte une direction artistique rétro inspirée de
          l’univers des brocantes : palettes patinées, typographies expressives,
          icônes inspirées des stickers anciens.
        </p>

        <p className="text-gray-600 mt-4 max-w-3xl">
          L’objectif était de créer une expérience chaleureuse, conviviale et
          immédiatement identifiable.
        </p>
      </section>

      {/* TECHNIQUE */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Prototype & Implémentation
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Le prototype a été développé en HTML, CSS et JavaScript. La carte
          interactive repose sur Leaflet, avec gestion dynamique des marqueurs
          et filtres.
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Carte interactive avec deux modes (brocantes / amis)</li>
          <li>Filtrage par tags dynamiques</li>
          <li>Simulation de flux social</li>
          <li>Navigation type application mobile</li>
          <li>Gestion conditionnelle des popups</li>
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
              src="/trove/prototype.mov"
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
          La principale difficulté du projet a été de répondre à la contrainte
          “application sociale”. Au départ, nous ne trouvions pas une manière
          pertinente et cohérente d’intégrer cette dimension sans dénaturer
          l’objectif principal.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Nous avons exploré plusieurs pistes, notamment l’idée d’une
          camionnette ambulante dédiée à la réparation et à la rénovation
          d’objets, venant accompagner les brocantes sur le terrain. Bien que
          stimulante, cette proposition nous semblait nous éloigner du cœur du
          produit et de la logique d’une application mobile.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Nous avons ensuite orienté le projet vers une approche plus cohérente
          : une semi-plateforme de communication intégrant un espace de
          discussion et un système d’annonces, tout en gardant la carte et la
          découverte des brocantes comme pilier central.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Ce processus d’exploration nous a permis de
          comprendre l’importance d’interpréter une contrainte sans perdre la
          cohérence globale du produit. L’aspect social devait enrichir
          l’expérience, et non la détourner de son objectif initial.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/trove/Trōve - Dossier.pdf"
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
            Voir le prototype
          </a>

          <a
            href="https://julielubet.github.io/App-brocante/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le code
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
