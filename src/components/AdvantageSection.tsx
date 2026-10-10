import React from 'react';

export const AdvantageSection: React.FC = () => {
  const advantages = [
    {
      num: '01',
      title: 'Integrated Systems',
      desc: 'We align brand, engineering, media buying, and attribution under one accountable corporate roof.',
      tag: 'Zero Agency Friction',
    },
    {
      num: '02',
      title: 'Proprietary AI & Modern Stack',
      desc: 'Automated dynamic content generation, continuous bid optimization, and predictive audience scoring models.',
      tag: 'Algorithmic Edge',
    },
    {
      num: '03',
      title: 'Data-Led Decisions',
      desc: 'No subjective hunches. Every tactical iteration is validated by statistical regression and empirical telemetry.',
      tag: 'Empirical Rigor',
    },
    {
      num: '04',
      title: 'High Execution Speed',
      desc: 'Sprints deployed within 72 hours, not quarterly committee meetings. Rapid iteration cycles accelerate ARR.',
      tag: '72hr Sprint Cadence',
    },
    {
      num: '05',
      title: 'Built to Scale',
      desc: 'Infrastructures crafted for durable asset value, higher enterprise multiples, and strategic exit readiness.',
      tag: 'Enterprise Multiples',
      featured: true,
    },
  ];

  return (
    <section className="w-full bg-surface-container-low/40 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-secondary font-bold">
              Uncompromising Moats
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-primary font-bold mt-1 tracking-tight">
              The NX Growth Advantage
            </h2>
          </div>
          <p className="font-['Inter'] text-xs sm:text-sm text-on-surface-variant max-w-md">
            Why leading enterprises choose NX Growth over commoditized agencies and fragmented consulting firms.
          </p>
        </div>

        {/* 5 Horizontal Feature Strips */}
        <div className="space-y-3">
          {advantages.map((item) => (
            <div
              key={item.num}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-secondary font-mono font-bold text-sm shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-primary">
                    {item.title}
                  </h4>
                  <p className="font-['Inter'] text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <span
                className={`font-mono text-[10px] sm:text-[11px] px-3 py-1 rounded-md font-bold whitespace-nowrap self-start md:self-auto ${
                  item.featured
                    ? 'bg-secondary text-white shadow-2xs'
                    : 'bg-surface-container-low text-primary border border-outline-variant/20'
                }`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
