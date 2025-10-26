import Title from "./Title";

import imgHTML from "../assets/skills/html.png";
import imgCSS from "../assets/skills/css.png";
import imgJS from "../assets/skills/js.png";
import imgReact from "../assets/skills/react.png";
import imgFigma from "../assets/skills/figma.png";
import imgCanva from "../assets/skills/canva.webp";
import imgPS from "../assets/skills/photoshop.png";
import imgAI from "../assets/skills/illustrator.png";
import imgID from "../assets/skills/indesign.png";

import atalian from "../assets/skills/atalian.png";
import syensqo from "../assets/skills/syensqo.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgReact },
    { id: 5, name: "Figma", image: imgFigma },
    { id: 6, name: "Canva", image: imgCanva },
    { id: 7, name: "Photoshop", image: imgPS },
    { id: 8, name: "Illustrator", image: imgAI },
    { id: 9, name: "InDesign", image: imgID },
];

const experiences = [
    {
        id: 1,
        role: "Graphiste",
        company: "ATALIAN",
        period: "Sep 2024 - Sep 2026",
        description: [
            "Création de supports de communication visuelle pour divers clients et l'entreprise.",
            "Création de vidéos de supports de communication et de tutoriels.",
        ],
        image: atalian,
    },
    {
        id: 2,
        role: "Graphiste en communication interne",
        company: "SYENSQO",
        period: "fév 2024 - juil 2024",
        description: [
            "Création de supports de communication visuelle pour divers clients et l'entreprise.",
            "Création de vidéos de supports de communication et de tutoriels.",
        ],
        image: syensqo,
    },
]; 

const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences;