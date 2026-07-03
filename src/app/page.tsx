'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Splash from '@/components/Splash';
import Hero from '@/components/Hero';
import TrustedMarquee from '@/components/TrustedMarquee';
import WhyChooseUs from '@/components/WhyChooseUs';
import Departments from '@/components/Departments';
import MeetDoctors from '@/components/MeetDoctors';
import TechSection from '@/components/TechSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import EmergencyCta from '@/components/EmergencyCta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* 1. Splash Screen Loader */}
      <Splash onComplete={() => setShowSplash(false)} />

      {/* 2. Main Page Layout (fade-in on loader complete) */}
      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col w-full relative"
          >
            {/* Main Landing Sections */}
            <main>
              {/* Hero Section */}
              <Hero />

              {/* Trusted By logo marquee */}
              <TrustedMarquee />

              {/* Why Choose Us 3D Tilt Cards */}
              <WhyChooseUs />

              {/* Medical Departments Expandable Grid */}
              <Departments />

              {/* Meet Our Doctors zooming profile grid */}
              <MeetDoctors />

              {/* Healthcare Technology interactive blueprints */}
              <TechSection />

              {/* Patient Journey scrolling timeline */}
              <JourneyTimeline />

              {/* Testimonials drag marquee */}
              <Testimonials />

              {/* FAQ smooth accordions */}
              <Faq />

              {/* Emergency CTA pulse cards */}
              <EmergencyCta />

              {/* Contact appointment form Zod validation */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
