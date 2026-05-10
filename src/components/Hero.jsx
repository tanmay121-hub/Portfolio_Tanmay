import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { Crosshair, Activity, ShieldCheck, Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';

const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timeout);
        }
      }, speed); // Typing speed
    };

    const initialDelay = setTimeout(startTyping, delay * 1000);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(timeout);
    };
  }, [text, delay, speed]);

  return <span>{displayedText}<span className="animate-pulse" style={{ color: '#00f5ff' }}>_</span></span>;
};

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden',
      backgroundColor: '#0a0a0f'
    }}>
      {/* 3D Background Scene */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Suspense fallback={<div style={{ color: '#00f5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: 'monospace' }}>[ LOADING_CORE_ASSETS... ]</div>}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Scanline & Vignette Overlay */}
      <div style={{ 
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 30%, rgba(10,10,15,0.85) 100%)'
      }} />
      <div style={{ 
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', opacity: 0.05,
        backgroundImage: 'linear-gradient(rgba(0,245,255,0.2) 1px, transparent 1px)',
        backgroundSize: '100% 4px'
      }} />

      {/* Hero Content - Left Aligned for a more dynamic structural layout */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12" style={{ position: 'relative', zIndex: 10, marginTop: '4rem' }}>
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* System Status / Verified Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              marginBottom: '1.5rem', 
              padding: '0.5rem 1rem', 
              background: 'rgba(0, 245, 255, 0.05)', 
              border: '1px solid rgba(0, 245, 255, 0.2)', 
              borderRadius: '50px', 
              backdropFilter: 'blur(4px)' 
            }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#00f5ff', borderRadius: '50%' }} className="animate-pulse" />
              </div>
              <ShieldCheck size={14} color="#00f5ff" />
              <div style={{ color: '#00f5ff', fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.2em', margin: 0, fontWeight: 'bold' }}>
                <TypewriterText text="SYS.USER: AUTHENTICATED" delay={0.2} speed={30} />
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 
              style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', 
                fontWeight: '900', 
                marginBottom: '0.5rem',
                color: 'white',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                textShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
              }}
            >
              <span className="glitch-text" data-text="TANMAY" style={{ display: 'inline-block' }}>TANMAY</span>
              <span className="glitch-text" data-text="PATIL" style={{ display: 'inline-block' }}>PATIL</span>
            </h1>
            
            {/* Roles Terminal Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{ 
                marginBottom: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center', 
                gap: '1rem',
                fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', 
                fontWeight: '600', 
                letterSpacing: '0.1em', 
                color: '#00f5ff', 
                fontFamily: 'monospace',
                background: 'rgba(10, 10, 15, 0.6)',
                padding: '0.5rem 1rem',
                borderLeft: '4px solid #bf00ff'
              }}
            >
               <Terminal size={20} color="#bf00ff" />
               <TypewriterText text="> JAVA FULL STACK_DEV && DATA_ANALYST" delay={1.5} speed={40} />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              style={{
                color: '#a0a0b0',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                maxWidth: '600px',
                marginBottom: '3rem',
                lineHeight: '1.6',
                fontFamily: 'var(--font-body)'
              }}
            >
              Architecting robust backend systems, engineering dynamic user interfaces, and translating complex data matrices into actionable intelligence.
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}
            >
              <button className="cyber-button" onClick={scrollToProjects}>
                INITIALIZE_WORK
              </button>
              
              <button className="cyber-button-outline">
                DOWNLOAD_CORE.exe
              </button>

              <div style={{ display: 'flex', gap: '1rem', marginLeft: '0.5rem' }} className="hide-on-mobile">
                 {[
                   { icon: <Github size={20} />, href: "https://github.com/TanmayPatil" },
                   { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/TanmayPatil" },
                   { icon: <Mail size={20} />, href: "mailto:contact@example.com" }
                 ].map((social, idx) => (
                   <motion.a 
                     key={idx}
                     href={social.href}
                     whileHover={{ 
                       backgroundColor: '#00f5ff', 
                       color: '#000', 
                       boxShadow: '0 0 15px rgba(0, 245, 255, 0.6)', 
                       y: -3 
                     }}
                     style={{ 
                       color: '#00f5ff', 
                       padding: '0.6rem', 
                       background: 'rgba(0,245,255,0.05)', 
                       border: '1px solid rgba(0,245,255,0.2)', 
                       borderRadius: '4px', 
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       textDecoration: 'none'
                     }}
                   >
                     {social.icon}
                   </motion.a>
                 ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
        onClick={scrollDown}
      >
        <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(0, 245, 255, 0.5)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
          SCROLL_DOWN
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} color="#00f5ff" opacity={0.7} />
        </motion.div>
      </motion.div>

      {/* Decorative HUD Elements */}
      
      {/* Top Left HUD */}
      <div className="hide-on-mobile" style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', zIndex: 5, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{ width: '2rem', height: '2px', backgroundColor: '#00f5ff' }} />
          <div style={{ width: '4rem', height: '2px', backgroundColor: 'rgba(0, 245, 255, 0.3)' }} />
        </div>
        <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#00f5ff', letterSpacing: '0.2em' }}>
          SYS.VER_2.4.9
        </div>
      </div>

      {/* Top Right HUD */}
      <div className="hide-on-mobile" style={{ position: 'absolute', top: '2.5rem', right: '2.5rem', zIndex: 5 }}>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: '3rem', height: '3rem', border: '1px dashed rgba(0, 245, 255, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Crosshair size={16} color="#00f5ff" opacity={0.6} />
        </motion.div>
      </div>

      {/* Bottom Left HUD */}
      <div className="hide-on-mobile" style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Activity size={16} color="#00f5ff" />
          <div style={{ width: '12rem', height: '2px', backgroundColor: 'rgba(0, 245, 255, 0.2)', position: 'relative' }}>
            <motion.div 
              animate={{ width: ['33%', '66%', '45%', '80%', '33%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', top: 0, left: 0, height: '100%', 
                backgroundColor: '#00f5ff', boxShadow: '0 0 10px #00f5ff'
              }} 
            />
          </div>
        </div>
        <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(0, 245, 255, 0.5)' }}>
          SYSTEM_STABILITY: 99.9%<br />
          MEMORY_ALLOCATION: OPTIMAL
        </div>
      </div>

      {/* Bottom Right HUD */}
      <div className="hide-on-mobile" style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 5, textAlign: 'right' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '1rem', height: '4px', backgroundColor: '#bf00ff' }} />
          <div style={{ width: '1rem', height: '4px', backgroundColor: '#00f5ff' }} />
          <div style={{ width: '1rem', height: '4px', backgroundColor: '#00f5ff' }} />
        </div>
        <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(0, 245, 255, 0.5)' }}>
          LAT: 19.0760° N<br />
          LONG: 72.8777° E
        </div>
      </div>

    </div>
  );
};

export default Hero;

