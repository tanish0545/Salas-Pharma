import React from 'react';
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Factory,
  Pill,
  Brain,
  Heart,
  Activity,
  Baby,
  Zap,
  Sparkles,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { MEDIA_CONFIG, VIDEO_ASSETS } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  useScrollReveal();

  const therapeuticSegments = [
    {
      id: 'neurology',
      title: 'Neurology',
      icon: Brain,
      description: 'Formulations engineered to support central nervous system care and patient cognitive well-being.',
      color: '#0A4D9E'
    },
    {
      id: 'psychiatry',
      title: 'Psychiatry',
      icon: Activity,
      description: 'Specialised therapies addressing emotional and psychological health with clinical precision.',
      color: '#0D2C54'
    },
    {
      id: 'orthopaedics',
      title: 'Orthopaedics',
      icon: Zap,
      description: 'Therapeutic solutions designed to enhance bone density, joint mobility, and musculoskeletal health.',
      color: '#E52D27'
    },
    {
      id: 'gynaecology',
      title: 'Gynaecology',
      icon: Baby,
      description: 'Dedicated healthcare formulations focused on maternal wellness and women’s health across life stages.',
      color: '#0A4D9E'
    },
    {
      id: 'pain-management',
      title: 'Pain Management',
      icon: Heart,
      description: 'Effective analgesic and anti-inflammatory therapies offering targeted, sustained relief.',
      color: '#E52D27'
    },
    {
      id: 'gastroenterology',
      title: 'Gastroenterology',
      icon: Pill,
      description: 'Targeted digestive and gastrointestinal formulations to restore digestive balance and comfort.',
      color: '#0A4D9E'
    },
    {
      id: 'vitamins',
      title: 'Vitamins & Supplements',
      icon: Sparkles,
      description: 'Essential micronutrients and nutritional compounds designed to replenish energy and support immunity.',
      color: '#0D2C54'
    },
    {
      id: 'general',
      title: 'General Products',
      icon: FlaskConical,
      description: 'Broad-spectrum essential medicines providing dependable primary healthcare accessibility across India.',
      color: '#0A4D9E'
    },
  ];

  const highlights = [
    {
      metric: 'Established 2009',
      label: 'Corporate Heritage',
      description: 'Over 15 years of dedicated pharmaceutical service, compliance, and collaborative growth across India.'
    },
    {
      metric: '8 Segments',
      label: 'Therapeutic Depth',
      description: 'Comprehensive product solutions addressing diverse chronic and acute medical requirements.'
    },
    {
      metric: 'Multi-Dosage',
      label: 'Manufacturing Versatility',
      description: 'High-precision production capabilities for tablets, capsules, and injectables in cleanroom facilities.'
    },
    {
      metric: 'Pan-India',
      label: 'Distribution Presence',
      description: 'Robust supply and marketing network ensuring accessible healthcare delivery nationwide.'
    }
  ];

  return (
    <div className="homepage-wrapper">
      {/* ====================================================================
          SECTION 1: HERO
          ==================================================================== */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - var(--header-height))',
          display: 'flex',
          alignItems: 'center',
          marginTop: 'var(--header-height)',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Full-bleed Laboratory Video Background Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <BrandedVideo
            src={VIDEO_ASSETS.hero.video}
            poster={VIDEO_ASSETS.hero.poster}
            playbackRate={VIDEO_ASSETS.hero.playbackRate}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            ariaLabel={VIDEO_ASSETS.hero.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
            }}
          />
          {/* Smooth Right-Side White Blend Gradient:
              Strong, natural footage clarity across left & center (95%+ visual strength), smoothly fading to pure white on the right */}
          <div
            className="hero-gradient-mask"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.18) 62%, rgba(255, 255, 255, 0.75) 80%, rgba(255, 255, 255, 0.96) 94%, #FFFFFF 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Hero Content Overlay (Positioned on the right / middle-right white area for pristine readability) */}
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div className="hero-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr minmax(320px, 660px)', gap: '2rem', alignItems: 'center' }}>
            {/* Left Spacer Column so the laboratory cleanroom video is completely visible */}
            <div className="hero-video-window" style={{ minHeight: '1px' }} />

            {/* Right Content Panel sitting on clean white background */}
            <div className="hero-text-content" style={{ padding: '1rem 0' }}>
              <div
                className="reveal-left"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(10, 77, 158, 0.08)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--color-primary)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(10, 77, 158, 0.16)',
                }}
              >
                <ShieldCheck size={16} style={{ color: 'var(--color-accent)' }} />
                <span>Salas Pharmaceuticals Pvt. Ltd.</span>
              </div>

              <h1
                className="reveal-left delay-100"
                style={{
                  color: 'var(--color-navy)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.15,
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                  fontWeight: 900,
                }}
              >
                Welcome to <span style={{ color: 'var(--color-primary)', position: 'relative' }}>
                  SALAS
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', backgroundColor: 'var(--color-accent)', borderRadius: '2px' }} />
                </span>
              </h1>

              <p
                className="reveal-left delay-200"
                style={{
                  color: 'var(--color-text-body)',
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.7,
                  marginBottom: '2.25rem',
                  maxWidth: '620px',
                  fontWeight: 500,
                }}
              >
                We are a pharmaceutical company engaged in the manufacture and marketing of pharmaceutical products, committed to quality, innovation and better healthcare.
              </p>

              <div
                className="reveal-left delay-300"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn btn-primary"
                  style={{
                    fontSize: '1rem',
                    padding: '0.9rem 2rem',
                    fontWeight: 700,
                  }}
                >
                  <span>Discover SALAS</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '1rem',
                    padding: '0.9rem 2rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <span>Explore Our Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: COMPANY INTRODUCTION
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content Column */}
            <div className="reveal-left">
              <span className="section-eyebrow">
                <Compass size={14} /> Corporate Profile
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
                Committed to Quality. Focused on Healthcare.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
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

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Service & Collaborative Partnerships</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--color-accent)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Pan-India Distribution Reach</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Imagery */}
            <div className="reveal-right">
              <div
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <img
                  src={MEDIA_CONFIG.quality.image}
                  alt={MEDIA_CONFIG.quality.alt}
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  marginTop: '-2.5rem',
                  marginLeft: '2rem',
                  marginRight: '2rem',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: 'var(--color-navy)' }}>
                    Standardised Quality Assurance
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Analytical testing ensuring compliance with applicable regulatory specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3: SCIENTIFIC RESEARCH & INNOVATION
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <FlaskConical size={14} /> Formulation & Analytics
            </span>
            <h2 className="section-title">Science That Drives Progress</h2>
            <p className="section-description">
              Our commitment to pharmaceutical science is anchored in rigorous laboratory research, systematic testing, and reproducible formulation workflows.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Image Showcase */}
            <div className="reveal-left">
              <div
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
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
                  ariaLabel={VIDEO_ASSETS.research.alt}
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Detailed Scientific Focus Areas */}
            <div className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  {
                    title: 'Laboratory Research & Analytical Chemistry',
                    desc: 'Utilising validated analytical protocols, chromatography, and spectroscopic methods to characterise pharmaceutical active ingredients.',
                    icon: FlaskConical
                  },
                  {
                    title: 'Scientific Testing & In-Process Controls',
                    desc: 'Continuous analytical checks across blending, compression, and coating stages to maintain strict batch-to-batch uniformity.',
                    icon: ShieldCheck
                  },
                  {
                    title: 'Product Formulation Development',
                    desc: 'Developing stable, bioequivalent dosage forms engineered for targeted bioavailability and patient convenience.',
                    icon: Pill
                  },
                  {
                    title: 'Quality-Focused Process Optimization',
                    desc: 'Standardised operating procedures aligned with applicable Indian pharmacopeial and regulatory guidelines.',
                    icon: Factory
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      padding: '1.25rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--shadow-xs)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-primary-subtle)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: MANUFACTURING EXCELLENCE
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Factory size={14} /> Sikkim Manufacturing Facility
            </span>
            <h2 className="section-title">Precision in Every Process</h2>
            <p className="section-description">
              Our production infrastructure in South Sikkim incorporates cleanroom architecture, high-efficiency tablet and capsule compression, and automated packaging systems.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Manufacturing Line Visual Card */}
            <div
              className="reveal-left"
              style={{
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="img-zoom-wrapper" style={{ height: '320px' }}>
                <img
                  src={MEDIA_CONFIG.manufacturing.image}
                  alt={MEDIA_CONFIG.manufacturing.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--color-navy)' }}>
                  Tablet & Capsule Production Lines
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  Equipped with stainless-steel rotary tablet presses and automated capsule filling machinery, maintaining strict environmental temperature and humidity control.
                </p>
              </div>
            </div>

            {/* Packaging & Cleanroom Card */}
            <div
              className="reveal-right"
              style={{
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="img-zoom-wrapper" style={{ height: '320px' }}>
                <BrandedVideo
                  src={VIDEO_ASSETS.manufacturing.video}
                  poster={VIDEO_ASSETS.manufacturing.poster}
                  playbackRate={VIDEO_ASSETS.manufacturing.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel={VIDEO_ASSETS.manufacturing.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--color-navy)' }}>
                  Automated Cleanroom Packaging
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  High-speed blister packaging lines coupled with inline optical inspection ensure intact product sealing, accurate batch coding, and tamper-evident cartoning.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => onNavigate('manufacturing')}
              className="btn btn-secondary"
            >
              <span>Explore Manufacturing Infrastructure</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: QUALITY AND CERTIFICATIONS (ROTATING SEAL)
          ==================================================================== */}
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
            {/* Left: The Clockwise Rotating Quality Seal Graphic */}
            <div className="reveal-left" style={{ display: 'flex', justifyContent: 'center' }}>
              <QualitySeal size={260} />
            </div>

            {/* Right: Quality Framework */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <ShieldCheck size={14} /> Strict Standards
              </span>
              <h2 className="section-title">Quality at Every Step</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: '2rem' }}>
                At Salas Pharma, quality assurance is an active operational discipline embedded within every phase of development, raw material procurement, manufacturing, and distribution.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {[
                  {
                    title: 'Raw Material Testing',
                    desc: 'Every active ingredient and excipient undergoes assay testing and identification before release to production.'
                  },
                  {
                    title: 'In-Process Quality Checks',
                    desc: 'Uniformity of dosage units, dissolution profiles, hardness, and friability are continuously monitored.'
                  },
                  {
                    title: 'Stability & Shelf-Life',
                    desc: 'Validated climate-controlled stability chambers ensure longevity and potency across diverse Indian climatic zones.'
                  },
                  {
                    title: 'Documentation & Traceability',
                    desc: 'Comprehensive batch manufacturing records ensuring transparency and regulatory traceability for every product lot.'
                  }
                ].map((q, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      {q.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: THERAPEUTIC SEGMENTS
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Pill size={14} /> Medical Specialties
            </span>
            <h2 className="section-title">Supporting Diverse Healthcare Needs</h2>
            <p className="section-description">
              Our pharmaceutical portfolio spans eight essential therapeutic areas, delivering quality medications tailored to diverse patient demographics across India.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {therapeuticSegments.map((seg) => {
              const IconComp = seg.icon;
              return (
                <div
                  key={seg.id}
                  className="reveal-up"
                  style={{
                    backgroundColor: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem 1.75rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-light)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                  onClick={() => onNavigate('products')}
                >
                  <div>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        color: seg.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        boxShadow: 'var(--shadow-xs)',
                      }}
                    >
                      <IconComp size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                      {seg.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                      {seg.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginTop: '1.5rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                    }}
                  >
                    <span>View Formulations</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7: PRODUCT PORTFOLIO
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Image Showcase */}
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
                  src={VIDEO_ASSETS.products.video}
                  poster={VIDEO_ASSETS.products.poster}
                  playbackRate={VIDEO_ASSETS.products.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel={VIDEO_ASSETS.products.alt}
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <Pill size={14} /> Finished Dosage Forms
              </span>
              <h2 className="section-title">Explore Our Pharmaceutical Portfolio</h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                We produce a diverse portfolio of pharmaceutical products across multiple dosage forms and therapeutic segments, manufactured to meet rigorous quality and stability standards.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { label: 'Solid Oral Dosages: Precision coated and uncoated tablets', detail: 'Immediate and sustained release formulations' },
                  { label: 'Hard Gelatin Capsules: Filled under precise environmental parameters', detail: 'Optimal disintegration and bio-absorption' },
                  { label: 'Sterile Injectables & Liquid Formulations', detail: 'Aseptically filled and terminal sterilization options' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.95rem' }}>{item.label}</span>
                      <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: 0 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="btn btn-primary"
              >
                <span>Browse Product Catalogue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8: COMPANY HIGHLIGHTS (QUALITATIVE MILESTONES)
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> Grounded In Excellence
            </span>
            <h2 className="section-title">Corporate Foundations & Capabilities</h2>
            <p className="section-description">
              Salas Pharma combines dedicated manufacturing, scientific diligence, and reliable distribution to advance accessibility to essential healthcare.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
            }}
          >
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="reveal-up"
                style={{
                  padding: '2.5rem 1.75rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <div
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {h.metric}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                  }}
                >
                  {h.label}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 9: CAREERS
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              boxShadow: 'var(--shadow-lg)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span className="section-eyebrow">
                <Users size={14} /> People & Culture
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
                Grow With SALAS
              </h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                At Salas Pharma, we believe our people are the driving force behind our commitment to healthcare. We foster an environment of continuous learning, mutual respect, professional integrity, and collaborative problem-solving.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('careers')}
                  className="btn btn-primary"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary"
                >
                  <span>Contact HR Team</span>
                </button>
              </div>
            </div>

            <div className="reveal-right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {[
                  { title: 'Continuous Professional Learning', desc: 'Engage with updated GMP methodologies, analytical instrumentation, and industry practices.' },
                  { title: 'Collaborative Environment', desc: 'Work alongside experienced professionals in formulation, quality control, and distribution management.' },
                  { title: 'Purpose-Driven Work', desc: 'Contribute directly to expanding healthcare accessibility through dependable pharmaceutical products.' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-sm)',
                      borderLeft: '4px solid var(--color-primary)',
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 10: CLOSING CONTACT CTA
          ==================================================================== */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div
            className="reveal-up"
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              padding: 'clamp(3rem, 6vw, 4.5rem) 2rem',
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--radius-xl)',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle decorative glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40%',
                right: '-20%',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(10, 77, 158, 0.4) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#FF6B6B',
                marginBottom: '1rem',
              }}
            >
              Collaborate With SALAS Pharma
            </span>

            <h2 style={{ color: '#FFFFFF', marginBottom: '1.25rem', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)' }}>
              Partner With Us in Expanding Healthcare
            </h2>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Whether you are an institutional partner, distributor, or healthcare professional, we welcome meaningful collaboration rooted in quality and integrity.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn btn-primary"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--color-navy)',
                fontSize: '1rem',
                padding: '1rem 2.25rem',
                fontWeight: 700,
              }}
            >
              <span>Connect With Our Corporate Team</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
