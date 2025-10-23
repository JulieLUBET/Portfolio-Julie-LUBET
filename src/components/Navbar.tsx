import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2"/>
        JU<span className="text-secondary">DEV</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li><a href="#" className="btn btn-sm btn-ghost">
            Accueil</a>
        </li>
        <li><a href="#" className="btn btn-sm btn-ghost">
            Accueil</a>
        </li>
        <li><a href="#" className="btn btn-sm btn-ghost">
            Accueil</a>
        </li>
        <li><a href="#" className="btn btn-sm btn-ghost">
            Accueil</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
