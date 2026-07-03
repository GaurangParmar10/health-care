'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Database, Activity, Cpu, Disc } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  specs: string[];
  description: string;
  blueprintSvg: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    id: 'mri',
    name: '7T Ultra-High MRI',
    icon: <Scan className="w-6 h-6" />,
    title: 'Precision Magnetic Resonance Imaging',
    specs: ['7 Tesla Magnet Field', 'Sub-millimeter resolution', 'AI-assisted image denoising'],
    description: 'Our ultra-high field MRI provides diagnostic scans with 10x higher detail than conventional clinical systems, allowing mapping of neurological synapses and micro-vascular structures.',
    blueprintSvg: (
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-white fill-none stroke-current">
        {/* MRI Scanner outer ring */}
        <circle cx="200" cy="150" r="100" strokeWidth="4" className="opacity-40" />
        <circle cx="200" cy="150" r="85" strokeWidth="2" strokeDasharray="5 5" className="opacity-60" />
        <circle cx="200" cy="150" r="115" strokeWidth="1" className="opacity-20" />
        {/* Scanning beam */}
        <motion.line
          x1="200" y1="50" x2="200" y2="250"
          stroke="#FFD400"
          strokeWidth="3"
          animate={{ x: [120, 280, 120] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Central target grid */}
        <line x1="80" y1="150" x2="320" y2="150" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <line x1="200" y1="30" x2="200" y2="270" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        {/* Signal telemetry waves */}
        <path d="M 50 260 Q 100 240 150 260 T 250 260 T 350 260" strokeWidth="1.5" className="opacity-45" />
        <path d="M 50 270 Q 100 255 150 270 T 250 270 T 350 270" stroke="#FFD400" strokeWidth="1" className="opacity-70 animate-pulse" />
      </svg>
    ),
  },
  {
    id: 'ct',
    name: 'Dual-Energy Spectral CT',
    icon: <Disc className="w-6 h-6" />,
    title: 'Spectral Computed Tomography',
    specs: ['Dual-source tube emitter', '0.2 second full rotation', '90% reduced radiation dosing'],
    description: 'Utilizing spectral energy reconstruction, this CT scans tissues at two energy wavelengths simultaneously, yielding precise chemical classification of calcified structures and soft tumor tissues.',
    blueprintSvg: (
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-white fill-none stroke-current">
        {/* Spectral slice grid */}
        <rect x="80" y="60" width="240" height="180" rx="16" strokeWidth="2" className="opacity-30" />
        {/* Scanning cone */}
        <path d="M 200 60 L 100 240 L 300 240 Z" fill="rgba(255, 212, 0, 0.05)" strokeWidth="1" className="opacity-30" />
        {/* Slices of CT scan */}
        <g className="opacity-60">
          <line x1="120" y1="100" x2="280" y2="100" strokeWidth="1.5" />
          <line x1="100" y1="140" x2="300" y2="140" strokeWidth="1.5" />
          <line x1="110" y1="180" x2="290" y2="180" strokeWidth="1.5" />
        </g>
        <motion.circle
          cx="200" cy="140" r="30"
          stroke="#FFD400"
          strokeWidth="3"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'A.I. Diagnostic Core',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Deep Learning Medical Inference Engine',
    specs: ['Multi-modal transformer model', 'Real-time telemetry scan', 'Cross-referenced with 40M+ cases'],
    description: 'Our clinical AI pipeline cross-references scans with global oncology and genetic databases in milliseconds, highlighting suspicious micro-structures and providing doctors with immediate diagnostic suggestions.',
    blueprintSvg: (
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-white fill-none stroke-current">
        {/* Neural Network Nodes */}
        <g className="opacity-40" strokeWidth="1.5">
          <line x1="100" y1="150" x2="200" y2="80" />
          <line x1="100" y1="150" x2="200" y2="150" />
          <line x1="100" y1="150" x2="200" y2="220" />
          <line x1="200" y1="80" x2="300" y2="150" />
          <line x1="200" y1="150" x2="300" y2="150" />
          <line x1="200" y1="220" x2="300" y2="150" />
        </g>
        {/* Glowing node pulses */}
        <circle cx="100" cy="150" r="10" className="opacity-80" strokeWidth="2" />
        <circle cx="200" cy="80" r="10" className="opacity-80" strokeWidth="2" />
        <circle cx="200" cy="150" r="10" stroke="#FFD400" strokeWidth="3" />
        <circle cx="200" cy="220" r="10" className="opacity-80" strokeWidth="2" />
        <circle cx="300" cy="150" r="10" stroke="#FFD400" strokeWidth="2" />
        {/* Data pulse moving across nodes */}
        <motion.circle
          cx="200" cy="150"
          r="4"
          fill="#FFD400"
          animate={{ cx: [100, 200, 300], cy: [150, 150, 150] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    ),
  },
  {
    id: 'robotic',
    name: 'Precision Robotic Surgery',
    icon: <Activity className="w-6 h-6" />,
    title: 'DaVinci Next-Gen Robotic Intervention',
    specs: ['Sub-micron vibration suppression', '3D Stereoscopic HD View', 'Bio-synthetic suture guides'],
    description: 'Robotic surgical arms filter hand vibrations to sub-micron accuracy, allowing surgeons to carry out minimally-invasive heart and brain operations with micro-incision entries.',
    blueprintSvg: (
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-white fill-none stroke-current">
        {/* Surgical target overlay */}
        <rect x="150" y="100" width="100" height="100" rx="8" strokeWidth="1.5" className="opacity-30" />
        <line x1="200" y1="70" x2="200" y2="230" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        <line x1="120" y1="150" x2="280" y2="150" strokeWidth="1" strokeDasharray="3 3" className="opacity-30" />
        {/* Articulating robot arms */}
        <path d="M 60 70 L 140 120 L 180 140" strokeWidth="3" className="opacity-50" />
        <path d="M 340 70 L 260 120 L 220 140" strokeWidth="3" stroke="#FFD400" />
        {/* Active Laser tip */}
        <circle cx="220" cy="140" r="4" fill="#FFD400" />
        <motion.circle
          cx="220" cy="140" r="12"
          stroke="#FFD400"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    id: 'cloud',
    name: 'Encrypted Cloud E.M.R.',
    icon: <Database className="w-6 h-6" />,
    title: 'Decentralized Encrypted Electronic Medical Records',
    specs: ['Zero-knowledge proof encryption', 'Instant multi-clinic sync', 'HIPAA & GDPR fully compliant'],
    description: 'Our decentralized EMR platform ensures your health history, genetic maps, and imagery are stored securely in cryptographic vaults, accessible immediately by emergency providers.',
    blueprintSvg: (
      <svg viewBox="0 0 400 300" className="w-full h-full text-brand-white fill-none stroke-current">
        {/* Central cloud core */}
        <path d="M 150 170 A 30 30 0 0 1 180 120 A 45 45 0 0 1 240 120 A 30 30 0 0 1 270 170 Z" strokeWidth="2.5" className="opacity-60" />
        {/* Encryption key lock */}
        <rect x="195" y="150" width="10" height="15" rx="2" stroke="#FFD400" strokeWidth="2" />
        <path d="M 198 150 L 198 144 A 3 3 0 0 1 202 144 L 202 150" stroke="#FFD400" strokeWidth="1.5" />
        {/* Connected database nodes */}
        <line x1="200" y1="90" x2="200" y2="120" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        <line x1="120" y1="180" x2="160" y2="170" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        <line x1="280" y1="180" x2="240" y2="170" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
        {/* Encrypted data locks */}
        <circle cx="200" cy="90" r="8" className="opacity-80" />
        <circle cx="120" cy="180" r="8" className="opacity-80" stroke="#FFD400" />
        <circle cx="280" cy="180" r="8" className="opacity-80" />
      </svg>
    ),
  },
];

export default function TechSection() {
  const [activeTab, setActiveTab] = useState<string>('mri');
  const activeTech = technologies.find((t) => t.id === activeTab) || technologies[0];

  return (
    <section className="py-24 bg-brand-blue text-brand-white relative overflow-hidden" id="technology">
      {/* Background patterns */}
      <div className="absolute inset-0 dots-grid-white opacity-[0.05] pointer-events-none" />
      
      {/* Top light glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue-secondary rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="sticker bg-brand-yellow text-brand-navy">Diagnostic Core</span>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none">
            Precision <span className="text-brand-navy">Technology</span>
          </h2>
          <p className="text-sm md:text-base text-brand-gray/80 mt-4 max-w-lg">
            We equip our medical labs and theaters with high-field diagnostic devices, enabling precision surgeries and instant patient mapping.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Buttons list */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {technologies.map((tech) => {
              const isActive = activeTab === tech.id;
              
              return (
                <div
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`p-6 rounded-2xl border-2 cursor-none transition-all flex items-center gap-4 ${
                    isActive
                      ? 'bg-brand-navy border-brand-yellow shadow-[4px_4px_0px_#FFD400]'
                      : 'bg-brand-white/5 border-brand-white/10 hover:border-brand-white/20'
                  }`}
                >
                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isActive ? 'bg-brand-yellow border-brand-navy text-brand-navy' : 'bg-brand-white/10 border-brand-white/20 text-brand-white'
                  }`}>
                    {tech.icon}
                  </div>

                  {/* Text details */}
                  <div className="text-left">
                    <h3 className="font-editorial text-lg font-bold uppercase tracking-wide">
                      {tech.name}
                    </h3>
                    <p className={`text-xs mt-0.5 ${isActive ? 'text-brand-gray' : 'text-brand-gray/50'}`}>
                      {tech.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Blueprint Display */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-brand-navy border-2 border-brand-white/10 rounded-[32px] p-8 shadow-[8px_8px_0px_rgba(8,30,88,0.4)] flex flex-col justify-between relative overflow-hidden">
              {/* Telemetry blueprint grid inside container */}
              <div className="absolute inset-0 dots-grid-white opacity-[0.03] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTech.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col justify-between"
                >
                  {/* Top blueprint SVG visual */}
                  <div className="w-full aspect-[16/9] bg-brand-blue/10 border border-brand-white/10 rounded-2xl overflow-hidden flex items-center justify-center mb-6 relative">
                    <div className="absolute top-3 left-3 bg-brand-blue/30 text-[10px] uppercase font-mono px-2 py-0.5 rounded text-brand-yellow">
                      System Active / Telemetry Stream
                    </div>
                    {activeTech.blueprintSvg}
                  </div>

                  {/* Technical description */}
                  <div>
                    <h3 className="font-editorial text-2xl font-black uppercase tracking-tight text-brand-yellow mb-3">
                      {activeTech.title}
                    </h3>
                    <p className="text-sm text-brand-gray/80 leading-relaxed mb-6">
                      {activeTech.description}
                    </p>

                    {/* Spec badges */}
                    <div className="flex flex-wrap gap-2">
                      {activeTech.specs.map((spec, index) => (
                        <span
                          key={index}
                          className="text-[10px] font-mono uppercase tracking-wider text-brand-white/70 px-3 py-1.5 rounded bg-brand-blue/40 border border-brand-white/10"
                        >
                          ■ {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
