'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  condition: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    condition: 'Oncology Survivor',
    quote: 'The AI Diagnostic Engine identified a 1.8mm anomaly that had been missed by three standard radiology centers. Their prompt action saved my life.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Marcus Thorne',
    condition: 'Robotic Cardiac Patient',
    quote: 'DaVinci robotic heart valve repair was a massive success. Micro-incisions meant I was back on my feet and walking in less than 48 hours.',
    rating: 5,
    initials: 'MT',
  },
  {
    name: 'Prof. Raymond Vance',
    condition: 'Research Colleague',
    quote: 'Nexus Labs holds the highest bench-to-bedside translation speed. Their clinical trials set the global benchmark for immunotherapy.',
    rating: 5,
    initials: 'RV',
  },
  {
    name: 'Elena Rostova',
    condition: 'Neuro Precision Patient',
    quote: 'The wearable telemetry system kept my clinical directors updated on my neural recovery 24/7. Modern healthcare does not get better than this.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'Alistair Sterling',
    condition: 'Bioprinted Joint Recipient',
    quote: 'Bioprinted cartilage replacement completely restored my knee mobility. I am back to training and running trails without any joint soreness.',
    rating: 5,
    initials: 'AS',
  },
];

export default function Testimonials() {
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-brand-blue text-brand-white relative overflow-hidden" id="testimonials">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid-white opacity-[0.05] pointer-events-none" />

      {/* Floating abstract glowing shape */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-navy rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="sticker bg-brand-yellow text-brand-navy">Clinical Proof</span>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none text-brand-white">
            Pioneering Patients. <br />
            <span className="text-brand-navy">Priceless Stories.</span>
          </h2>
        </div>
      </div>

      {/* Testimonials Infinite Marquee */}
      <div className="relative w-full flex items-center overflow-x-hidden py-4 select-none">
        <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
          {doubleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card w-[320px] md:w-[420px] rounded-3xl p-8 border border-brand-white/10 flex flex-col justify-between hover:border-brand-yellow/30 transition-all shadow-xl"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow stroke-brand-yellow" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-yellow opacity-20" />
                </div>

                {/* Quote Content */}
                <p className="text-sm md:text-base leading-relaxed text-brand-white/90 font-medium mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Patient Profile info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-navy font-editorial font-bold border border-brand-navy flex items-center justify-center shadow-[2px_2px_0px_#081E58]">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-editorial text-base font-bold uppercase tracking-tight text-brand-white">
                    {t.name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-gray/50">
                    {t.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
