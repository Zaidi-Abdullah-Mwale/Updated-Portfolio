import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import project1Image from '../assets/7.jpg';
import project2Image from '../assets/beats.jpg';
import {Slide } from "react-awesome-reveal";

const projects = [
  {
    title: 'HTML/CSS',
    description: 'Proficient in HTML nad CSS.',
    image: project1Image,
    link: '#'
  },
  {
    title: 'JAVASCRIPT',
    description: 'Proficient in Javascript.',
    image: project2Image,
    link: '#'
  },
  {
    title: 'REACT JS',
    description: 'Proficient in React js.',
    image: project2Image,
    link: '#'
  },
  {
    title: 'TAILWIND CSS',
    description: 'Proficient in Tailwind css.',
    image: project2Image,
    link: '#'
  },
  {
    title: 'BOOTSTRAP5',
    description: 'Proficient in Bootstrap5.',
    image: project2Image,
    link: '#'
  },
  {
    title: 'NEXT JS',
    description: 'Proficient in Next Js.',
    image: project2Image,
    link: '#'
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Skills</h2>
      <Slide  cascade damping={0.1}  delay={500}>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      </Slide >
    </section>
  );
}

export default Projects;
