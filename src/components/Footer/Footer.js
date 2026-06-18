import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">
            <span className="footer__prompt">~/</span>prayag
          </span>
          <span className="footer__tagline">Building things that ship.</span>
        </div>
        <div className="footer__socials">
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
        <p className="footer__copy">
          © {new Date().getFullYear()} Prayag Sharma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
