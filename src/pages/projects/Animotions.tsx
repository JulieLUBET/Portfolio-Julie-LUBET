export default function Animotions({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">Projet académique – ICAN</p>
        <h1 className="text-4xl font-bold mb-4">
          Animotions – Initiation au motion design
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Projet de motion design visant à comprendre les bases de l’animation,
          du rythme et de la narration visuelle.
        </p>
      </section>

      <section className="mb-20">
        <div className="w-full h-[380px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          Zone vidéo / animation
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Objectifs pédagogiques</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          L’objectif de ce projet était de découvrir le motion design et de comprendre
          comment l’animation peut renforcer un message ou une interface.
        </p>
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-3">Travail réalisé</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Création de storyboard</li>
            <li>Animation de formes et typographies</li>
            <li>Gestion du rythme et des transitions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Compétences développées</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Motion design</li>
            <li>Culture visuelle</li>
            <li>Créativité</li>
            <li>Sens du détail</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Apprentissages</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Ce projet m’a permis de mieux comprendre l’impact de l’animation
          dans une interface et son rôle dans l’expérience utilisateur.
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
