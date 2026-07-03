'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How do I qualify for Nexus clinical trials?',
    answer: 'Every patient undergoes a full genomic panel and diagnostic assessment. If your clinical profile aligns with our active translational protocols (such as targeted immunotherapies), your consulting director will walk you through enrollment.',
  },
  {
    question: 'What is the exact role of AI in my diagnosis?',
    answer: 'Our AI diagnostic core acts as a high-fidelity co-pilot for our radiologists. It highlights suspicious tissue density structures down to 1.5 millimeters and provides deep comparative models from millions of medical archives instantly.',
  },
  {
    question: 'Is my telemetry health data secure?',
    answer: 'Absolutely. We deploy end-to-end zero-knowledge proof cryptography. Your medical files, imagery, and genetic profiles are encrypted at rest and in transit, fully complying with HIPAA, GDPR, and international medical privacy standards.',
  },
  {
    question: 'How do I choose the right clinic department?',
    answer: 'Our digital pre-triage form analyzes your symptoms and medical logs to automatically direct your profile to the most appropriate specialty. You will be matched with a clinical director during triage.',
  },
  {
    question: 'Are next-generation robotic treatments covered by insurance?',
    answer: 'Yes, we partner directly with major carriers (including Blue Cross, Aetna, Cigna) to cover advanced treatments. Our billing support team handles prior authorizations to ensure maximum coverage.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-white text-brand-navy relative overflow-hidden" id="faq">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="sticker">Answering Queries</span>
          <h2 className="font-editorial text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none text-brand-navy">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            
            return (
              <div
                key={idx}
                className="paper-card rounded-2xl overflow-hidden bg-brand-white transition-all"
                style={{
                  borderColor: isOpen ? '#0A3EBE' : '#081E58',
                  boxShadow: isOpen ? '6px 6px 0px #FFD400' : '4px 4px 0px #081E58',
                }}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-none"
                >
                  <span className="font-editorial text-lg md:text-xl font-bold uppercase tracking-tight text-brand-navy">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`w-8 h-8 rounded-full border border-brand-navy flex items-center justify-center bg-brand-gray text-brand-navy transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-yellow' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-brand-navy/10 text-sm md:text-base leading-relaxed text-brand-navy/85">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
