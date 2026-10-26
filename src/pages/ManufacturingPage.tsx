import React from 'react';
import { Factory, ShieldCheck, MapPin, CheckCircle2, Cpu, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { VIDEO_ASSETS } from '../config/assets';
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
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Factory size={14} /> Production Infrastructure
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
            Precision in Every Process
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Our manufacturing operations are designed to produce high-integrity solid and liquid dosage forms under rigorous quality parameters and environmental controls.
          </p>
        </div>
      </section>

      {/* Facility Highlights Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                Manufacturing Unit
              </span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginTop: '0.35rem', marginBottom: '1rem' }}>
                South Sikkim Facility
              </h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--color-text-body)' }}>
                <MapPin size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring, South Sikkim, Sikkim – 737132
                </p>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Nestled in the clean, temperate environment of South Sikkim, our manufacturing facility leverages optimal atmospheric purity and dedicated environmental air handling systems for pharmaceutical synthesis.
              </p>
            </div>

            <div className="reveal-right">
              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--color-border)',
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
                  ariaLabel="Salas Pharma Sikkim automated pharmaceutical manufacturing line footage" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Engineering Pillars */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Cpu size={14} /> Technology & Controls
            </span>
            <h2 className="section-title">Engineered For Quality & Uniformity</h2>
            <p className="section-description">
              From raw material granulation to primary packaging, each manufacturing phase is monitored through calibrated digital controls.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                title: 'High-Speed Tablet Compression',
                desc: 'Multi-station rotary tablet presses with automated weight regulation, electronic hardness measurement, and friability testing.',
                icon: Layers
              },
              {
                title: 'Capsule Encapsulation',
                desc: 'Precision tamping pin encapsulation systems ensuring accurate powder fill weights, minimum variation, and defect-free shell locking.',
                icon: Sparkles
              },
              {
                title: 'Cleanroom Environmental Control',
                desc: 'Positive pressure air-handling units (AHU) with multi-stage HEPA filtration, controlling temperature, humidity, and particle counts.',
                icon: ShieldCheck
              },
              {
                title: 'Inline Optical Inspection',
                desc: 'High-speed automated optical cameras verify blister seal integrity, print alignment, batch numbering, and expiry codes.',
                icon: Factory
              }
            ].map((p, idx) => (
              <div 
                key={idx}
                className="reveal-up"
                style={{
                  padding: '2.25rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-light)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                }}
              >
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <p.icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
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
