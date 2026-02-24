export default function Animotions({ goBack }: { goBack: () => void }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HERO */}
      <section className="mb-16">
        <p className="text-indigo-500 font-medium mb-2">
          Projet académique – Web 01
        </p>

        <h1 className="text-4xl font-bold mb-4">Les Animotions</h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Plateforme interactive conçue pour aider les enfants à comprendre,
          identifier et exprimer leurs émotions à travers des personnages animés
          et des GIFs téléchargeables.
        </p>
      </section>

      {/* IMAGE HERO */}
      <section className="mb-20">
        <img
          src="/Animotions/presentation.png"
          alt="Aperçu Animotions"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Projet réalisé sur une durée d’un mois en équipe de quatre personnes.
          L’objectif était de concevoir une plateforme numérique éducative
          permettant de faciliter la compréhension des émotions à l’ère du
          digital.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Le site s’adresse principalement à un jeune public, en phase
          d’apprentissage émotionnel, et propose une approche ludique et
          inclusive.
        </p>
      </section>

      {/* MON RÔLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Mon rôle</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2 max-w-3xl">
          <li>Création du wireframe</li>
          <li>Conception UX globale</li>
          <li>Développement complet du site (HTML / CSS / JS)</li>
          <li>Intégration des animations</li>
          <li>Réalisation de la vidéo d'introduction</li>
        </ul>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Problématique</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Comment communiquer et rendre compréhensibles des émotions complexes à
          travers une interface numérique destinée aux enfants ?
        </p>
      </section>

      {/* CONCEPT */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Concept</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Nous avons choisi de personnifier les émotions sous forme de
          personnages animés inspirés de l’univers cartoon.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4">
          Chaque personnage représente une émotion : Amour, Joie, Tristesse,
          Colère et Peur. Les GIFs animés permettent aux enfants d’exprimer
          leurs sentiments de manière ludique et créative.
        </p>
      </section>

      {/* IDENTITÉ VISUELLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Identité visuelle</h2>

        <p className="text-gray-600 max-w-3xl mb-6">
          La direction artistique repose sur :
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2 max-w-3xl">
          <li>Formes abstraites et non genrées (inclusivité)</li>
          <li>Couleurs pastel apaisantes</li>
          <li>Typographie ronde et enfantine</li>
          <li>Animations typographiques</li>
        </ul>
        <br />
        <p className="text-gray-600 max-w-3xl mb-6">
          Test vidéo d'introduction :
        </p>
        <div className="flex justify-center">
          <div className="w-[1000px] rounded-3xl overflow-hidden shadow-2xl">
            <video src="/Animotions/Video_présentation.mp4" autoPlay loop muted playsInline className="w-full" />
          </div>
        </div><br />
        <div className="flex justify-center">
          <div className="w-[1000px] rounded-3xl overflow-hidden shadow-2xl">
            <video src="/Animotions/présentation.mp4" autoPlay loop muted playsInline className="w-full" />
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Public cible</h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Enfants de 8 à 12 ans en phase d’apprentissage émotionnel. Le projet
          vise à leur offrir des outils visuels simples pour identifier et
          exprimer leurs émotions.
        </p>
      </section>

      {/* AFFICHE PROMO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Affiche promotionnelle</h2>

        <div className="flex justify-center">
          <img
            src="/Animotions/affiche.jpg"
            alt="Affiche promotionnelle Animotions"
            className="w-[350px] rounded-2xl shadow-xl"
          />
        </div>
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
        <p>video à faire</p>
        <div className="flex justify-center">
          <div className="w-[1000px] rounded-3xl overflow-hidden shadow-2xl">
            <video src="" autoPlay loop muted playsInline className="w-full" />
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
          Concevoir pour un public spécifique implique d’adapter le design à des
          usages concrets et à des contraintes réelles.
        </p>
      </section>

      {/* Ressources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Ressources</h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/Animotions/dossier.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le dossier
          </a>

          <a
            href="https://www.figma.com/design/45KekTOIOBhrrQ8vTwXFT3/Untitled?node-id=0-1&p=f&t=JFNiIyNHV5KK1kpQ-0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le figma du projet
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Voir le site
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
