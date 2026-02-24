import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

import Epita from "./pages/projects/Epita";
import AwakenMemory from "./pages/projects/AwakenMemory";
import Animotions from "./pages/projects/Animotions";
import Linkee from "./pages/projects/Linkee";
import Ephemera from "./pages/projects/Ephemera";
import PFE from "./pages/projects/PFE";
import Apli from "./pages/projects/Apli";
import Trove from "./pages/projects/Trove";
import Abundata from "./pages/projects/Abundata";
import Canard_enchaine from "./pages/projects/Canard_enchaine";
import Typewriter from "./pages/projects/Typewriter";
import WebDesign from "./pages/projects/WebDesign";

type Page = "home" | "projects" | "about" | "project";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentPage("project");
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* HOME */}
      {currentPage === "home" && <Home openProject={openProject} />}

      {/* PROJECTS */}
      {currentPage === "projects" && <Projects onSelectProject={openProject} />}

      {/* ABOUT */}
      {currentPage === "about" && <About openProject={openProject} />}

      {/* PAGES PROJETS */}
      {currentPage === "project" && selectedProject?.type === "PFE" && (
        <PFE goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Linkee" && (
        <Linkee goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Trove" && (
        <Trove goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Typewriter" && (
        <Typewriter goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Apli" && (
        <Apli goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Animotions" && (
        <Animotions goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "Abundata" && (
        <Abundata goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" &&
        selectedProject?.type === "Canard_enchaine" && (
          <Canard_enchaine goBack={() => setCurrentPage("projects")} />
        )}

      {currentPage === "project" && selectedProject?.type === "Ephemera" && (
        <Ephemera goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" && selectedProject?.type === "epita" && (
        <Epita goBack={() => setCurrentPage("projects")} />
      )}

      {currentPage === "project" &&
        selectedProject?.type === "awaken-memory" && (
          <AwakenMemory goBack={() => setCurrentPage("projects")} />
        )}

      {currentPage === "project" && selectedProject?.type === "web-design" && (
        <WebDesign goBack={() => setCurrentPage("projects")} />
      )}
    </>
  );
}
