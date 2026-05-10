import React, { useState, useEffect, memo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Memoize sections to prevent unnecessary re-renders during mouse interaction
const HeroMemo = memo(Hero);
const AboutMemo = memo(About);
const SkillsMemo = memo(Skills);
const ProjectsMemo = memo(Projects);
const ExperienceMemo = memo(Experience);
const AchievementsMemo = memo(Achievements);
const TestimonialsMemo = memo(Testimonials);
const ContactMemo = memo(Contact);

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#0a0a0f', color: '#e4e1e9' }}>
      {/* Background Elements */}
      <div className="bg-stars" />
      <div className="bg-grid" />
      
      {/* High Performance Custom Cursor */}
      {!isMobile && <CustomCursor />}

      <Navbar />
      
      <main>
        <section id="hero"><HeroMemo /></section>
        <section id="about"><AboutMemo /></section>
        <section id="skills"><SkillsMemo /></section>
        <section id="projects"><ProjectsMemo /></section>
        <section id="experience"><ExperienceMemo /></section>
        <section id="achievements"><AchievementsMemo /></section>
        <section id="testimonials"><TestimonialsMemo /></section>
        <section id="contact"><ContactMemo /></section>
      </main>

      <Footer />
      
      {/* Global Cursor Styles */}
      <style>{`
        body { 
          cursor: ${isMobile ? 'auto' : 'none'} !important; 
        }
        
        /* Apply 'none' cursor to all interactive elements so the custom cursor is the only one visible */
        a, 
        button, 
        [role="button"], 
        input, 
        textarea, 
        select,
        .interactive { 
          cursor: ${isMobile ? 'pointer' : 'none'} !important; 
        }
      `}</style>
    </div>
  );
}

export default App;
