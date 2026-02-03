export default function About({
  openProject,
}: {
  openProject: (project: any) => void;
}) {
  const experiences = [
    {
      title: "Atalian",
      desc: "Projet réalisé dans le cadre de ma formation à l’ICAN, axé sur la conception d’interfaces UI et UX.",
      image: "/images/Atalian.png",
      type: "atalian",
      side: "left",
    },
    {
      title: "ICAN",
      desc: "Bachelor Web & Communication numérique avec des projets orientés UX/UI et prototypage.",
      image: "/images/Ican.png",
      type: "ican",
      side: "right",
    },
    {
      title: "Syensqo",
      desc: "Stage en communication et graphisme, création de supports visuels et réflexion UX.",
      image: "/images/Syensqo.png",
      type: "syensqo",
      side: "left",
    },
    {
      title: "EPITA",
      desc: "Classe préparatoire ingénieur, développement de la logique et de la rigueur technique.",
      image: "/images/Epita.png",
      type: "epita",
      side: "right",
    },
  ];

  return (
    <section className="px-12 py-20 max-w-6xl mx-auto">
      {/* Intro */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="relative w-48 h-48">
          <img
            src="/images/pp.png"
            alt="Photo de Julie Lubet"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-indigo-400"></div>
        </div>

        <div className="max-w-xl">
          <p className="text-gray-500 mb-2">Je m’appelle Julie</p>
          <h1 className="text-3xl font-bold mb-4">UI & UX Designer</h1>
          <p className="text-gray-600 leading-relaxed">
            Je suis étudiante en web et communication numérique à l’ICAN et je
            souhaite me spécialiser en UI/UX Design à travers un Master en
            alternance.
          </p>
        </div>
      </div>

      {/* Parcours */}
      <div className="relative mb-24">
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-indigo-400 -translate-x-1/2"></div>

        <div className="flex flex-col gap-24">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`flex w-full ${
                item.side === "left"
                  ? "justify-start pr-12"
                  : "justify-end pl-12"
              }`}
            >
              <div className="relative bg-white rounded-2xl shadow-lg w-[720px] flex items-center overflow-hidden">
                {/* Point */}
                <div
                  className={`absolute top-1/2 ${
                    item.side === "left" ? "-right-10" : "-left-10"
                  } -translate-y-1/2`}
                >
                  <div className="w-4 h-4 bg-indigo-500 rounded-full relative">
                    <div className="absolute inset-[-6px] border-2 border-dotted border-indigo-400 rounded-full"></div>
                  </div>
                </div>

                {/* Texte */}
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <button
                    onClick={() =>
                      openProject({
                        title: item.title,
                        image: item.image,
                        type: item.type,
                      })
                    }
                    className="inline-block border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
                  >
                    voir les projets
                  </button>
                </div>

                {/* Image */}
                <div className="w-[300px] h-[200px] mr-6 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
