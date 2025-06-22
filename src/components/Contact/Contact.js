
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contact</h2>
            <hr className="my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="contact-text">
              Feel free to reach out to me for any inquiries or collaborations.
            </p>
            <a href="mailto:prayagsharma2001@gmail.com" className="btn btn-primary btn-xl">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
