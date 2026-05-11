import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'SARAH_CHEN',
      role: 'Senior Architect',
      org: 'TECH_LINEAR',
      text: "The integration logic implemented was beyond expectations. A rare blend of backend stability and frontend intuition.",
      stars: 5
    },
    {
      name: 'MARCUS_VON',
      role: 'Lead Developer',
      org: 'NEXUS_CORE',
      text: "Exceptional problem-solving skills during the 3-month sprint. The Java architecture was clean and highly scalable.",
      stars: 5
    }
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto">

        {/* Unified Section Header */}
        <div className="section-header-container">
          <span className="section-header-eyebrow">SOCIAL_PROOF</span>
          <h2 className="section-header-title glitch-text" data-text="TESTIMONIALS">
            TESTIMONIALS
          </h2>
          <div className="section-header-line" />
        </div>

        {/* Grid layout instead of horizontal scroll */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card accent-card"
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <Quote size={32} style={{ color: 'rgba(0,245,255,0.15)', marginBottom: '1.5rem', flexShrink: 0 }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={16} fill="var(--neon-cyan)" color="var(--neon-cyan)" />
                ))}
              </div>

              {/* Quote Text */}
              <p style={{ fontSize: '1.05rem', color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.7', fontStyle: 'italic', flexGrow: 1 }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                <div style={{
                  width: '3rem', height: '3rem', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '900', color: 'black', fontSize: '1.1rem',
                  flexShrink: 0, fontFamily: 'var(--font-heading)'
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.05em', fontFamily: 'var(--font-heading)', fontSize: '0.85rem' }}>{t.name}</div>
                  <div className="cyber-tag" style={{ display: 'inline-block', marginTop: '0.35rem' }}>{t.role} // {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
