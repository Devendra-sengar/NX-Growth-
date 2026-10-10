import React from 'react';
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle, Activity, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: (source?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full relative overflow-hidden py-8 sm:py-10 lg:py-14 bg-gradient-to-b from-surface-container-low/70 via-[#f8f9ff] to-[#f8f9ff]">
      {/* Subtle ambient gradients */}
      <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-72 h-72 bg-surface-container-high/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            {/* Super Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-outline-variant/30 rounded-full shadow-2xs w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-['Inter'] text-[10px] sm:text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                ENTERPRISE GROWTH ARCHITECTURE | ACTIVE PIPELINE ENGINE
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold text-primary tracking-tight leading-[1.15]">
              Building Digital Presence.<br />
              <span className="text-secondary">Driving Business Growth.</span>
            </h1>

            {/* Slogan & Value Prop */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-primary text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  DON’T JUST MARKET. GROW.
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Revenue-scale systems</span>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xl pt-0.5">
                Strategic commercial expansion &amp; digital performance infrastructures engineered for executive market dominance and compound enterprise valuation.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={() => onOpenModal('Hero Section Primary CTA Button')}
                className="inline-flex items-center justify-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold bg-primary text-white px-5 py-2.5 sm:py-3 rounded-xl hover:bg-primary-container transition-all shadow-md group active:scale-[0.98]"
              >
                <span>Build Growth Strategy</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold bg-secondary-fixed text-on-secondary-fixed-variant px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-surface-container-highest transition-all border border-secondary/20"
              >
                <span>Explore Ecosystem</span>
              </a>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 max-w-md">
              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-outline-variant/30 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-primary leading-tight">
                    4.8×
                  </div>
                  <div className="font-['Inter'] text-[10px] text-on-surface-variant uppercase font-semibold">
                    Avg Client ROAS
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-outline-variant/30 shadow-2xs flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-primary leading-tight">
                    99.4%
                  </div>
                  <div className="font-['Inter'] text-[10px] text-on-surface-variant uppercase font-semibold">
                    Attribution Fidelity
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Console Visual Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-white rounded-2xl shadow-xl border border-outline-variant/30 overflow-hidden p-2 sm:p-2.5">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-surface-container-low rounded-t-xl border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-variant font-medium ml-1 truncate">
                    nx-telemetry.console.enterprise/live
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-[9px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
                  99.86% Latency Low
                </span>
              </div>

              {/* Main Image with Diagnostic Overlays */}
              <div className="relative group overflow-hidden rounded-b-xl aspect-[16/9] sm:aspect-[16/10] max-h-[440px] bg-primary">
                <img
                  src="/images/hero_telemetry.jpg"
                  alt="NX Growth Executive Telemetry Console"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZDb8WHvz0n31wdXNEwOq1-xxOjgC-x4_zKIO6BHGzz9YgVjtsxzFR0iVIX-RC8vEd4d5bWOl2yHcSqE04SVWe-KGxwt-_FhOdCA3PlKzB7KXo-G66paGG0BvyZd-mi63MATskiopncllVkzxo4siKsSgxFlpDiQqtJaiXS9RHyzRdBHKTWCxjzQapzk9we7VADKy0Fo6Lnm1poOX98zkVyVuUD6y9ODRln37c4suCzdx7czPfxvKsIw';
                  }}
                />

                {/* Top overlay badge */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-md border border-white/40 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-[10px] sm:text-[11px] text-primary font-bold leading-tight">
                      Real-time Omnichannel Diagnostics
                    </div>
                    <div className="font-mono text-[8px] sm:text-[9px] text-on-surface-variant">
                      Active Model: Q2 Performance Vector
                    </div>
                  </div>
                </div>

                {/* Bottom right floating pill */}
                <div className="absolute bottom-2.5 right-2.5 bg-primary/95 text-white backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl border border-white/10 hidden sm:flex items-center gap-2.5">
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] text-primary-fixed uppercase tracking-wider font-semibold">
                      Compounded ARR Alpha
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white">
                      +34.8% Net M/M
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-secondary-fixed">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Linear Vector Ribbon - Responsive Grid without horizontal scrollbar on mobile */}
              <div className="mt-2 bg-surface-container-low rounded-xl p-2">
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 text-center text-[10px]">
                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">STRATEGY</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 01</span>
                  </div>

                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">BRAND</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 02</span>
                  </div>

                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">DIGITAL</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 03</span>
                  </div>

                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">MARKETING</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 04</span>
                  </div>

                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">ACQUISITION</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 05</span>
                  </div>

                  <div className="bg-white py-1 px-1 rounded-lg border border-outline-variant/20 shadow-2xs">
                    <span className="font-bold text-primary block leading-tight">CONVERSION</span>
                    <span className="font-mono text-[8px] text-secondary font-semibold">Pillar 06</span>
                  </div>

                  <div className="bg-secondary text-white py-1 px-1 rounded-lg shadow-2xs col-span-2 sm:col-span-1">
                    <span className="font-bold block leading-tight">GROWTH</span>
                    <span className="font-mono text-[8px] text-secondary-fixed font-semibold">Compound</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
