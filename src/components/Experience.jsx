import React from 'react';
import { motion } from 'framer-motion';

const TimelineNode = ({ item, index }) => (
  <div className="flex gap-8 mb-20 relative" style={{ display: 'flex', gap: '2rem', marginBottom: '5rem', position: 'relative' }}>
    {/* Connector Line */}
    <div style={{ position: 'absolute', left: '39px', top: '2.5rem', bottom: '-5rem', width: '2px', background: 'linear-gradient(to bottom, #00f5ff, #bf00ff, transparent)', opacity: 0.3 }} />
    
    <div style={{ flexShrink: 0, position: 'relative' }}>
      <div className="glass-card flex items-center justify-center" style={{ width: '5rem', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(0, 245, 255, 0.5)', borderRadius: '0.5rem' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#00f5ff', borderRadius: '50%', boxShadow: '0 0 10px #00f5ff' }}
        />
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{ flexGrow: 1, paddingTop: '0.5rem' }}
    >
      <div className="text-[10px] font-mono text-cyan-500 mb-2 tracking-widest" style={{ fontSize: '10px', color: '#00f5ff', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>{item.date}</div>
      <h3 className="text-2xl font-black mb-1 uppercase tracking-tight" style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.25rem' }}>{item.title}</h3>
      <div className="font-mono text-sm mb-4" style={{ color: '#bf00ff', fontSize: '0.875rem', marginBottom: '1rem' }}>{item.company}</div>
      <div className="glass-card accent-card-purple" style={{ padding: '1.5rem' }}>
        <p className="text-gray-400 text-sm leading-relaxed" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.tags.map(tag => (
            <span key={tag} className="cyber-tag" style={{ borderColor: 'rgba(191, 0, 255, 0.3)', color: '#bf00ff', backgroundColor: 'rgba(191, 0, 255, 0.1)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      date: 'AUG 2025 - PRESENT',
      title: 'Full Stack Trainee',
      company: 'TECH_ACADEMY // PUNE',
      description: 'Intensive 6-month specialized training in Java Full Stack technologies. Mastering Spring Boot, Microservices, and Advanced React architectures.',
      tags: ['JAVA_EE', 'SPRING_BOOT', 'REACT_JS', 'MICROSERVICES']
    },
    {
      date: 'MAY 2025 - JUL 2025',
      title: 'Intern Developer',
      company: 'CODE_SYNC_SYSTEMS',
      description: 'Collaborated on high-scale backend services. Optimized MySQL queries and implemented RESTful endpoints for enterprise applications.',
      tags: ['MY_SQL', 'REST_API', 'UNIT_TESTING', 'GIT']
    }
  ];

  return (
    <div id="experience" className="py-24 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="section-header-container">
          <h2 className="section-header-title glitch-text" data-text="SYSTEM_HISTORY">
            SYSTEM_HISTORY
          </h2>
          <div className="section-header-line" />
        </div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineNode key={i} item={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
