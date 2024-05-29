import React from 'react';
import './About.css';
import profilePicture from '../assets/z.jpg';
import { Zoom } from 'react-awesome-reveal';

function About() {
  return (
    <section id="about" className="about-section">
      <Zoom cascade damping={0.1}  delay={500}>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className='head'>About Me</h2>
          <p>
            Hi, I'm Zaidi Abdullah Mwale, a passionate frontend web developer with experience in building dynamic and responsive websites using the latest web technologies. I specialize in JavaScript frameworks like React, and I have a keen eye for design and detail. My goal is to create beautiful and functional websites that provide a great user experience.
          </p>
          <p>
            In addition to web development, I have a strong background in project management and teamwork. I enjoy collaborating with others to bring creative ideas to life. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or spending time outdoors.
          </p>
        </div>
      </div>
      </Zoom>
    </section>
  );
}

export default About;
