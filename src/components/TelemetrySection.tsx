import React from 'react';
import { Eye, Pointer, CheckSquare, Zap, Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

export const TelemetrySection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low/60" id="telemetry">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
              Executive Board Intelligence
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mt-1 tracking-tight">
              Measure What Matters
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[10px] sm:text-[11px] font-mono bg-white px-3 py-1 rounded-full border border-outline-variant/30 text-on-surface-variant flex items-center gap-1.5 font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Attribution Verified
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full">
              Model: Rolling 90 Days
            </span>
          </div>
        </div>

        {/* Grid: Dashboard Showcase on Left, 6 KPIs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Boardroom TV Dashboard Visual */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-2.5 sm:p-3 border border-outline-variant/30 shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-primary text-white rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-secondary-fixed" />
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-tight">
                    Executive Telemetry Hub • Q3 Audit
                  </span>
                </div>
                <span className="font-mono text-[10px] text-secondary-fixed uppercase tracking-wider font-bold">
                  Active Pipeline: $34.5M
                </span>
              </div>

              {/* High-Resolution Dashboard Mockup */}
              <div className="relative rounded-b-2xl overflow-hidden aspect-[16/9] bg-primary">
                <img
                  src="/images/telemetry_dashboard.jpg"
                  alt="Executive Telemetry Board-Level Analytics Dashboard Mockup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida/AEtjO1X3Lm4C2TQIItx8sTq5zXcDyvDDmAjHydmhPip3jBcihRVMJRPduF6Y33o1T1TxLQD0AXGDgCC3YRETvKlhDskDgyBfMVKweZPImtRnioZH8jNT0EjIO6aB1n6Pg9u6ZUZiUvRzbjJoY6bhjuEx-SjR17bZw_WQTW40HeFTEllIWevfmC19DlTBUrMV0HD5J_bW0e1sXdIQAVmdOrOYMrPGkppsXpkNFS9bEZjCa4mVOvCanGvi9q5pYYXD';
                  }}
                />
              </div>

              {/* Bottom live curve banner */}
              <div className="mt-2.5 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-semibold text-primary">Revenue Expansion Trajectory</span>
                  <span className="text-[10px] font-mono text-on-surface-variant">Real-time multi-cohort sync</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-on-surface-variant">Q1: $8.7M</span>
                  <span className="text-secondary font-bold">Q4 Scaled: $34.5M (+184%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 KPI Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-on-surface-variant">
                    Brand Reach
                  </span>
                  <Eye className="w-4 h-4 text-secondary" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-primary">
                  2.4M+
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+38% YoY Net</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-on-surface-variant">
                    Engagement
                  </span>
                  <Pointer className="w-4 h-4 text-secondary" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-primary">
                  18.6%
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+5.2% vs BM</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-on-surface-variant">
                    Qualified Pipeline
                  </span>
                  <CheckSquare className="w-4 h-4 text-secondary" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-primary">
                  1,840
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+61% MQL Volume</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-on-surface-variant">
                    Conversion Velocity
                  </span>
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-primary">
                  8.4%
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>2.2× CRO Lift</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-on-surface-variant">
                    Blended CAC
                  </span>
                  <Wallet className="w-4 h-4 text-secondary" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-primary">
                  $142
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700 font-bold">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>-32% Lower Cost</span>
              </div>
            </div>

            {/* Card 6 (Compounded ROI - Highlighted Dark Card) */}
            <div className="bg-primary text-white p-4 sm:p-5 rounded-2xl border border-primary-container shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Inter'] text-[10px] uppercase font-bold text-primary-fixed">
                    Compounded ROI
                  </span>
                  <TrendingUp className="w-4 h-4 text-secondary-fixed" />
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white">
                  480%
                </div>
              </div>
              <div className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-secondary-fixed font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>4.8× Capital Alpha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
