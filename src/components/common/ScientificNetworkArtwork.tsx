import React from 'react';

export interface ScientificNetworkArtworkProps {
  position?: 'left' | 'right' | 'both' | 'corners';
  variant?: 'molecules' | 'dna' | 'combined';
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ScientificNetworkArtwork
 * 
 * Reusable, lightweight SVG scientific visual treatment.
 * Renders fine connected molecular nodes, hairline bonds, and soft blue glows
 * along outer edges behind content. Pure SVG/CSS, zero CPU loops, pointer-events: none.
 */
export const ScientificNetworkArtwork: React.FC<ScientificNetworkArtworkProps> = ({
  position = 'both',
  variant = 'combined',
  opacity = 0.55,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`scientific-network-layer scientific-pos-${position} ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="sciBondGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1456A0" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="sciBondGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0B2545" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="sciDnaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1456A0" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="sciNodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LEFT OUTER EDGE MOLECULAR CLUSTERS */}
        {(position === 'left' || position === 'both' || position === 'corners') && (
          <g className="sci-group-left" style={{ transformOrigin: '120px 240px' }}>
            {/* Hexagonal Node Cluster 1 */}
            <polygon
              points="90,140 142,170 142,230 90,260 38,230 38,170"
              stroke="url(#sciBondGradLeft)"
              strokeWidth="1.2"
              fill="rgba(56, 189, 248, 0.02)"
            />
            <circle cx="90" cy="140" r="3" fill="#38BDF8" />
            <circle cx="142" cy="170" r="3" fill="#60A5FA" />
            <circle cx="142" cy="230" r="3" fill="#38BDF8" />
            <circle cx="90" cy="260" r="3" fill="#60A5FA" />
            <circle cx="38" cy="230" r="3" fill="#38BDF8" />
            <circle cx="38" cy="170" r="3" fill="#60A5FA" />

            {/* Connecting bond to satellite node */}
            <line x1="142" y1="170" x2="198" y2="150" stroke="#38BDF8" strokeWidth="1.1" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="198" cy="150" r="3.5" fill="#38BDF8" />
            <circle cx="198" cy="150" r="9" fill="url(#sciNodeGlow)" />

            {/* Linked Pentagonal Ring */}
            <polygon
              points="142,230 188,245 202,292 165,306 128,268"
              stroke="url(#sciBondGradLeft)"
              strokeWidth="1.1"
              fill="none"
              opacity="0.7"
            />
            <circle cx="188" cy="245" r="2.5" fill="#60A5FA" />
            <circle cx="202" cy="292" r="2.5" fill="#38BDF8" />
            <circle cx="165" cy="306" r="2.5" fill="#E5242A" opacity="0.8" /> {/* SALAS Red Micro Accent */}
            <circle cx="128" cy="268" r="2.5" fill="#60A5FA" />

            {/* Lower ambient nodes */}
            <line x1="90" y1="260" x2="70" y2="340" stroke="#38BDF8" strokeWidth="1" opacity="0.4" />
            <circle cx="70" cy="340" r="2.5" fill="#38BDF8" opacity="0.6" />
            <line x1="70" y1="340" x2="115" y2="390" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
            <circle cx="115" cy="390" r="2" fill="#60A5FA" opacity="0.5" />
          </g>
        )}

        {/* RIGHT OUTER EDGE MOLECULAR CLUSTERS */}
        {(position === 'right' || position === 'both' || position === 'corners') && (
          <g className="sci-group-right" style={{ transformOrigin: '1320px 220px' }}>
            {/* Hexagonal Node Cluster 2 */}
            <polygon
              points="1350,120 1402,150 1402,210 1350,240 1298,210 1298,150"
              stroke="url(#sciBondGradRight)"
              strokeWidth="1.2"
              fill="rgba(96, 165, 250, 0.02)"
            />
            <circle cx="1350" cy="120" r="3" fill="#60A5FA" />
            <circle cx="1402" cy="150" r="3" fill="#38BDF8" />
            <circle cx="1402" cy="210" r="3" fill="#60A5FA" />
            <circle cx="1350" cy="240" r="3" fill="#38BDF8" />
            <circle cx="1298" cy="210" r="3" fill="#60A5FA" />
            <circle cx="1298" cy="150" r="3" fill="#38BDF8" />

            {/* Inward extending receptor bond */}
            <line x1="1298" y1="150" x2="1240" y2="135" stroke="#38BDF8" strokeWidth="1.2" opacity="0.55" />
            <circle cx="1240" cy="135" r="3.5" fill="#38BDF8" />
            <circle cx="1240" cy="135" r="10" fill="url(#sciNodeGlow)" />

            <line x1="1240" y1="135" x2="1195" y2="165" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="1195" cy="165" r="2.5" fill="#60A5FA" opacity="0.7" />

            {/* Downward secondary cluster */}
            <polygon
              points="1350,240 1385,270 1370,310 1325,305 1315,265"
              stroke="url(#sciBondGradRight)"
              strokeWidth="1.1"
              fill="none"
              opacity="0.65"
            />
            <circle cx="1385" cy="270" r="2.5" fill="#38BDF8" />
            <circle cx="1370" cy="310" r="2.5" fill="#E5242A" opacity="0.8" /> {/* SALAS Red Micro Accent */}
            <circle cx="1325" cy="305" r="2.5" fill="#60A5FA" />
            <circle cx="1315" cy="265" r="2.5" fill="#38BDF8" />

            <line x1="1370" y1="310" x2="1410" y2="360" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" opacity="0.35" />
            <circle cx="1410" cy="360" r="2" fill="#38BDF8" opacity="0.5" />
          </g>
        )}

        {/* RESTRAINED DNA HELIX MOTIF (OPTIONAL SCIENTIFIC ACCENT) */}
        {(variant === 'dna' || variant === 'combined') && (
          <g className="sci-dna-strand" opacity="0.4">
            {/* Soft helical rungs in corner */}
            <path
              d="M 1380,480 Q 1410,530 1380,580 T 1380,680 T 1380,780"
              stroke="url(#sciDnaGrad)"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M 1420,480 Q 1390,530 1420,580 T 1420,680 T 1420,780"
              stroke="url(#sciDnaGrad)"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Hydrogen bond rungs */}
            <line x1="1385" y1="505" x2="1415" y2="505" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
            <line x1="1380" y1="555" x2="1420" y2="555" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5" />
            <line x1="1385" y1="605" x2="1415" y2="605" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
            <line x1="1380" y1="655" x2="1420" y2="655" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5" />
            <line x1="1385" y1="705" x2="1415" y2="705" stroke="#38BDF8" strokeWidth="0.8" opacity="0.5" />
            <line x1="1380" y1="755" x2="1420" y2="755" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5" />
          </g>
        )}
      </svg>
    </div>
  );
};

