import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Database, Lock, Globe } from 'lucide-react';

const Badge = ({ icon, title, date, org, delay, accentClass = 'accent-card' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`glass-card ${accentClass} relative overflow-hidden group`}
    style={{ padding: '2rem' }}
  >
    <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="corner-accent corner-tl" />
    <div className="corner-accent corner-tr" />
    <div className="corner-accent corner-bl" />
    <div className="corner-accent corner-br" />

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div
        className="w-16 h-16 flex items-center justify-center relative"
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          position: 'relative',
          backgroundColor: 'rgba(0,245,255,0.05)',
          border: '1px solid rgba(0,245,255,0.2)',
        }}
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 245, 255, 0.06)',
            borderRadius: '9999px',
            filter: 'blur(16px)',
          }}
        />
        {icon}
      </div>

      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: 'white',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>
      <div className="cyber-tag mb-6" style={{ marginBottom: '1.5rem' }}>
        {org}
      </div>

      <div
        className="w-full mt-auto pt-4"
        style={{
          width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1rem',
          marginTop: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
          <span
            style={{
              fontSize: '9px',
              fontFamily: 'monospace',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            STATUS: VERIFIED
          </span>
          <span
            style={{
              fontSize: '9px',
              fontFamily: 'monospace',
              color: 'var(--neon-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="stat-container group cursor-default"
  >
    <div className="flex items-center gap-4">
      {Icon && (
        <Icon
          className="w-5 h-5 transition-colors"
          style={{ color: 'rgba(0, 245, 255, 0.45)', flexShrink: 0 }}
        />
      )}
      <div>
        <div className="stat-value group-hover:text-cyan-400 transition-colors">
          <span style={{ color: 'rgba(0, 245, 255, 0.35)', marginRight: '0.5rem', fontSize: '1.25rem', fontFamily: 'monospace' }}>//</span>
          {value}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const certifications = [
    {
      icon: <Zap style={{ width: '2rem', height: '2rem', color: 'var(--neon-cyan)' }} />,
      title: 'Spring Boot Course',
      org: 'SCALER',
      date: '2024',
      accentClass: 'accent-card',
    },
    {
      icon: <Cpu style={{ width: '2rem', height: '2rem', color: 'var(--neon-purple)' }} />,
      title: 'Career Essentials in Generative AI',
      org: 'MICROSOFT_&_LINKEDIN',
      date: '2024',
      accentClass: 'accent-card-purple',
    },
    {
      icon: <ShieldCheck style={{ width: '2rem', height: '2rem', color: '#f472b6' }} />,
      title: 'Claude 101',
      org: 'ANTHROPIC_ACADEMY',
      date: '2025',
      accentClass: 'accent-card-pink',
    },
  ];

  const stats = [
    { value: '12+', label: 'NODES_BUILT', icon: Database, delay: 0.1 },
    { value: '06', label: 'MONTHS_XP', icon: Activity, delay: 0.2 },
    { value: '50+', label: 'TASKS_SYNCED', icon: Globe, delay: 0.3 },
    { value: '99%', label: 'UPTIME', icon: Lock, delay: 0.4 },
  ];

  return (
    <div className="relative overflow-hidden" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '33%',
          height: '100%',
          background: 'rgba(6, 182, 212, 0.06)',
          filter: 'blur(120px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '25%',
          height: '50%',
          background: 'rgba(168, 85, 247, 0.06)',
          filter: 'blur(100px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginBottom: '4rem' }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="section-header-container">
          <span className="section-header-eyebrow">VALIDATION</span>
          <h2 className="section-header-title glitch-text" data-text="AWARD_PROTOCOLS">
            AWARD_PROTOCOLS
          </h2>
          <div className="section-header-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <Badge key={cert.title} {...cert} delay={i * 0.2} />
          ))}
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', opacity: 0.2 }}>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '8px',
              letterSpacing: '1em',
              color: 'var(--neon-cyan)',
              textTransform: 'uppercase',
            }}
          >
            00110100 00110010 01000110 01000101 // SECURE_HANDSHAKE_COMPLETE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
