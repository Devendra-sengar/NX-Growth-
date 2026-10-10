import React from 'react';
import { Shield, Monitor, FileText, Repeat, Filter, BarChart2, CheckCircle2, TrendingUp, Sparkles, Send } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  const assets = [
    {
      title: 'Brand Identity Suite',
      icon: Shield,
      desc: 'Institutional design guidelines, typography hierarchy, visual positioning kits, and corporate pitch decks.',
      tags: ['Vector Systems', 'Typography Scale', 'Brand Manual'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Brand Architecture</span>
            <span className="text-emerald-700 font-semibold">Ready v4.2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
              NX
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-2 bg-secondary/30 rounded w-4/5" />
              <div className="h-1.5 bg-outline-variant/50 rounded w-3/5" />
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#091426]" />
            <span className="w-3 h-3 rounded-full bg-[#0051d5]" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="w-3 h-3 rounded-full bg-[#dbe1ff]" />
          </div>
        </div>
      ),
    },
    {
      title: 'Flagship Presence',
      icon: Monitor,
      desc: 'Lightning-fast custom web applications, sub-second latencies, high-conversion information architectures.',
      tags: ['Edge Hosting', 'WCAG 2.1 AAA', 'Headless CMS'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Web Platform</span>
            <span className="text-emerald-700 font-semibold">100/100 Core Vitals</span>
          </div>
          <div className="bg-white rounded-lg p-2 border border-outline-variant/20 shadow-2xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-primary">Responsive Portal</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">
              0.12s TTFB
            </span>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-on-surface-variant">
            <span>Global CDN</span>
            <span>SSR Hydrated</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Content Engine',
      icon: FileText,
      desc: 'High-intent editorial frameworks, technical whitepapers, case study engines, and executive opinion pieces.',
      tags: ['Authority Hubs', 'Semantic SEO', 'Syndication'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Semantic Search Engine</span>
            <span className="text-primary font-semibold">Rank #1 Target</span>
          </div>
          <div className="space-y-1">
            <div className="bg-white px-2 py-1 rounded text-[10px] flex items-center justify-between border border-outline-variant/20">
              <span className="font-semibold text-primary truncate">Enterprise Strategy Whitepaper</span>
              <span className="text-emerald-700 font-mono text-[9px]">Top 1%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-on-surface-variant">
            <span>Omnichannel SEO</span>
            <span className="text-secondary font-bold">+240% Inbound</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Marketing Automation',
      icon: Repeat,
      desc: 'Full lifecycle nurture sequences, triggered behavioral emails, lead routing, and bi-directional CRM sync.',
      tags: ['CRM Integrations', 'Nurture Flows', 'Smart Scoring'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Automated Sequence</span>
            <span className="text-emerald-700 font-semibold">Active Pipeline</span>
          </div>
          <div className="flex items-center justify-between gap-1 text-[9px] font-mono">
            <div className="bg-white p-1 rounded border border-outline-variant/20 text-center flex-1">
              <Send className="w-2.5 h-2.5 text-secondary mx-auto mb-0.5" />
              <span>Email #1</span>
            </div>
            <span className="text-outline-variant">→</span>
            <div className="bg-white p-1 rounded border border-outline-variant/20 text-center flex-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 mx-auto mb-0.5" />
              <span>Engaged</span>
            </div>
            <span className="text-outline-variant">→</span>
            <div className="bg-secondary text-white p-1 rounded text-center flex-1 font-bold">
              <span>SQL Call</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-on-surface-variant">
            <span>Nodemailer + CRM</span>
            <span className="text-emerald-700 font-bold">64% Open Rate</span>
          </div>
        </div>
      ),
    },
    {
      title: 'High-Intent Lead Pipelines',
      icon: Filter,
      desc: 'Multi-variant paid media across Google Search, LinkedIn ABM, meta-funnels, and intent networks.',
      tags: ['Account-Based Ads', 'Target Capture', 'Programmatic'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Targeted Acquisition</span>
            <span className="text-emerald-700 font-semibold">High Intent</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="bg-white p-1 rounded border border-outline-variant/20">
              <span className="text-[9px] text-on-surface-variant block">LinkedIn ABM</span>
              <span className="font-bold text-primary">1,240 Execs</span>
            </div>
            <div className="bg-white p-1 rounded border border-outline-variant/20">
              <span className="text-[9px] text-on-surface-variant block">Google Search</span>
              <span className="font-bold text-primary">12.4% CTR</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-on-surface-variant">
            <span>CAC -32%</span>
            <span className="text-secondary font-bold">High LTV</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Unified BI Telemetry',
      icon: BarChart2,
      desc: 'Executive-level command center with multi-touch attribution, blended CAC monitoring, and stage velocity.',
      tags: ['Attribution Models', 'Real-Time BI', 'LTV Tracking'],
      renderVisual: () => (
        <div className="h-24 bg-gradient-to-r from-surface-container-low to-surface-container p-2.5 rounded-xl border border-outline-variant/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-secondary font-bold">Board-Level Telemetry</span>
            <span className="text-emerald-700 font-bold">$34.5M Live</span>
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-primary font-['Plus_Jakarta_Sans']">480%</span>
              <span className="text-[9px] text-emerald-700 font-mono font-bold">ROI Alpha</span>
            </div>
            <TrendingUp className="w-5 h-5 text-secondary" />
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-on-surface-variant">
            <span>Closed-Loop BI</span>
            <span className="text-secondary font-bold">Full Visibility</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-[#f8f9ff]" id="infrastructure">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
              Turnkey Digital Assets
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-primary font-bold mt-1 tracking-tight">
              What We Build for Clients
            </h2>
          </div>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant max-w-md">
            We construct durable digital equity—high-performance enterprise infrastructures designed to outlast short-term market cycles.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {assets.map((asset) => {
            const Icon = asset.icon;
            return (
              <div
                key={asset.title}
                className="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:text-secondary group-hover:bg-secondary/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-on-surface-variant uppercase bg-surface-container px-2 py-0.5 rounded-full">
                      Deliverable
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-primary mb-1.5">
                    {asset.title}
                  </h3>

                  <p className="font-['Inter'] text-xs text-on-surface-variant mb-4 leading-relaxed">
                    {asset.desc}
                  </p>

                  {/* Digital Marketing Preview Graphic */}
                  <div className="mb-4">
                    {asset.renderVisual()}
                  </div>
                </div>

                <div className="pt-2 border-t border-outline-variant/20 flex flex-wrap gap-1.5">
                  {asset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] px-2 py-0.5 bg-surface-container-low text-primary rounded font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
