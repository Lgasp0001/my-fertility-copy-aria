import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import VoiceflowChat from '@/components/VoiceflowChat';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ariafertility.co.uk'),
  title: {
    default: 'Aria Fertility Clinic | Bespoke Fertility Care in Marylebone, London',
    template: '%s | Aria Fertility Clinic'
  },
  description: 'Experience world-class fertility care in the heart of London. Aria Fertility offers IVF, Egg Freezing, and personalized treatment plans in a luxury clinical setting.',
  keywords: [
    'London Fertility Clinic',
    'Marylebone Fertility Specialist',
    'IVF London',
    'Egg Freezing London',
    'Aria Fertility',
    'Bespoke Fertility Care',
    'Welbeck Way Clinic'
  ],
  authors: [{ name: 'Aria Fertility' }],
  creator: 'Aria Fertility',
  publisher: 'Aria Fertility',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Aria Fertility Clinic | Bespoke Fertility Care London',
    description: 'Supporting you every step of the way. World-class expertise meets compassionate care in Marylebone.',
    url: 'https://ariafertility.co.uk',
    siteName: 'Aria Fertility Clinic',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aria Fertility Clinic - Luxury Clinical Excellence',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aria Fertility Clinic | Bespoke London Fertility',
    description: 'Expert-led fertility journeys in the heart of London.',
    images: ['/twitter-image.png'],
    creator: '@ariafertility',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <VoiceflowChat />
      </body>
    </html>
  );
}
