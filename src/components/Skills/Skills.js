import React from 'react';
import './Skills.css';

const skills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'Keras', 'GCP', 'Data Manipulation', 'SQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Jira'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Skills</h2>
            <hr className="my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
