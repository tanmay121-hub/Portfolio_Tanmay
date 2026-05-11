import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Monitor } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{ perspective: '1000px', width: '100%', height: '440px', cursor: 'pointer' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="glass-card" style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', height: '100%', overflow: 'hidden' }}>
          <div style={{
            height: '11rem',
            background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(191,0,255,0.08))',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Monitor size={60} style={{ color: 'var(--neon-cyan)', opacity: 0.5 }} />
          </div>
          <div style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'white', letterSpacing: '0.05em' }}>
                {project.title}
              </h3>
              <span className="cyber-tag">[ {project.tag} ]</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: '1.6' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tech.map(t => (
                <span key={t} className="cyber-tag">{t}</span>
              ))}
            </div>
            <div style={{ marginTop: '1.25rem', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(0,245,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              [ HOVER TO VIEW DETAILS ]
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="glass-card accent-card" style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)', height: '100%', padding: '2rem',
          backgroundColor: 'rgba(5, 20, 35, 0.95)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              PROJECT_LOG
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', lineHeight: '1.65', marginBottom: '1.25rem' }}>{project.fullDescription}</p>
            <div>
              <div className="cyber-label" style={{ marginBottom: '0.6rem' }}>KEY_FEATURES:</div>
              {project.features.map(f => (
                <div key={f} style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--neon-cyan)', borderRadius: '1px', flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="cyber-button-outline" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '11px', padding: '0.6rem' }}>
              <Github size={14} /> SOURCE
            </a>
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="cyber-button" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '11px', padding: '0.6rem' }}>
                <ExternalLink size={14} /> LIVE_DEMO
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FILTERS = ['ALL', 'FULL_STACK', 'BACKEND'];

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      title: 'EVENT_MANAGEMENT_PLATFORM',
      description: 'Multi-role event ecosystem with automated lifecycle workflows and stateless JWT security.',
      fullDescription: 'Architected a multi-role event ecosystem with automated lifecycle workflows, accelerating event deployment efficiency by 45%. Engineered a stateless security framework via Spring Security and JWT, reducing server-side authentication latency by 55%.',
      tag: 'FULL_STACK',
      tech: ['Spring Boot', 'JWT', 'React', 'MySQL', 'JPA'],
      features: [
        'Multi-role event ecosystem with automated workflows',
        'Stateless JWT security framework via Spring Security',
        'Unique join-code team-formation engine (90% fewer errors)',
        'Vite + Axios Interceptors for 3x build speed'
      ],
      github: 'https://github.com/tanmay121-hub/', demo: '#'
    },
    {
      title: 'ENTERPRISE_BILLING_SYSTEM',
      description: 'Comprehensive invoicing platform handling Auth, Inventory, and Billing in a unified flow.',
      fullDescription: 'Engineered a comprehensive invoicing platform handling Auth, Inventory, and Billing in a unified flow. Automated document workflows using OpenPDF and JavaMail, reducing manual invoice processing time by 70%.',
      tag: 'FULL_STACK',
      tech: ['Spring Boot', 'React', 'MySQL', 'Tailwind'],
      features: [
        'Unified Auth, Inventory & Billing flow',
        'Automated invoicing with OpenPDF & JavaMail (70% faster)',
        'Automated GST calculation & real-time stock validation',
        'Spring Security + BCrypt (90% privacy compliance)'
      ],
      github: 'https://github.com/tanmay121-hub/', demo: '#'
    }
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.tag === filter);

  return (
    <div>
      <div className="max-w-7xl mx-auto">

        {/* Unified Section Header */}
        <div className="section-header-container">
          <span className="section-header-eyebrow">MODULE_04</span>
          <h2 className="section-header-title glitch-text" data-text="PROJECT_ARCHIVE">
            PROJECT_ARCHIVE
          </h2>
          <div className="section-header-line" />
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-cyan)', fontFamily: 'monospace', fontSize: '11px' }}>
            <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'var(--neon-cyan)' }} />
            DEPLOYED_PROJECTS: {projects.length}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {FILTERS.map(f => (
              <motion.button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`project-filter-btn${filter === f ? ' project-filter-btn--active' : ''}`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
