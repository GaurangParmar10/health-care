'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Stethoscope, Atom, Zap, ShieldAlert, BadgeDollarSign } from 'lucide-react';

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const chooseUsData: CardItem[] = [
  {
    icon: <Cpu className="w-8 h-8 text-brand-yellow" />,
    title: 'AI Assisted Diagnosis',
    description: 'Neural networks detect anomalies with 99.4% accuracy, scanning millions of data points in real time to aid diagnostic precision.',
    badge: '99.4% Acc',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-brand-blue" />,
    title: 'Expert Physicians',
    description: 'Our world-renowned medical consultants bring decades of clinical leadership from top-tier global university clinics and research centers.',
  },
  {
    icon: <Atom className="w-8 h-8 text-brand-yellow" />,
    title: 'Research Driven Care',
    description: 'Direct bench-to-bedside research integration ensures our patients get immediate access to novel immunotherapies and clinical trials.',
    badge: 'Clinical Trials',
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-blue" />,
    title: 'Advanced Equipment',
    description: 'Equipped with ultra-high field 7T MRI scanners, AI-powered CT scanners, and next-generation precision laser surgery devices.',
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-brand-yellow" />,
    title: 'Emergency Response',
    description: 'Featuring rapid-triage software, specialized airborne trauma response units, and dedicated round-the-clock emergency support.',
    badge: '24/7 Priority',
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-brand-blue" />,
    title: 'Affordable Care',
    description: 'Integrating automated billing transparency and partner insurance integrations to ensure world-class care is financially accessible.',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  // 3D card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt values (-8 to 8 degrees)
    const tiltX = ((centerY - y) / centerY) * 8;
    const tiltY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
    card.style.boxShadow = '0 20px 40px rgba(8, 30, 88, 0.15), 0 0 20px rgba(10, 62, 190, 0.1)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    card.style.boxShadow = '4px 4px 0px #081E58';
  };

  return (
    <section className="py-24 bg-brand-white text-brand-navy relative overflow-hidden" id="why-choose-us">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid opacity-[0.04] pointer-events-none" />
      
      {/* Background shape */}
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-brand-gray rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="sticker mb-4">Precision Science</div>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-brand-navy">
            Pioneering Medicine. <br />
            <span className="text-brand-blue">Redefining Care.</span>
          </h2>
          <p className="text-base md:text-lg text-brand-navy/80 mt-4 max-w-xl">
            We merge standard clinical services with advanced bio-research, creating a safer, faster, and smarter clinical pipeline.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {chooseUsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="paper-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              {/* Badge sticker */}
              {item.badge && (
                <div className="absolute top-4 right-4 bg-brand-navy text-brand-white text-[10px] uppercase font-editorial font-bold px-2 py-0.5 rounded border border-brand-navy tracking-wider rotate-3">
                  {item.badge}
                </div>
              )}

              {/* Card Header & Icon */}
              <div>
                <div className="w-16 h-16 rounded-2xl border-2 border-brand-navy bg-brand-gray flex items-center justify-center mb-6 shadow-[2px_2px_0px_#081E58] relative">
                  {item.icon}
                  {/* Decorative corner node */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-brand-yellow rounded-full border border-brand-navy" />
                </div>

                <h3 className="font-editorial text-2xl font-black uppercase tracking-tight text-brand-navy mb-3">
                  {item.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-sm text-brand-navy/70 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative small sticker bullet */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-brand-navy/20 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
