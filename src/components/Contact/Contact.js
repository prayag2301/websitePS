import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__card">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-heading">Let's build something.</h2>
          <p className="contact__text">
            Open to AI engineering collaborations, founding-team conversations,
            and interesting LLM / retrieval problems. Berlin-based, happy to chat
            remote.
          </p>

          <div className="contact__actions">
            <a className="btn-primary" href="mailto:prayagsharma2001@gmail.com">
              <FaEnvelope style={{ marginRight: 8 }} />
              prayagsharma2001@gmail.com
            </a>
            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/prayagsharma07/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/prayag2301"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
