import { Mail } from "lucide-react";
import img from "../assets/pp.png";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row 
    justify-center items-center md:my-32 my-10"
    >
      <div className="flex flex-col">
        <h1
          className="text-3xl md:text-4xl font-bold text-center md:text-left mt-4 md:mt-0">
          Salue je m'appelle <br />
          <span className="text-accent">Julie LUBET</span>
        </h1>
        <h1
          className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          UX & UI <br />
          <span>Design</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Mon objectif : rendre les contenus accessibles et engageants <br />
          grâce à un design soigné et une réflexion centrée utilisateur.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
          <a href="" className="btn btn-accent md:w-fit">
            Découvrir mes projets
          </a>
          <a href="" className="btn btn-accent md:w-fit flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
        </div>
      </div>

      <div className="md:ml-60">
        <img src={img} alt="design illustration"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",}}/>
      </div>
    </div>
  );
};

export default Home;
