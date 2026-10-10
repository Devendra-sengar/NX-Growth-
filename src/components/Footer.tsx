import React from 'react';
import { Mail } from 'lucide-react';
import { NxLogo } from './NxLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-outline-variant/30 mt-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-surface-container">
          {/* Brand Info with exact user logo */}
          <div className="flex items-center gap-3">
            <NxLogo className="w-9 h-9" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-['Plus_Jakarta_Sans'] text-base font-extrabold tracking-tight text-primary">
                  Growth
                </span>
              </div>
              <p className="font-['Inter'] text-[11px] text-on-surface-variant mt-1">
                A NexisparkX Group Division • Enterprise Performance &amp; Capital Scalability
              </p>
            </div>
          </div>

          {/* Links & Mail */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:contact@nexisparkx.com"
              className="font-['Plus_Jakarta_Sans'] text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <span>contact@nexisparkx.com</span>
            </a>

            <div className="flex items-center gap-3 font-['Plus_Jakarta_Sans'] text-xs text-on-surface-variant font-medium">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-outline-variant">|</span>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-on-surface-variant">
          <p className="font-['Inter']">
            © 2025 NX Growth. A NexisparkX Group Division. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-wider text-[10px] text-on-surface-variant font-semibold">
            Institutional Precision Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
