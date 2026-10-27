import React, { useRef, useEffect, useState } from 'react';

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  tag?: 'h2' | 'h3' | 'p' | 'div';
  highlightWords?: string[];
  eyebrow?: string;
}

/**
 * ScrollWordReveal Component
 * Inspired by high-end editorial digital storytelling (Leucine.ai contrast shift).
 * Words start in muted grey and transition to rich dark navy as the user scrolls,
 * creating an active reading experience with zero layout shifts.
 * 
 * Performance & Accessibility:
 * - Scroll event listener is attached ONLY while the element is intersecting the viewport.
 * - Respects prefers-reduced-motion (defaults to 100% active state immediately).
 * - Smooth color transitions with zero re-layout.
 */
export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  tag = 'p',
  highlightWords = [],
  eyebrow,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(/\s+/);
  
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let isIntersecting = false;
    let ticking = false;

    const updateWordsOnScroll = () => {
      if (!isIntersecting || !container) {
        ticking = false;
        return;
      }

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll window: starts filling when top of element enters 85% of screen height
      // finishes filling when bottom passes 30% of screen height
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.35;
      
      const totalDistance = startTrigger - endTrigger + rect.height;
      const currentScroll = startTrigger - rect.top;

      const progress = Math.min(1, Math.max(0, currentScroll / totalDistance));
      const targetCount = Math.min(words.length, Math.floor(progress * (words.length + 1)));

      setActiveWordCount(targetCount);
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
            updateWordsOnScroll();
          } else {
            window.removeEventListener('scroll', onScroll);
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '100px 0px 100px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [words.length]);

  const Tag = tag;

  return (
    <div ref={containerRef} className={`scroll-word-reveal-wrap ${className}`}>
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
            <span
              key={`${word}-${idx}`}
              className={`scroll-word ${isActive ? 'is-active' : 'is-muted'} ${isSpecial && isActive ? 'is-highlight' : ''}`}
              style={{
                transition: 'color 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease',
              }}
            >
              {word}{' '}
            </span>
          );
        })}
      </Tag>
    </div>
  );
};
