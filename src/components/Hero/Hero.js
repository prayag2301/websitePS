import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner fade-up">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Building @ Kivo · open to interesting problems
        </span>

        <p className="hero__kicker">Founding Engineer · AI/ML</p>

        <h1 className="hero__title">
          <span className="hero__title-accent">Prayag Sharma</span>
        </h1>
        <p className="hero__subtitle">
          I build production LLM pipelines and the backend infrastructure that
          ships them.
        </p>

        <div className="hero__actions">
          <a className="btn-primary hero__cta" href="#projects">
            See what I&apos;ve built
          </a>
          <a className="btn-outline hero__cta" href="#contact">
            Let&apos;s build something
            <FaArrowRight style={{ marginLeft: 8, fontSize: '0.8em' }} />
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
