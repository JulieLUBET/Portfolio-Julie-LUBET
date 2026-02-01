type NavbarProps = {
  currentPage: "home" | "projects";
  setCurrentPage: (page: "home" | "projects") => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <div className="font-bold text-lg">JUDEV</div>

        <nav className="flex gap-8 text-sm items-center">
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-4 py-2 rounded-md transition ${
              currentPage === "home"
                ? "bg-indigo-500 text-white"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            Accueil
          </button>

          <button
            onClick={() => setCurrentPage("projects")}
            className={`px-4 py-2 rounded-md transition ${
              currentPage === "projects"
                ? "bg-indigo-500 text-white"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            Projects
          </button>

          <button className="text-gray-700 hover:text-indigo-500">
            À propos
          </button>

          <button className="text-gray-700 hover:text-indigo-500">
            Contact
          </button>
        </nav>

      </div>
    </header>
  );
}
