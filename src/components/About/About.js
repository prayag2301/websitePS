import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">About Me</h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-4">
              I am a passionate and driven AI Engineer with a strong foundation in full-stack development. My expertise lies in building intelligent systems and applications that solve real-world problems. I have a proven track record of developing and deploying machine learning models, and I am always eager to learn new technologies and take on challenging projects. Seeking new opportunities to apply my skills and contribute to a dynamic team!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
