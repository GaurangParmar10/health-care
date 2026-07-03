'use client';

import React, { useEffect, useState } from 'react';
import { Siren, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-brand-blue/80 backdrop-blur-md border-b border-brand-white/10 shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-none">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center border border-brand-navy shadow-[2px_2px_0px_#081E58]">
            <span className="font-editorial text-base font-black text-brand-navy">+</span>
          </div>
          <span className="font-editorial text-lg font-bold tracking-tight text-brand-white">
            NEXUS<span className="text-brand-yellow">.</span>LABS
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Why Us', id: 'why-choose-us' },
            { label: 'Specialities', id: 'departments' },
            { label: 'Technology', id: 'technology' },
            { label: 'Journey', id: 'journey' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-xs uppercase font-editorial font-bold tracking-wider text-brand-white/80 hover:text-brand-yellow cursor-none transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18005559999"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-editorial font-bold text-xs uppercase tracking-wider rounded-xl border border-brand-white/20 shadow-md cursor-none transition-all"
          >
            <Siren className="w-3.5 h-3.5 text-brand-yellow animate-bounce" /> Emergency Support
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-brand-white cursor-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-brand-navy z-40 flex flex-col p-6 border-t border-brand-white/10 select-none">
          <div className="flex flex-col gap-6 mt-8">
            {[
              { label: 'Why Choose Us', id: 'why-choose-us' },
              { label: 'Specialities', id: 'departments' },
              { label: 'Technology', id: 'technology' },
              { label: 'Journey', id: 'journey' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'FAQ', id: 'faq' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-base uppercase font-editorial font-black text-brand-white tracking-widest hover:text-brand-yellow cursor-none border-b border-brand-white/5 pb-2"
              >
                {link.label}
              </a>
            ))}

            <a
              href="tel:+18005559999"
              className="mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-editorial font-black uppercase text-sm tracking-widest rounded-xl cursor-none"
            >
              <Siren className="w-4 h-4 text-brand-yellow animate-bounce" /> Emergency Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
