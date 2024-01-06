import React from 'react'

const ProjectCard = ({ title, description, image, demoUrl, codeUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard