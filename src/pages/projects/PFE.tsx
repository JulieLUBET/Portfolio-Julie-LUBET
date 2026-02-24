export default function PFE({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet de fin d’études – ICAN
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Application pour les maladies peu/mal médiatisées
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Conception d’une plateforme orientée prévention, orientation
          et soutien, dédiée aux maladies peu connues.
          Projet réalisé en autonomie complète sur 6 mois.
        </p>
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Les maladies peu médiatisées souffrent d’un manque
          d’information claire et actionnable. Les ressources sont
          souvent dispersées, anxiogènes ou peu orientées vers
          des décisions concrètes.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Le projet prend la maladie de Lyme comme cas d’étude
          afin de concevoir une plateforme multi-maladies
          permettant à la fois de prévenir, orienter et accompagner.
        </p>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment concevoir une plateforme fiable et responsable
          capable d’aider le grand public à adopter les bons réflexes
          (prévention / orientation) tout en soutenant les personnes
          concernées, sans générer d’anxiété ni encourager l’auto-diagnostic ?
        </p>
      </section>

      {/* OBJECTIFS */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Objectifs produit</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Rendre l’information claire et structurée</li>
            <li>Orienter vers les bons “next steps”</li>
            <li>Proposer des checklists actionnables</li>
            <li>Centraliser des ressources fiables</li>
            <li>Créer un espace d’entraide encadré</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Enjeux</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Prévention & santé publique</li>
            <li>Réduction de l’errance informationnelle</li>
            <li>Cadre responsable (pas de diagnostic)</li>
            <li>Réduction de l’isolement</li>
            <li>Construction de la confiance</li>
          </ul>
        </div>
      </section>

      {/* RECHERCHE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Recherche & validation
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Études utilisateurs via questionnaires et interviews.
          Analyse des besoins principaux : simplicité, rapidité,
          information fiable et claire.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Benchmark approfondi : Santé.fr, Doctolib, Ada Health,
          PatientsLikeMe, applications de signalement de tiques,
          outils de science participative.
        </p>
      </section>

      {/* MODULES MVP */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Périmètre MVP</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl">
            Fiches maladies
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            Tutoriel prévention
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            Journal simple
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            Forum encadré
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            Orientation claire
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Positionnement
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Projet positionné comme une plateforme hybride :
          entre prévention institutionnelle, outil d’orientation
          et soutien communautaire encadré.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Orientation majeure : UX/UI Design  
          Orientation mineure : Creative Coding & Data visualisation  
          Profil visé : Product Designer.
        </p>
      </section>

      {/* STATUT */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Statut du projet
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Projet en cours de conception (recherche, architecture,
          flows UX et premières maquettes).  
          Développement prévu après validation des modules MVP.
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
