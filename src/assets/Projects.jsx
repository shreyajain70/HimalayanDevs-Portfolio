import React, { useState } from "react";
import { MinorProjects } from "./MinorProjects";
import { LandingProjects } from "./LandingProject";
import { MajorProjects } from "./MajorProjects";

const Projects = () => {
  const [openSection, setOpenSection] = useState("minor");

  return (
    <section className="section projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <div
          className={`card project-toggle${openSection === "minor" ? " active" : ""}`}
          onClick={() => setOpenSection("minor")}
          style={{
            cursor: openSection === "minor" ? "default" : "pointer",
            opacity: openSection === "minor" ? 1 : 0.8,
          }}
        >
          Minor Projects
        </div>

        <div
          className={`card project-toggle${openSection === "landing" ? " active" : ""}`}
          onClick={() => setOpenSection("landing")}
        >
          Landing Pages
        </div>

        <div
          className={`card project-toggle${openSection === "major" ? " active" : ""}`}
          onClick={() => setOpenSection("major")}
        >
          Major Projects
        </div>
      </div>

   
      {openSection === "minor" && <MinorProjects />}
      {openSection === "landing" && <LandingProjects />}
      {openSection === "major" && <MajorProjects />}
    </section>
  );
};

export default Projects;
