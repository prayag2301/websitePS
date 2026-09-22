import React, { useRef, useState } from 'react';
import './Projects.css';
import { FaGithub, FaArrowUpRightFromSquare, FaGlobe } from 'react-icons/fa6';

const projects = [
  {
    title: 'Opvion',
    short: 'Opvion',
    blurb:
      'Co-founded and lead engineering for a wealth-tracking app that brings every account, currency, and investment into one place via open banking aggregation and AI-powered spending insights. Grew out of the UnternehmerTUM Startup Launchpad incubator and is now raising with accelerators and startup funds.',
    stack: ['Open Banking', 'AI Insights', 'Multi-Currency FX', 'Fintech'],
    website: 'https://opvionwealth.com',
    badge: 'Startup',
  },
  {
    title: 'Mogestrator',
    short: 'Mog',
    blurb:
      'Local code knowledge graph for coding agents. Indexes a repository (Python, TS/JS, Go, Rust) into an incremental SQLite graph, serves budget-scoped context via FTS + graph expansion and optional local embeddings, and detects when anchored code or remembered facts have drifted. Ships as a CLI and MCP server — code stays local, no API key.',
    stack: ['Python', 'SQLite / FTS5', 'MCP', 'Local Embeddings', 'PyPI'],
    link: 'https://github.com/prayag2301/Orchestration',
    demo: 'https://pypi.org/project/mogestrator/',
    demoLabel: 'PyPI',
    badge: 'Open source',
  },
  {
    title: 'F1 3D Engineering Dashboard',
    short: 'F1 3D',
    blurb:
      'Web dashboard that parses FIA technical regulations into parametric constraints, generates team-specific 3D F1 car models, and tracks per-race upgrade intelligence with NLP-extracted annotations.',
    stack: ['Next.js', 'React Three Fiber', 'FastAPI', 'PostgreSQL', 'Celery', 'spaCy'],
    link: 'https://github.com/prayag2301/f1-engineering-dashboard',
    demo: 'https://prayag2301.github.io/f1-engineering-dashboard/',
    badge: 'In progress',
  },
  {
    title: 'CV / JD Matching Pipeline (ACP)',
    short: 'ACP',
    blurb:
      'LLM-powered document intelligence: parse CVs and job descriptions with GPT-4, enrich features via DeepSeek, embed both sides, and rank candidate-job fit with similarity scoring and a custom evaluation framework.',
    stack: ['Python', 'OpenAI', 'DeepSeek', 'Embeddings', 'Streamlit'],
    link: 'https://github.com/prayag2301/ACP_proto',
    demo: 'https://projectesmt.streamlit.app',
    badge: 'Production',
  },
  {
    title: 'Hybrid CNN-Transformer ViTs (MSc Thesis)',
    short: 'ViT',
    blurb:
      'Master thesis benchmarking pretrained Vision Transformers and hybrid CNN-Transformer architectures under tight compute and data constraints — focused on what actually transfers when budgets are real.',
    stack: ['PyTorch', 'HuggingFace', 'ViT', 'Transfer Learning'],
    link: 'https://github.com/prayag2301/master_thesis',
    badge: 'Research',
  },
  {
    title: 'Synthetic Control for Causal Inference',
    short: 'SCM',
    blurb:
      'Quasi-experimental study using the Synthetic Control Method to estimate the causal effect of Sweden\'s 1991 carbon tax on per-capita CO₂ emissions, constructing a counterfactual "synthetic Sweden" from 14 OECD donors.',
    stack: ['R', 'Causal Inference', 'Panel Data'],
    link: 'https://github.com/prayag2301/Synthetic_Control-for-Causal-Inference',
    badge: 'Research',
  },
  {
    title: 'Medical Image Retrieval (CBIR)',
    short: 'CBIR',
    blurb:
      'Capstone Content-Based Image Retrieval system that helps clinicians surface visually similar prior cases from a medical image database, using VGG16 feature embeddings indexed in HDF5.',
    stack: ['Keras', 'VGG16', 'HDF5', 'Computer Vision'],
    link: 'https://github.com/prayag2301/Captsone-CBIR',
    badge: 'Capstone',
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const [originX, setOriginX] = useState('50%');
  const containerRef = useRef(null);

  // Card zooms out from under the hovered bubble.
  const select = (i, e) => {
    setActive(i);
    const b = e.currentTarget.getBoundingClientRect();
    const c = containerRef.current.getBoundingClientRect();
    setOriginX(`${b.left + b.width / 2 - c.left}px`);
  };

  const p = projects[active];

  return (
    <section id="projects" className="projects">
      <div className="projects__container" ref={containerRef}>
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

        <div className="projects__bubbles" role="tablist" aria-label="Projects">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`bubble${i === active ? ' is-active' : ''}`}
              style={{ '--i': i }}
              onMouseEnter={(e) => select(i, e)}
              onFocus={(e) => select(i, e)}
              onClick={(e) => select(i, e)}
            >
              <span className="bubble__label">{p.short}</span>
              <span className="bubble__badge">{p.badge}</span>
            </button>
          ))}
        </div>

        <article
          className="project-card"
          key={p.title}
          style={{ '--ox': originX }}
        >
          <div className="project-card__top">
            <span className="project-card__badge">{p.badge}</span>
            <a
              className="project-card__icon"
              href={p.link || p.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.link ? `${p.title} on GitHub` : `${p.title} website`}
            >
              {p.link ? <FaGithub /> : <FaGlobe />}
            </a>
          </div>
          <h3 className="project-card__title">{p.title}</h3>
          <p className="project-card__blurb">{p.blurb}</p>
          <ul className="project-card__stack">
            {p.stack.map((t, j) => (
              <li key={t} style={{ '--j': j }}>
                {t}
              </li>
            ))}
          </ul>
          <div className="project-card__actions">
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Source <FaArrowUpRightFromSquare />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                {p.demoLabel || 'Live'} <FaArrowUpRightFromSquare />
              </a>
            )}
            {p.website && (
              <a href={p.website} target="_blank" rel="noopener noreferrer">
                Website <FaArrowUpRightFromSquare />
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
