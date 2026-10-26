import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Observes elements with reveal classes (.reveal-left, .reveal-right, .reveal-up, .reveal-zoom, .reveal-stagger)
 * and applies `.is-revealed` when scrolled into view.
 * 
 * Guarantees content remains 100% visible if JavaScript or IntersectionObserver is disabled.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver, ensure all content is visible
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom, .reveal-stagger').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom, .reveal-stagger').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Auto-apply stagger indices to children of .reveal-stagger
    document.querySelectorAll('.reveal-stagger').forEach((parent) => {
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        (children[i] as HTMLElement).style.setProperty('--stagger-index', `${i}`);
      }
    });

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Trigger once: unobserve to prevent repeated layout shifts
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(
      '.reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-zoom:not(.is-revealed), .reveal-stagger:not(.is-revealed)'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
