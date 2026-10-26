import React from 'react';
import { FlaskConical, Microscope, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { VIDEO_ASSETS } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { AmbientVideoBackground } from '../components/common/AmbientVideoBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ResearchPageProps {
  onNavigate: (route: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  return (
    <div className="research-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <FlaskConical size={14} /> Pharmaceutical Science
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
            Science That Drives Progress
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Our research and product development focus centers on formulation optimization, analytical rigor, and dependable drug release stability across all dosage forms.
          </p>
        </div>
      </section>

      {/* Editorial R&D Presentation */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '4rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <BrandedVideo 
                  src={VIDEO_ASSETS.research.video} 
                  poster={VIDEO_ASSETS.research.poster}
                  playbackRate={VIDEO_ASSETS.research.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel="Salas Pharma laboratory research and analytical testing footage" 
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="reveal-right">
              <span className="section-eyebrow">
                <Microscope size={14} /> Formulation Science
              </span>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Evidence-Based Drug Delivery & Analytical Testing
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  Salas Pharma approaches product formulation by bridging scientific research with scalable manufacturing realities. Our development teams focus on optimizing bioavailability, improving patient adherence, and ensuring robust stability profiles.
                </p>
                <p>
                  Every formulation undergoes comprehensive pre-formulation characterization, excipient compatibility testing, and rigorous degradation pathway studies.
                </p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'HPLC (High Performance Liquid Chromatography) assay development',
                  'Spectroscopic active ingredient purity verification',
                  'In-vitro dissolution profiling across simulated gastric and intestinal media',
                  'Container-closure integrity and moisture permeation studies'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Core Pillars with Ambient DNA Background Video */}
      <AmbientVideoBackground 
        className="section-spacing"
        style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={14} /> Focus Areas
            </span>
            <h2 className="section-title">Four Pillars of R&D Diligence</h2>
            <p className="section-description">
              Our structured pharmaceutical development processes ensure reproducible clinical performance and regulatory conformity.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                title: 'Formulation Design',
                desc: 'Selecting optimal polymer carriers, disintegrants, and solubilizers to achieve target dissolution and bio-absorption rates.'
              },
              {
                title: 'Analytical Method Validation',
                desc: 'Validating analytical testing procedures for precision, linearity, limit of detection, and ruggedness under ICH guidelines.'
              },
              {
                title: 'Stability Chamber Studies',
                desc: 'Simulating long-term tropical storage conditions (30°C / 75% RH) to substantiate expiration periods and packaging safety.'
              },
              {
                title: 'Scale-Up & Tech Transfer',
                desc: 'Bridging pilot-scale laboratory batches into commercial manufacturing runs without sacrificing batch-to-batch consistency.'
              }
            ].map((p, idx) => (
              <div 
                key={idx}
                className="reveal-up"
                style={{
                  padding: '2.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                  0{idx + 1}.
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AmbientVideoBackground>

      {/* CTA */}
      <section className="section-spacing" style={{ textAlign: 'center', backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
            Have a Technical or Formulation Query?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Our scientific team is available to discuss product capabilities, testing documentation, and quality standards.
          </p>
          <button 
            type="button" 
            onClick={() => onNavigate('contact')} 
            className="btn btn-primary"
          >
            <span>Inquire With Our Science Team</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
