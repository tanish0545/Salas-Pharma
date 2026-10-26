import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Observes elements with reveal classes (.reveal-left, .reveal-right, .reveal-up, .reveal-zoom)
 * and applies `.is-revealed` when scrolled into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Unobserve once animated to prevent annoying repetitive jumps
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12,
    });

    const elements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom:not(.is-revealed)');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
