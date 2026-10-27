import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface SignatureClosingStatementProps {
  onNavigate: (route: string) => void;
  headline1?: string;
  headline2?: string;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaRoute?: string;
  secondaryCtaText?: string;
  secondaryCtaRoute?: string;
}

/**
 * SignatureClosingStatement Component
 * 
 * Priority Feature (Section 7):
 * Inspired by high-end digital storytelling & minimal editorial closing statements.
 * Original to SALAS Pharma:
 * - Generous full-width editorial stage with ample negative space.
 * - Bold, memorable editorial statement: "Better Healthcare. Built on Commitment." or "Every Step. A Commitment to Better Healthcare."
 * - Centered 45° tilted pharmaceutical capsule motif and fine brand-red accent underline.
 * - Smooth, non-trapping scroll reveal with mask/opacity transition.
 * - Clear supporting sentence and dual high-conversion CTAs.
 * - Seamless natural transition into the light corporate footer.
 * - 100% accessible, responsive, and honors prefers-reduced-motion.
 */
export const SignatureClosingStatement: React.FC<SignatureClosingStatementProps> = ({
  onNavigate,
  headline1 = 'Better Healthcare.',
  headline2 = 'Built on Commitment.',
  subtext,
  primaryCtaText = 'Connect With Our Team',
  primaryCtaRoute = 'contact',
  secondaryCtaText = 'Explore Products Portfolio',
  secondaryCtaRoute = 'products',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isRevealed) return;

    const sectionEl = sectionRef.current;
    if (!sectionEl || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // Animate once cleanly
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [isRevealed]);

  return (
    <section
      ref={sectionRef}
      className={`signature-closing-section ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="SALAS Pharma Commitment Statement"
    >
      {/* Background Molecular Linework (Very subtle, faint cyan/blue tint) */}
      <div className="signature-closing-bg-decor" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="signature-closing-svg"
        >
          <defs>
            <linearGradient id="sigBondGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20AEEA" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1456A0" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="sigBondGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5242A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1456A0" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Left Cyclopentane Ring Cluster */}
          <g transform="translate(120, 160)" opacity="0.85">
            <polygon
              points="60,10 115,45 95,105 25,105 5,45"
              stroke="url(#sigBondGrad1)"
              strokeWidth="1.2"
              fill="rgba(32, 174, 234, 0.015)"
            />
            <circle cx="60" cy="10" r="2.5" fill="#20AEEA" opacity="0.6" />
            <circle cx="115" cy="45" r="2.5" fill="#20AEEA" opacity="0.6" />
            <circle cx="95" cy="105" r="2.5" fill="#20AEEA" opacity="0.6" />
            <circle cx="25" cy="105" r="2.5" fill="#20AEEA" opacity="0.6" />
            <circle cx="5" cy="45" r="2.5" fill="#20AEEA" opacity="0.6" />
            <line x1="115" y1="45" x2="165" y2="40" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="165" cy="40" r="2" fill="#60A5FA" opacity="0.5" />
          </g>

          {/* Right Symmetrical Molecular Cluster */}
          <g transform="translate(1220, 180)" opacity="0.85">
            <polygon
              points="55,8 108,42 90,98 22,98 4,42"
              stroke="url(#sigBondGrad2)"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="55" cy="8" r="2.5" fill="#E5242A" opacity="0.5" />
            <circle cx="108" cy="42" r="2.5" fill="#E5242A" opacity="0.5" />
            <circle cx="90" cy="98" r="2.5" fill="#1456A0" opacity="0.5" />
            <circle cx="22" cy="98" r="2.5" fill="#1456A0" opacity="0.5" />
            <circle cx="4" cy="42" r="2.5" fill="#1456A0" opacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="signature-closing-content">
          
          {/* Subtle Capsule Icon Motif */}
          <div className="signature-capsule-badge reveal-elem" aria-hidden="true">
            <div className="signature-capsule-icon-wrap">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="sigCapRed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF4D47" />
                    <stop offset="100%" stopColor="#E5242A" />
                  </linearGradient>
                  <linearGradient id="sigCapBlue" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#20AEEA" />
                    <stop offset="100%" stopColor="#1456A0" />
                  </linearGradient>
                </defs>
                <g transform="rotate(-45 16 16)">
                  <path d="M 10 16 A 6 6 0 0 1 22 16 L 22 9 A 6 6 0 0 0 10 9 Z" fill="url(#sigCapRed)" />
                  <path d="M 10 16 L 22 16 L 22 23 A 6 6 0 0 1 10 23 Z" fill="url(#sigCapBlue)" />
                  <line x1="9.5" y1="16" x2="22.5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" />
                </g>
              </svg>
            </div>
            <span className="signature-capsule-eyebrow">
              <ShieldCheck size={14} style={{ color: 'var(--color-accent)' }} />
              Salas Pharmaceuticals Promise
            </span>
          </div>

          {/* Large Editorial Centered Statement */}
          <h2 className="signature-closing-statement reveal-elem">
            <span className="statement-line">{headline1}</span>
            <span className="statement-line statement-highlight">
              {headline2}
              <span className="statement-underline" aria-hidden="true" />
            </span>
          </h2>

          {/* Compact Verified Supporting Sentence */}
          <p className="signature-closing-subtext reveal-elem">
            {subtext ? (
              subtext
            ) : (
              <>
                <em>“Success Lies in Commitment.”</em> From our dedicated Sikkim cleanrooms to a pan-India supply network, we formulate, manufacture, and deliver essential medicines with scientific precision and uncompromising quality.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="signature-closing-actions reveal-elem">
            <button
              type="button"
              onClick={() => onNavigate(primaryCtaRoute)}
              className="btn btn-primary signature-btn-primary"
              aria-label={primaryCtaText}
            >
              <span>{primaryCtaText}</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => onNavigate(secondaryCtaRoute)}
              className="btn btn-secondary signature-btn-secondary"
              aria-label={secondaryCtaText}
            >
              <span>{secondaryCtaText}</span>
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="signature-closing-trust-bar reveal-elem">
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Est. 2009 in Vadodara, Gujarat</span>
            </div>
            <div className="trust-separator">•</div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Sikkim Manufacturing Plant</span>
            </div>
            <div className="trust-separator">•</div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>8 Therapeutic Segments</span>
            </div>
            <div className="trust-separator">•</div>
            <div className="trust-item">
              <span className="trust-dot" />
              <span>Pan-India Distribution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
