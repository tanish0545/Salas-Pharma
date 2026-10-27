import React, { useEffect, useRef } from 'react';

/**
 * CapsuleCursor Component
 * 
 * High-performance, zero-re-render custom capsule cursor for desktop devices:
 * - Direct DOM manipulation for butter-smooth 60/120fps tracking with zero React re-renders.
 * - Precision-engineered 45° tilted pharmaceutical capsule (Brand Red upper half, Corporate Blue lower half).
 * - Restrained interactive halo aura over links and buttons.
 * - Crisp click tactile scale response.
 * - Strictly desktop-only (pointer: fine and hover: hover).
 * - Fully non-blocking (pointer-events: none).
 * - Completely disabled when prefers-reduced-motion is active.
 * - Preserves native accessibility, keyboard navigation, and form inputs.
 */
export const CapsuleCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check media queries
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    document.body.classList.add('has-capsule-cursor');

    // Smooth lerp coordinates
    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let isVisible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        isVisible = true;
        container.classList.add('is-visible');
      }

      // Check for interactive targets directly without React state
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], .pharma-card, .therapeutic-card, .nav-link-item, .interactive-card, .clickable'
      );

      if (isInteractive) {
        cursor.classList.add('cursor-hovered');
      } else {
        cursor.classList.remove('cursor-hovered');
      }
    };

    const onMouseDown = () => {
      cursor.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      cursor.classList.remove('cursor-clicked');
    };

    const onMouseLeave = () => {
      isVisible = false;
      container.classList.remove('is-visible');
    };

    const onMouseEnter = () => {
      isVisible = true;
      container.classList.add('is-visible');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Ultra-smooth 60/120fps RAF loop
    const render = () => {
      // 0.35 factor ensures crisp instant responsiveness without drag delay
      const ease = 0.35;
      pos.x += (mouse.x - pos.x) * ease;
      pos.y += (mouse.y - pos.y) * ease;

      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-capsule-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="capsule-cursor-portal" 
      aria-hidden="true"
    >
      <div ref={cursorRef} className="capsule-cursor-body">
        {/* Subtle Interactive Aura Glow Ring */}
        <div ref={auraRef} className="cursor-aura-ring" />

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
