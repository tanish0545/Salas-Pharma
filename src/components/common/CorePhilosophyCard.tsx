import React, { useRef, useEffect } from 'react';
import { MolecularBackground } from './MolecularBackground';

interface CorePhilosophyCardProps {
  id?: string;
  className?: string;
}

export const CorePhilosophyCard: React.FC<CorePhilosophyCardProps> = ({ id = 'core-philosophy', className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video reliably replays when navigating back to the About route
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay policy fallback gracefully handled
      });
    }
  }, []);

  return (
    <section
      id={id}
      className={`about-philosophy-section ${className}`}
      aria-label="Our Core Philosophy"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Soft Laboratory Video */}
      <div
        className="about-philosophy-bg-media"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/videos/posters/background-poster.webp"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            filter: 'blur(3px) saturate(0.7) brightness(1.02)',
            transform: 'scale(1.04)',
            opacity: 10.0,
          }}
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
          {/* Static Fallback Poster */}
          <img
            src="/assets/videos/posters/background-poster.webp"
            alt=""
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(4px)',
              opacity: 0.85,
            }}
          />
        </video>
      </div>

      {/* Subtle translucent white overlay for crystal-clear readability */}
      <div
        className="about-philosophy-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(248, 250, 252, 0.74) 50%, rgba(241, 245, 249, 0.84) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Subtle Cyclopentane Molecular Linework in Margins */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <MolecularBackground variant="section" theme="light" opacity={0.28} position="split" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, padding: '0 1.5rem' }}>
        <div className="about-philosophy-card reveal-up">
          <div className="about-philosophy-grid">
            {/* Left Column: Eyebrow + Primary Statement */}
            <div className="about-philosophy-left">
              <span className="about-philosophy-eyebrow">
                <span className="about-philosophy-eyebrow-dot" aria-hidden="true" />
                OUR CORE PHILOSOPHY
              </span>
              <h2 className="about-philosophy-statement">
                &ldquo;Success Lies in Commitment.&rdquo;
              </h2>
            </div>

            {/* Right Column: Supporting Mission Statement */}
            <div className="about-philosophy-right">
              <p className="about-philosophy-desc">
                Founded on the belief that enduring success stems from an uncompromising dedication to patient wellness, therapeutic quality, and professional integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

