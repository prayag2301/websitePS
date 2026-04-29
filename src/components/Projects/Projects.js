import React from 'react';
import './Projects.css';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
  {
    title: 'F1 3D Engineering Dashboard',
    blurb:
      'Web dashboard that parses FIA technical regulations into parametric constraints, generates team-specific 3D F1 car models, and tracks per-race upgrade intelligence with NLP-extracted annotations.',
    stack: ['Next.js', 'React Three Fiber', 'FastAPI', 'PostgreSQL', 'Celery', 'spaCy'],
    link: 'https://github.com/prayag2301/f1-engineering-dashboard',
    demo: 'https://prayag2301.github.io/f1-engineering-dashboard/',
    badge: 'In progress',
  },
  {
    title: 'CV / JD Matching Pipeline (ACP)',
    blurb:
      'LLM-powered document intelligence: parse CVs and job descriptions with GPT-4, enrich features via DeepSeek, embed both sides, and rank candidate-job fit with similarity scoring and a custom evaluation framework.',
    stack: ['Python', 'OpenAI', 'DeepSeek', 'Embeddings', 'Streamlit'],
    link: 'https://github.com/prayag2301/ACP_proto',
    demo: 'https://projectesmt.streamlit.app',
    badge: 'Production',
  },
  {
    title: 'Hybrid CNN-Transformer ViTs (MSc Thesis)',
    blurb:
      'Master thesis benchmarking pretrained Vision Transformers and hybrid CNN-Transformer architectures under tight compute and data constraints — focused on what actually transfers when budgets are real.',
    stack: ['PyTorch', 'HuggingFace', 'ViT', 'Transfer Learning'],
    link: 'https://github.com/prayag2301/master_thesis',
    badge: 'Research',
  },
  {
    title: 'Synthetic Control for Causal Inference',
    blurb:
      'Quasi-experimental study using the Synthetic Control Method to estimate the causal effect of Sweden\'s 1991 carbon tax on per-capita CO₂ emissions, constructing a counterfactual "synthetic Sweden" from 14 OECD donors.',
    stack: ['R', 'Causal Inference', 'Panel Data'],
    link: 'https://github.com/prayag2301/Synthetic_Control-for-Causal-Inference',
    badge: 'Research',
  },
  {
    title: 'Medical Image Retrieval (CBIR)',
    blurb:
      'Capstone Content-Based Image Retrieval system that helps clinicians surface visually similar prior cases from a medical image database, using VGG16 feature embeddings indexed in HDF5.',
    stack: ['Keras', 'VGG16', 'HDF5', 'Computer Vision'],
    link: 'https://github.com/prayag2301/Captsone-CBIR',
    badge: 'Capstone',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__head">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-heading">Projects.</h2>
          <hr className="section-divider" />
          <p className="projects__sub">
            A mix of shipped products, research, and side experiments. More on{' '}
            <a
              href="https://github.com/prayag2301"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card__top">
                <span className="project-card__badge">{p.badge}</span>
                <a
                  className="project-card__icon"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__blurb">{p.blurb}</p>
              <ul className="project-card__stack">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-card__actions">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  Source <FaArrowUpRightFromSquare />
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    Live <FaArrowUpRightFromSquare />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
