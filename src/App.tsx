import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "projects" | "about" | "project">("home");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "projects" && (
        <Projects
          onSelectProject={(project) => {
            setSelectedProject(project);
            setCurrentPage("project");
          }}
        />
      )}
      {currentPage === "project" && selectedProject && (
        <ProjectDetail project={selectedProject} />
      )}
      {currentPage === "about" && <About />}
    </>
  );
}
