import React from 'react';
import { Factory, ShieldCheck, MapPin, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { VIDEO_ASSETS, MEDIA_CONFIG } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ManufacturingPageProps {
  onNavigate: (route: string) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  return (
    <div className="manufacturing-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Page Header */}
      <section className="container" style={{ marginBottom: '3.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Factory size={14} /> Production Infrastructure
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
            Precision in Pharmaceutical Manufacturing
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
            Salas Pharmaceuticals operates dedicated manufacturing infrastructure engineered for solid orals and sterile formulations under rigorous quality standards and environmental controls.
          </p>
        </div>
      </section>

      {/* Facility Highlights Banner with Authentic Sikkim Plant Photo */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                Manufacturing Unit
              </span>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--color-navy)', marginTop: '0.35rem', marginBottom: '1.25rem' }}>
                South Sikkim Production Facility
              </h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
                <MapPin size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring, South Sikkim, Sikkim – 737132
                </p>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.975rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Located in the clean and temperate climate of South Sikkim, our plant benefits from natural environmental purity, supplemented by dedicated HVAC and HEPA air handling systems to maintain continuous cleanroom conditions.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  onClick={() => onNavigate('contact')} 
                  className="btn btn-primary"
                >
                  <span>Connect With Plant Office</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  onClick={() => onNavigate('products')} 
                  className="btn btn-secondary"
                >
                  <span>View Product Lines</span>
                </button>
              </div>
            </div>

            <div className="reveal-right">
              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img 
                  src={MEDIA_CONFIG.about.image} 
                  alt="Salas Pharmaceuticals manufacturing plant nestled in South Sikkim valley" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={420}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(7, 29, 54, 0.9), transparent)',
                  padding: '1.25rem 1.5rem',
                  color: '#FFFFFF',
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-secondary)' }}>
                    Mamring, South Sikkim
                  </span>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', fontWeight: 600 }}>
                    Controlled Cleanrooms & Automated Dosage Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Engineering Pillars - Image-Led Cards */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Cpu size={14} /> Technology & Controls
            </span>
            <h2 className="section-title">Engineered For Quality & Batch Uniformity</h2>
            <p className="section-description">
              From raw material granulation to primary packaging, each manufacturing phase is monitored through calibrated digital controls.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Card 1: Tablet Compression */}
            <div className="pharma-card reveal-up">
              <div className="pharma-card-img-wrap">
                <img 
                  src={MEDIA_CONFIG.manufacturing.image} 
                  alt="High-speed pharmaceutical tablet compression press" 
                  loading="lazy" 
                  decoding="async" 
                  width={400} 
                  height={240} 
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Solid Orals</span>
                <h3 className="pharma-card-title">Tablet Compression</h3>
                <p className="pharma-card-desc">
                  Multi-station rotary tablet presses with automated weight regulation, electronic hardness measurement, and friability testing.
                </p>
              </div>
            </div>

            {/* Card 2: Cleanroom Processing */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '100ms' }}>
              <div className="pharma-card-img-wrap">
                <img 
                  src={MEDIA_CONFIG.manufacturing.cleanroomImage} 
                  alt="Sterile pharmaceutical bioprocess formulation vessels" 
                  loading="lazy" 
                  decoding="async" 
                  width={400} 
                  height={240} 
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Cleanrooms</span>
                <h3 className="pharma-card-title">Cleanroom Processing</h3>
                <p className="pharma-card-desc">
                  Positive pressure air-handling units (AHU) with multi-stage HEPA filtration, controlling temperature, humidity, and particle counts.
                </p>
              </div>
            </div>

            {/* Card 3: Packaging & Inspection */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '200ms' }}>
              <div className="pharma-card-img-wrap">
                <img 
                  src={MEDIA_CONFIG.packaging.image} 
                  alt="Automated blister packaging line and optical inspection" 
                  loading="lazy" 
                  decoding="async" 
                  width={400} 
                  height={240} 
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Packaging</span>
                <h3 className="pharma-card-title">Inline Optical Inspection</h3>
                <p className="pharma-card-desc">
                  Automated high-speed optical inspection verifying blister seal integrity, print alignment, batch numbering, and expiry codes.
                </p>
              </div>
            </div>

            {/* Card 4: Quality Testing */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '300ms' }}>
              <div className="pharma-card-img-wrap">
                <img 
                  src={MEDIA_CONFIG.quality.image} 
                  alt="Quality assurance testing and compliance inspection" 
                  loading="lazy" 
                  decoding="async" 
                  width={400} 
                  height={240} 
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Testing</span>
                <h3 className="pharma-card-title">In-Process Testing</h3>
                <p className="pharma-card-desc">
                  Systematic sampling throughout granulation, blending, and compression to verify weight uniformity and active release profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Footage Showcase (salas1.mp4) */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', padding: '4rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span className="section-eyebrow">
                <Factory size={14} /> Automated Operations
              </span>
              <h2 className="section-title">Continuous Packaging & Conveyor Systems</h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Our automated filling, capping, and labeling lines ensure uninterrupted throughput with high precision. Inline optical sensors continuously inspect each unit to guarantee packaging integrity and code legibility.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-navy)', fontWeight: 600 }}>High-speed bottle and blister packaging integration</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-navy)', fontWeight: 600 }}>Moisture-barrier seal verification</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-navy)', fontWeight: 600 }}>Real-time batch serialization and tracking</span>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                }}
              >
                <BrandedVideo 
                  src={VIDEO_ASSETS.manufacturing.video} 
                  poster={VIDEO_ASSETS.manufacturing.poster}
                  playbackRate={VIDEO_ASSETS.manufacturing.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel="Salas Pharma automated packaging and conveyor line footage" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Seal Feature */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left" style={{ display: 'flex', justifyContent: 'center' }}>
              <QualitySeal size={280} />
            </div>

            <div className="reveal-right">
              <span className="section-eyebrow">
                <ShieldCheck size={14} /> Quality Commitment
              </span>
              <h2 className="section-title">Analytical Assurance Protocols</h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Every manufactured lot is subjected to systematic chemical and physical assays. Our quality assurance framework mandates zero release of finished dosage units without full compliance with documented release specifications.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Chromatographic assay of Active Pharmaceutical Ingredients (APIs)',
                  'Microbiological limits and sterility monitoring for injectable forms',
                  'Dissolution profiles verified against Indian Pharmacopoeia standards',
                  'Accelerated and real-time stability chamber testing under Zone IVB conditions'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
            Need Technical Specifications or Manufacturing Inquiries?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Contact our regulatory and manufacturing liaison team for inquiries regarding supply and finished dosage specifications.
          </p>
          <button 
            type="button" 
            onClick={() => onNavigate('contact')} 
            className="btn btn-primary"
          >
            <span>Contact Manufacturing Office</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
