import React, { useState } from 'react';
import { LayoutDashboard, BarChart2, TrendingUp, Grid, Headphones } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenModal: (source?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'strategy' | 'solutions' | 'advisory'>('overview');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 w-full z-40 bg-white/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.06)] lg:hidden pb-safe">
      <div className="flex justify-around items-center h-16 px-1 max-w-md mx-auto">
        {/* Overview Tab */}
        <button
          onClick={() => {
            setActiveTab('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'overview'
              ? 'text-secondary bg-surface-container font-bold shadow-2xs'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-[10px] mt-1 font-['Plus_Jakarta_Sans'] leading-none">
            Overview
          </span>
        </button>

        {/* Metrics Tab */}
        <button
          onClick={() => {
            setActiveTab('metrics');
            scrollToSection('telemetry');
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'metrics'
              ? 'text-secondary bg-surface-container font-bold shadow-2xs'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span className="text-[10px] mt-1 font-['Plus_Jakarta_Sans'] leading-none">
            Metrics
          </span>
        </button>

        {/* Strategy Tab (CTA Action) */}
        <button
          onClick={() => {
            setActiveTab('strategy');
            onOpenModal('Mobile Bottom Navigation Strategy Tab');
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'strategy'
              ? 'text-secondary bg-surface-container font-bold shadow-2xs'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-secondary" />
          <span className="text-[10px] mt-1 font-['Plus_Jakarta_Sans'] leading-none font-bold text-secondary">
            Strategy
          </span>
        </button>

        {/* Solutions Tab */}
        <button
          onClick={() => {
            setActiveTab('solutions');
            scrollToSection('infrastructure');
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'solutions'
              ? 'text-secondary bg-surface-container font-bold shadow-2xs'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span className="text-[10px] mt-1 font-['Plus_Jakarta_Sans'] leading-none">
            Solutions
          </span>
        </button>

        {/* Advisory Tab */}
        <button
          onClick={() => {
            setActiveTab('advisory');
            onOpenModal('Mobile Bottom Navigation Advisory Tab');
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'advisory'
              ? 'text-secondary bg-surface-container font-bold shadow-2xs'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          <Headphones className="w-4 h-4" />
          <span className="text-[10px] mt-1 font-['Plus_Jakarta_Sans'] leading-none">
            Advisory
          </span>
        </button>
      </div>
    </nav>
  );
};
