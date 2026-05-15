'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Magnetic from '@/components/ui/Magnetic';

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Support', href: '#faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center group relative -bottom-1">
              <Magnetic>
                <div className={`w-10 h-10 bg-aria-teal rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg ring-4 ${isScrolled ? 'ring-aria-gold/5' : 'ring-white/10'}`}>
                  <Heart className="w-6 h-6 text-aria-gold" />
                </div>
              </Magnetic>
              <div className="flex flex-col items-center mt-1">
                <span className="text-[14px] font-serif font-bold uppercase tracking-widest text-aria-teal leading-none">Aria</span>
                <span className="text-[8px] font-sans font-medium text-aria-gold uppercase tracking-[0.3em] mt-0.5">Fertility Clinic</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="transition-all duration-300 font-sans font-semibold text-[10px] tracking-[0.25em] uppercase text-aria-dark hover:text-aria-teal"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-all duration-300 font-sans font-semibold text-[10px] tracking-[0.25em] uppercase text-aria-dark hover:text-aria-teal"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={onBookingClick}
                className="bg-aria-teal hover:bg-aria-gold text-white px-10 py-6 rounded-full font-sans font-bold uppercase tracking-[0.15em] text-[10px] shadow-md transition-all"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-all duration-300 text-aria-teal"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-aria-beige md:hidden pt-24">
          <div className="flex flex-col space-y-8 p-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-3xl font-serif font-medium text-aria-teal hover:text-aria-gold transition-colors w-full text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-medium text-aria-teal hover:text-aria-gold transition-colors block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-8 border-t border-aria-teal/10 space-y-6">
              <a
                href="tel:+442032636025"
                className="flex items-center space-x-3 text-aria-teal hover:text-aria-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-sans font-medium text-lg tracking-wide">+44 (0) 203 263 6025</span>
              </a>
              <Button
                onClick={() => {
                  onBookingClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-aria-teal hover:bg-aria-gold text-white rounded-full py-8 text-xs font-bold uppercase tracking-widest shadow-xl"
                size="lg"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
