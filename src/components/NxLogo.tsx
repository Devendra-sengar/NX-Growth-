import React from 'react';

interface NxLogoProps {
  className?: string;
  size?: number;
}

export const NxLogo: React.FC<NxLogoProps> = ({ className = 'w-10 h-10', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`} style={style}>
      <img
        src="/images/logo.svg"
        alt="NX Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
