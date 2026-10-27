import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AnimatedCounter
 * 
 * Lightweight count-up animation for verified numeric statistics.
 * Triggers exactly once when entering view via IntersectionObserver.
 * Immediately displays target value if prefers-reduced-motion is active.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 750,
  className = '',
  style = {},
}) => {
  const [displayValue, setDisplayValue] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return target;
    }
    return 0;
  });

  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Early return if reduced motion requested (initial state already holds target)
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const node = elementRef.current;
    if (!node || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const startVal = 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve: 1 - pow(1 - x, 3)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.round(startVal + (target - startVal) * easeProgress);

            setDisplayValue(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className={`animated-stat-counter ${className}`} style={style}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
