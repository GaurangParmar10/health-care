'use client';

import React from 'react';

const partners = [
  'Harvard Medicine',
  'Mayo Clinic',
  'Stanford Health Care',
  'Mit Bio Labs',
  'Johns Hopkins Research',
  'Blue Cross Insurance',
  'Aetna Cares',
  'Cigna Healthcare',
  'Oxford Genomics Group',
  'Cleveland Clinic',
];

export default function TrustedMarquee() {
  // Double the list to ensure seamless infinite scroll wrap
  const doublePartners = [...partners, ...partners];

  return (
    <section className="py-8 bg-brand-gray border-b-2 border-brand-navy overflow-hidden relative select-none">
      {/* Decorative dots grid background */}
      <div className="absolute inset-0 dots-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-navy/50 font-bold font-editorial text-center lg:text-left">
          Trusted By Industry Pioneers & Research Institutions
        </h4>
      </div>

      <div className="relative w-full flex items-center overflow-x-hidden">
        {/* Infinite scrolling wrapper */}
        <div className="flex w-max gap-12 py-2 animate-marquee">
          {doublePartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-brand-navy font-editorial font-bold text-lg md:text-xl tracking-wider uppercase"
            >
              {/* Halftone look bullet */}
              <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full border border-brand-navy shadow-[1.5px_1.5px_0px_#081E58]" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
