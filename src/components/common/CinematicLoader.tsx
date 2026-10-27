import React, { useState, useEffect, useRef } from 'react';

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const [stage, setStage] = useState<'intro' | 'opening' | 'scientific' | 'parting' | 'finished'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'finished';
    }
    return 'intro';
  });

  useEffect(() => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    // Refined, snappy sequence ~1.45s total:
    // 0.0s - 0.30s: Pure white screen with centered red-and-blue pharmaceutical capsule
    // 0.30s - 0.65s: Capsule halves smoothly part from center (red slides left, blue slides right)
    // 0.65s - 1.15s: Brief minimal scientific transition: glowing DNA double helix & molecular nodes expand
    // 1.15s - 1.45s: White theatre curtains part cleanly to reveal the live website directly (NO logo reveal)
    // 1.45s: Complete & unmount

    const tOpening = setTimeout(() => {
      setStage('opening');
    }, 300);

    const tScientific = setTimeout(() => {
      setStage('scientific');
    }, 650);

    const tParting = setTimeout(() => {
      setStage('parting');
    }, 1150);

    const tFinished = setTimeout(() => {
      setStage('finished');
      if (onCompleteRef.current) onCompleteRef.current();
    }, 1450);

    return () => {
      clearTimeout(tOpening);
      clearTimeout(tScientific);
      clearTimeout(tParting);
      clearTimeout(tFinished);
    };
  }, []);

  if (stage === 'finished') {
    return null;
  }

  const isOpened = stage !== 'intro';
  const showScientific = stage === 'opening' || stage === 'scientific';

  return (
    <div 
      className={`cinematic-loader-overlay ${stage === 'parting' ? 'curtains-parting' : ''}`}
      aria-label="SALAS Pharma Experience Loading"
      role="dialog"
      aria-modal="true"
    >
      {/* Centre-Splitting Pure White Curtain Panels */}
      <div className="loader-curtain curtain-left" />
      <div className="loader-curtain curtain-right" />

      {/* Center Stage Arena */}
      <div className="loader-stage-content">
        
        {/* Centered Capsule with Red on the Left & Blue on the Right + Scientific Transition */}
        <div className={`capsule-minimal-stage ${stage === 'parting' ? 'capsule-dissolved' : ''}`} aria-hidden="true">
          <svg 
            className="capsule-minimal-svg" 
            viewBox="0 0 360 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Brand Red Left Half Gradient */}
              <linearGradient id="capsuleRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4D47" />
                <stop offset="50%" stopColor="#E5242A" />
                <stop offset="100%" stopColor="#B31217" />
              </linearGradient>

              {/* Brand Corporate Blue Right Half Gradient */}
              <linearGradient id="capsuleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#20AEEA" />
                <stop offset="50%" stopColor="#1456A0" />
                <stop offset="100%" stopColor="#071D36" />
              </linearGradient>

              {/* Glossy Cylindrical Specular Highlight */}
              <linearGradient id="capsuleGloss" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
              </linearGradient>

              {/* Scientific DNA Glow */}
              <filter id="scientificGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Emerging Minimal Scientific Transition (DNA Double Helix & Molecular Nodes) */}
            {isOpened && (
              <g className={`scientific-elements-group ${showScientific ? 'scientific-active' : ''}`}>
                {/* DNA Strand 1 (Scientific Cyan) */}
                <path 
                  d="M 115 80 C 135 52, 158 108, 180 80 C 202 52, 225 108, 245 80" 
                  stroke="#20AEEA" 
                  strokeWidth="2.2" 
                  strokeLinecap="round"
                  className="dna-strand-1"
                />

                {/* DNA Strand 2 (Corporate Navy Blue) */}
                <path 
                  d="M 115 80 C 135 108, 158 52, 180 80 C 202 108, 225 52, 245 80" 
                  stroke="#1456A0" 
                  strokeWidth="2.2" 
                  strokeLinecap="round"
                  className="dna-strand-2"
                />

                {/* DNA Hydrogen Base Pair Rungs */}
                <line x1="132" y1="68" x2="132" y2="92" stroke="#20AEEA" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />
                <line x1="148" y1="92" x2="148" y2="68" stroke="#1456A0" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />
                <line x1="164" y1="72" x2="164" y2="88" stroke="#20AEEA" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />
                <line x1="180" y1="80" x2="180" y2="80" stroke="#E5242A" strokeWidth="3" className="dna-rung" />
                <line x1="196" y1="88" x2="196" y2="72" stroke="#1456A0" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />
                <line x1="212" y1="68" x2="212" y2="92" stroke="#20AEEA" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />
                <line x1="228" y1="92" x2="228" y2="68" stroke="#1456A0" strokeWidth="1.2" strokeOpacity="0.8" className="dna-rung" />

                {/* Central Molecular Active Node */}
                <circle cx="180" cy="80" r="4" fill="#E5242A" filter="url(#scientificGlow)" />
                <circle cx="148" cy="80" r="2.8" fill="#20AEEA" />
                <circle cx="212" cy="80" r="2.8" fill="#1456A0" />

                {/* Satellite Molecular Clusters */}
                <g className="molecular-cluster cluster-top">
                  <circle cx="165" cy="42" r="2.5" fill="#20AEEA" />
                  <line x1="165" y1="42" x2="180" y2="32" stroke="#20AEEA" strokeWidth="1" strokeOpacity="0.7" />
                  <circle cx="180" cy="32" r="3.2" fill="#1456A0" />
                  <line x1="180" y1="32" x2="195" y2="40" stroke="#20AEEA" strokeWidth="1" strokeOpacity="0.7" />
                  <circle cx="195" cy="40" r="2.5" fill="#20AEEA" />
                </g>

                <g className="molecular-cluster cluster-bottom">
                  <circle cx="165" cy="118" r="2.5" fill="#1456A0" />
                  <line x1="165" y1="118" x2="180" y2="128" stroke="#1456A0" strokeWidth="1" strokeOpacity="0.7" />
                  <circle cx="180" cy="128" r="3.2" fill="#E5242A" />
                  <line x1="180" y1="128" x2="195" y2="120" stroke="#1456A0" strokeWidth="1" strokeOpacity="0.7" />
                  <circle cx="195" cy="120" r="2.5" fill="#20AEEA" />
                </g>

                {/* Dispersing Red & Blue Scientific Particles (Concept Board Panel 2) */}
                <g className="dispersing-particles">
                  <circle cx="155" cy="65" r="2" fill="#E5242A" opacity="0.8" className="loader-particle p-left-1" />
                  <circle cx="140" cy="95" r="2.2" fill="#20AEEA" opacity="0.75" className="loader-particle p-left-2" />
                  <circle cx="125" cy="55" r="1.8" fill="#FF4D47" opacity="0.7" className="loader-particle p-left-3" />
                  <circle cx="110" cy="85" r="2.4" fill="#E5242A" opacity="0.65" className="loader-particle p-left-4" />

                  <circle cx="205" cy="65" r="2" fill="#1456A0" opacity="0.8" className="loader-particle p-right-1" />
                  <circle cx="220" cy="95" r="2.2" fill="#20AEEA" opacity="0.75" className="loader-particle p-right-2" />
                  <circle cx="235" cy="55" r="1.8" fill="#60A5FA" opacity="0.7" className="loader-particle p-right-3" />
                  <circle cx="250" cy="85" r="2.4" fill="#1456A0" opacity="0.65" className="loader-particle p-right-4" />
                </g>
              </g>
            )}

            {/* Left Capsule Shell: Brand Red on the Left */}
            <g className={`capsule-half-outline left-half ${isOpened ? 'opened' : ''}`}>
              {/* Solid 3D Red Gradient Fill */}
              <path 
                d="M 178 52 L 132 52 A 28 28 0 0 0 132 108 L 178 108 Z" 
                fill="url(#capsuleRedGrad)"
              />
              {/* Cylindrical Glass Gloss Highlight */}
              <path 
                d="M 178 52 L 132 52 A 28 28 0 0 0 132 108 L 178 108 Z" 
                fill="url(#capsuleGloss)"
              />
              {/* Outer Precision Seam Stroke */}
              <path 
                d="M 178 52 L 132 52 A 28 28 0 0 0 132 108 L 178 108" 
                stroke="rgba(255, 255, 255, 0.45)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                fill="none"
              />
              {/* Interlocking Seam Rim */}
              <line x1="178" y1="52" x2="178" y2="108" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>

            {/* Right Capsule Shell: Corporate Blue on the Right */}
            <g className={`capsule-half-outline right-half ${isOpened ? 'opened' : ''}`}>
              {/* Solid 3D Blue Gradient Fill */}
              <path 
                d="M 182 52 L 228 52 A 28 28 0 0 1 228 108 L 182 108 Z" 
                fill="url(#capsuleBlueGrad)"
              />
              {/* Cylindrical Glass Gloss Highlight */}
              <path 
                d="M 182 52 L 228 52 A 28 28 0 0 1 228 108 L 182 108 Z" 
                fill="url(#capsuleGloss)"
              />
              {/* Outer Precision Seam Stroke */}
              <path 
                d="M 182 52 L 228 52 A 28 28 0 0 1 228 108 L 182 108" 
                stroke="rgba(255, 255, 255, 0.45)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                fill="none"
              />
              {/* Interlocking Seam Rim */}
              <line x1="182" y1="52" x2="182" y2="108" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};
