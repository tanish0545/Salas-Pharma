import React, { useEffect, useRef, useState } from 'react';

/**
 * CapsuleCursor Component
 * 
 * High-performance pharmaceutical capsule pointer custom-engineered for SALAS Pharma:
 * - Visually replaces native Windows/OS cursor with zero lag, jitter, or dragging offset.
 * - Precision hotspot: The top-left apex of the 45° tilted capsule aligns exactly to the pointer coordinate.
 * - Elegant 3D pharmaceutical capsule: Deep SALAS Navy upper half, clean pharmaceutical white/icy cyan lower half.
 * - Cylindrical specular highlight reflection and SALAS Red (#E5242A) precision brand accent seam band.
 * - Physics-based 3D directional tilt during movement that smoothly settles when stationary.
 * - Interactive states:
 *    • Hovering links/buttons: Subtle expansion with orbiting concentric molecular ring.
 *    • Hovering hero sections: Delicate scientific node halo.
 *    • Hovering text fields: Seamlessly reveals native I-beam cursor for typing.
 *    • Clicking: Instant tactile compression and subtle ripple wave without delaying click events.
 * - Full accessibility: Desktop-only, completely disabled on touch devices or prefers-reduced-motion.
 * - Preserves native cursor until user actually moves mouse; restores native cursor on keyboard Tab.
 */
