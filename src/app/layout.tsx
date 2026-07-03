import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-editorial',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXUS LABS | Next-Gen Editorial Clinical Healthcare & Research',
  description: 'Pioneering healthcare powered by advanced bio-research, high-field MRI diagnostics, and compassionate clinical teams. Combines AI diagnostic modeling with precision genetics.',
  keywords: ['healthcare', 'biomedical', 'clinical research', 'AI diagnosis', 'DNA genetics', 'robotic surgery', 'premium care'],
  authors: [{ name: 'Nexus Labs Medical Group' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans bg-brand-white text-brand-navy select-none">
        {/* Subtle noise paper grain overlay */}
        <div className="grain-overlay" />
        
        {/* Smooth Scrolling wrapper */}
        <SmoothScroll>
          <Navigation />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
