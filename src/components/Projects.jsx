import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Monitor, Box, Rocket } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      style={{ perspective: '1000px', marginBottom: '2rem', width: '100%', height: '450px', cursor: 'pointer' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="glass-card" style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', height: '100%', overflow: 'hidden' }}>
          <div style={{ 
            height: '12rem', 
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(191, 0, 255, 0.1))', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '1.5rem' 
          }}>
            <Monitor size={64} style={{ color: '#00f5ff', opacity: 0.6 }} />
          </div>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'monospace', color: 'white' }}>
                {project.title}
              </h3>
              <span style={{ fontSize: '10px', backgroundColor: 'rgba(0, 245, 255, 0.1)', color: '#00f5ff', padding: '0.25rem 0.5rem', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
                [ {project.tag} ]
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', minHeight: '3rem' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map(t => (
                <span key={t} className="cyber-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="glass-card" style={{ 
          position: 'absolute', 
          inset: 0, 
          backfaceVisibility: 'hidden', 
          transform: 'rotateY(180deg)', 
          height: '100%', 
          padding: '2.5rem',
          backgroundColor: 'rgba(10, 30, 45, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#00f5ff', textTransform: 'uppercase' }}>PROJECT_LOG</h3>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', lineHeight: '1.6', marginBottom: '1.5rem' }}>{project.fullDescription}</p>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(0, 245, 255, 0.6)', marginBottom: '0.5rem' }}>KEY_FEATURES:</div>
              {project.features.map(f => (
                <div key={f} style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#00f5ff' }} /> {f}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <a href={project.github} style={{ flex: 1, padding: '0.75rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              SOURCE_CODE
            </a>
            <a href={project.demo} style={{ flex: 1, padding: '0.75rem', textAlign: 'center', backgroundColor: '#00f5ff', color: 'black', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
              LIVE_DEMO
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('ALL');
  
  const projects = [
    {
      title: 'CYBER_CART',
      description: 'Full stack E-commerce engine with Spring Boot and React.',
      fullDescription: 'A high-performance trading platform built on the Cyber-Stack. Features real-time inventory tracking, secure JWT authentication, and a fully reactive UI.',
      tag: 'FULL_STACK',
      tech: ['Java', 'Spring', 'React', 'MySQL'],
      features: ['Real-time sync', 'Stripe Integration', 'Admin Dashboard'],
      github: '#',
      demo: '#'
    },
    {
      title: 'VOID_SOCIAL',
      description: 'Distributed social network for tech enthusiasts.',
      fullDescription: 'An encrypted social layer designed for developers. Implements custom socket-based real-time communication and a graph-based relationship database.',
      tag: 'BACKEND',
      tech: ['Java', 'Hibernate', 'Redis', 'Kafka'],
      features: ['WebSocket chat', 'GraphDB logic', 'Microservices'],
      github: '#',
      demo: '#'
    },
    {
      title: 'HUD_DASHBOARD',
      description: 'Sci-fi inspired data visualization platform.',
      fullDescription: 'A complex data monitoring interface mimicking advanced computer systems. Uses D3.js and Three.js for immersive data storytelling.',
      tag: 'DATA ANALYTICS',
      tech: ['React', 'Three.js', 'D3', 'Framer'],
      features: ['3D Visuals', 'GPU-accelerated', 'Custom HUD'],
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.tag === filter);

  return (
    <div id="projects" style={{ padding: '6rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-header-container">
          <h2 className="section-header-title glitch-text" data-text="PROJECT_ARCHIVE">
            PROJECT_ARCHIVE
          </h2>
          <div className="section-header-line" />
        </div>

        <div className="responsive-flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f5ff', fontFamily: 'monospace', fontSize: '12px' }}>
              <div style={{ width: '2rem', height: '1px', backgroundColor: '#00f5ff' }} />
              <span>DEPLOYED_PROJECTS: {projects.length}</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['ALL', 'FULL_STACK', 'DATA ANALYTICS', 'FRONTEND', 'BACKEND'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  fontSize: '10px', 
                  fontFamily: 'monospace', 
                  border: '2px solid',
                  backgroundColor: filter === f ? '#00f5ff' : 'transparent',
                  borderColor: filter === f ? '#00f5ff' : 'rgba(255, 255, 255, 0.1)',
                  color: filter === f ? 'black' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
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
