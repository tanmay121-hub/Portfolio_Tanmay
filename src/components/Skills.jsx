import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Layers, Globe, Server, Terminal, Zap } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, level, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.45 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="glass-card"
    style={{
      padding: '1.75rem',
      borderTop: `3px solid ${color}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <div style={{ marginBottom: '1rem', color, filter: `drop-shadow(0 0 8px ${color}55)` }}>
      <Icon size={40} />
    </div>
    <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
      {name}
    </h3>

    {/* Skill Bar */}
    <div style={{ width: '100%', marginTop: '1.25rem' }}>
      <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            position: 'absolute', top: 0, left: 0, height: '100%',
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`
          }}
        />
      </div>
      <div style={{ fontSize: '9px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginTop: '0.5rem', letterSpacing: '0.15em' }}>
        PROFICIENCY: {level}%
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'BACKEND_CORE',
      accentColor: 'var(--neon-purple)',
      skills: [
        { name: 'Java', icon: Server, level: 92, color: '#ED8B00' },
        { name: 'Spring Boot', icon: Cpu, level: 88, color: '#6DB33F' },
        { name: 'Spring Security', icon: Zap, level: 85, color: '#6DB33F' },
        { name: 'Hibernate (JPA)', icon: Database, level: 85, color: '#9b59b6' },
        { name: 'RESTful APIs', icon: Terminal, level: 90, color: '#00f5ff' },
        { name: 'JWT Authentication', icon: Globe, level: 85, color: '#f472b6' },
      ],
    },
    {
      title: 'FRONTEND_ENGINE',
      accentColor: 'var(--neon-cyan)',
      skills: [
        { name: 'React (Vite)', icon: Layers, level: 88, color: '#61DAFB' },
        { name: 'JavaScript', icon: Code2, level: 85, color: '#F7DF1E' },
        { name: 'HTML & CSS', icon: Globe, level: 90, color: '#E34F26' },
      ],
    },
    {
      title: 'DATABASE_&_TOOLS',
      accentColor: '#f472b6',
      skills: [
        { name: 'MySQL', icon: Database, level: 85, color: '#4479A1' },
        { name: 'Git & GitHub', icon: Terminal, level: 88, color: '#F05032' },
        { name: 'Postman', icon: Zap, level: 90, color: '#FF6C37' },
        { name: 'IntelliJ IDEA', icon: Cpu, level: 85, color: '#fe315d' },
      ],
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto">

        {/* Unified Section Header */}
        <div className="section-header-container">
          <span className="section-header-eyebrow">MODULE_03</span>
          <h2 className="section-header-title glitch-text" data-text="TECH_SKILLS">
            TECH_SKILLS
          </h2>
          <div className="section-header-line" />
        </div>

        {skillCategories.map((category, catIdx) => (
          <div key={category.title} style={{ marginBottom: '2.5rem' }}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                color: category.accentColor,
                borderLeft: `4px solid ${category.accentColor}`,
                paddingLeft: '1rem',
                marginBottom: '2rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase'
              }}
            >
              {category.title}
            </motion.h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {category.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  delay={(catIdx * 0.15) + (i * 0.08)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
