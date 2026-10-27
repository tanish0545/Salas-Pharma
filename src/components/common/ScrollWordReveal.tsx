import React, { useRef, useEffect, useState } from 'react';
import { MolecularBackground } from './MolecularBackground';

export interface ScrollWordRevealProps {
  text: string;
  className?: string;
  tag?: 'h2' | 'h3' | 'p' | 'div';
  highlightWords?: string[];
  eyebrow?: string;
  pinnedStorytelling?: boolean; // Pinned sticky desktop storytelling sequence
  ariaLabel?: string;
}

/**
 * ScrollWordReveal Component
 * Inspired by high-end editorial digital storytelling (Leucine.ai contrast shift).
 * Words start in muted grey and transition to rich dark navy as the user scrolls.
 * 
 * Features:
 * - Natural Word Spacing: Words wrap naturally with authentic spaces between inline spans.
 * - Desktop Pinned Storytelling: Uses CSS position: sticky over a 280vh track.
 * - Initial Pin Buffer (8%) & Reading Dwell Buffer (20%): Paragraph stays fully illuminated & pinned before release.
 * - Mobile Safe: Automatically unpins on viewports <= 768px for normal document flow.
 * - Accessibility: Selectable text, screen-reader friendly, and respects prefers-reduced-motion.
 */
export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  tag = 'p',
  highlightWords = [],
  eyebrow,
  pinnedStorytelling = false,
  ariaLabel,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [activeWordCount, setActiveWordCount] = useState<number>(() => isReducedMotion ? words.length : 0);
  const [progressPercent, setProgressPercent] = useState<number>(() => isReducedMotion ? 100 : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const trackEl = trackRef.current;
    if (!trackEl) return;

    let ticking = false;

    const updateWordsOnScroll = () => {
      ticking = false;
      if (!trackEl) return;

      const rect = trackEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      let targetCount = 0;
      let visualProgress = 0;

      if (pinnedStorytelling && !isMobile) {
        // Desktop Pinned Storytelling:
        // Total distance where .storytelling-sticky stays pinned in the viewport
        const scrollDistance = rect.height - windowHeight;

        if (scrollDistance > 0) {
          // Distance scrolled past top of the track (when top of track reaches top of viewport)
          const currentScrolled = -rect.top;
          const clampedProgress = Math.min(1, Math.max(0, currentScrolled / scrollDistance));

          // Timeline calibration:
          // 0.00 -> 0.08: Initial settle cushion (paragraph firmly pinned, ready to reveal)
          // 0.08 -> 0.80: Active word-by-word progressive illumination phase
          // 0.80 -> 1.00: Completed reading dwell buffer (full sentence held pinned & legible before release)
          if (clampedProgress <= 0.08) {
            targetCount = 0;
            visualProgress = 0;
          } else if (clampedProgress >= 0.80) {
            targetCount = words.length;
            visualProgress = 1;
          } else {
            const revealProgress = (clampedProgress - 0.08) / 0.72;
            targetCount = Math.min(words.length, Math.max(0, Math.round(revealProgress * words.length)));
            visualProgress = revealProgress;
          }
        } else {
          targetCount = words.length;
          visualProgress = 1;
        }
      } else {
        // Standard Viewport Reveal (for non-pinned sections, or mobile viewports <= 768px):
        const startTrigger = windowHeight * 0.85;
        const endTrigger = windowHeight * 0.30;
        const totalDistance = startTrigger - endTrigger + rect.height;
        const currentScroll = startTrigger - rect.top;
        const rawProgress = Math.min(1, Math.max(0, currentScroll / totalDistance));
        targetCount = Math.min(words.length, Math.round(rawProgress * words.length));
        visualProgress = rawProgress;
      }

      setActiveWordCount(prev => (prev !== targetCount ? targetCount : prev));
      const roundedPercent = Math.round(visualProgress * 100);
      setProgressPercent(prev => (prev !== roundedPercent ? roundedPercent : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateWordsOnScroll);
        ticking = true;
      }
    };

    // Passive listener for instantaneous responsiveness
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial measurement
    updateWordsOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [words.length, pinnedStorytelling]);

  const Tag = tag;

  const content = (
    <div className={`scroll-word-reveal-wrap ${className}`}>
      {eyebrow && (
        <span className="scroll-reveal-eyebrow">
          {eyebrow}
        </span>
      )}
      <Tag className="scroll-word-reveal-text">
        {words.map((word, idx) => {
          const isActive = idx < activeWordCount;
          const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          const isSpecial = highlightWords.some(hw => hw.toLowerCase() === cleanWord);

          return (
            <React.Fragment key={`${word}-${idx}`}>
              <span
                className={`scroll-word ${isActive ? 'is-active' : 'is-muted'} ${isSpecial && isActive ? 'is-highlight' : ''}`}
              >
                {word}
              </span>
              {idx < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          );
        })}
      </Tag>

      {/* Progress bar affordance on pinned storytelling desktop mode */}
      {pinnedStorytelling && (
        <div className="storytelling-progress-bar" aria-hidden="true">
          <div
            className="storytelling-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );

  if (pinnedStorytelling) {
    return (
      <section 
        ref={trackRef} 
        className="storytelling-track about-storytelling-track" 
        aria-label={ariaLabel || eyebrow || "SALAS Pharma Foundational Storytelling"}
      >
        <div className="storytelling-sticky about-storytelling-sticky" style={{ position: 'sticky' }}>
          {/* Subtle Cyclopentane Molecular Linework in Storytelling Background (Non-intrusive) */}
          <MolecularBackground variant="section" theme="light" opacity={0.35} position="split" />
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            {content}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={trackRef}>
      {content}
    </div>
  );
};
