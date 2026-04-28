import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'AI / ML',
    items: [
      'PyTorch',
      'HuggingFace',
      'LangChain',
      'LLM APIs',
      'Embeddings',
      'Vector DBs',
      'RAG',
      'Stable Diffusion',
    ],
  },
  {
    title: 'Backend & Infra',
    items: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Docker',
      'REST APIs',
      'Celery / Redis',
    ],
  },
  {
    title: 'Cloud & Deployment',
    items: ['AWS SageMaker', 'GCP Vertex AI', 'Azure Functions', 'GitHub Actions'],
  },
  {
    title: 'Analytics & Optimization',
    items: [
      'Ranking Algorithms',
      'Similarity Scoring',
      'KPI Modeling',
      'Causal Inference',
      'SQL',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__head">
          <span className="section-eyebrow">Toolkit</span>
          <h2 className="section-heading">Skills.</h2>
          <hr className="section-divider" />
          <p className="skills__sub">
            The stack I reach for when shipping AI products end-to-end.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3 className="skill-group__title">{g.title}</h3>
              <ul className="skill-group__list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
