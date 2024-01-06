import React from "react";
import { forwardRef } from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import logo from "../assets/Screenshot 2024-01-05 at 5.49.24 PM.png";

const Projects = forwardRef((props, ref) => {
  const projectData1 = {
    title: "FoodyVille- Food Ordering Application",
    description: "Developed a robust food ordering application with dynamic routing, React-Redux for efficient cart management, custom hooks for enhanced functionality, and user-friendly features like a search bar, custom shimmer UI, and lazy loading for improved performance. Ensured a seamless user experience with complete responsiveness.",
    image: logo,
    demoUrl: "https://foodyville.netlify.app",
    codeUrl: "https://github.com/mikasa-404/food-ordering-app",
  };
  const projectData2={
    title:"Youtube Clone",
  }

  return (
    <div ref={ref} className="projects">
      <div className="heading">Projects</div>
      <div className="card-container">
        <ProjectCard {...projectData1} />
        {/* <ProjectCard {...projectData} />
        <ProjectCard {...projectData} />
 */}
      </div>
    </div>
  );
});

export default Projects;
