import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const TimelineNode = ({ item, index, isLast }) => (
  <div style={{ display: 'flex', gap: '2rem', marginBottom: isLast ? 0 : '2.5rem', position: 'relative' }}>
    {!isLast && (
      <div style={{
        position: 'absolute', left: '39px', top: '5rem', bottom: '-2.5rem',
        width: '2px',
        background: 'linear-gradient(to bottom, rgba(0,245,255,0.5), rgba(191,0,255,0.3), transparent)',
      }} />
    )}
    <div style={{ flexShrink: 0 }}>
      <div className="glass-card" style={{
        width: '5rem', height: '5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '2px solid rgba(0, 245, 255, 0.4)',
        borderRadius: '0.5rem'
      }}>
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '0.75rem', height: '0.75rem',
            backgroundColor: 'var(--neon-cyan)',
            borderRadius: '50%',
            boxShadow: '0 0 12px var(--neon-cyan)'
          }}
        />
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.18, duration: 0.5 }}
      viewport={{ once: true }}
      style={{ flexGrow: 1, paddingTop: '0.5rem' }}
    >
      <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--neon-cyan)', letterSpacing: '0.25em', marginBottom: '0.5rem', opacity: 0.8 }}>
        {item.date}
      </div>
      <h3 style={{ fontWeight: '900', marginBottom: '0.25rem', color: 'white', fontFamily: 'var(--font-heading)' }}>
        {item.title}
      </h3>
      <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: 'var(--neon-purple)', marginBottom: '1.25rem', letterSpacing: '0.1em' }}>
        {item.company}
      </div>
      <div className="glass-card accent-card-purple" style={{ padding: '1.5rem' }}>
        <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', listStyle: 'none', padding: 0, margin: 0 }}>
          {item.points.map((point, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--neon-cyan)', flexShrink: 0, marginTop: '0.3rem' }}>▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {item.tags.map(tag => (
            <span key={tag} className="cyber-tag" style={{ borderColor: 'rgba(191,0,255,0.35)', color: 'var(--neon-purple)', backgroundColor: 'rgba(191,0,255,0.08)' }}>
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
      date: '1 MONTH INTERNSHIP',
      title: 'Backend Intern',
      company: 'TRIONXT_SOFTWARE_PVT_LTD // PUNE, INDIA',
      points: [
        'Developed and maintained RESTful APIs using Spring Boot for authentication and Billing System.',
        'Designed relational database schemas using JPA/Hibernate to ensure data integrity and scalability.',
        'Tested APIs using Postman and collaborated with frontend teams for smooth integration.'
      ],
      tags: ['SPRING_BOOT', 'REST_API', 'JPA', 'POSTMAN']
    },
    {
      date: '1 MONTH INTERNSHIP',
      title: 'Frontend Intern',
      company: 'VISANET_PVT_LTD // WASHIM, INDIA',
      points: [
        'Developed reusable and responsive React components following modern UI standards.',
        'Integrated REST APIs and optimized UI for better performance and mobile responsiveness.'
      ],
      tags: ['REACT', 'REST_API', 'RESPONSIVE_UI', 'CSS']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'S B Jain Institute of Technology, Management and Research',
      duration: '2023 – PRESENT',
      location: 'Nagpur, India'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Government Polytechnic, Washim',
      duration: '2020 – 2023',
      location: 'Washim, India'
    }
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header-container">
          <span className="section-header-eyebrow">TIMELINE</span>
          <h2 className="section-header-title glitch-text" data-text="SYSTEM_HISTORY">
            SYSTEM_HISTORY
          </h2>
          <div className="section-header-line" />
        </div>
        <div>
          {experiences.map((exp, i) => (
            <TimelineNode key={i} item={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>

        {/* Education Section */}
        <div style={{ marginTop: '4rem' }}>
          <div className="section-header-container">
            <span className="section-header-eyebrow">CREDENTIALS</span>
            <h2 className="section-header-title glitch-text" data-text="EDUCATION_LOG">
              EDUCATION_LOG
            </h2>
            <div className="section-header-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass-card accent-card"
                style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}
              >
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '0.5rem', flexShrink: 0,
                  background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <GraduationCap size={20} style={{ color: 'var(--neon-cyan)' }} />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ color: 'var(--neon-purple)', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                    {edu.institution}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>
                    <span>{edu.duration}</span>
                    <span>// {edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
