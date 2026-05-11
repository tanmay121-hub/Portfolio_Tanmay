import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">

        {/* Unified Section Header */}
        <div className="section-header-container">
          <span className="section-header-eyebrow">UPLINK</span>
          <h2 className="section-header-title glitch-text" data-text="GET_IN_TOUCH">
            GET_IN_TOUCH
          </h2>
          <div className="section-header-line" />
          <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '32rem', textAlign: 'center', lineHeight: 1.65 }}>
            Available for freelance, collaborations, or permanent deployments. Let's build something great.
          </p>
        </div>

        <div className="responsive-flex-lg">
          {/* Contact Info Column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2rem' }}>
              {[
                { icon: <Mail size={20} />, label: 'EMAIL', value: 'tanmaypatil.dev@gmail.com' },
                { icon: <Phone size={20} />, label: 'PHONE', value: '+91-9322683018' },
                { icon: <MapPin size={20} />, label: 'LOCATION', value: 'Malkapur, Buldhana, MH' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-info-item"
                >
                  <div className="contact-icon-box">
                    {item.icon}
                  </div>
                  <div>
                    <div className="cyber-label" style={{ marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="cyber-label" style={{ marginBottom: '1rem' }}>SOCIAL_CHANNELS</div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { icon: <Github size={18} />, href: 'https://github.com/tanmay121-hub/' },
                  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/tanmay-patil-10997a259/' },
                  { icon: <Mail size={18} />, href: 'mailto:tanmaypatil.dev@gmail.com' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="social-icon-btn"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div style={{ flex: 2, minWidth: 0 }}>
            <div className="glass-card accent-card" style={{ padding: '2.5rem' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label className="cyber-label">IDENTIFIER</label>
                    <input className="cyber-input" type="text" placeholder="ENTER_NAME" />
                  </div>
                  <div>
                    <label className="cyber-label">CHANNEL_ID</label>
                    <input className="cyber-input" type="email" placeholder="ENTER_EMAIL" />
                  </div>
                </div>

                <div>
                  <label className="cyber-label">SUBJECT</label>
                  <input className="cyber-input" type="text" placeholder="PROTOCOL_TYPE" />
                </div>

                <div>
                  <label className="cyber-label">TRANSMISSION_DATA</label>
                  <textarea className="cyber-input" rows="5" placeholder="ENTER_MESSAGE" style={{ resize: 'none' }} />
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cyber-button"
                  style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                >
                  <Send size={16} />
                  INITIATE_UPLINK
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
