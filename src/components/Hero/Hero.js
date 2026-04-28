import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/Prayag_Sharma_CV.pdf`;

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner fade-up">
        <h1 className="hero__title">
          <span className="hero__title-accent">Prayag Sharma</span>
        </h1>
        <p className="hero__subtitle">
          Founding Engineer @ Kivo. AI/ML engineer building LLM pipelines and backend infrastructure.
        </p>

        <div className="hero__actions">
          <a className="btn-primary hero__cta" href="#projects">
            See my work
          </a>
          <a className="btn-outline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <FaFileDownload style={{ marginRight: 8 }} />
            CV
          </a>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/prayag2301"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prayagsharma07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:prayagsharma2001@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
