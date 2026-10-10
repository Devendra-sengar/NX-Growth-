import React from 'react';
import { Compass, Layers, MousePointerClick, Rocket, ArrowRight, Target, BarChart2 } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      num: 'PILLAR 01',
      title: 'STRATEGY',
      badge: 'Market TAM',
      desc: 'In-depth TAM analysis, audience telemetry, unit economics modelling, and full-funnel positioning blueprints.',
      features: ['Market Intelligence & TAM', 'Positioning & Pricing Models'],
      visualType: 'strategy',
    },
    {
      num: 'PILLAR 02',
      title: 'BUILD',
      badge: 'Web & UI/UX',
      desc: 'High-authority flagship web platforms, headless application architectures, and conversion-engineered design systems.',
      features: ['High-Velocity Web Platforms', 'Brand System & Design Assets'],
      visualType: 'build',
    },
    {
      num: 'PILLAR 03',
      title: 'ACQUIRE',
      badge: 'Paid & Organic',
      desc: 'Predictable multichannel paid traffic, programmatic display, high-intent enterprise search, and executive outbound.',
      features: ['High-Intent Search & Social', 'Omnichannel Funnel Routing'],
      visualType: 'acquire',
    },
    {
      num: 'PILLAR 04',
      title: 'SCALE',
      badge: 'Revenue Alpha',
      desc: 'Multi-variant conversion rate optimization (CRO), automated retention pipelines, and closed-loop board-level telemetry.',
      features: ['Advanced Multivariate CRO', 'LTV Expansion & Retention'],
      visualType: 'scale',
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-surface-container-low/50" id="methodology">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
              Scientific Commercial Model
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-primary font-bold mt-1 tracking-tight">
              More Than Marketing. Built for Growth.
            </h2>
          </div>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant max-w-md">
            We deconstruct traditional fragmented marketing silos into a deterministic, mathematical commercial engine engineered to scale enterprise capital.
          </p>
        </div>

        {/* 4 Pillars Grid with Visual Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-outline-variant/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-secondary px-2 py-0.5 bg-surface-container-low rounded">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-primary mb-1">
                  {pillar.title}
                </h3>
                <p className="font-['Inter'] text-xs text-on-surface-variant mb-3 leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Digital Marketing Visual Graphic for each pillar */}
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high/60 p-2.5 flex flex-col justify-between border border-outline-variant/20 mb-3 overflow-hidden relative">
                  {pillar.visualType === 'strategy' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-secondary font-bold">TAM Radar</span>
                        <span className="text-primary font-semibold">$120M Target</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center py-1">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-secondary/40 flex items-center justify-center relative">
                          <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Target className="w-3.5 h-3.5 text-secondary" />
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-on-surface-variant flex flex-col">
                          <span className="text-primary font-bold">Unit Economics</span>
                          <span className="text-emerald-700">LTV:CAC &gt; 4.2x</span>
                        </div>
                      </div>
                      <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[85%]" />
                      </div>
                    </div>
                  )}

                  {pillar.visualType === 'build' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-secondary font-bold">Design System</span>
                        <span className="text-emerald-700 font-semibold">99 Lighthouse</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-2xs border border-outline-variant/20 flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded bg-primary text-white flex items-center justify-center text-[9px] font-mono font-bold">
                            UI
                          </div>
                          <span className="text-[10px] font-semibold text-primary">Responsive Core</span>
                        </div>
                        <span className="text-[9px] font-mono text-secondary bg-secondary-fixed px-1.5 py-0.5 rounded">
                          SSR 0.3s
                        </span>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-on-surface-variant">
                        <span>WCAG AAA</span>
                        <span className="text-primary font-bold">Mobile First</span>
                      </div>
                    </div>
                  )}

                  {pillar.visualType === 'acquire' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-secondary font-bold">Omnichannel Ads</span>
                        <span className="text-primary font-semibold">ROAS 4.8x</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="bg-white p-1 rounded border border-outline-variant/20 text-[9px]">
                          <span className="font-bold text-primary block">Search</span>
                          <span className="text-emerald-700 font-mono">+42%</span>
                        </div>
                        <div className="bg-white p-1 rounded border border-outline-variant/20 text-[9px]">
                          <span className="font-bold text-primary block">Social</span>
                          <span className="text-emerald-700 font-mono">+68%</span>
                        </div>
                        <div className="bg-white p-1 rounded border border-outline-variant/20 text-[9px]">
                          <span className="font-bold text-primary block">ABM</span>
                          <span className="text-emerald-700 font-mono">+89%</span>
                        </div>
                      </div>
                      <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[92%]" />
                      </div>
                    </div>
                  )}

                  {pillar.visualType === 'scale' && (
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-secondary font-bold">Compounded ARR</span>
                        <span className="text-emerald-700 font-bold">+184% YoY</span>
                      </div>
                      <div className="flex items-center justify-between px-1">
                        <BarChart2 className="w-8 h-8 text-secondary" />
                        <div className="text-right">
                          <span className="text-sm font-extrabold text-primary block font-['Plus_Jakarta_Sans']">
                            $34.5M
                          </span>
                          <span className="text-[9px] text-on-surface-variant font-mono">Closed-Loop BI</span>
                        </div>
                      </div>
                      <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[98%]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 space-y-1 bg-surface-container-low/40 p-2.5 rounded-xl border border-outline-variant/20">
                {pillar.features.map((feat) => (
                  <div
                    key={feat}
                    className="text-[11px] text-primary font-semibold flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Execution Sequence Ribbon */}
        <div className="w-full bg-white rounded-2xl p-4 border border-outline-variant/30 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-primary uppercase tracking-wide">
              Dynamic Execution Sequence
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center text-center text-xs">
            <span className="font-semibold text-primary px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              1. Strategy Validation
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-outline-variant hidden sm:inline" />

            <span className="font-semibold text-primary px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              2. Platform Deployment
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-outline-variant hidden sm:inline" />

            <span className="font-semibold text-primary px-3 py-1 bg-surface-container rounded-full border border-outline-variant/20">
              3. Calibrated Acquisition
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-outline-variant hidden sm:inline" />

            <span className="font-semibold text-white px-3 py-1 bg-secondary rounded-full shadow-2xs">
              4. Scaled Revenue Compounding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
