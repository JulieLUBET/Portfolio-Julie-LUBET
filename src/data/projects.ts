export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    id: "epita",
    title: "EPITA – Année préparatoire",
    category: "Formation",
    description:
      "Découverte de l’informatique et point de départ de ma réorientation.",
    longDescription:
      "Lors de mon année préparatoire à EPITA, j’ai acquis des bases solides en logique et en informatique. Le projet de fin d’année, d’une durée d’environ six mois, a été déterminant dans mon orientation : il m’a permis de comprendre que je souhaitais évoluer vers le web, le design d’interfaces et l’UX/UI.",
    tags: ["Formation", "UX", "Logique"],
    images: ["/images/epita-1.png", "/images/epita-2.png"],
  },
  {
    id: "app",
    title: "Création d’une application",
    category: "UX / UI",
    description:
      "Projet de conception UX/UI d’une application mobile.",
    longDescription:
      "Projet réalisé à l’ICAN autour de la conception d’une application. Travail sur la réflexion UX, l’architecture de l’information et la conception d’interfaces.",
    tags: ["UX / UI", "App design"],
    images: ["/images/app-1.png", "/images/app-2.png"],
  },
  {
    id: "animotions",
    title: "Animotions",
    category: "Motion / UI",
    description:
      "Projet mêlant animation et narration visuelle.",
    longDescription:
      "Animotions est un projet explorant l’animation comme outil de narration et d’expérience utilisateur.",
    tags: ["Motion", "UI"],
    images: ["/images/anim-1.png"],
  },
  {
    id: "sites",
    title: "Sites web",
    category: "Web design",
    description:
      "Création et réflexion autour de plusieurs sites web.",
    longDescription:
      "Projet regroupant différents travaux de conception de sites web, axés sur l’ergonomie, la hiérarchie de l’information et le design.",
    tags: ["Web design", "UX"],
    images: ["/images/web-1.png"],
  },
];
