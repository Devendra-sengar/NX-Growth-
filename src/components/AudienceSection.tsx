import React from 'react';
import { Plane, Hotel, GraduationCap, HeartPulse, Dumbbell, Store, Scale, Terminal, CheckCircle2 } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const industries = [
    { label: 'Travel & Tourism', icon: Plane, metric: '+3.8× ROAS' },
    { label: 'Hospitality', icon: Hotel, metric: '+44% Bookings' },
    { label: 'Education', icon: GraduationCap, metric: '2.4× Enrolment' },
    { label: 'Healthcare', icon: HeartPulse, metric: '-38% CAC' },
    { label: 'Fitness & Wellness', icon: Dumbbell, metric: '4.2× LTV' },
    { label: 'Retail & Local', icon: Store, metric: '+61% Footfall' },
    { label: 'Professional', icon: Scale, metric: '1,840 SQLs' },
    { label: 'Tech & SaaS', icon: Terminal, metric: '+184% ARR' },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-[#f8f9ff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
            Institutional Alignment
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-primary font-bold mt-1 tracking-tight">
            Who We Work With
          </h2>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
            Engineered for visionary leadership teams demanding non-linear scale across diverse commercial stages.
          </p>
        </div>

        {/* 3 Maturity Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {/* Stage I */}
          <div className="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block mb-1.5">
                STAGE I
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-primary mb-1.5">
                Startups &amp; Emerging
              </h3>
              <p className="font-['Inter'] text-xs text-on-surface-variant mb-4 leading-relaxed">
                Product-market fit acceleration, launch architecture, initial inbound acquisition engine, and rapid customer proof-points.
              </p>
            </div>
            <div className="space-y-1.5 bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/20">
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                Series Seed through Series A
              </span>
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                Rapid CAC &amp; Unit Economics Testing
              </span>
            </div>
          </div>

          {/* Stage II (Core) */}
          <div className="bg-white p-5 rounded-2xl border-t-4 border-t-secondary border-x border-b border-outline-variant/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative">
            <div className="absolute top-3 right-4 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[9px] font-mono font-bold">
              Core Client Focus
            </div>
            <div>
              <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block mb-1.5">
                STAGE II
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-primary mb-1.5">
                Growing Mid-Market
              </h3>
              <p className="font-['Inter'] text-xs text-on-surface-variant mb-4 leading-relaxed">
                Overcoming growth plateaus, modernizing fragmented sales tech stacks, multi-channel diversification, and brand repositioning.
              </p>
            </div>
            <div className="space-y-1.5 bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/20">
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                $5M – $50M ARR Scalers
              </span>
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                Conversion Rate &amp; Margin Expansion
              </span>
            </div>
          </div>

          {/* Stage III */}
          <div className="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider block mb-1.5">
                STAGE III
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-primary mb-1.5">
                Established Enterprise Brands
              </h3>
              <p className="font-['Inter'] text-xs text-on-surface-variant mb-4 leading-relaxed">
                Large-scale digital transformation, institutional performance oversight, multi-market expansion, and attribution modeling.
              </p>
            </div>
            <div className="space-y-1.5 bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/20">
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                Global Conglomerates &amp; PE Portfolios
              </span>
              <span className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                Multi-Touch Corporate Telemetry
              </span>
            </div>
          </div>
        </div>

        {/* Industry Footprint Badges Grid with Metrics */}
        <div className="bg-surface-container-low/60 rounded-2xl p-4 sm:p-5 border border-outline-variant/30">
          <div className="text-center mb-3.5">
            <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-on-surface-variant font-bold">
              Deep Industry Specialization Matrices
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.label}
                  className="bg-white p-3 rounded-xl border border-outline-variant/20 shadow-2xs text-center flex flex-col items-center justify-center hover:border-secondary/40 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform mb-1" />
                  <span className="font-['Inter'] text-[11px] font-semibold text-primary leading-tight">
                    {ind.label}
                  </span>
                  <span className="font-mono text-[9px] text-emerald-700 font-bold mt-1 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {ind.metric}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
