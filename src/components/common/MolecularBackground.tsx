import React, { useRef, useEffect, useState } from 'react';

export interface MolecularBackgroundProps {
  /** Visual density and layout configuration */
  variant?: 'footer' | 'hero' | 'section' | 'subtle' | 'dense' | 'network';
  /** Light background (dark strokes) vs Dark background (cyan/blue luminescent strokes) */
  theme?: 'dark' | 'light';
  /** Overall opacity scaling (0 to 1) */
  opacity?: number;
  /** Whether subtle breathing and bond travel animations are active */
  animated?: boolean;
  /** Optional custom accent color for select heteroatom nodes (defaults to SALAS Red #E5242A) */
  accentColor?: string;
  /** Custom CSS class names */
  className?: string;
  /** Inline container styles */
  style?: React.CSSProperties;
  /** Horizontal position bias */
  position?: 'full' | 'left' | 'right' | 'center' | 'split';
}

/**
 * MolecularBackground Component
 * 
 * Generates an authentic, mathematically precise scientific molecular network
 * inspired by cyclopentane's five-membered carbon-ring geometry (5 connected vertices & bonds).
 * 
 * Features:
 * - Accurate 5-membered regular pentagonal carbon ring motifs across multiple scales and rotations.
 * - Covalent sigma bonds, coordinate dashed lines, and small vertex nodes (2px - 4px).
 * - Restrained SALAS brand palette: Navy (#071D36), Blue (#1456A0), Cyan (#20AEEA), Red (#E5242A).
 * - 100% vector SVG with pointer-events: none and deliberate stacking z-index.
 * - IntersectionObserver pauses SVG animations when offscreen to conserve CPU/battery.
 * - Full prefers-reduced-motion support.
 */
