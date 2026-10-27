import React, { useEffect, useState, useRef, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  createdAt: number;
}

/**
 * CapsuleCursor Component
 * 
 * Implements the official SALAS Pharma custom cursor (Concept Board Panel 3):
 * - Tilted 45-degree miniature pharmaceutical capsule (Red upper half, Blue lower half)
 * - Concentric subtle aura ring on interactive element hover
 * - Expanding wave ripple on click
 * - Ephemeral molecular particle trail over interactive links
 * - Strictly desktop-only (pointer: fine and hover: hover)
 * - Non-blocking (pointer-events: none)
 * - Disables gracefully when prefers-reduced-motion is active
 */
export const CapsuleCursor: React.FC = () => {
  const [isEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && !reducedMotion;
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Smooth lerp coordinates for cursor follower
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const particleIdCounter = useRef(0);
  const lastTrailTime = useRef(0);

  // Sync class on body
  useEffect(() => {
    if (!isEnabled) return;
    document.body.classList.add('has-capsule-cursor');

    return () => {
      document.body.classList.remove('has-capsule-cursor');
    };
  }, [isEnabled]);

  // Update hover detection on elements
  const checkInteractiveTarget = useCallback((target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return false;
    return !!target.closest('a, button, input, textarea, select, [role="button"], .pharma-card, .therapeutic-card, .nav-link-item, .interactive-card');
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const hoveringInteractive = checkInteractiveTarget(e.target);
      setIsHovered(hoveringInteractive);

      // Spawn ephemeral molecular trail particle when hovering interactive elements
      const now = performance.now();
      if (hoveringInteractive && now - lastTrailTime.current > 45) {
        lastTrailTime.current = now;
        const colors = ['#20AEEA', '#E5242A', '#1456A0', '#60A5FA'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newParticle: Particle = {
          id: particleIdCounter.current++,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          color: randomColor,
          size: Math.random() * 2.5 + 2,
          createdAt: now,
        };

        setParticles((prev) => [...prev.slice(-6), newParticle]);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled, isVisible, checkInteractiveTarget]);

  // Animation frame loop for smooth cursor tracking & particle fading
  useEffect(() => {
    if (!isEnabled) return;

    let animFrameId: number;

    const animate = () => {
      // Smooth lerp (0.35 factor for ultra-crisp responsive feel)
      const ease = 0.35;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      // Purge old trail particles (> 400ms)
      const now = performance.now();
      setParticles((prev) => {
        const fresh = prev.filter((p) => now - p.createdAt < 400);
        return fresh.length !== prev.length ? fresh : prev;
      });

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameId);
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div 
      className={`capsule-cursor-portal ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      {/* Ephemeral Molecular Trail Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="cursor-trail-dot"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}

      {/* Main Cursor Anchor */}
      <div 
        ref={cursorRef} 
        className={`capsule-cursor-body ${isHovered ? 'cursor-hovered' : ''} ${isClicked ? 'cursor-clicked' : ''}`}
      >
        {/* Subtle Interactive Aura Glow Ring */}
        <div className="cursor-aura-ring" />

        {/* Click Shockwave Ripple */}
        {isClicked && <div className="cursor-ripple-wave" />}

        {/* 45-Degree Angled Pharmaceutical Bicolored Capsule */}
        <svg 
          className="capsule-cursor-svg" 
          width="24" 
          height="24" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Red Half Gradient */}
            <linearGradient id="cursorRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D47" />
              <stop offset="100%" stopColor="#B31217" />
            </linearGradient>

            {/* Blue Half Gradient */}
            <linearGradient id="cursorBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20AEEA" />
              <stop offset="100%" stopColor="#071D36" />
            </linearGradient>

            {/* Gloss Specular Highlight */}
            <linearGradient id="cursorGloss" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
            </linearGradient>

            {/* Drop Shadow */}
            <filter id="cursorShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="1" dy="1.5" stdDeviation="1.5" floodColor="#071D36" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Group rotated -45 deg around capsule center (16, 16) */}
          <g transform="rotate(-45 16 16)" filter="url(#cursorShadow)">
            {/* Top Half (Brand Red) */}
            <path 
              d="M 10 16 A 6 6 0 0 1 22 16 L 22 10 A 6 6 0 0 0 10 10 Z" 
              fill="url(#cursorRedGrad)" 
            />
            {/* Top Half Gloss */}
            <path 
              d="M 10 16 A 6 6 0 0 1 22 16 L 22 10 A 6 6 0 0 0 10 10 Z" 
              fill="url(#cursorGloss)" 
            />

            {/* Bottom Half (Corporate Blue) */}
            <path 
              d="M 10 16 L 22 16 L 22 22 A 6 6 0 0 1 10 22 Z" 
              fill="url(#cursorBlueGrad)" 
            />
            {/* Bottom Half Gloss */}
            <path 
              d="M 10 16 L 22 16 L 22 22 A 6 6 0 0 1 10 22 Z" 
              fill="url(#cursorGloss)" 
            />

            {/* Precision Interlocking Seam Line */}
            <line x1="9.5" y1="16" x2="22.5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
};
