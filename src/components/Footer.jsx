import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Rocket, Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const lenis = useLenis();
  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.35, easing: (t) => 1 - (1 - t) ** 3 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      background: 'linear-gradient(180deg, rgba(8,8,14,0.4) 0%, rgba(5,5,10,0.98) 40%)',
      backdropFilter: 'blur(12px)',
      padding: '3rem 1.5rem'
    }}>
      <div className="max-w-7xl mx-auto">

        {/* Main row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Shield size={18} color="var(--neon-cyan)" />
            <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4b5563', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              SECURE_LAYER_V2.4 // BUILT_BY_TANMAY
            </span>
          </div>

          {/* Social + Scroll to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { icon: <Github size={16} />, href: 'https://github.com/tanmay121-hub/' },
                { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/tanmay-patil-10997a259/' },
                { icon: <Mail size={16} />, href: 'mailto:tanmaypatil.dev@gmail.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="social-icon-btn"
                  style={{ width: '2.2rem', height: '2.2rem' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -6, boxShadow: '0 0 20px rgba(0,245,255,0.35)' }}
              style={{
                width: '2.75rem', height: '2.75rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(0,245,255,0.3)', borderRadius: '6px',
                cursor: 'pointer', backgroundColor: 'transparent', color: 'var(--neon-cyan)',
                transition: 'all 0.3s ease'
              }}
            >
              <Rocket size={18} />
            </motion.button>
          </div>
        </div>

        {/* Status Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem' }}>
          <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#374151', letterSpacing: '0.8em', textTransform: 'uppercase' }}>
            ESTABLISHED_2026 // ALL_RIGHTS_RESERVED
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4b5563', textTransform: 'uppercase' }}>
              STATUS: <span style={{ color: '#10b981' }}>OPTIMAL</span>
            </span>
            <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#4b5563', textTransform: 'uppercase' }}>
              PING: <span style={{ color: 'var(--neon-cyan)' }}>12MS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
