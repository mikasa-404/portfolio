import React from "react";
import { forwardRef } from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import logo from "../assets/Screenshot 2024-01-05 at 5.49.24 PM.png";
import logo2 from "../assets/Screenshot from 2024-01-06 15-34-14.png";

import { RoughNotation } from "react-rough-notation";
import { TypeAnimation } from "react-type-animation";

const Projects = forwardRef((props, ref) => {
  const projectData1 = {
    title: "FoodyVille- Food Ordering Application",
    description:
      "Developed a robust food ordering application with dynamic routing, React-Redux for efficient cart management, custom hooks for enhanced functionality, and user-friendly features like a search bar, custom shimmer UI, and lazy loading for improved performance. Ensured a seamless user experience with complete responsiveness.",
    image: logo,
    demoUrl: "https://foodyville.netlify.app",
    codeUrl: "https://github.com/mikasa-404/food-ordering-app",
  };
  const projectData2 = {
    title: "Youtube Clone",
    description:
      "Developed a high-quality video streaming platform which utilizes YouTube API to provide access to an extensive video library. Featuring slide sidebar, infinite scroll, well-optimized search leveraging live API, debouncing, and caching for swift and real-time results, as well as N-level nested comment section and live chat display",
    image: logo2,
    demoUrl: "https://priya-youtube.netlify.app/",
    codeUrl: "https://github.com/mikasa-404/yt-clone",
  };

  return (
    <div ref={ref} className="projects">
      <div className="section-heading">
        My{" "}
        <span className="section-sub">
          <TypeAnimation
            sequence={[" Projects", 1000]}
            speed={50}
            repeat={Infinity}
          />
        </span>
      </div>
      <div className="section-subheading">
      Featured Web Development{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#befab1e7"
          animate={true}
          strokeWidth={2}
          iterations={2}
        >
         Projects
        </RoughNotation>
      </div>
      <div className="card-container">
        <ProjectCard {...projectData1} />
        <ProjectCard {...projectData2} />
      </div>
    </div>
  );
});

export default Projects;
