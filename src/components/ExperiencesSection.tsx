export default function ExperiencesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      
      <h2 className="text-3xl font-bold mb-20">
        Mes <span className="text-indigo-500">experiences</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-32">

        {/* ===== COLONNE GAUCHE ===== */}
        <div className="relative">
          {/* ligne verticale */}
          <div className="absolute left-4 top-0 h-full border-l-2 border-dotted border-indigo-400" />

          <div className="space-y-20 pl-20">

            {/* ITEM */}
            <div className="relative">
              {/* point */}
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <h3 className="font-semibold">Graphiste</h3>
              <p className="text-sm text-gray-500">ATALIAN · Alternance</p>
              <p className="text-xs text-gray-400">Sept 2024 – Aujourd’hui</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-gray-800" />
              </div>

              <h3 className="font-semibold">
                Chargée de communication et de graphisme
              </h3>
              <p className="text-sm text-gray-500">Syensqo · Stage</p>
              <p className="text-xs text-gray-400">Fév 2024 – Juil 2024</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <h3 className="font-semibold">Assistante administratif</h3>
              <p className="text-sm text-gray-500">Solvay · Intérimaire</p>
              <p className="text-xs text-gray-400">Août 2022</p>
            </div>

          </div>
        </div>

        {/* ===== COLONNE DROITE ===== */}
        <div className="relative">
          {/* ligne verticale */}
          <div className="absolute left-4 top-0 h-full border-l-2 border-dotted border-indigo-400" />

          <div className="space-y-20 pl-20">

            <div className="relative">
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <h3 className="font-semibold">ICAN</h3>
              <p className="text-sm text-gray-500">Bachelor</p>
              <p className="text-xs text-gray-400">2023 – Aujourd’hui</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-gray-800" />
              </div>

              <h3 className="font-semibold">
                EPITA : École d’ingénieurs en Informatique
              </h3>
              <p className="text-sm text-gray-500">Prépa ingénieur</p>
              <p className="text-xs text-gray-400">2022 – 2023</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-1 flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full border-2 border-dotted border-indigo-400" />
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <h3 className="font-semibold">Lycée Louis Armand</h3>
              <p className="text-sm text-gray-500">
                Bac général · Spécialité Maths & NSI
              </p>
              <p className="text-xs text-gray-400">2019 – 2022</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
