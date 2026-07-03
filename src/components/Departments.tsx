'use client';

import React, { useState } from 'react';
import { Heart, Activity, Brain, Smile, Baby, Siren, Eye } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgClass: string;
  details: string;
  features: string[];
}

const departmentsData: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: <Heart className="w-8 h-8 text-brand-yellow" />,
    bgClass: 'bg-brand-blue text-brand-white',
    details: 'Precision cardiovascular analysis, cardiac telemetry, and next-generation valvular interventions.',
    features: ['Echocardiogram 4D', 'Electrophysiology', 'Valve Reconstruction'],
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: <Brain className="w-8 h-8 text-brand-blue" />,
    bgClass: 'bg-brand-gray text-brand-navy',
    details: 'Advanced brain mapping, neurodegenerative therapies, and computer-assisted spinal precision surgery.',
    features: ['Brain Mapping 3D', 'Stroke Triage AI', 'Neuro-Regen Therapies'],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: <Activity className="w-8 h-8 text-brand-yellow" />,
    bgClass: 'bg-brand-navy text-brand-white',
    details: 'Bio-integrated joint replacements, sports injury diagnostics, and arthroscopic interventions.',
    features: ['Robotic Arthroplasty', 'Bioprinted Cartilage', 'Kinesiology Labs'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: <Baby className="w-8 h-8 text-brand-blue" />,
    bgClass: 'bg-brand-gray text-brand-navy',
    details: 'Comprehensive child development tracking, pediatric immunology, and gentle clinical environments.',
    features: ['Neonatal ICU', 'Immunology Clinic', 'Genomics Screening'],
  },
  {
    id: 'radiology',
    name: 'Radiology',
    icon: <Eye className="w-8 h-8 text-brand-yellow" />,
    bgClass: 'bg-brand-blue text-brand-white',
    details: 'Ultra-high precision imaging including 7 Tesla MRI, spectral CT, and molecular diagnostics.',
    features: ['7T MRI Scanner', 'Dual-Energy CT', 'PET-CT Molecular'],
  },
  {
    id: 'dentistry',
    name: 'Dentistry',
    icon: <Smile className="w-8 h-8 text-brand-blue" />,
    bgClass: 'bg-brand-gray text-brand-navy',
    details: 'High-aesthetic dental reconstructions, digital smile mapping, and minimally invasive implantology.',
    features: ['3D Smile Modeling', 'Laser Implantology', 'Oral Maxillofacial'],
  },
  {
    id: 'emergency',
    name: 'Emergency',
    icon: <Siren className="w-8 h-8 text-brand-yellow animate-bounce" />,
    bgClass: 'bg-red-600 text-white',
    details: 'Critical care units, urgent surgical interventions, and dedicated trauma helicopter landing pads.',
    features: ['Trauma ICU 24/7', 'Helipad Access', 'Instant Triage AI'],
  },
];

export default function Departments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-navy text-brand-white relative overflow-hidden" id="departments">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid-white opacity-[0.05] pointer-events-none" />

      {/* Floating accent elements */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 bg-brand-blue rounded-full blur-[120px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="sticker bg-brand-yellow text-brand-navy">Core Divisions</span>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4">
            Clinical <span className="text-brand-yellow">Specialities</span>
          </h2>
          <p className="text-sm md:text-base text-brand-gray/70 max-w-lg mt-2">
            Explore our range of research-backed medical divisions, each operating at the forefront of digital healthcare technology.
          </p>
        </div>

        {/* Expandable Flex Row Grid */}
        <div className="flex flex-col lg:flex-row gap-6 min-h-[500px] w-full">
          {departmentsData.map((dept, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <div
                key={dept.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`rounded-[32px] p-8 border-2 border-brand-white/10 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative overflow-hidden ${
                  dept.bgClass
                } ${
                  isHovered 
                    ? 'lg:flex-[3] flex-[2] border-brand-yellow shadow-[0_15px_30px_rgba(255,212,0,0.15)]' 
                    : 'lg:flex-[1] flex-[1] grayscale opacity-70 lg:opacity-60'
                }`}
              >
                {/* Background SVG vector heartbeat wave inside cards when hovered */}
                {isHovered && (
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center scale-150">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none">
                      <path d="M 0 50 Q 25 10 50 50 T 100 50" strokeWidth="2" />
                    </svg>
                  </div>
                )}

                {/* Top Header Card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl border-2 border-brand-navy/15 bg-brand-white/10 flex items-center justify-center shadow-inner">
                      {dept.icon}
                    </div>
                    {/* Only show title fully or styled large on active */}
                    <h3 className="font-editorial text-xl md:text-2xl font-black uppercase tracking-tight">
                      {dept.name}
                    </h3>
                  </div>
                  
                  {/* Small tag icon indicator */}
                  <div className="text-xs uppercase font-editorial tracking-widest font-black opacity-45">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>

                {/* Expandable Details Container */}
                <div className={`mt-8 transition-all duration-500 flex flex-col justify-end ${
                  isHovered ? 'opacity-100 max-h-[300px]' : 'lg:opacity-0 lg:max-h-0 lg:overflow-hidden opacity-100 max-h-[150px]'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed mb-6 font-medium max-w-md">
                    {dept.details}
                  </p>

                  {/* Bullet list of tech features */}
                  <div className="flex flex-wrap gap-2">
                    {dept.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] md:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-current/20 bg-brand-white/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
