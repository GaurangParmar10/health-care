'use client';

import React from 'react';
import { ArrowUpRight, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-brand-white border-t-2 border-brand-navy pt-20 pb-12 relative overflow-hidden select-none">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid-white opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-white/10">
          
          {/* Logo & Bio Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center border border-brand-navy shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                  <span className="font-editorial text-lg font-black text-brand-navy">+</span>
                </div>
                <span className="font-editorial text-2xl font-bold tracking-tight text-brand-white">
                  NEXUS<span className="text-brand-yellow">.</span>LABS
                </span>
              </div>
              <p className="text-sm text-brand-gray/60 leading-relaxed max-w-sm">
                A biotechnology and clinical diagnostics organization bridging raw research with bedside therapy. Powered by AI and precision genetics.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-xl border border-brand-white/10 bg-brand-white/5 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-all cursor-none" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-brand-white/10 bg-brand-white/5 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-all cursor-none" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-brand-white/10 bg-brand-white/5 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-all cursor-none" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-brand-white/10 bg-brand-white/5 flex items-center justify-center hover:border-brand-yellow hover:text-brand-yellow transition-all cursor-none" aria-label="Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-3">
            <h4 className="font-editorial text-xs font-black uppercase tracking-[0.2em] text-brand-yellow mb-6">
              Core Divisions
            </h4>
            <ul className="space-y-4">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Radiology'].map((link) => (
                <li key={link}>
                  <a
                    href="#departments"
                    className="text-sm font-semibold text-brand-gray/60 hover:text-brand-white flex items-center gap-1 cursor-none transition-colors"
                  >
                    {link} <ArrowUpRight className="w-3 h-3 opacity-0 hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-4">
            <h4 className="font-editorial text-xs font-black uppercase tracking-[0.2em] text-brand-yellow mb-6">
              Subscribe to Genomics Newsletter
            </h4>
            <p className="text-xs text-brand-gray/50 mb-4 leading-relaxed">
              Receive raw data, clinical trial publications, and breakthrough research briefings monthly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="researcher@university.edu"
                className="flex-1 px-4 py-2 text-xs border border-brand-white/10 rounded-xl bg-brand-white/5 text-brand-white outline-none focus:border-brand-blue cursor-none placeholder-brand-white/20 font-medium"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand-yellow text-brand-navy font-editorial font-bold text-xs uppercase tracking-wider border border-brand-navy rounded-xl shadow-[2px_2px_0px_#081E58] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#081E58] transition-all cursor-none"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-xs text-brand-gray/40 font-semibold uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} Nexus Labs Inc. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-brand-white cursor-none">Privacy Charter</a>
            <a href="#" className="hover:text-brand-white cursor-none">Security Audit</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-brand-white cursor-none"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
