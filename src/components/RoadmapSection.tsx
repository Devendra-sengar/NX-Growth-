import React from 'react';
import { Search, Compass, Wrench, Share2, Gauge, Sliders, Infinity, ArrowRight } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      tag: 'Audit & TAM',
      icon: Search,
      desc: 'Forensic audit of conversion funnels, unit economics & market positioning.',
      stat: '100% TAM Mapped',
      highlight: false,
    },
    {
      num: '02',
      title: 'Strategise',
      tag: 'Blueprint',
      icon: Compass,
      desc: 'Mathematical growth modeling, CAC allocation & omnichannel targets.',
      stat: 'Predictive ROI',
      highlight: false,
    },
    {
      num: '03',
      title: 'Build',
      tag: 'Assets v2',
      icon: Wrench,
      desc: 'High-conversion digital surfaces, brand systems & tracking pixels.',
      stat: 'Fast SSR Stack',
      highlight: false,
    },
    {
      num: '04',
      title: 'Acquire',
      tag: 'Inbound Pipeline',
      icon: Share2,
      desc: 'High-intent search, paid social, targeted ABM & syndication.',
      stat: 'Targeted Traffic',
      highlight: false,
    },
    {
      num: '05',
      title: 'Measure',
      tag: 'Metrics Telemetry',
      icon: Gauge,
      desc: 'Full-journey revenue attribution & real-time cohort intelligence.',
      stat: '99.4% Attribution',
      highlight: false,
    },
    {
      num: '06',
      title: 'Optimise',
      tag: 'CRO Alpha',
      icon: Sliders,
      desc: 'Multivariate A/B testing on copy, triggers & friction points.',
      stat: '+2.2× CRO Lift',
      highlight: false,
    },
    {
      num: '07',
      title: 'Scale',
      tag: 'Compound ARR',
      icon: Infinity,
      desc: 'Continuous capital reinvestment to trigger non-linear ARR scale.',
      stat: '4.8× Compounding',
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-surface-container-low/40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
              Linear Performance Protocol
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-primary font-bold mt-1 tracking-tight">
              How We Grow Businesses
            </h2>
          </div>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant max-w-md">
            A disciplined, 7-stage progression engineered to de-risk growth investments while accelerating ARR velocity.
          </p>
        </div>

        {/* Desktop View: Clean 7-Card Grid Without Any Scrollbar */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`p-4 rounded-2xl flex flex-col justify-between transition-all ${
                  step.highlight
                    ? 'bg-primary text-white shadow-lg border border-primary-container'
                    : 'bg-white text-on-surface border border-outline-variant/30 shadow-2xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-['Plus_Jakarta_Sans'] text-base font-extrabold ${
                        step.highlight ? 'text-secondary-fixed' : 'text-primary'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        step.highlight
                          ? 'bg-white/10 text-secondary-fixed'
                          : 'bg-surface-container-low text-secondary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div
                    className={`font-['Plus_Jakarta_Sans'] text-sm font-bold ${
                      step.highlight ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {step.title}
                  </div>

                  <span
                    className={`font-mono text-[9px] uppercase font-bold block mt-0.5 ${
                      step.highlight ? 'text-secondary-fixed' : 'text-secondary'
                    }`}
                  >
                    {step.tag}
                  </span>

                  <p
                    className={`font-['Inter'] text-[11px] mt-2 leading-relaxed ${
                      step.highlight ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-outline-variant/20 flex flex-col gap-1.5">
                  <span
                    className={`font-mono text-[9px] font-bold ${
                      step.highlight ? 'text-emerald-300' : 'text-emerald-700'
                    }`}
                  >
                    {step.stat}
                  </span>
                  <div className="w-full h-1 rounded-full overflow-hidden bg-surface-container-high/60">
                    <div
                      className={`h-full w-full ${
                        step.highlight ? 'bg-secondary-fixed' : 'bg-secondary'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet View: Structured Multi-Column / Vertical Steps (NO Horizontal Scrollbar!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`p-3.5 rounded-2xl flex items-start gap-3 transition-all ${
                  step.highlight
                    ? 'bg-primary text-white shadow-md border border-primary-container sm:col-span-2 md:col-span-1'
                    : 'bg-white text-on-surface border border-outline-variant/30 shadow-2xs'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                    step.highlight
                      ? 'bg-secondary text-white'
                      : 'bg-surface-container-low text-secondary'
                  }`}
                >
                  {step.num}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4
                      className={`font-['Plus_Jakarta_Sans'] text-xs font-bold truncate ${
                        step.highlight ? 'text-white' : 'text-primary'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        step.highlight
                          ? 'bg-white/15 text-secondary-fixed'
                          : 'bg-surface-container text-secondary'
                      }`}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <p
                    className={`font-['Inter'] text-[11px] mt-1 leading-snug ${
                      step.highlight ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                    }`}
                  >
                    {step.desc}
                  </p>

                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono font-semibold">
                    <span className={step.highlight ? 'text-emerald-300' : 'text-emerald-700'}>
                      {step.stat}
                    </span>
                    <span className={step.highlight ? 'text-secondary-fixed' : 'text-secondary'}>
                      Step {idx + 1}/7
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
