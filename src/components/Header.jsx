import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <h1>My <span>Portfolio</span></h1>
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Skills</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
