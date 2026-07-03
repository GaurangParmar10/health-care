'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 1800; // 1.8 seconds loading
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(Math.round((step / steps) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Allow fadeout animation to complete
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-brand-blue z-[99999] flex flex-col items-center justify-center text-brand-white select-none"
        >
          {/* Subtle noise background inside splash */}
          <div className="absolute inset-0 grain-overlay opacity-5 pointer-events-none" />

          {/* Dots Grid background */}
          <div className="absolute inset-0 dots-grid-white opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">
            
            {/* Pulsing Medical Shield / Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center border-2 border-brand-navy shadow-[3px_3px_0px_#081E58]">
                <span className="font-editorial text-xl font-black text-brand-navy">+</span>
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-brand-white">
                NEXUS<span className="text-brand-yellow">.</span>LABS
              </span>
            </motion.div>

            {/* Heartbeat Line SVG Animation */}
            <div className="w-full h-32 flex items-center justify-center relative mb-6">
              <svg
                viewBox="0 0 300 100"
                className="w-80 h-24 overflow-visible"
                fill="none"
              >
                {/* Background faint pulse path */}
                <path
                  d="M 10 50 L 70 50 L 80 50 L 90 20 L 100 80 L 110 50 L 120 50 L 140 50 L 150 10 L 160 90 L 175 40 L 185 55 L 195 50 L 290 50"
                  stroke="rgba(249, 250, 251, 0.15)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Foreground animated heartbeat pulse */}
                <motion.path
                  d="M 10 50 L 70 50 L 80 50 L 90 20 L 100 80 L 110 50 L 120 50 L 140 50 L 150 10 L 160 90 L 175 40 L 185 55 L 195 50 L 290 50"
                  stroke="#FFD400"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 0.2,
                  }}
                />
              </svg>
            </div>

            {/* Counter percentage */}
            <div className="flex flex-col items-center">
              <span className="font-editorial text-6xl font-black text-brand-white tracking-tighter mb-2 tabular-nums">
                {count}%
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gray/60 font-sans">
                Initializing DNA Sequences
              </span>
            </div>
          </div>

          {/* Bottom status text */}
          <div className="absolute bottom-12 font-editorial text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray/40">
            Awwwards Presentation / Next-Gen Medical Lab
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
