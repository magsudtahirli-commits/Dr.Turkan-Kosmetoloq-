/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Instagram, Send as TikTok, MessageCircle as WhatsApp, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'az', label: 'AZ' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-clinic-nude shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="text-2xl font-serif font-light tracking-[0.2em] text-clinic-gold">DR. TURKAN</div>
          <span className="text-[9px] uppercase tracking-[0.15em] opacity-60 font-semibold">Dermatology & Aesthetic Specialist</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 mr-4 border-r border-clinic-nude pr-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-medium tracking-[0.15em] uppercase hover:text-clinic-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 mr-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[10px] font-bold tracking-widest transition-colors ${
                  language === lang.code ? 'text-clinic-gold' : 'text-clinic-accent opacity-50 hover:opacity-100'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a 
            href="#book"
            className="border border-clinic-gold text-clinic-gold px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.1em] font-semibold hover:bg-clinic-gold hover:text-white transition-all"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile Languages */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex gap-2 mr-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[10px] font-bold tracking-widest ${
                  language === lang.code ? 'text-clinic-gold' : 'text-clinic-accent opacity-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#FDFBF7]">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F2ED] rounded-l-[100px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-clinic-gold/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-text">{t.hero.subtitle}</div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-clinic-text font-medium">
              {t.hero.title1} <span className="italic text-clinic-gold font-light">{t.hero.title2}</span> <br className="hidden md:block" /> {t.hero.title3}
            </h1>
            <p className="text-lg md:text-xl text-clinic-accent font-medium mb-10 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book"
                className="bg-clinic-gold text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-clinic-gold/20 tracking-wider uppercase flex items-center justify-center"
              >
                {t.hero.bookBtn}
              </a>
              <a 
                href={`https://wa.me/994515897179`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-[#25D366]/20 tracking-wider uppercase justify-center"
              >
                <WhatsApp size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-20 bg-clinic-text"></div>
        <span className="text-[10px] tracking-[0.3em] uppercase vertical-text">{t.app.scroll}</span>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 luxury-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-sm relative z-10 border border-clinic-nude bg-white flex items-center justify-center p-20"
          >
            <div className="text-center">
              <div className="text-clinic-gold flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full border border-clinic-gold/30 flex items-center justify-center">
                  <div className="text-3xl font-serif">T</div>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-2">Dr. Turkan</h3>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">{t.hero.subtitle}</p>
            </div>
          </motion.div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-clinic-gold/10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-clinic-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="gold-text">{t.about.label}</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-clinic-text font-medium">
              {t.about.title1} <span className="italic text-clinic-gold font-light">{t.about.title2}</span> {t.about.title3}
            </h2>
            <div className="space-y-6 text-clinic-accent leading-relaxed font-normal text-lg">
              <p>
                {t.about.desc1}
              </p>
              <p>
                {t.about.desc2}
              </p>
              
              <div className="pt-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6 text-clinic-gold">{t.about.specialties}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    'Natural Lips & Russian Lips',
                    'Botox & PLLA',
                    'Dermal Fillers',
                    'Mezotherapy & Biorevitalization',
                    'Facial Rejuvenation',
                    'Anti-Aging Treatments'
                  ].map(s => (
                    <div key={s} className="flex items-center gap-3 text-[13px] text-clinic-accent">
                      <div className="w-1.5 h-1.5 bg-clinic-gold rounded-full"></div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
