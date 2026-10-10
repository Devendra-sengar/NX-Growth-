import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NxLogo } from './NxLogo';

interface NavbarProps {
  onOpenModal: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Telemetry', href: '#telemetry' },
    { label: 'Consultation', href: '#consultation' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand / Exact NX Logo provided by user */}
        <div className="flex items-center gap-3">
          {/* Mobile-only menu toggle (strictly hidden on desktop/laptop) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a href="#" className="flex items-center gap-2.5 select-none group">
            {/* The exact NX Logo */}
            <NxLogo className="w-10 h-10 transition-transform group-hover:scale-105" />

            <div className="flex flex-col justify-center leading-none">
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-tight text-primary">
                Growth
              </span>
              <span className="font-['Inter'] text-[10px] tracking-wider uppercase text-on-surface-variant font-semibold mt-0.5">
                A NexisparkX Group Division
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button Only (No profile avatar, no viewport buttons) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenModal('Header Navbar CTA')}
            className="inline-flex items-center justify-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold bg-secondary text-white px-4 sm:px-5 py-2.5 rounded-xl hover:bg-on-secondary-fixed-variant transition-all shadow-sm active:scale-[0.98] group"
          >
            <Rocket className="w-4 h-4 mr-1.5 group-hover:-translate-y-0.5 transition-transform text-secondary-fixed" />
            <span>Build Growth Strategy</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/30 px-5 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-outline-variant/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-xs font-semibold text-primary hover:bg-surface-container transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('Mobile Navigation CTA');
            }}
            className="w-full py-3 bg-primary text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <Rocket className="w-4 h-4 text-secondary-fixed" />
            <span>Build Growth Strategy</span>
          </button>
        </div>
      )}
    </header>
  );
};
