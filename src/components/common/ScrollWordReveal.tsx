import React, { useRef, useEffect, useState } from 'react';

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  tag?: 'h2' | 'h3' | 'p' | 'div';
  highlightWords?: string[];
  eyebrow?: string;
  pinnedStorytelling?: boolean; // Pinned sticky desktop storytelling specifically for About Us
}

/**
 * ScrollWordReveal Component
 * Inspired by high-end editorial digital storytelling (Leucine.ai contrast shift).
 * Words start in muted grey and transition to rich dark navy as the user scrolls.
 * 
 * Features:
 * - Natural Word Spacing: Words wrap naturally with authentic spaces between inline spans.
 * - Desktop Pinned Storytelling (About Us only): Uses CSS position: sticky over a 220vh track.
 * - Mobile Safe: Automatically unpins on viewports <= 768px to ensure mobile users are not trapped.
 * - Accessibility: Normal text flow, selectable text, screen-reader friendly, and respects prefers-reduced-motion.
 */
export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  tag = 'p',
  highlightWords = [],
  eyebrow,
  pinnedStorytelling = false,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  const [activeWordCount, setActiveWordCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)
      ) {
        return words.length;
      }
    }
    return 0;
  });

  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const trackEl = trackRef.current;
    if (!trackEl) return;

    let isIntersecting = false;
    let ticking = false;

    const updateWordsOnScroll = () => {
      if (!isIntersecting || !trackEl) {
        ticking = false;
        return;
      }

      const rect = trackEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      let progress = 0;

      if (pinnedStorytelling && !isMobile) {
        // Sticky Pinning Progress:
        // Track height is e.g. 220vh.
        // Scroll distance where it stays sticky = rect.height - windowHeight.
        const scrollDistance = rect.height - windowHeight;
        if (scrollDistance > 0) {
          // -rect.top is the distance scrolled into the track from the top of the viewport
          const currentScrolled = -rect.top;
          progress = Math.min(1, Math.max(0, currentScrolled / scrollDistance));
        } else {
          progress = 1;
        }
      } else {
        // Standard Viewport Reveal (for other pages and mobile screens):
        const startTrigger = windowHeight * 0.85;
        const endTrigger = windowHeight * 0.35;
        const totalDistance = startTrigger - endTrigger + rect.height;
        const currentScroll = startTrigger - rect.top;
        progress = Math.min(1, Math.max(0, currentScroll / totalDistance));
      }

      const targetCount = Math.min(words.length, Math.floor(progress * (words.length + 1)));
      setActiveWordCount(targetCount);
      setProgressPercent(Math.round(progress * 100));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking && isIntersecting) {
        window.requestAnimationFrame(updateWordsOnScroll);
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll, { passive: true });
            updateWordsOnScroll();
          } else {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: pinnedStorytelling ? '0px 0px 0px 0px' : '80px 0px 80px 0px',
      }
    );

    observer.observe(trackEl);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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

      {/* Progress affordance on pinned storytelling desktop mode */}
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
      <section ref={trackRef} className="about-storytelling-track" aria-label="SALAS Pharma Foundational Storytelling">
        <div className="about-storytelling-sticky">
          <div className="container">
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
