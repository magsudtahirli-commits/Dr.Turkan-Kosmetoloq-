/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MessageCircle as WhatsApp, Check, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

export function BookingForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    procedure: '',
    date: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct message
    const message = `Hello Dr. Turkan,\n\nI would like to book an appointment.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Procedure:* ${formData.procedure}\n*Date:* ${formData.date}\n\nThank you.`;
    
    // Target number: +994 51 589 71 79
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/994515897179?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="book" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#F5F2ED] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-clinic-nude shadow-lg">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <div className="gold-text">{t.booking.label}</div>
            <h2 className="text-4xl font-serif mb-8 text-clinic-text">{t.booking.title}</h2>
            <p className="text-clinic-accent mb-10 font-normal text-sm leading-relaxed">
              {t.booking.desc}
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.booking.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-clinic-nude rounded-xl px-4 py-3 focus:border-clinic-gold outline-none transition-colors text-xs" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.booking.phone}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-clinic-nude rounded-xl px-4 py-3 focus:border-clinic-gold outline-none transition-colors text-xs" 
                    placeholder="+994 ..." 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.booking.procedure}</label>
                  <input 
                    type="text" 
                    name="procedure"
                    required
                    value={formData.procedure}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-clinic-nude rounded-xl px-4 py-3 focus:border-clinic-gold outline-none transition-colors text-xs" 
                    placeholder="Russian Lips" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.booking.date}</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#FDFBF7] border border-clinic-nude rounded-xl px-4 py-3 focus:border-clinic-gold outline-none transition-colors text-xs" 
                  />
                </div>
              </div>
              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full font-semibold py-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-clinic-gold text-white cursor-default' 
                    : 'bg-clinic-text text-white hover:bg-clinic-accent'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={16} />
                    {t.booking.sent}
                  </>
                ) : (
                  t.booking.submit
                )}
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-between border-l border-clinic-nude">
            <div>
              <div className="gold-text">{t.contact.label}</div>
              <h3 className="text-3xl font-serif mb-12 text-clinic-text">{t.contact.title}</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-clinic-nude flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-clinic-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-clinic-gold mb-1">{t.contact.phone}</div>
                    <a 
                      href={`tel:${CLINIC_INFO.PHONE.replace(/\s/g, '')}`} 
                      className="text-lg text-clinic-text font-serif hover:text-clinic-gold transition-colors"
                    >
                      {CLINIC_INFO.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-clinic-nude flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-clinic-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-clinic-gold mb-3">Google Maps</div>
                    <a 
                      href="https://www.google.com/maps/search/Buta+Clinic+Baku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-clinic-gold text-clinic-gold px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-clinic-gold hover:text-white transition-all shadow-sm"
                    >
                      {t.contact.map}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-12">
              <a href="#" className="w-10 h-10 rounded-full border border-clinic-nude hover:border-clinic-gold flex items-center justify-center transition-colors">
                <Instagram size={18} className="text-clinic-text" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-clinic-nude hover:border-clinic-gold flex items-center justify-center transition-colors">
                <WhatsApp size={18} className="text-clinic-text" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#FDFBF7] border-t border-clinic-nude py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-light tracking-[0.2em] text-clinic-gold mb-2">DR. TURKAN</div>
            <p className="text-[10px] uppercase tracking-widest text-clinic-accent font-bold">
              Elegant Results by Dr. Turkan
            </p>
          </div>
          
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em] font-bold text-clinic-accent">
            <a href="#" className="hover:text-clinic-gold transition-colors">{t.nav.about}</a>
            <a href="#" className="hover:text-clinic-gold transition-colors">{t.nav.services}</a>
            <a href="#" className="hover:text-clinic-gold transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-clinic-nude text-[10px] uppercase tracking-widest font-bold opacity-50">
          <div>© 2024 Dr. Turkan Aesthetic & Dermatology Clinic. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
