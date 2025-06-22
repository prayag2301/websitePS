import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Projects.css';
import medicalAnalysisGrid from '../../assets/Pasted Graphic.jpg';
import synthetic from '../../assets/synthetic.jpg'; // Assuming you have an image for the synthetic control project
import diligence from '../../assets/Untitled design.jpg'; // Assuming you have an image for the diligence project

const projects = [
  {
    title: 'VC Due Diligence Dashboard',
    description: 'Developed an interactive dashboard application for venture capital firms to streamline in-house analysis of potential investments. Features data visualization tools and AI-powered insights to aid investment decision-making processes.',
    link: 'https://github.com/prayag2301/restack-apppre-yc-dueDilligence',
    image: '',
    id: 'vc-due-diligence',
    fadeImage: diligence

  },
  {
    title: 'Synthetic Control for Causal Inference',
    description: 'A quasi-experimental study on the causal effect of carbon taxes on CO2 emissions in Sweden, using a Synthetic Control Method to construct a counterfactual “synthetic Sweden” and analyze its impact.',
    link: 'https://github.com/prayag2301/Synthetic_Control-for-Causal-Inference',
    image: '',
    id: 'synthetic-control',
    fadeImage: synthetic

  },
  {
    title: 'Medical Image Analysis',
    description: 'A deep learning model using Content Based Image Retreival that assists doctors in identifying diseases from medical images.',
    link: 'https://github.com/prayag2301/Captsone-CBIR',
    image: '',
    id: 'medical-image-analysis',
    fadeImage: medicalAnalysisGrid
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Projects</h2>
            <hr className="my-4" />
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <Card
                className="project-card"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Apply hover image and button to all cards */}
                <img className="fade-hover-image" src={project.fadeImage} alt={`${project.title}`} />
                <div className="card-overlay">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </div>
                <Button
                  className="fade-hover-btn"
                  variant="primary"
                  href={project.link}
                >
                  Learn More
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
