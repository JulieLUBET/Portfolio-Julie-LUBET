export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-gray-500 mb-2">Salut je m’appelle</p>
          <p className="text-indigo-500 font-semibold mb-2">Julie LUBET</p>

          <h1 className="text-5xl font-bold mb-4">
            UI & UX <span className="font-light">Designer</span>
          </h1>

          <p className="text-gray-600 max-w-md mb-8">
            Mon objectif : rendre les contenus accessibles et engageants
            grâce à un design soigné et une réflexion centrée utilisateur.
          </p>

          <div className="flex gap-4">
            <div className="bg-indigo-500 text-white px-6 py-3 rounded-md">
              Découvrir mes projets
            </div>
            <div className="bg-indigo-100 text-indigo-600 px-6 py-3 rounded-md">
              En savoir plus
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[420px] h-[420px] bg-indigo-500 rounded-[50%_40%_60%_40%]" />
          <div className="w-64 h-80 bg-gray-300 rounded-[40%] relative" />
        </div>

      </div>
    </section>
  );
}
