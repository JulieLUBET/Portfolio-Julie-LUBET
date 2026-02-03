export default function AppDesign({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">Projet académique – ICAN</p>
        <h1 className="text-4xl font-bold mb-4">
          Conception d’une application mobile
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Projet de création d’une application mobile réalisé dans le cadre de ma formation à l’ICAN.
          L’objectif était de concevoir une interface intuitive en appliquant une démarche UX complète.
        </p>
      </section>

      <section className="mb-20">
        <div className="w-full h-[380px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          Zone images / prototypes
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte & objectifs</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ce projet avait pour but de nous initier à la conception d’une application mobile en partant
          d’un besoin utilisateur identifié.  
          Le travail portait autant sur la réflexion UX que sur la création de l’interface UI.
        </p>
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Mon rôle</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Analyse du besoin utilisateur</li>
            <li>Définition des fonctionnalités</li>
            <li>Wireframes et parcours utilisateur</li>
            <li>Prototypage sur Figma</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Compétences mobilisées</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>UX Design</li>
            <li>UI mobile</li>
            <li>Prototypage</li>
            <li>Logique applicative</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Résultats & apprentissages</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ce projet m’a permis de comprendre les enjeux de la conception mobile,
          notamment l’importance de la clarté des parcours et de la hiérarchisation
          de l’information dans une application.
        </p>
      </section>

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
