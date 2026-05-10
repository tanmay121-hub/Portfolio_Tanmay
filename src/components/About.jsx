import React from 'react';
import { motion } from 'framer-motion';
import { User, Coffee, Code2, Target, Cpu, Shield, Terminal } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Coffee className="w-8 h-8" />, label: 'Fueled by Coffee', value: '1000+ Cups' },
    { icon: <Code2 className="w-8 h-8" />, label: 'Hours Coded', value: '500+' },
    { icon: <Target className="w-8 h-8" />, label: 'Problems Solved', value: '50+' },
  ];

  return (
    <div id="about" className="py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="responsive-flex items-center"
          style={{ gap: '4rem' }}
        >
          {/* Enhanced Profile Visual */}
          <div className="w-full md:w-1/2 flex justify-center" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="relative" style={{ position: 'relative', width: '22rem', height: '22rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Outer Dashed Spin Ring */}
              <div className="absolute inset-0 border border-cyan-500/30 rounded-full border-dashed animate-spin-slow" style={{ position: 'absolute', inset: 0, border: '2px dashed rgba(0,245,255,0.3)', borderRadius: '50%' }} />
              
              {/* Middle Solid Ring with Pulse */}
              <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-pulse" style={{ position: 'absolute', inset: '1rem', border: '2px solid rgba(191,0,255,0.3)', borderRadius: '50%' }} />
              
              {/* Inner Glowing Core Container */}
              <div className="absolute inset-8 overflow-hidden rounded-full shadow-[0_0_50px_rgba(0,245,255,0.4)]" style={{ position: 'absolute', inset: '2rem', borderRadius: '50%', border: '4px solid #00f5ff', overflow: 'hidden', boxShadow: '0 0 60px rgba(0,245,255,0.4)' }}>
                <div className="w-full h-full flex items-center justify-center relative" style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(0,245,255,0.2) 0%, rgba(10,10,15,1) 80%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  
                  {/* Grid overlay */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 1 }} />
                  
                  {/* User Icon */}
                  <User size={100} color="#00f5ff" style={{ opacity: 0.8, filter: 'drop-shadow(0 0 10px #00f5ff)', zIndex: 2 }} />
                </div>
              </div>

              {/* Floating Tech Data Points */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0a0a0f', padding: '0 5px' }}>
                  <Code2 size={24} color="#00f5ff" />
                </div>
                <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0a0a0f', padding: '0 5px' }}>
                  <Cpu size={24} color="#bf00ff" />
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-1/2" style={{ flex: 1 }}>
            <h2 className="section-header-title glitch-text" data-text="PROFILE_INTEL" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              PROFILE_INTEL
            </h2>
            
            <div className="glass-card accent-card" style={{ padding: '2rem', marginBottom: '2.5rem', backgroundColor: 'rgba(0,0,0,0.4)', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#00f5ff', fontSize: '0.875rem' }}>
                <Terminal size={16} />
                <span>root@tanmay:~# whoami</span>
              </div>
              <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Final year B.Tech student with a passion for building robust digital ecosystems. 
                Specializing in <span style={{ color: '#00f5ff', fontWeight: 'bold' }}>Java Full Stack Development</span>, 
                I bridge the gap between complex backend logic and immersive frontend experiences.
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(0, 245, 255, 0.05)', borderLeft: '2px solid #00f5ff' }}>
                <Shield size={24} color="#00f5ff" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  "Code is the data that defines reality. I specialize in optimizing that data."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card accent-card"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem', cursor: 'pointer' }}
                >
                  <div style={{ color: 'var(--neon-cyan)', marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{stat.label}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
