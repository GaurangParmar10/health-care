'use client';

import React from 'react';
import { PhoneCall, Siren } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyCta() {
  return (
    <section className="relative py-24 bg-brand-blue-secondary text-brand-white overflow-hidden border-t-2 border-b-2 border-brand-navy">
      {/* Background grids and glowing blobs */}
      <div className="absolute inset-0 dots-grid-white opacity-10 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-35 pointer-events-none animate-pulse" />

      {/* Heartbeat Background Wave */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 400 100" className="w-full h-48 stroke-current" fill="none">
          <path
            d="M 10 50 L 100 50 L 110 50 L 120 20 L 130 80 L 140 50 L 150 50 L 170 50 L 180 10 L 190 90 L 205 40 L 215 55 L 225 50 L 390 50"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Siren blink icon */}
        <div className="w-16 h-16 rounded-2xl bg-brand-navy border-2 border-brand-white flex items-center justify-center mb-8 shadow-[4px_4px_0px_rgba(255,255,255,0.15)] relative">
          <Siren className="w-8 h-8 text-brand-yellow animate-bounce" />
          {/* Pulsing indicator node */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-brand-white animate-ping" />
        </div>

        {/* Heading */}
        <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter max-w-3xl mb-6 leading-none text-brand-white">
          Need Immediate <br />
          <span className="text-brand-yellow">Medical Assistance?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-brand-gray/80 max-w-lg mb-10 leading-relaxed font-semibold">
          Our specialized clinical trauma response unit and helicopter evacuation squad operate 24 hours a day, 365 days a year. Direct lines bypass standard queue systems.
        </p>

        {/* Pulsating CTA Yellow Button */}
        <motion.a
          href="tel:+18005559999"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="cta-yellow flex items-center gap-3 px-10 py-5 bg-brand-yellow text-brand-navy font-editorial font-black text-base md:text-lg tracking-widest uppercase border-2 border-brand-navy rounded-2xl shadow-[6px_6px_0px_#081E58] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#081E58] transition-all cursor-none"
          data-cursor="yellow"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" /> Call Emergency Line
        </motion.a>

        {/* Emergency details */}
        <div className="mt-8 font-editorial text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-brand-white/50">
          Trauma Triage Hotkey: Dial *911-EXT-Nexus
        </div>
      </div>
    </section>
  );
}
