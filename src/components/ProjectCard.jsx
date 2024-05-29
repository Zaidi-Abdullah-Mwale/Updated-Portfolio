import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="project-link">View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
