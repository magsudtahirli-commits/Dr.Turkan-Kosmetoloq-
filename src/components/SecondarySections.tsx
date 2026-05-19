/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Quote, Sparkles, User, Droplets, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Sparkles, User, Droplets, Target];

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-text">{t.services.label}</div>
          <h2 className="text-4xl md:text-5xl font-serif text-clinic-text">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-clinic-nude/60 hover:border-clinic-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-clinic-nude/30 flex items-center justify-center mb-6 group-hover:bg-clinic-gold/10 transition-colors">
                  <Icon size={24} className="text-clinic-gold" />
                </div>
                <h3 className="text-xl font-serif mb-6 text-clinic-text group-hover:text-clinic-gold transition-colors">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map(item => (
                    <li key={item} className="text-[13px] text-clinic-accent flex items-start gap-2">
                      <span className="text-clinic-gold font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={80} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="gold-text">{t.gallery.label}</div>
            <h2 className="text-4xl md:text-5xl font-serif text-clinic-text">{t.gallery.title}</h2>
          </div>
          <p className="hidden md:block max-w-sm text-xs text-clinic-accent italic tracking-wide uppercase opacity-70 text-right">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.gallery.items.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] overflow-hidden rounded-[40px] group border border-clinic-nude bg-white flex flex-col items-center justify-center p-12 text-center"
            >
              <div className="gold-text !mb-4 opacity-30">{img.title}</div>
              <h3 className="text-2xl font-serif mb-2 text-clinic-text">{img.title}</h3>
              <p className="text-sm text-clinic-accent font-normal">{img.desc}</p>
              
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-clinic-gold/20 flex items-center justify-center">
                <span className="text-[10px] text-clinic-gold">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const testimonies = [
    { q: t.testimonials.q1, author: "Leyla A." },
    { q: t.testimonials.q2, author: "Gunel M." },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] border-y border-clinic-nude">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <Quote size={32} className="text-clinic-gold/40 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
            {testimonies.map((t_item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed text-clinic-text font-normal">
                  "{t_item.q}"
                </p>
                <div className="text-[11px] font-bold text-clinic-gold uppercase tracking-[0.2em]">{t_item.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
