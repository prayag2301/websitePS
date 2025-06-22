import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Prayag Sharma</h1>
        <p>AI/ML Engineer & Developer</p>
        <div className="hero-links">
          <a href="https://github.com/prayag2301" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/prayagsharma07/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/prayagsharma07/overlay/1750353378019/single-media-viewer/?profileId=ACoAACzQ6EgBIy2Xs4jyqYo1gWSRM0TOL842fa0" download>
            <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
