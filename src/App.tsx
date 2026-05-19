/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation, Hero, About } from './components/MainSections';
import { Services, Gallery, Testimonials } from './components/SecondarySections';
import { BookingForm, Footer } from './components/ContactSections';
import { motion, useScroll, useSpring } from 'motion/react';
import { MessageCircle as WhatsApp, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-clinic-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navigation />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a 
          href={`https://wa.me/994515897179`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="WhatsApp Consultation"
        >
          <WhatsApp size={28} />
        </a>
      </div>
      
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Why Choose Section (Inline) */}
        <section className="py-24 bg-white overflow-hidden border-y border-clinic-nude">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
              <div>
                <div className="gold-text">{t.why.label}</div>
                <h2 className="text-4xl md:text-5xl font-serif mb-10 text-clinic-text font-medium">
                  {t.why.title1} <br/><span className="italic text-clinic-gold font-normal font-serif">{t.why.title2}</span>
                </h2>
                
                <div className="space-y-8">
                  {t.why.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="text-2xl font-serif text-clinic-gold opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                      <div>
                        <h4 className="text-lg font-serif mb-2 text-clinic-text">{item.title}</h4>
                        <p className="text-sm text-clinic-accent font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden border border-clinic-nude p-12 bg-[#F5F2ED] flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 rounded-full border-t border-clinic-gold animate-spin-slow mb-8 opacity-20"></div>
                  <div className="text-3xl font-serif italic text-clinic-gold mb-4">{t.app.spinTitle}</div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">{t.app.spinSubtitle}</p>
                </div>
                {/* Float elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-white border border-clinic-nude text-clinic-text px-8 py-6 rounded-[2rem] shadow-xl hidden md:block"
                >
                  <div className="text-3xl font-serif italic font-medium text-clinic-gold">{t.app.expTitle}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">{t.app.expSubtitle}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}
