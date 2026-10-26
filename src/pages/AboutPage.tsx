import React from 'react';
import { Award, Target, Eye, Compass, ArrowRight, Calendar } from 'lucide-react';
import { MEDIA_CONFIG } from '../config/assets';
import { AmbientVideoBackground } from '../components/common/AmbientVideoBackground';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  return (
    <div className="about-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Page Hero */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Compass size={14} /> Corporate Identity
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
            Committed to Quality. Focused on Healthcare.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Salas Pharma is a pharmaceutical company headquartered in India, engaged in manufacturing and sales and marketing of quality finished dosage products.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy Banner with Subtle Ambient DNA Background Video */}
      <AmbientVideoBackground 
        style={{ 
          borderTop: '1px solid var(--color-border)', 
          borderBottom: '1px solid var(--color-border)', 
          padding: '4.5rem 0' 
        }}
      >
        <div className="container">
          <div 
            className="reveal-up"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              padding: '3rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2.5rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)' }}>
                Our Core Philosophy
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-navy)', marginTop: '0.35rem', fontWeight: 800 }}>
                "Success Lies in Commitment."
              </h2>
            </div>
            <div style={{ maxWidth: '520px', color: 'var(--color-text-body)', fontSize: '1.025rem', lineHeight: 1.7, fontWeight: 500 }}>
              Founded on the belief that enduring success stems from an uncompromising dedication to patient wellness, therapeutic quality, and professional integrity.
            </div>
          </div>
        </div>
      </AmbientVideoBackground>

      {/* Editorial Story */}
      <section className="section-spacing">
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
                <img 
                  src={MEDIA_CONFIG.hero.image} 
                  alt="Salas Pharma laboratory cleanroom" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="reveal-right">
              <span className="section-eyebrow">
                <Award size={14} /> Our Journey
              </span>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Building Healthcare Trust Since 2009
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  Established in 2009, Salas Pharma has developed its presence in the pharmaceutical industry through service, collaborative partnerships, innovation and corporate responsibility.
                </p>
                <p>
                  With a portfolio spanning multiple therapeutic segments and a sales and distribution network across India, we work to make quality pharmaceutical products accessible.
                </p>
                <p>
                  Alongside sales and marketing, our manufacturing capabilities support the production of pharmaceutical dosage forms under applicable quality requirements.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-primary)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>2009</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '0.2rem' }}>Year Established</p>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-accent)', margin: 0 }}>Pan-India</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '0.2rem' }}>Distribution Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Company Timeline */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Calendar size={14} /> Chronological Heritage
            </span>
            <h2 className="section-title">Milestones in Pharmaceutical Excellence</h2>
            <p className="section-description">
              Tracing the disciplined growth, manufacturing expansion, and healthcare partnerships of Salas Pharma.
            </p>
          </div>

          <div className="timeline-track">
            <div className="timeline-spine" />

            {/* Milestone 1: 2009 */}
            <div className="timeline-item timeline-node-left reveal-left">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  2009 • Corporate Founding
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Establishment of Salas Pharmaceuticals
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  Incorporated with a definitive mission: delivering high-integrity pharmaceutical manufacturing, ethical corporate governance, and collaborative healthcare delivery across India.
                </p>
              </div>
            </div>

            {/* Milestone 2: Multi-Therapeutic Expansion */}
            <div className="timeline-item timeline-node-right reveal-right accent">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Therapeutic Depth
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Portfolio Across 8 Specialties
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  Strategic diversification into core clinical sectors including Neurology, Psychiatry, Orthopaedics, Gynaecology, Pain Management, and Gastroenterology.
                </p>
              </div>
            </div>

            {/* Milestone 3: Manufacturing Facility */}
            <div className="timeline-item timeline-node-left reveal-left">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Facility Infrastructure
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Sikkim Production Plant
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  Dedicated cleanroom infrastructure in South Sikkim equipped for high-precision tablet and capsule compression, analytical quality checks, and automated packaging.
                </p>
              </div>
            </div>

            {/* Milestone 4: Pan-India Alliances */}
            <div className="timeline-item timeline-node-right reveal-right accent">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Nationwide Distribution
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Pan-India Healthcare Reach
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  Building trusted collaborative distribution alliances and marketing networks ensuring uninterrupted supply of essential finished dosages nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <div 
              className="reveal-left"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-primary-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                Our Corporate Vision
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
                To be a widely trusted and respected Indian pharmaceutical enterprise recognized for sustained manufacturing quality, ethical corporate standards, and expanding access to vital finished dosage medicines.
              </p>
            </div>

            <div 
              className="reveal-right"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-accent-subtle)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
                To manufacture, market, and distribute dependable pharmaceutical dosage forms across critical therapeutic segments, driven by stringent quality management, robust distribution alliances, and societal responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
            Explore Our Comprehensive Capabilities
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Learn how our Sikkim manufacturing facility and quality assurance protocols support dependable healthcare products.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              onClick={() => onNavigate('manufacturing')} 
              className="btn btn-primary"
            >
              <span>Manufacturing & Quality</span>
              <ArrowRight size={16} />
            </button>
            <button 
              type="button" 
              onClick={() => onNavigate('products')} 
              className="btn btn-secondary"
            >
              <span>View Product Segments</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
