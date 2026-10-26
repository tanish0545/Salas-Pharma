import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface QualitySealProps {
  size?: number;
}

export const QualitySeal: React.FC<QualitySealProps> = ({ size = 240 }) => {
  return (
    <div 
      className="quality-seal-container" 
      style={{ width: `${size}px`, height: `${size}px`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-label="SALAS Pharma Commitment to Quality Seal"
    >
      {/* Outer Clockwise Rotating Text and Calibrated Ring */}
      <svg 
        className="seal-rotating-ring" 
        viewBox="0 0 240 240" 
        width={size} 
        height={size}
        aria-hidden="true"
      >
        <defs>
          <path
            id="sealTextPath"
            d="M 120,120 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
          />
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A4D9E"/>
            <stop offset="100%" stopColor="#073B75"/>
          </linearGradient>
        </defs>

        {/* Outer Circular Dashed Calibration Track */}
        <circle 
          cx="120" 
          cy="120" 
          r="114" 
          fill="none" 
          stroke="#CBD5E1" 
          strokeWidth="1.5" 
          strokeDasharray="4 4"
        />

        <circle 
          cx="120" 
          cy="120" 
          r="107" 
          fill="none" 
          stroke="url(#ringGrad)" 
          strokeWidth="1.5"
        />

        {/* Circular Curved Quality Text Rotating Smoothly Clockwise */}
        <text 
          fill="#0A4D9E" 
          fontFamily="'Plus Jakarta Sans', sans-serif" 
          fontSize="9.2" 
          fontWeight="800" 
          letterSpacing="3.1"
        >
          <textPath href="#sealTextPath" startOffset="0%">
            • COMMITMENT TO QUALITY • QUALITY ASSURANCE • SALAS PHARMA • RIGOROUS STANDARDS 
          </textPath>
        </text>

        {/* Distinctive Red Accent Beads */}
        <circle cx="120" cy="13" r="3" fill="#E52D27"/>
        <circle cx="120" cy="227" r="3" fill="#E52D27"/>
      </svg>

      {/* Stationary Central Emblem (Never Rotates) */}
      <div className="seal-static-core">
        <ShieldCheck size={32} className="core-icon" strokeWidth={2.2} />
        <span className="core-text">QUALITY</span>
        <span className="core-text" style={{ fontSize: '0.625rem', color: '#FFFFFF', opacity: 0.95 }}>
          ASSURANCE
        </span>
        <span className="core-subtext">COMMITMENT</span>
      </div>
    </div>
  );
};
