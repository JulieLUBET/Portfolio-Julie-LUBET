type Props = {
  currentPage: string;
  setCurrentPage: (page: any) => void;
};

export default function Navbar({ currentPage, setCurrentPage }: Props) {
  const linkClass = (page: string) =>
    `px-4 py-2 rounded-md text-sm ${
      currentPage === page ? "bg-indigo-500 text-white" : "text-gray-700"
    }`;

  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <div className="font-bold text-lg">JUDEV</div>

      <div className="flex gap-4">
        <button className={linkClass("home")} onClick={() => setCurrentPage("home")}>
          Accueil
        </button>
        <button className={linkClass("projects")} onClick={() => setCurrentPage("projects")}>
          Projects
        </button>
        <button className={linkClass("about")} onClick={() => setCurrentPage("about")}>
          À propos
        </button>
      </div>
    </nav>
  );
}
