import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Zap } from 'lucide-react';

const Badge = ({ icon, title, date, org, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="glass-card accent-card flex flex-col items-center text-center relative overflow-hidden"
    style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <div className="w-16 h-16 border border-cyan-500/40 rounded-lg flex items-center justify-center mb-6" style={{ width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', backgroundColor: 'rgba(0,245,255,0.1)' }}>
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter text-white" style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{title}</h3>
    <p className="text-xs text-cyan-500 font-mono mb-4" style={{ fontSize: '10px', color: '#00f5ff' }}>{org}</p>
    <div className="text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/10 pt-4 w-full" style={{ fontSize: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', paddingTop: '1rem' }}>
      ISSUED: {date}
    </div>
  </motion.div>
);

const Counter = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration: 1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center"
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <div className="text-5xl font-black text-white mb-2 font-mono flex items-center" style={{ fontSize: '3rem', fontWeight: '900', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#00f5ff', marginRight: '0.5rem' }}>$</span>
      {value}
    </div>
    <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em]" style={{ fontSize: '10px', letterSpacing: '0.3em' }}>{label}</div>
  </motion.div>
);

const Achievements = () => {
  const certifications = [
    { icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />, title: 'Oracle Java SE 11', org: 'ORACLE_CORP', date: 'DEC 2024' },
    { icon: <Cpu className="w-8 h-8 text-purple-400" />, title: 'AWS Cloud Practitioner', org: 'AMAZON_WEB_SERVICES', date: 'JAN 2025' },
    { icon: <Zap className="w-8 h-8 text-pink-400" />, title: 'Spring Proficient', org: 'VMWARE_TANZU', date: 'MAR 2025' },
  ];

  return (
    <div id="achievements" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
          <Counter value="12+" label="NODES_BUILT" delay={0.1} />
          <Counter value="06" label="MONTHS_XP" delay={0.2} />
          <Counter value="50+" label="TASKS_SYNCED" delay={0.3} />
          <Counter value="99%" label="UPTIME" delay={0.4} />
        </div>

        <div className="section-header-container">
          <h2 className="section-header-title glitch-text" data-text="AWARD_PROTOCOLS">
            AWARD_PROTOCOLS
          </h2>
          <div className="section-header-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {certifications.map((cert, i) => (
            <Badge key={i} {...cert} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
