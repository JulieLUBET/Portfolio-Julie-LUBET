import { useState } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "projects">("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {currentPage === "home" && <Home />}
        {currentPage === "projects" && <Projects />}
      </main>

      <Footer />
    </div>
  );
}
