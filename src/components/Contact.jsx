import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="responsive-flex-lg" style={{ gap: '4rem' }}>
          {/* Contact Info */}
          <div style={{ flex: 1 }}>
            <h2 className="section-header-title glitch-text" data-text="CONNECT WITH ME" style={{ textAlign: 'left', marginBottom: '2rem' }}>CONNECT WITH ME</h2>
            <p className="text-gray-400 mb-12 font-light leading-relaxed" style={{ color: '#9ca3af', marginBottom: '3rem', fontSize: '1.125rem' }}>
              I am ready for new connection. Available for freelance, collaborations, or permanent deployments.
            </p>

            <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: <Mail />, label: 'EMAIL', value: 'tanmaypatil.dev@gmail.com' },
                { icon: <Phone />, label: 'NUMBER', value: '+91 98765 43210' },
                { icon: <MapPin />, label: 'COORDINATES', value: 'Malkapur, Buldhana' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', cursor: 'pointer' }}>
                  <div className="w-12 h-12 glass-card flex items-center justify-center text-cyan-500" style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f5ff' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-cyan-500/60 uppercase" style={{ fontSize: '10px', color: 'rgba(0,245,255,0.6)' }}>{item.label}</div>
                    <div className="text-lg font-bold text-white tracking-tight" style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-16" style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
              {[<Github />, <Linkedin />, <Twitter />].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  style={{ width: '2.5rem', height: '2.5rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none' }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: 2 }}>
            <div className="glass-card accent-card" style={{ padding: '2.5rem' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="responsive-grid" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]" style={{ fontSize: '10px', color: '#00f5ff' }}>IDENTIFIER</label>
                    <input 
                      type="text" 
                      placeholder="ENTER_NAME"
                      style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]" style={{ fontSize: '10px', color: '#00f5ff' }}>CHANNEL_ID</label>
                    <input 
                      type="email" 
                      placeholder="ENTER_EMAIL"
                      style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]" style={{ fontSize: '10px', color: '#00f5ff' }}>SUBJECT</label>
                  <input 
                    type="text" 
                    placeholder="PROTOCOL_TYPE"
                    style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]" style={{ fontSize: '10px', color: '#00f5ff' }}>TRANSMISSION_DATA</label>
                  <textarea 
                    rows="5"
                    placeholder="ENTER_MESSAGE"
                    style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: 'white', outline: 'none', fontFamily: 'monospace', resize: 'none' }}
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="cyber-button"
                  style={{ width: '100%', padding: '1rem' }}
                >
                  INITIATE_UPLINK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