export const MolecularBackground: React.FC<MolecularBackgroundProps> = ({
  variant = 'section',
  theme = 'light',
  opacity = 1,
  animated = true,
  accentColor = '#E5242A',
  className = '',
  style = {},
  position = 'full',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOffscreen, setIsOffscreen] = useState<boolean>(true);

  // IntersectionObserver: automatically pauses animations when scrolled out of view
  useEffect(() => {
    if (!animated) return;
    const el = containerRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setIsOffscreen(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsOffscreen(!entry.isIntersecting);
        }
      },
      { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  const isDark = theme === 'dark' || variant === 'footer';

  // Palette adaptation for light vs dark surfaces
  const primaryBondColor = isDark ? '#20AEEA' : '#1456A0';
  const secondaryBondColor = isDark ? '#38BDF8' : '#20AEEA';
  const mutedBondColor = isDark ? 'rgba(56, 189, 248, 0.28)' : 'rgba(20, 86, 160, 0.2)';
  const dashedBondColor = isDark ? 'rgba(147, 197, 253, 0.35)' : 'rgba(20, 86, 160, 0.25)';
  const nodePrimaryColor = isDark ? '#38BDF8' : '#1456A0';
  const nodeCyanColor = isDark ? '#20AEEA' : '#20AEEA';
  const ringFill = isDark ? 'rgba(32, 174, 234, 0.03)' : 'rgba(20, 86, 160, 0.02)';

  // Helper to calculate exact regular cyclopentane pentagon vertices
  const getPentagonPoints = (cx: number, cy: number, r: number, rotDeg: number = -90): string => {
    const pts: string[] = [];
    for (let i = 0; i < 5; i++) {
      const rad = ((rotDeg + i * 72) * Math.PI) / 180;
      pts.push(`${+(cx + r * Math.cos(rad)).toFixed(1)},${+(cy + r * Math.sin(rad)).toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const getPentagonCoords = (cx: number, cy: number, r: number, rotDeg: number = -90): Array<[number, number]> => {
    const coords: Array<[number, number]> = [];
    for (let i = 0; i < 5; i++) {
      const rad = ((rotDeg + i * 72) * Math.PI) / 180;
      coords.push([+(cx + r * Math.cos(rad)).toFixed(1), +(cy + r * Math.sin(rad)).toFixed(1)]);
    }
    return coords;
  };

  // Render Footer Variant: Wide comprehensive network spanning 1600x720
  if (variant === 'footer') {
    return (
      <div
        ref={containerRef}
        className={`molecular-bg-root molecular-variant-footer ${isOffscreen ? 'is-offscreen' : ''} ${className}`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
          opacity,
          ...style,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1600 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <linearGradient id="ftrGradL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20AEEA" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#1456A0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#071D36" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="ftrGradR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#20AEEA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#071D36" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="ftrGradCenter" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1456A0" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#20AEEA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1456A0" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="ftrSoftGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#20AEEA" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#1456A0" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#071D36" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ftrRedGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.5" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient luminous glow centers */}
          <circle cx="160" cy="180" r="180" fill="url(#ftrSoftGlow)" />
          <circle cx="1440" cy="220" r="220" fill="url(#ftrSoftGlow)" />
          <circle cx="800" cy="380" r="260" fill="url(#ftrSoftGlow)" opacity="0.6" />

          {/* =================================================================
              1. LEFT CLUSTER: Interconnected Cyclopentane Network (Behind Brand)
              ================================================================= */}
          <g className="mol-floating-left">
            {/* Ring L1 (Large Major Cyclopentane Ring: cx=140, cy=150, r=80, rot=-90) */}
            <polygon
              points={getPentagonPoints(140, 150, 80, -90)}
              stroke="url(#ftrGradL)"
              strokeWidth="1.6"
              fill={ringFill}
            />
            {getPentagonCoords(140, 150, 80, -90).map(([x, y], i) => (
              <circle key={`l1-${i}`} cx={x} cy={y} r={i === 0 ? 3.8 : 3} fill={i === 0 ? '#38BDF8' : nodeCyanColor} />
            ))}

            {/* Covalent bond connecting Ring L1 to Ring L2 */}
            <line x1="216.1" y1="125.3" x2="270" y2="105" stroke={primaryBondColor} strokeWidth="1.4" opacity="0.65" />

            {/* Ring L2 (Medium Cyclopentane Ring: cx=315, cy=125, r=52, rot=18) */}
            <polygon
              points={getPentagonPoints(315, 125, 52, 18)}
              stroke={secondaryBondColor}
              strokeWidth="1.3"
              opacity="0.65"
              fill="none"
            />
            {getPentagonCoords(315, 125, 52, 18).map(([x, y], i) => (
              <circle key={`l2-${i}`} cx={x} cy={y} r={2.6} fill="#60A5FA" />
            ))}

            {/* Branch bond to Ring L3 (Upper Satellite) */}
            <line x1="331.1" y1="75.6" x2="360" y2="35" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="360" cy="35" r="3" fill="#38BDF8" className="chem-pulse-node" />

            {/* Ring L3 (Satellite Ring cx=410, cy=45, r=36, rot=-54) */}
            <polygon
              points={getPentagonPoints(410, 45, 36, -54)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
            />
            {getPentagonCoords(410, 45, 36, -54).map(([x, y], i) => (
              <circle key={`l3-${i}`} cx={x} cy={y} r={2.2} fill="#60A5FA" opacity="0.7" />
            ))}

            {/* Downward bond linking Ring L1 to Ring L4 (Lower Left) */}
            <line x1="115.3" y1="226.1" x2="95" y2="310" stroke={primaryBondColor} strokeWidth="1.3" opacity="0.5" />

            {/* Ring L4 (Lower Left Cyclopentane: cx=90, cy=365, r=60, rot=54) */}
            <polygon
              points={getPentagonPoints(90, 365, 60, 54)}
              stroke={secondaryBondColor}
              strokeWidth="1.3"
              opacity="0.5"
              fill={ringFill}
            />
            {getPentagonCoords(90, 365, 60, 54).map(([x, y], i) => (
              <circle key={`l4-${i}`} cx={x} cy={y} r={2.6} fill="#38BDF8" />
            ))}

            {/* Bond linking Ring L4 to Lower Satellite L5 */}
            <line x1="147.1" y1="383.5" x2="205" y2="420" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="205" cy="420" r="3" fill="#20AEEA" />

            {/* Ring L5 (Lower Satellite cx=240, cy=450, r=42, rot=-18) */}
            <polygon
              points={getPentagonPoints(240, 450, 42, -18)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
            />
            {getPentagonCoords(240, 450, 42, -18).map(([x, y], i) => (
              <circle key={`l5-${i}`} cx={x} cy={y} r={2.4} fill="#60A5FA" />
            ))}

            {/* Long bridge bond traversing towards center columns */}
            <line x1="364.5" y1="141.1" x2="490" y2="205" stroke={dashedBondColor} strokeWidth="0.9" strokeDasharray="4 4" />
            <circle cx="490" cy="205" r="3" fill="#38BDF8" className="chem-pulse-node" />
          </g>

          {/* =================================================================
              2. CENTER MESH: Translucent Broad Network (Behind Navigation & Links)
              ================================================================= */}
          <g className="mol-floating-center">
            {/* Ring C1 (Mid-Center Cyclopentane: cx=560, cy=245, r=70, rot=36) */}
            <polygon
              points={getPentagonPoints(560, 245, 70, 36)}
              stroke="url(#ftrGradCenter)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.45"
            />
            {getPentagonCoords(560, 245, 70, 36).map(([x, y], i) => (
              <circle key={`c1-${i}`} cx={x} cy={y} r={2.4} fill="#20AEEA" opacity="0.6" />
            ))}

            {/* Bond C1 to C2 */}
            <line x1="626.6" y1="266.6" x2="710" y2="240" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="710" cy="240" r="3.2" fill="#38BDF8" />

            {/* Ring C2 (Central Hub Ring: cx=770, cy=220, r=64, rot=-90) */}
            <polygon
              points={getPentagonPoints(770, 220, 64, -90)}
              stroke={secondaryBondColor}
              strokeWidth="1.3"
              fill={ringFill}
              opacity="0.4"
            />
            {getPentagonCoords(770, 220, 64, -90).map(([x, y], i) => (
              <circle key={`c2-${i}`} cx={x} cy={y} r={2.6} fill="#60A5FA" opacity="0.65" />
            ))}

            {/* Diagonal bond from C2 down to C3 (Deep Lower Center) */}
            <line x1="790" y1="280.9" x2="830" y2="370" stroke={primaryBondColor} strokeWidth="1.2" opacity="0.35" />

            {/* Ring C3 (Lower Mid Cyclopentane: cx=865, cy=415, r=54, rot=72) */}
            <polygon
              points={getPentagonPoints(865, 415, 54, 72)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
              opacity="0.4"
            />
            {getPentagonCoords(865, 415, 54, 72).map(([x, y], i) => (
              <circle key={`c3-${i}`} cx={x} cy={y} r={2.2} fill="#38BDF8" opacity="0.6" />
            ))}

            {/* Bond from C2 extending across rightwards to R-Group */}
            <line x1="830.9" y1="200.2" x2="960" y2="160" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="960" cy="160" r="3" fill="#20AEEA" className="chem-pulse-node" />

            {/* Ring C4 (Mid-Right Bridge: cx=1020, cy=140, r=48, rot=18) */}
            <polygon
              points={getPentagonPoints(1020, 140, 48, 18)}
              stroke={mutedBondColor}
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
            />
            {getPentagonCoords(1020, 140, 48, 18).map(([x, y], i) => (
              <circle key={`c4-${i}`} cx={x} cy={y} r={2.4} fill="#60A5FA" opacity="0.6" />
            ))}
          </g>

          {/* =================================================================
              3. RIGHT CLUSTER: Majestic Cyclopentane Network with Brand Red Accent
              ================================================================= */}
          <g className="mol-floating-right">
            {/* Bond from C4 to Primary Right Ring R1 */}
            <line x1="1065.7" y1="154.8" x2="1180" y2="175" stroke={primaryBondColor} strokeWidth="1.3" opacity="0.5" />

            {/* Ring R1 (Major Right Cyclopentane: cx=1250, cy=190, r=82, rot=-90) */}
            <polygon
              points={getPentagonPoints(1250, 190, 82, -90)}
              stroke="url(#ftrGradR)"
              strokeWidth="1.6"
              fill={ringFill}
            />
            {getPentagonCoords(1250, 190, 82, -90).map(([x, y], i) => (
              <circle key={`r1-${i}`} cx={x} cy={y} r={i === 1 ? 4 : 3} fill={i === 1 ? accentColor : nodeCyanColor} />
            ))}

            {/* Red Heteroatom Accent Halo on Top Vertex of R1 */}
            <circle cx="1250" cy="108" r="8" fill="url(#ftrRedGlow)" className="chem-pulse-node" />
            <circle cx="1250" cy="108" r="4" fill={accentColor} />

            {/* Bond R1 to R2 (Upper Far Right) */}
            <line x1="1328" y1="164.7" x2="1395" y2="135" stroke={secondaryBondColor} strokeWidth="1.4" opacity="0.6" />

            {/* Ring R2 (Upper Right Cyclopentane: cx=1445, cy=115, r=58, rot=36) */}
            <polygon
              points={getPentagonPoints(1445, 115, 58, 36)}
              stroke={primaryBondColor}
              strokeWidth="1.3"
              fill="none"
              opacity="0.65"
            />
            {getPentagonCoords(1445, 115, 58, 36).map(([x, y], i) => (
              <circle key={`r2-${i}`} cx={x} cy={y} r={2.8} fill="#38BDF8" />
            ))}

            {/* Far right terminal extension */}
            <line x1="1500.2" y1="132.9" x2="1570" y2="105" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="1570" cy="105" r="3" fill="#60A5FA" />

            {/* Downward bond from R1 to R3 (Behind Sikkim / Corporate Cards) */}
            <line x1="1224.7" y1="268" x2="1205" y2="360" stroke={primaryBondColor} strokeWidth="1.3" opacity="0.55" />

            {/* Ring R3 (Lower Right Cyclopentane: cx=1190, cy=425, r=68, rot=-54) */}
            <polygon
              points={getPentagonPoints(1190, 425, 68, -54)}
              stroke={secondaryBondColor}
              strokeWidth="1.3"
              fill={ringFill}
              opacity="0.5"
            />
            {getPentagonCoords(1190, 425, 68, -54).map(([x, y], i) => (
              <circle key={`r3-${i}`} cx={x} cy={y} r={2.6} fill={i === 2 ? accentColor : '#38BDF8'} />
            ))}

            {/* Satellite branch from R3 */}
            <line x1="1254.7" y1="446" x2="1340" y2="475" stroke={dashedBondColor} strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="1340" cy="475" r="3.2" fill="#20AEEA" className="chem-pulse-node" />

            {/* Ring R4 (Deep Lower Right: cx=1390, cy=510, r=48, rot=18) */}
            <polygon
              points={getPentagonPoints(1390, 510, 48, 18)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
              opacity="0.45"
            />
            {getPentagonCoords(1390, 510, 48, 18).map(([x, y], i) => (
              <circle key={`r4-${i}`} cx={x} cy={y} r={2.4} fill="#60A5FA" />
            ))}
          </g>

          {/* =================================================================
              4. BOTTOM COPYRIGHT CONTINUUM: Continuous Subtle Basal Molecular Strip
              (Ensures the artwork seamlessly spans behind the entire bottom legal row)
              ================================================================= */}
          <g className="mol-basal-strip" opacity="0.45">
            {/* Continuous subtle baseline coordinate bond line spanning 0 to 1600 */}
            <line x1="80" y1="680" x2="1520" y2="680" stroke={dashedBondColor} strokeWidth="0.8" strokeDasharray="6 6" />

            {/* Periodic satellite cyclopentane rings anchoring the bottom bar */}
            {/* Basal Ring 1 (Bottom Left) */}
            <polygon points={getPentagonPoints(220, 680, 24, -90)} stroke={primaryBondColor} strokeWidth="1" fill="none" />
            <circle cx="220" cy="656" r="2.2" fill="#20AEEA" />

            {/* Basal Ring 2 (Bottom Mid-Left) */}
            <polygon points={getPentagonPoints(540, 680, 22, 18)} stroke={mutedBondColor} strokeWidth="0.9" fill="none" />
            <circle cx="540" cy="680" r="1.8" fill="#38BDF8" />

            {/* Basal Ring 3 (Bottom Center) */}
            <polygon points={getPentagonPoints(840, 680, 26, -54)} stroke={primaryBondColor} strokeWidth="1" fill="none" />
            <circle cx="840" cy="654" r="2.4" fill={accentColor} />

            {/* Basal Ring 4 (Bottom Mid-Right) */}
            <polygon points={getPentagonPoints(1160, 680, 22, 54)} stroke={mutedBondColor} strokeWidth="0.9" fill="none" />
            <circle cx="1160" cy="680" r="1.8" fill="#38BDF8" />

            {/* Basal Ring 5 (Bottom Right) */}
            <polygon points={getPentagonPoints(1420, 680, 24, -90)} stroke={secondaryBondColor} strokeWidth="1" fill="none" />
            <circle cx="1420" cy="656" r="2.2" fill="#20AEEA" />
          </g>
        </svg>
      </div>
    );
  }

  // Render Section Variant: Versatile, responsive section backdrop (Home, About, Labs, Mfg, R&D)
  return (
    <div
      ref={containerRef}
      className={`molecular-bg-root molecular-variant-${variant} ${isDark ? 'theme-dark' : 'theme-light'} ${isOffscreen ? 'is-offscreen' : ''} ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id={`molSecGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryBondColor} stopOpacity={isDark ? "0.45" : "0.25"} />
            <stop offset="100%" stopColor={secondaryBondColor} stopOpacity={isDark ? "0.15" : "0.08"} />
          </linearGradient>
          <radialGradient id={`molNodeGlow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={nodeCyanColor} stopOpacity={isDark ? "0.6" : "0.3"} />
            <stop offset="100%" stopColor={nodeCyanColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LEFT FLANK: Cyclopentane Motif (Active on 'full', 'left', 'split') */}
        {(position === 'full' || position === 'left' || position === 'split') && (
          <g className="mol-floating-left">
            {/* Primary Left Pentagon */}
            <polygon
              points={getPentagonPoints(120, 180, 68, -90)}
              stroke={`url(#molSecGrad-${variant})`}
              strokeWidth="1.3"
              fill={ringFill}
            />
            {getPentagonCoords(120, 180, 68, -90).map(([x, y], i) => (
              <circle key={`sec-l1-${i}`} cx={x} cy={y} r={2.8} fill={nodeCyanColor} />
            ))}

            {/* Connecting bond to secondary satellite */}
            <line x1="184.7" y1="159" x2="245" y2="135" stroke={primaryBondColor} strokeWidth="1.1" opacity={isDark ? "0.55" : "0.3"} />
            <circle cx="245" cy="135" r="3.2" fill={nodePrimaryColor} />
            <circle cx="245" cy="135" r="7" fill={`url(#molNodeGlow-${variant})`} className="chem-pulse-node" />

            {/* Satellite Pentagon */}
            <polygon
              points={getPentagonPoints(285, 115, 42, 18)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
            />
            {getPentagonCoords(285, 115, 42, 18).map(([x, y], i) => (
              <circle key={`sec-l2-${i}`} cx={x} cy={y} r={2.2} fill={nodePrimaryColor} />
            ))}

            {/* Coordinate dashed bond down */}
            <line x1="99" y1="244.7" x2="80" y2="340" stroke={dashedBondColor} strokeWidth="0.8" strokeDasharray="3 3" />
            <polygon
              points={getPentagonPoints(75, 385, 48, 54)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
            />
            {getPentagonCoords(75, 385, 48, 54).map(([x, y], i) => (
              <circle key={`sec-l3-${i}`} cx={x} cy={y} r={2.2} fill={i === 0 ? accentColor : nodeCyanColor} />
            ))}
          </g>
        )}

        {/* RIGHT FLANK: Cyclopentane Motif (Active on 'full', 'right', 'split') */}
        {(position === 'full' || position === 'right' || position === 'split') && (
          <g className="mol-floating-right">
            {/* Primary Right Pentagon */}
            <polygon
              points={getPentagonPoints(1320, 210, 74, -90)}
              stroke={`url(#molSecGrad-${variant})`}
              strokeWidth="1.4"
              fill={ringFill}
            />
            {getPentagonCoords(1320, 210, 74, -90).map(([x, y], i) => (
              <circle key={`sec-r1-${i}`} cx={x} cy={y} r={i === 0 ? 3.8 : 2.8} fill={i === 0 ? accentColor : nodeCyanColor} />
            ))}
            {/* Heteroatom glow accent */}
            <circle cx="1320" cy="136" r="8" fill={accentColor} opacity={isDark ? "0.3" : "0.15"} className="chem-pulse-node" />

            {/* Connecting bond towards outer edge */}
            <line x1="1390.4" y1="187.1" x2="1440" y2="160" stroke={secondaryBondColor} strokeWidth="1.1" opacity={isDark ? "0.55" : "0.3"} />
            <circle cx="1440" cy="160" r="3" fill={nodePrimaryColor} />

            {/* Satellite Right Pentagon */}
            <polygon
              points={getPentagonPoints(1260, 360, 48, 36)}
              stroke={mutedBondColor}
              strokeWidth="1.1"
              fill="none"
            />
            {getPentagonCoords(1260, 360, 48, 36).map(([x, y], i) => (
              <circle key={`sec-r2-${i}`} cx={x} cy={y} r={2.2} fill={nodeCyanColor} />
            ))}
            <line x1="1297.1" y1="280.4" x2="1275" y2="320" stroke={dashedBondColor} strokeWidth="0.8" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    </div>
  );
};

