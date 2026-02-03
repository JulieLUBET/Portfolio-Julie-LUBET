import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

import Epita from "./pages/projects/Epita";
import Ican from "./pages/projects/Ican";
import Atalian from "./pages/projects/Atalian";
import Syensqo from "./pages/projects/Syensqo";

type Page = "home" | "projects" | "about" | "project";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* HOME */}
      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} />
      )}

      {/* PROJECTS (page liste si tu l’utilises encore) */}
      {currentPage === "projects" && (
        <Projects
          onSelectProject={(project) => {
            setSelectedProject(project);
            setCurrentPage("project");
          }}
        />
      )}

      {/* ABOUT */}
      {currentPage === "about" && (
        <About
          openProject={(project) => {
            setSelectedProject(project);
            setCurrentPage("project");
          }}
        />
      )}

      {/* PAGES PROJETS */}
      {currentPage === "project" && selectedProject?.type === "epita" && (
        <Epita goBack={() => setCurrentPage("about")} />
      )}

      {currentPage === "project" && selectedProject?.type === "ican" && (
        <Ican goBack={() => setCurrentPage("about")} />
      )}

      {currentPage === "project" && selectedProject?.type === "atalian" && (
        <Atalian goBack={() => setCurrentPage("about")} />
      )}

      {currentPage === "project" && selectedProject?.type === "syensqo" && (
        <Syensqo goBack={() => setCurrentPage("about")} />
      )}
    </>
  );
}
