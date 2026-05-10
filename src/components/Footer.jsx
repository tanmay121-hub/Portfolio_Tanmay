import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'black', padding: '3rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="responsive-flex" style={{ justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={20} color="#00f5ff" />
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase" style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '0.2em' }}>
              SECURE_LAYER_V2.4 // BUILT_BY_TANMAY
            </span>
          </div>

          <div className="flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="text-[10px] font-mono text-gray-600 uppercase" style={{ fontSize: '10px', color: '#4b5563' }}>
              STATUS: <span style={{ color: '#10b981' }}>OPTIMAL</span>
            </div>
            <div className="text-[10px] font-mono text-gray-600 uppercase" style={{ fontSize: '10px', color: '#4b5563' }}>
              PING: <span style={{ color: '#00f5ff' }}>12MS</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -10 }}
              className="glass-card flex items-center justify-center"
              style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,245,255,0.3)', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'transparent' }}
            >
              <Rocket size={20} color="#00f5ff" />
            </motion.button>
          </div>
        </div>
        
        <div className="mt-12 text-center" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="text-[10px] text-gray-700 font-mono tracking-[0.8em] uppercase" style={{ fontSize: '10px', color: '#374151', letterSpacing: '0.8em' }}>
            ESTABLISHED_2026 // ALL_RIGHTS_RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
