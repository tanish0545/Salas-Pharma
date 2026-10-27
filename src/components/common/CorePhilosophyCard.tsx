import React from 'react';
import { MolecularBackground } from './MolecularBackground';

interface CorePhilosophyCardProps {
  id?: string;
  className?: string;
}

export const CorePhilosophyCard: React.FC<CorePhilosophyCardProps> = ({ id = 'core-philosophy', className = '' }) => {
  return (
    <section
      id={id}
      className={`about-philosophy-section ${className}`}
      aria-label="Our Core Philosophy"
    >
      {/* Background Soft Lab Imagery */}
      <img
        src="/assets/images/laboratory/lab-environment.webp"
        alt=""
        aria-hidden="true"
        className="about-philosophy-bg-media"
        loading="lazy"
        decoding="async"
      />

      {/* High-key translucent white overlay */}
      <div className="about-philosophy-overlay" aria-hidden="true" />

      {/* Subtle Cyclopentane Molecular Linework in Margins */}
      <MolecularBackground variant="section" theme="light" opacity={0.28} position="split" />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem' }}>
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

