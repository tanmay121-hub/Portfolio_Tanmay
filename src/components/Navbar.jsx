import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, Activity } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', id: '01' },
    { name: 'About', href: '#about', id: '02' },
    { name: 'Skills', href: '#skills', id: '03' },
    { name: 'Projects', href: '#projects', id: '04' },
    { name: 'Experience', href: '#experience', id: '05' },
    { name: 'Contact', href: '#contact', id: '06' },
  ];

  return (
    <nav className={`navbar-main ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="navbar-content">
        {/* Advanced Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo-container"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{ position: 'relative' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ 
                width: '42px', 
                height: '42px', 
                border: '1px dashed rgba(0, 245, 255, 0.5)', 
                borderRadius: '50%',
                position: 'absolute',
                top: '-1px',
                left: '-1px'
              }}
            />
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-purple) 100%)',
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)'
            }}>
              <span style={{ color: 'black', fontWeight: '900', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>T</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="nav-logo-text">
              TANMAY<span style={{ color: 'var(--neon-cyan)' }}>_PATIL</span>
            </span>
            <div className="nav-logo-sub">
              <div className="nav-logo-dot animate-pulse" />
              <span className="nav-logo-status">SYS_ONLINE</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="nav-link group"
            >
              <span className="nav-link-id">{item.id}</span>
              {item.name}
              <motion.div 
                className="nav-underline-effect"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
          ))}
        </div>

        <div className="nav-status-container hide-on-mobile">
          <Activity size={16} />
          <div className="nav-status-text">
            <div>PING: <span className="nav-status-value">14MS</span></div>
            <div>VER: <span className="nav-status-value">2.4.9</span></div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="nav-menu-btn">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-toggle-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Advanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            {/* Background pattern for mobile menu */}
            <div className="mobile-menu-bg" />

            <div className="mobile-menu-header">
              <div className="mobile-menu-label">NAVIGATION_MENU</div>
              <div className="mobile-menu-line" />
            </div>

            <div className="mobile-menu-links">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-menu-link"
                >
                  <span className="mobile-menu-link-id">{item.id}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mobile-menu-footer">
               <div className="mobile-menu-footer-item">
                 <div className="mobile-menu-footer-label">USER_AUTH</div>
                 <div className="mobile-menu-footer-value">TANMAY_PATIL</div>
               </div>
               <div className="mobile-menu-footer-item">
                 <div className="mobile-menu-footer-label">STATUS</div>
                 <div className="mobile-menu-footer-value neon">ENCRYPTED</div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

