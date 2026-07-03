'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Brain, Baby, Eye } from 'lucide-react';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  icon: React.ReactNode;
  color: string;
  avatarBg: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Evelyn Sterling',
    specialty: 'Lead Gene Cardiology',
    experience: '15 Years Experience',
    rating: 4.9,
    icon: <Heart className="w-5 h-5 text-brand-navy" />,
    color: '#0A3EBE',
    avatarBg: 'bg-brand-blue',
  },
  {
    name: 'Dr. Marcus Vance',
    specialty: 'Clinical Neuro-systems',
    experience: '18 Years Experience',
    rating: 5.0,
    icon: <Brain className="w-5 h-5 text-brand-navy" />,
    color: '#081E58',
    avatarBg: 'bg-brand-navy',
  },
  {
    name: 'Dr. Sophia Chen',
    specialty: 'Precision Pediatrics',
    experience: '12 Years Experience',
    rating: 4.8,
    icon: <Baby className="w-5 h-5 text-brand-navy" />,
    color: '#FFD400',
    avatarBg: 'bg-brand-yellow',
  },
  {
    name: 'Dr. Liam Gallagher',
    specialty: 'Advanced Radiomedicine',
    experience: '20 Years Experience',
    rating: 4.9,
    icon: <Eye className="w-5 h-5 text-brand-navy" />,
    color: '#0D47D9',
    avatarBg: 'bg-brand-blue-secondary',
  },
];

export default function MeetDoctors() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-gray text-brand-navy relative overflow-hidden" id="doctors">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="sticker">Research Mentors</span>
            <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none text-brand-navy">
              World Class <br />
              <span className="text-brand-blue">Clinical Directors</span>
            </h2>
            <p className="text-sm md:text-base text-brand-navy/70 mt-4 leading-relaxed">
              Our clinical leaders are faculty mentors, medical authors, and pioneering researchers who translate clinical trials into bedside medicine.
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="w-fit px-6 py-3 border-2 border-brand-navy font-editorial font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-navy hover:text-brand-white transition-all flex items-center gap-2 cursor-none"
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Doctors Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="paper-card rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden bg-brand-white group cursor-none"
            >
              <div>
                {/* Doctor Avatar Box with Halftone Style Graphic representation */}
                <div className={`w-full aspect-[4/3] rounded-2xl border-2 border-brand-navy ${doc.avatarBg} relative overflow-hidden shadow-[2px_2px_0px_#081E58] mb-6 flex items-center justify-center`}>
                  
                  {/* Decorative dot matrix grid */}
                  <div className="absolute inset-0 dots-grid opacity-15 pointer-events-none" />

                  {/* Abstract glowing sphere */}
                  <div className="absolute w-24 h-24 rounded-full bg-brand-white/20 blur-md animate-pulse" />

                  {/* Specialty Big Icon representing doctor */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-white border-2 border-brand-navy flex items-center justify-center shadow-[4px_4px_0px_#081E58] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {doc.icon}
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute bottom-2 left-3 font-editorial text-[10px] font-black text-brand-navy/60">
                    MD / RESEARCH LEAD
                  </div>
                </div>

                {/* Rating & Exp */}
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="text-brand-navy/60 font-sans">{doc.experience}</span>
                  <span className="flex items-center gap-1 text-brand-navy">
                    <Star className="w-3.5 h-3.5 fill-brand-yellow stroke-brand-navy" /> {doc.rating.toFixed(1)}
                  </span>
                </div>

                {/* Name & Specialty */}
                <h3 className="font-editorial text-xl md:text-2xl font-black uppercase tracking-tight text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs uppercase font-editorial tracking-wider font-bold text-brand-navy/55 mb-6">
                  {doc.specialty}
                </p>
              </div>

              {/* Book Appointment Slide-up Button */}
              <div className="relative overflow-hidden h-12 w-full rounded-xl border border-brand-navy bg-brand-gray group-hover:border-brand-blue transition-colors">
                <button
                  onClick={handleScrollToContact}
                  className="absolute inset-0 w-full h-full font-editorial font-bold text-xs uppercase tracking-wider text-brand-navy group-hover:text-brand-white flex items-center justify-center gap-2 group-hover:bg-brand-blue transition-all duration-300 transform translate-y-0 group-hover:-translate-y-[0%] cursor-none"
                >
                  Book Appointment <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
