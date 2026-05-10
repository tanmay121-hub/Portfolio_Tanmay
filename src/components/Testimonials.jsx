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
    <div id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <div className="w-12 h-[2px] bg-cyan-500" style={{ width: '3rem', height: '2px', backgroundColor: '#00f5ff' }} />
          <h2 className="text-3xl font-black uppercase tracking-widest">SENSORS.SOCIAL_PROOF</h2>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '3rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-10"
              style={{ minWidth: '350px', maxWidth: '450px', padding: '2.5rem' }}
            >
              <Quote className="w-10 h-10 text-cyan-500/20 mb-6" style={{ color: 'rgba(0,245,255,0.1)', marginBottom: '1.5rem' }} />
              
              <div className="flex gap-1 mb-6" style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={16} fill="#00f5ff" color="#00f5ff" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 font-light italic leading-relaxed" style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '2rem' }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black uppercase" style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'linear-gradient(to top right, #00f5ff, #bf00ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900' }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold tracking-tighter">{t.name}</div>
                  <div className="text-[10px] font-mono text-cyan-500/60 uppercase" style={{ fontSize: '10px', color: 'rgba(0,245,255,0.6)' }}>{t.role} // {t.org}</div>
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
