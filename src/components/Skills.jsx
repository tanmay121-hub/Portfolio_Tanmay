import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Layers, Globe, Server, Terminal, Zap } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, level, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-card"
    style={{ 
      padding: '1.5rem', 
      borderTop: `2px solid ${color}`, 
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <div style={{ marginBottom: '1rem', color }}>
      <Icon size={40} />
    </div>
    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>{name}</h3>
    
    {/* Skill Bar */}
    <div style={{ width: '100%', marginTop: '1rem' }}>
      <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
          viewport={{ once: true }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            height: '100%', 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`
          }}
        />
      </div>
      <div style={{ fontSize: '10px', fontFamily: 'monospace', opacity: 0.5, textTransform: 'uppercase', marginTop: '0.5rem' }}>
        PROFICIENCY: {level}%
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND_ENGINE',
      skills: [
        { name: 'React', icon: Layers, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: Code2, level: 85, color: '#F7DF1E' },
        { name: 'Tailwind', icon: Zap, level: 95, color: '#06B6D4' },
        { name: 'UI/UX Design', icon: Globe, level: 95, color: '#E34F26' },
      ],
    },
    {
      title: 'BACKEND_CORE',
      skills: [
        { name: 'Java', icon: Server, level: 90, color: '#ED8B00' },
        { name: 'Spring Boot', icon: Cpu, level: 85, color: '#6DB33F' },
        { name: 'REST APIs', icon: Terminal, level: 90, color: '#00f5ff' },
        { name: 'Hibernate', icon: Database, level: 80, color: '#59666C' },
      ],
    },
  ];

  return (
    <div id="skills" style={{ padding: '6rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-header-container">
          <h2 className="section-header-title glitch-text" data-text="TECH_SKILLS">
            TECH_SKILLS
          </h2>
          <div className="section-header-line" />
        </div>

        {skillCategories.map((category, catIdx) => (
          <div key={category.title} style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: '#00f5ff', borderLeft: '4px solid #00f5ff', paddingLeft: '1rem', marginBottom: '2rem', letterSpacing: '0.3em' }}>
              {category.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {category.skills.map((skill, i) => (
                <SkillCard 
                  key={skill.name} 
                  {...skill} 
                  delay={(catIdx * 0.2) + (i * 0.1)} 
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
