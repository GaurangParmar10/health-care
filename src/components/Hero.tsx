'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DnaHelixCanvas from './DnaHelixCanvas';
import Counter from './Counter';
import { ArrowUpRight, Activity, Cpu, ShieldAlert } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDepartments = () => {
    const departmentsSection = document.getElementById('departments');
    if (departmentsSection) {
      departmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-brand-blue text-brand-white pt-24 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background patterns */}
      <div className="absolute inset-0 dots-grid-white opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-navy rounded-full blur-[120px] opacity-40 pointer-events-none" />
      
      {/* Floating abstract poster-style circles */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full bg-brand-yellow/30 border border-brand-yellow/50 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-10 w-4 h-4 rounded-full bg-brand-white/10 pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content: Editorial Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Sticker / Label */}
          <motion.div variants={itemVariants} className="sticker mb-6 relative">
            Next-Gen Medicine
            <div className="absolute -right-6 -bottom-5 w-8 h-8 text-brand-yellow pointer-events-none transform rotate-12">
              {/* Decorative Poster Arrow SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Hero Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-editorial text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-brand-white mb-6"
          >
            Healthcare <br />
            <span className="text-brand-navy">for the</span> <br />
            Next <span className="text-brand-yellow">Gen.</span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-gray/90 max-w-xl mb-10 font-normal leading-relaxed"
          >
            Combining world-class research, state-of-the-art AI diagnostics, and compassionate clinical care to pioneer the medical treatments of tomorrow.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 bg-brand-yellow text-brand-navy font-editorial font-bold text-sm tracking-widest uppercase border-2 border-brand-navy rounded-xl shadow-[4px_4px_0px_#081E58] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#081E58] transition-all cursor-none"
              data-cursor="yellow"
            >
              Book Appointment
            </button>
            <button
              onClick={handleScrollToDepartments}
              className="px-8 py-4 bg-transparent border-2 border-brand-white text-brand-white font-editorial font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-brand-white hover:text-brand-blue transition-all flex items-center gap-2 cursor-none"
            >
              Explore Services <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Visuals: Floating Doctor and DNA 3D WebGL Helix */}
        <div className="lg:col-span-5 relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
          
          {/* WebGL DNA Helix Canvas (Background layer of right side) */}
          <div className="absolute inset-0 z-0">
            <DnaHelixCanvas />
          </div>

          {/* Doctor Illustration Image (Floating above DNA) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
            className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] h-[350px] lg:h-[450px]"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-brand-navy/35 rounded-[40px] blur-3xl transform rotate-6 scale-95 pointer-events-none" />
            
            {/* Halftone / Textured Doctor Frame */}
            <div className="w-full h-full rounded-[32px] border-2 border-brand-navy overflow-hidden bg-brand-gray shadow-[12px_12px_0px_#081E58] relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/doctor_illustration.png"
                alt="Next Generation Healthcare"
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Paper overlay */}
              <div className="absolute inset-0 bg-brand-navy mix-blend-overlay opacity-30 pointer-events-none" />
              <div className="absolute inset-0 border-[8px] border-brand-navy rounded-[30px]" />
            </div>

            {/* Float tags/stickers around doctor */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-brand-yellow border-2 border-brand-navy text-brand-navy px-3 py-1.5 rounded-lg text-xs font-editorial font-bold shadow-[2px_2px_0px_#081E58] rotate-6 flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" /> AI DIAGNOSIS
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -left-8 bg-brand-navy border-2 border-brand-white text-brand-white px-3 py-1.5 rounded-lg text-xs font-editorial font-bold shadow-[2px_2px_0px_rgba(255,255,255,0.2)] -rotate-6 flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5 text-brand-yellow" /> LIVE TELEMETRY
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Bar at the Bottom */}
      <div className="relative z-10 w-full bg-brand-navy border-t border-b border-brand-blue/30 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-brand-blue/30 last:border-0 pr-4">
            <h3 className="font-editorial text-4xl lg:text-5xl font-black text-brand-yellow">
              <Counter value={150} suffix="+" />
            </h3>
            <p className="text-xs uppercase tracking-widest text-brand-gray/60 font-semibold mt-1">Specialist Doctors</p>
          </div>
          <div className="border-r border-brand-blue/30 last:border-0 md:pr-4">
            <h3 className="font-editorial text-4xl lg:text-5xl font-black text-brand-white">
              <Counter value={50} suffix="+" />
            </h3>
            <p className="text-xs uppercase tracking-widest text-brand-gray/60 font-semibold mt-1">Research Depts</p>
          </div>
          <div className="border-r border-brand-blue/30 last:border-0 pr-4">
            <h3 className="font-editorial text-4xl lg:text-5xl font-black text-brand-white">
              <Counter value={200} suffix="K+" />
            </h3>
            <p className="text-xs uppercase tracking-widest text-brand-gray/60 font-semibold mt-1">Patients Cured</p>
          </div>
          <div>
            <h3 className="font-editorial text-4xl lg:text-5xl font-black text-brand-yellow flex items-center justify-center gap-1">
              <ShieldAlert className="w-6 h-6 animate-pulse" /> 24/7
            </h3>
            <p className="text-xs uppercase tracking-widest text-brand-gray/60 font-semibold mt-1">Emergency Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}