export const CapsuleCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isFinePointer && !isReducedMotion;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rotatorRef = useRef<SVGGElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  // Synchronize state dynamically if pointer capabilities or motion preferences change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fineMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapabilities = () => {
      setIsEnabled(fineMedia.matches && !motionMedia.matches);
    };

    fineMedia.addEventListener('change', updateCapabilities);
    motionMedia.addEventListener('change', updateCapabilities);

    return () => {
      fineMedia.removeEventListener('change', updateCapabilities);
      motionMedia.removeEventListener('change', updateCapabilities);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') return;

    const container = containerRef.current;
    const cursor = cursorRef.current;
    const rotator = rotatorRef.current;
    const ripple = rippleRef.current;
    if (!container || !cursor) return;

    const isFinePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const mouse = { x: -100, y: -100 };
    const lastMouse = { x: -100, y: -100 };
    let currentTilt = -45;
    let targetTilt = -45;
    let currentPitch = 0;
    let targetPitch = 0;
    let isVisible = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!isFinePointer()) return;

      // Only hide native cursor when mouse actually moves inside the window
      if (!document.documentElement.classList.contains('has-capsule-cursor')) {
        document.documentElement.classList.add('has-capsule-cursor');
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        isVisible = true;
        container.classList.add('is-visible');
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }

      // Calculate directional tilt delta
      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;

      targetTilt = -45 + Math.min(14, Math.max(-14, dx * 0.45));
      targetPitch = Math.min(10, Math.max(-10, dy * 0.35));

      // Inspect target element hierarchy
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Text input / textarea: show native I-beam for typing
      const isTextInput = !!target.closest(
        'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], textarea'
      );
      if (isTextInput) {
        container.classList.add('is-text-mode');
      } else {
        container.classList.remove('is-text-mode');
      }

      // 2. Interactive targets: links, buttons, action cards
      const isInteractive = !!target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .btn, .pharma-card, .interactive-card, .therapeutic-card, .nav-link-item, .clickable'
      );
      if (isInteractive) {
        cursor.classList.add('cursor-hovered');
      } else {
        cursor.classList.remove('cursor-hovered');
      }

      // 3. Hero / scientific sections: subtle scientific halo
      const isHero = !!target.closest(
        '.hero-option5-section, .page-hero-banner, .laboratory-hero-section'
      );
      if (isHero && !isInteractive) {
        cursor.classList.add('cursor-hero-hover');
      } else {
        cursor.classList.remove('cursor-hero-hover');
      }
    };

    const onMouseDown = () => {
      cursor.classList.add('cursor-clicked');
      if (ripple) {
        ripple.classList.remove('cursor-click-wave');
        // Force reflow for re-triggering keyframe animation
        void ripple.offsetWidth;
        ripple.classList.add('cursor-click-wave');
      }
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

    // If user interacts via touch, restore normal pointer immediately
    const onTouchStart = () => {
      document.documentElement.classList.remove('has-capsule-cursor');
      isVisible = false;
      container.classList.remove('is-visible');
    };

    // Preserve native accessibility for keyboard navigation (Tab key)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.documentElement.classList.remove('has-capsule-cursor');
        isVisible = false;
        container.classList.remove('is-visible');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    // 60/120fps direct hardware-accelerated transform loop
    const render = () => {
      // 1. Direct instantaneous positioning eliminates any drag lag behind the mouse
      cursor.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      // 2. Physics-based smooth settling of directional tilt
      currentTilt += (targetTilt - currentTilt) * 0.22;
      currentPitch += (targetPitch - currentPitch) * 0.22;
      // Decay target tilt back to -45° base orientation when stationary
      targetTilt += (-45 - targetTilt) * 0.08;
      targetPitch += (0 - targetPitch) * 0.08;

      if (rotator) {
        rotator.setAttribute(
          'transform',
          `rotate(${currentTilt.toFixed(1)} 18 18)`
        );
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('has-capsule-cursor');
      document.body.classList.remove('has-capsule-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('keydown', onKeyDown);
      cancelAnimationFrame(animId);
    };
  }, [isEnabled]);

  // Return null on touch devices or reduced motion to prevent any stuck ghost DOM node
  if (!isEnabled) {
    return null;
  }

  return (
    <div 
      ref={containerRef} 
      className="capsule-cursor-portal" 
      aria-hidden="true"
    >
      <div ref={cursorRef} className="capsule-cursor-body">
        {/* Tactile Click Wave */}
        <div ref={rippleRef} />

        {/* 36x36 Vector Capsule with Precision Hotspot at (9px, 9px) */}
        <svg 
          className="capsule-cursor-svg" 
          width="36" 
          height="36" 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top Half: Deep SALAS Corporate Navy / Blue Gradient */}
            <linearGradient id="salasNavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#071D36" />
              <stop offset="35%" stopColor="#1456A0" />
              <stop offset="70%" stopColor="#0E3D73" />
              <stop offset="100%" stopColor="#06182D" />
            </linearGradient>

            {/* Bottom Half: Clean Pharmaceutical White / Icy Cyan Gradient */}
            <linearGradient id="salasWhiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="30%" stopColor="#FFFFFF" />
              <stop offset="75%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* SALAS Red Precision Accent Band */}
            <linearGradient id="salasRedAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B91C1C" />
              <stop offset="40%" stopColor="#E5242A" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>

            {/* Cylindrical Specular Glare Reflection */}
            <linearGradient id="salasSpecularGlare" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="52%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.75" />
            </linearGradient>

            {/* Soft 3D Ambient Drop Shadow */}
            <filter id="salasCapsuleShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="1" dy="1.6" stdDeviation="1.6" floodColor="#071D36" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* Interactive Concentric Molecular Orbit Ring (Visible on hover) */}
          <g className="cursor-orbit-ring" transform="translate(18, 18)">
            <circle cx="0" cy="0" r="14.5" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="0" cy="-14.5" r="1.8" fill="#20AEEA" />
            <circle cx="12.5" cy="7.2" r="1.6" fill="#1456A0" />
            <circle cx="-12.5" cy="7.2" r="1.8" fill="#E5242A" />
          </g>

          {/* Scientific Halo Micro-Nodes (Visible on hero section hover) */}
          <g className="cursor-hero-nodes" transform="translate(18, 18)">
            <line x1="0" y1="0" x2="16" y2="-12" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="16" cy="-12" r="1.8" fill="#38BDF8" opacity="0.8" />
            <line x1="0" y1="0" x2="-14" y2="14" stroke="rgba(229, 36, 42, 0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="-14" cy="14" r="1.6" fill="#E5242A" opacity="0.8" />
          </g>

          {/* Main Pharmaceutical Capsule Body */}
          <g ref={rotatorRef} id="capsule-rotator" transform="rotate(-45 18 18)" filter="url(#salasCapsuleShadow)">
            {/* Top Half: Deep SALAS Corporate Navy Blue Cap (Y from 6 to 17.5) */}
            <path 
              d="M 13 11 A 5 5 0 0 1 23 11 L 23 17.5 L 13 17.5 Z" 
              fill="url(#salasNavyGrad)" 
            />
            {/* Top Cap Dome Highlight */}
            <path 
              d="M 14.5 9 A 3.5 3 0 0 1 21.5 9" 
              stroke="rgba(255, 255, 255, 0.65)" 
              strokeWidth="0.9" 
              strokeLinecap="round" 
            />

            {/* SALAS Red Precision Brand Accent Seam Band */}
            <rect 
              x="13" 
              y="17.2" 
              width="10" 
              height="1.6" 
              fill="url(#salasRedAccent)" 
            />

            {/* Bottom Half: Clean Pharmaceutical White / Icy Cyan Body (Y from 18.8 to 25.5) */}
            <path 
              d="M 13 18.8 L 23 18.8 L 23 25 A 5 5 0 0 1 13 25 Z" 
              fill="url(#salasWhiteGrad)" 
            />

            {/* Cylindrical Specular Glare Reflection Running Along Capsule Length */}
            <path 
              d="M 15 8 L 15 28" 
              stroke="url(#salasSpecularGlare)" 
              strokeWidth="1.1" 
              strokeLinecap="round" 
              opacity="0.8" 
            />

            {/* Precision Interlocking Seam Line */}
            <line 
              x1="12.5" 
              y1="18" 
              x2="23.5" 
              y2="18" 
              stroke="rgba(255, 255, 255, 0.95)" 
              strokeWidth="0.8" 
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
