import React from 'react';
import './Hero.css';
import profilePicture from '../assets/zaidi.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profilePicture} alt="Profile" className="hero-profile-pic" />
        <div className="hero-text">
          <h1>Hello, I'm Zaidi</h1>
          <p>I'm a passionate frontend web developer with experience in building dynamic and responsive websites using the latest web technologies.<br /> Welcome to my portfolio!</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
