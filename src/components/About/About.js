import React from 'react';
import './About.css';

const experiences = [
  {
    role: 'Founding Engineer',
    company: 'Kivo',
    description:
      'Building production LLM pipelines for structured documents (invoices, contracts, supplier quotes), embedding-based retrieval, and the FastAPI / PostgreSQL / Docker backend that runs it all.',
    period: 'Jun 2025 — Present',
    location: 'Berlin, DE',
  },
  {
    role: 'AI Development Intern',
    company: 'Rainmaker Society',
    description:
      'Shipped a CV/JD intelligence pipeline: document → structured embeddings → ranked candidate-job matches. Defined the precision/recall evaluation framework that drove ranking iteration.',
    period: 'Jan 2025 — May 2025',
    location: 'Berlin, DE',
  },
  {
    role: 'Research Intern — Data Analytics & Modeling',
    company: 'Atiko7 Climate Labs',
    description:
      'Improved DeepForest accuracy ~10% via dataset refinement and SageMaker retraining; fine-tuned Stable Diffusion for production sustainability use cases.',
    period: 'Apr 2024 — Jun 2024',
    location: 'Berlin, DE',
  },
  {
    role: 'Research Assistant',
    company: 'ESMT Berlin',
    description:
      'Built Python pipelines extracting structured financial data from SEC EDGAR filings; designed SQL data models for analytics dashboards.',
    period: 'Aug 2024 — Sep 2024',
    location: 'Berlin, DE',
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__head">
          <span className="section-eyebrow">About</span>
          <h2 className="section-heading">From research to production AI.</h2>
          <hr className="section-divider" />
        </div>

        <div className="about__grid">
          <div className="about__intro">
            <p>
              I'm an AI engineer focused on the unglamorous work that makes language
              models useful in production: ingestion pipelines, embedding stores,
              ranking logic, evaluation harnesses, and the latency budgets that
              keep them all honest.
            </p>
            <p>
              I currently lead engineering at <strong>Kivo</strong>, an EXIST
              Gründerstipendium–backed startup, where I architect end-to-end AI
              infrastructure for document intelligence. Before that I built the
              ranking and matching backbone at Rainmaker Society and contributed
              ML/ETL work across climate-tech and finance research.
            </p>
            <p>
              I hold an MSc in Analytics &amp; Artificial Intelligence from ESMT
              Berlin, with a thesis on hybrid CNN-Transformer models and
              pretrained ViTs under resource constraints.
            </p>
          </div>

          <ol className="timeline">
            {experiences.map((e) => (
              <li className="timeline__item" key={`${e.company}-${e.period}`}>
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <div className="timeline__header">
                    <h3>
                      {e.role} <span className="timeline__company">· {e.company}</span>
                    </h3>
                    <span className="timeline__meta">
                      {e.period} · {e.location}
                    </span>
                  </div>
                  <p>{e.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
