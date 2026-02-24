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
    id: "PFE",
    title: "PFE",
    description: "Conception d’une plateforme santé orientée prévention, orientation et soutien.",
    tags: ["UX / UI", "Product Design", "Recherche"],
    category: "UX /UI",
    longDescription: "Projet de fin d’études centré sur la conception d’une plateforme multi-maladies visant à améliorer la prévention, l’orientation et le soutien des personnes concernées. Cas d’étude : maladie de Lyme.",
    images: ["/images/pfe1.jpg"],
  },
  {
    id: "Linkee",
    title: "Campagne Linkee – Miaou GPT",
    description: "Campagne de sensibilisation à la précarité étudiante.",
    tags: ["DA", "Campagne", "affiches"],
    category: "Communication / Création",
    longDescription: "Campagne imaginée pour l’association Linkee visant à révéler la précarité étudiante aux étudiants eux-mêmes, à travers un concept conversationnel inspiré des interfaces d’IA.",
    images: ["/images/Linkee.png"],
  },
  {
    id: "Trove",
    title: "Trôve",
    category: "UX / UI Mobile",
    description: "Application mobile de recensement de brocantes.",
    longDescription: "Trôve est une application mobile conçue pour recenser les brocantes et vide-greniers, offrant une expérience utilisateur fluide et intuitive.",
    tags: ["UX Research", "UI", "Prototype"],
    images: ["/images/trove.png"],
  },
  {
    id: "Typewriter",
    title: "Typewriter Scrollytelling",
    description: "Refonte interactive d’un article sur l’art à la machine à écrire.",
    tags: ["UX", "Scrollytelling", "UI", "Prototype"],
    category: "UX / UI",
    longDescription: "Projet académique réalisé en 2e année de Bachelor Web & Communication Visuelle à l’ICAN. Transformation d’un article éditorial en expérience scrollytelling immersive intégrant animations typographiques, effets sonores et narration interactive.",
    images: ["/images/typewriter.png"]
  },
  {
    id: "Apli",
    title: "APLI",
    category: "App design",
    description:
      "Refonte UX/UI d’une application destinée aux éleveurs laitiers.",
    longDescription:
      "Projet réalisé à l’ICAN autour de la conception d’une application. Travail sur la réflexion UX, l’architecture de l’information et la conception d’interfaces.",
    tags: ["UX", "UI", "Design Thinking"],
    images: ["/images/Apli.png"],
  },
  {
    id: "Animotions",
    title: "Animotions",
    category: "Web design / Motion design",
    description:
      "Plateforme interactive pour aider les enfants à comprendre et exprimer leurs émotions.",
    longDescription:
      "Animotions est un projet explorant l’animation comme outil de narration et d’expérience utilisateur.",
    tags: ["UX", "UI", "Motion", "Web"],
    images: ["/images/Animotions.png"],
  },
  {
    id: "Abundata",
    title: "ABUNDATA",
    description: "Création d’une identité et d’une plateforme engagée autour de la surconsommation.",
    tags: ["Branding", "UX", "Logo", "UI"],
    category: "Branding & UX",
    longDescription: "Projet de création d’identité et de plateforme digitale visant à sensibiliser les 18–25 ans aux excès de la surconsommation hérités des Trente Glorieuses.",
    images: ["/images/abundata.png"],
  },
  {
    id: "Canard_enchaine",
    title: "Refonte du Canard enchainé",
    description: "Refonte de l’expérience mobile du journal en intégrant animation et interaction.",
    tags: ["UX", "Refonte", "App mobile"],
    category: "UX & Interaction",
    longDescription: "Projet de prototypage d’application mobile visant à adapter Le Canard Enchaîné au format numérique en enrichissant l’expérience de lecture par des animations interactives.",
    images: ["/images/canard.png"]
  },
  {
    id: "Ephemera",
    title: "Ephemera",
    description: "Plateforme générative immersive autour des papillons et des émotions.",
    tags: ["UX", "Generative Design", "Interaction"],
    category: "Expérience interactive",
    longDescription: "Projet de création d’un site génératif permettant de concevoir des papillons interactifs tout en sensibilisant à la disparition de certaines espèces en France.",
    images: ["/images/ephemera.png"]
  },
  {
    id: "awaken-memory",
    title: "Awaken Memory",
    category: "Epita",
    description:
      "Création d'un site web pour la promotion d'un jeu vidéo indépendant.",
    longDescription:
      "Lors de mon année préparatoire à EPITA, j’ai acquis des bases solides en logique et en informatique. Le projet de fin d’année, d’une durée d’environ six mois, a été déterminant dans mon orientation : il m’a permis de comprendre que je souhaitais évoluer vers le web, le design d’interfaces et l’UX/UI.",
    tags: ["Epita", "UX", "Jeux vidéo"],
    images: ["/images/AwakenMemory.jpg"],
  },
  {
    id: "",
    title: "map interactive",
    description: "",
    tags: [],
    category: "",
    longDescription: "",
    images: []
  },
  {
    id: "",
    title: "affiche Clash Flow Positif",
    description: "",
    tags: [],
    category: "",
    longDescription: "",
    images: []
  },
  {
    id: "",
    title: "appli café",
    description: "",
    tags: [],
    category: "",
    longDescription: "",
    images: []
  },
  {
    id: "",
    title: "appli sport",
    description: "",
    tags: [],
    category: "",
    longDescription: "",
    images: []
  },
  {
    id: "",
    title: "Mes créations visuelles",
    description: "",
    tags: [],
    category: "",
    longDescription: "",
    images: []
  },
];
