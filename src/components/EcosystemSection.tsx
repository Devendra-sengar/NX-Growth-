import React from 'react';
import { Compass, Laptop, BookOpen, Megaphone, BarChart3, Wifi, Globe, ShieldCheck } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const phases = [
    {
      phase: 'Phase 1',
      badgeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
      title: 'Growth Strategy',
      icon: Compass,
      desc: 'Full-funnel commercial architecture, customer economics, TAM validation, and market penetration positioning.',
    },
    {
      phase: 'Phase 2',
      badgeClass: 'bg-surface-container text-primary',
      title: 'Brand & Digital Presence',
      icon: Laptop,
      desc: 'High-authority responsive platforms, scalable design systems, and rapid conversion-focused UI/UX engineering.',
    },
    {
      phase: 'Phase 3',
      badgeClass: 'bg-surface-container text-primary',
      title: 'Content & Communication',
      icon: BookOpen,
      desc: 'Executive authority assets, high-converting product narratives, technical whitepapers, and brand collateral.',
    },
    {
      phase: 'Phase 4',
      badgeClass: 'bg-surface-container text-primary',
      title: 'Performance & Acquisition',
      icon: Megaphone,
      desc: 'Programmatic paid distribution, search capture, targeted account-based marketing, and automated retargeting.',
    },
    {
      phase: 'Phase 5',
      badgeClass: 'bg-secondary text-white',
      title: 'Analytics & Scale',
      icon: BarChart3,
      desc: 'Multi-touch revenue attribution, real-time board metrics, dynamic cohort modeling, and predictive CAC control.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]" id="ecosystem">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
            Unified Digital Infrastructure
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mt-1 tracking-tight">
            Our Growth Ecosystem
          </h2>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
            A fully integrated commercial system bridging multi-surface digital touchpoints with deterministic pipeline acquisition.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Device Mockup */}
          <div className="lg:col-span-7">
            <div className="relative bg-surface-container-low rounded-3xl p-3 sm:p-5 border border-outline-variant/30 shadow-lg">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary">
                    Cross-Device Performance Matrix
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white text-on-surface-variant px-2.5 py-1 rounded-full border border-outline-variant/30 font-semibold shadow-2xs">
                  Multi-Surface Ecosystem Live
                </span>
              </div>

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-outline-variant/20 aspect-[16/10]">
                <img
                  src="/images/ecosystem_devices.jpg"
                  alt="NX Growth Multi-Surface Desktop and Mobile Ecosystem Architecture"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida/AEtjO1UQYIBgbHSC6LveDAcrZ_eZD6WXTtlaqgG7hhSyxPZW3W0Bc_brAur8L79CeJFq7gP4E0VJp6JICKoekyBEc62TZLsXukFmrqyEvcV5P4e1Ck00Y6PNC0Z8cmG3UEL-RhG1hwKmsTD0gUoDlkCUpTszJvYaoaN9xKoiemzkjwrYXAeFMIvKPpK1oKQHDLNuc4LuXk0iASfsUZ1UO4Xnr8TMtqB3kW7ssbecdQxBkW72dH6mtZQEcgNGOjv9';
                  }}
                />
              </div>

              {/* 3 Metric Pills */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-outline-variant/20 shadow-2xs">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-on-surface-variant">
                    <Wifi className="w-3 h-3 text-secondary" />
                    <span>Sync Speed</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary block mt-0.5">
                    120ms Edge
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-outline-variant/20 shadow-2xs">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-on-surface-variant">
                    <Globe className="w-3 h-3 text-secondary" />
                    <span>Global Nodes</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary block mt-0.5">
                    48 Edge POPs
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-outline-variant/20 shadow-2xs">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-on-surface-variant">
                    <ShieldCheck className="w-3 h-3 text-secondary" />
                    <span>Redundancy</span>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-secondary block mt-0.5">
                    Tier-4 SLA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Phase Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="bg-white p-3.5 sm:p-4 rounded-2xl border border-outline-variant/30 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-primary truncate">
                        {phase.title}
                      </h4>
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${phase.badgeClass}`}
                      >
                        {phase.phase}
                      </span>
                    </div>
                    <p className="font-['Inter'] text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
