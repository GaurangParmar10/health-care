'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'expand' | 'yellow'>('default');

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      // Instantly position the central crosshair dot
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Smoothly animate outer reticle ring
    const animateRing = () => {
      const ease = 0.15; // interpolation factor
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animateRing);
    };

    const animationFrameId = requestAnimationFrame(animateRing);

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    // Listen for hover states on buttons/links/interactive components
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestInteractive = target.closest('a, button, select, input, textarea, [role="button"], .interactive-card');
      const isYellowCTA = target.closest('.cta-yellow, [data-cursor="yellow"]');

      if (isYellowCTA) {
        setHoverType('yellow');
      } else if (closestInteractive) {
        setHoverType('expand');
      } else {
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const activeColor = hoverType === 'yellow' ? '#FFD400' : hoverType === 'expand' ? '#0A3EBE' : '#081E58';

  return (
    <div 
      className={`transition-opacity duration-300 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Inner Element: Medical Cross plus symbol */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
        style={{ color: activeColor }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <rect x="5" y="1" width="2" height="10" rx="0.5" />
          <rect x="1" y="5" width="10" height="2" rx="0.5" />
        </svg>
      </div>

      {/* Outer Element: Scanning target HUD reticle */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          width: hoverType === 'default' ? '36px' : '56px',
          height: hoverType === 'default' ? '36px' : '56px',
          color: activeColor,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="animate-[spin_12s_linear_infinite]"
        >
          {/* Dashed outer scanner circle */}
          <circle
            cx="20"
            cy="20"
            r="16"
            strokeDasharray="6 4"
            className="transition-all duration-300"
            style={{
              strokeWidth: hoverType === 'default' ? 1.2 : 2.0,
            }}
          />
          {/* Diagnostic tick-marks */}
          <line x1="20" y1="0" x2="20" y2="3" />
          <line x1="20" y1="37" x2="20" y2="40" />
          <line x1="0" y1="20" x2="3" y2="20" />
          <line x1="37" y1="20" x2="40" y2="20" />
        </svg>
      </div>
    </div>
  );
}
