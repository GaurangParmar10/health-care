'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CalendarRange, UserCheck, Microscope, HeartPulse, Sparkles, ClipboardCheck } from 'lucide-react';

interface TimelineStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const timelineSteps: TimelineStep[] = [
  {
    title: 'Digital Appointment',
    subtitle: 'Step 01 / Smart Triage',
    description: 'Book your slot online using our quick telemetry pre-triage form. The AI pre-classifies symptoms to assign the perfect specialist.',
    icon: <CalendarRange className="w-5 h-5 text-brand-navy" />,
  },
  {
    title: 'Consultation',
    subtitle: 'Step 02 / Director Review',
    description: 'Meet with your consulting director for a detailed clinical workup, genetic history analysis, and lifestyle profiling.',
    icon: <UserCheck className="w-5 h-5 text-brand-navy" />,
  },
  {
    title: 'Bio-Diagnostics',
    subtitle: 'Step 03 / High-Field Scans',
    description: 'Scans are taken using 7T MRI and spectral CT, which our AI diagnostic core analyzes to map micro-anomalies.',
    icon: <Microscope className="w-5 h-5 text-brand-navy" />,
  },
  {
    title: 'Precision Treatment',
    subtitle: 'Step 04 / Bio-Interventions',
    description: 'Our surgeons deploy precision robot-assisted procedures or immunotherapies customized to your specific genetics.',
    icon: <HeartPulse className="w-5 h-5 text-brand-navy" />,
  },
  {
    title: 'Supervised Recovery',
    subtitle: 'Step 05 / Active Telemetry',
    description: 'Recover in comfort with wearable sensors syncing vital signals to our clinic in real time, detecting anomalies before they arise.',
    icon: <Sparkles className="w-5 h-5 text-brand-navy" />,
  },
  {
    title: 'Genomic Follow-Up',
    subtitle: 'Step 06 / Health Sync',
    description: 'Receive automated monthly checkpoints, lifestyle adjustments, and genetic panel updates to ensure permanent vitality.',
    icon: <ClipboardCheck className="w-5 h-5 text-brand-navy" />,
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Smooth out the scroll progress using a spring
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section className="py-24 bg-brand-white text-brand-navy relative overflow-hidden" id="journey">
      {/* Background patterns */}
      <div className="absolute inset-0 dots-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="sticker bg-brand-yellow text-brand-navy">Bedside Flow</span>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none text-brand-navy">
            The Patient <span className="text-brand-blue">Journey</span>
          </h2>
          <p className="text-sm md:text-base text-brand-navy/75 mt-4 max-w-lg leading-relaxed">
            From smart digital triage to long-term genomic checks, see how we coordinate your medical treatments smoothly step-by-step.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto flex flex-col gap-12">
          
          {/* Vertical progress line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-brand-gray rounded-full -translate-x-1/2 pointer-events-none">
            {/* Animated drawing line path overlay */}
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute inset-0 w-full bg-brand-blue rounded-full"
            />
          </div>

          {timelineSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Left/Right content box */}
                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="paper-card p-6 md:p-8 rounded-3xl bg-brand-white"
                  >
                    <span className="text-xs uppercase font-editorial tracking-widest font-black text-brand-blue-secondary">
                      {step.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl font-black uppercase tracking-tight text-brand-navy mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-navy/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline center node/icon */}
                <div className="absolute left-6 md:left-1/2 top-4 md:top-auto w-12 h-12 rounded-full border-2 border-brand-navy bg-brand-yellow flex items-center justify-center -translate-x-1/2 shadow-[2px_2px_0px_#081E58] z-20">
                  {step.icon}
                </div>

                {/* Empty spacing box to balance flex grid layout */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
