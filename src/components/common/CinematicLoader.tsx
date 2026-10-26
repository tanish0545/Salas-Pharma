import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../../config/assets';

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'intro' | 'opening' | 'scientific' | 'logo' | 'parting' | 'finished'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'finished';
    }
    return 'intro';
  });

  useEffect(() => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      if (onComplete) onComplete();
      return;
    }

    // Sequence Choreography (~4.4s total duration)
    // Stage A: 0.0s - 0.7s  Hollow thin white capsule outline on uniform royal-blue screen
    // Stage B: 0.7s - 1.8s  Capsule halves open, DNA double helix and molecular elements emerge
    // Stage C: 1.8s - 3.3s  SALAS logo reveal with transparent background & specular shine sweep
    // Stage D: 3.3s - 4.4s  Curtain split begins, left and right panels glide outward
    // Stage E: 4.4s+        Overlay unmounted, zero leftover lines or DOM blocking

    const tOpening = setTimeout(() => {
      setStage('opening');
    }, 700);

    const tScientific = setTimeout(() => {
      setStage('scientific');
    }, 1050);

    const tLogo = setTimeout(() => {
      setStage('logo');
    }, 1900);

    const tParting = setTimeout(() => {
      setStage('parting');
    }, 3300);

    const tFinished = setTimeout(() => {
      setStage('finished');
      if (onComplete) onComplete();
    }, 4400);

    return () => {
      clearTimeout(tOpening);
      clearTimeout(tScientific);
      clearTimeout(tLogo);
      clearTimeout(tParting);
      clearTimeout(tFinished);
    };
  }, [onComplete]);

  if (stage === 'finished') {
    return null;
  }

  const isOpened = stage !== 'intro';
  const showScientific = stage === 'opening' || stage === 'scientific';
  const showLogo = stage === 'logo' || stage === 'parting';

  return (
    <div 
      className={`cinematic-loader-overlay ${stage === 'parting' ? 'curtains-parting' : ''}`}
      aria-label="SALAS Pharma Experience Loading"
      role="dialog"
      aria-modal="true"
    >
      {/* Centre-Splitting Royal Blue Theatre Curtain Panels */}
      <div className="loader-curtain curtain-left" />
      <div className="loader-curtain curtain-right" />

      {/* Center Stage Arena */}
      <div className="loader-stage-content">
        
        {/* Stages 1, 2 & 3: Thin White Capsule Outline + Scientific DNA Emergence */}
        <div className={`capsule-minimal-stage ${showLogo ? 'capsule-dissolved' : ''}`} aria-hidden="true">
          <svg 
            className="capsule-minimal-svg" 
            viewBox="0 0 360 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Emerging Scientific Elements (DNA Double Helix, Molecular Bonds, Particles) */}
            {isOpened && (
              <g className={`scientific-elements-group ${showScientific ? 'scientific-active' : ''}`}>
                {/* DNA Double Helix - Strand 1 */}
                <path 
                  d="M 110 80 C 130 50, 150 110, 180 80 C 210 50, 230 110, 250 80" 
                  stroke="#FFFFFF" 
                  strokeWidth="1.8" 
                  strokeLinecap="round"
                  className="dna-strand-1"
                />

                {/* DNA Double Helix - Strand 2 */}
                <path 
                  d="M 110 80 C 130 110, 150 50, 180 80 C 210 110, 230 50, 250 80" 
                  stroke="#FFFFFF" 
                  strokeWidth="1.8" 
                  strokeLinecap="round"
                  className="dna-strand-2"
                />

                {/* DNA Hydrogen Base Pair Rungs */}
                <line x1="125" y1="67" x2="125" y2="93" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />
                <line x1="145" y1="92" x2="145" y2="68" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />
                <line x1="165" y1="69" x2="165" y2="91" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />
                <line x1="180" y1="80" x2="180" y2="80" stroke="#FFFFFF" strokeWidth="2" className="dna-rung" />
                <line x1="195" y1="91" x2="195" y2="69" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />
                <line x1="215" y1="68" x2="215" y2="92" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />
                <line x1="235" y1="93" x2="235" y2="67" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.85" className="dna-rung" />

                {/* DNA Node Points */}
                <circle cx="140" cy="80" r="2.5" fill="#FFFFFF" />
                <circle cx="180" cy="80" r="3" fill="#FFFFFF" filter="url(#softGlow)" />
                <circle cx="220" cy="80" r="2.5" fill="#FFFFFF" />

                {/* Molecular Nodes & Bonds Flowing Outward */}
                <g className="molecular-cluster cluster-top">
                  <circle cx="160" cy="42" r="3" fill="#FFFFFF" />
                  <line x1="160" y1="42" x2="180" y2="28" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
                  <circle cx="180" cy="28" r="3.5" fill="#FFFFFF" />
                  <line x1="180" y1="28" x2="202" y2="38" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
                  <circle cx="202" cy="38" r="2.5" fill="#FFFFFF" />
                </g>

                <g className="molecular-cluster cluster-bottom">
                  <circle cx="158" cy="118" r="2.5" fill="#FFFFFF" />
                  <line x1="158" y1="118" x2="178" y2="132" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
                  <circle cx="178" cy="132" r="3.5" fill="#FFFFFF" />
                  <line x1="178" y1="132" x2="200" y2="122" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.75" />
                  <circle cx="200" cy="122" r="2.5" fill="#FFFFFF" />
                </g>

                {/* Subtle Micro-Particles Floating in the Center */}
                <circle cx="170" cy="62" r="1.8" fill="#FFFFFF" opacity="0.8" className="particle-float-1" />
                <circle cx="192" cy="98" r="1.8" fill="#FFFFFF" opacity="0.8" className="particle-float-2" />
                <circle cx="150" cy="96" r="1.5" fill="#FFFFFF" opacity="0.6" className="particle-float-3" />
                <circle cx="210" cy="64" r="1.5" fill="#FFFFFF" opacity="0.6" className="particle-float-4" />
              </g>
            )}

            {/* Left Hollow Capsule Outline Half */}
            <g className={`capsule-half-outline left-half ${isOpened ? 'opened' : ''}`}>
              <path 
                d="M 177 52 L 132 52 A 28 28 0 0 0 132 108 L 177 108" 
                stroke="#FFFFFF" 
                strokeWidth="2.2" 
                strokeLinecap="round"
                fill="none"
              />
              <line x1="177" y1="52" x2="177" y2="108" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.7" />
            </g>

            {/* Right Hollow Capsule Outline Half */}
            <g className={`capsule-half-outline right-half ${isOpened ? 'opened' : ''}`}>
              <path 
                d="M 183 52 L 228 52 A 28 28 0 0 1 228 108 L 183 108" 
                stroke="#FFFFFF" 
                strokeWidth="2.2" 
                strokeLinecap="round"
                fill="none"
              />
              <line x1="183" y1="52" x2="183" y2="108" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.7" />
            </g>
          </svg>
        </div>

        {/* Stage C: SALAS Pharma Favicon Symbol Reveal (Floating cleanly, zero rectangular card) */}
        <div className={`loader-logo-presentation ${showLogo ? 'logo-active' : ''}`}>
          <div className="loader-logo-wrap">
            <img 
              src={BRAND_ASSETS.faviconSvg}
              srcSet={`${BRAND_ASSETS.favicon} 64w, /assets/brand/favicon.png 192w, ${BRAND_ASSETS.emblem512} 512w`}
              sizes="(max-width: 768px) 150px, 180px"
              alt="SALAS Pharma Symbol" 
              className="loader-master-logo"
            />
            {/* White Specular Beam Sweeping Directly Across Logo Symbol Artwork */}
            <div className="loader-specular-sweep" aria-hidden="true" />
          </div>
        </div>

      </div>
    </div>
  );
};
