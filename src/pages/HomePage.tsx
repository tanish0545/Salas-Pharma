import React, { useState } from 'react';
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
  Compass,
  Building2,
  Microscope,
  FileCheck
} from 'lucide-react';
import { MEDIA_CONFIG, VIDEO_ASSETS, PAGE_HERO_IMAGES } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { CompanyTimeline } from '../components/common/CompanyTimeline';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (route: string) => void;
  isLoaderComplete?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, isLoaderComplete: _isLoaderComplete = true }) => {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>('neurology');

  const therapeuticSegments = [
    {
      id: 'neurology',
      title: 'Neurology',
      icon: Brain,
      description: 'Formulations engineered to support central nervous system care and patient cognitive well-being.',
      detail: 'Precision oral solid formulations developed for targeted neuro-cognitive support and physiological stability.',
      color: '#0A4D9E'
    },
    {
      id: 'psychiatry',
      title: 'Psychiatry',
      icon: Activity,
      description: 'Specialised therapies addressing emotional and psychological health with clinical precision.',
      detail: 'Clinically calibrated therapeutic solutions addressing mental wellness and behavioral equilibrium.',
      color: '#0D2C54'
    },
    {
      id: 'orthopaedics',
      title: 'Orthopaedics',
      icon: Zap,
      description: 'Therapeutic solutions designed to enhance bone density, joint mobility, and musculoskeletal health.',
      detail: 'Formulations supporting musculoskeletal resilience, cartilage protection, and sustained pain management.',
      color: '#E5242A'
    },
    {
      id: 'gynaecology',
      title: 'Gynaecology',
      icon: Baby,
      description: 'Dedicated healthcare formulations focused on maternal wellness and women’s health across life stages.',
      detail: 'Tailored healthcare compounds supporting reproductive vitality, maternal care, and hormonal balance.',
      color: '#0A4D9E'
    },
    {
      id: 'pain-management',
      title: 'Pain Management',
      icon: Heart,
      description: 'Effective analgesic and anti-inflammatory therapies offering targeted, sustained relief.',
      detail: 'Fast-acting and sustained-release analgesic formulations engineered for consistent therapeutic relief.',
      color: '#E5242A'
    },
    {
      id: 'gastro-intestinal',
      title: 'Gastro-intestinal',
      icon: Pill,
      description: 'Targeted digestive and gastrointestinal formulations to restore digestive balance and comfort.',
      detail: 'Specialized gastro-protective and digestive formulations engineered to optimize bioavailability.',
      color: '#0A4D9E'
    },
    {
      id: 'vitamins',
      title: 'Vitamins',
      icon: Sparkles,
      description: 'Essential micronutrients and nutritional compounds designed to replenish energy and support immunity.',
      detail: 'High-purity micronutrient complexes and multivitamins formulated for optimal systemic absorption.',
      color: '#0D2C54'
    },
    {
      id: 'general',
      title: 'General Products',
      icon: FlaskConical,
      description: 'Broad-spectrum essential medicines providing dependable primary healthcare accessibility across India.',
      detail: 'Core broad-spectrum medicines manufactured under rigorous quality control for healthcare providers nationwide.',
      color: '#0A4D9E'
    },
  ];

  const currentSegment = therapeuticSegments.find(s => s.id === activeCategory) || therapeuticSegments[0];
  const CurrentSegmentIcon = currentSegment.icon;

  return (
    <div className="homepage-wrapper">
      {/* ====================================================================
          SECTION 1: HERO — HYBRID CINEMATIC + ASYMMETRIC GALLERY (OPTION 1 + OPTION 3)
          Combines full-width pharmaceutical manufacturing video (salas1.mp4) with dark
          navy gradient overlay and a right-side 3-panel asymmetric angled gallery.
          ==================================================================== */}
      <section
        className="hero-hybrid-section"
        aria-label="SALAS Pharmaceuticals Home Hero"
      >
        {/* BACKGROUND LAYER: Full-Width Cinematic Pharmaceutical Manufacturing Video (salas1.mp4) */}
        <div className="hero-hybrid-video-layer">
          <BrandedVideo
            src={VIDEO_ASSETS.manufacturing.video}
            poster={VIDEO_ASSETS.manufacturing.poster}
            playbackRate={1.0}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            priority={true}
            isReadyToPlay={_isLoaderComplete}
            ariaLabel="Salas Pharma automated pharmaceutical manufacturing and packaging line"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
          {/* Deep Navy Gradient Overlay: Strongest behind left text, lighter toward right */}
          <div className="hero-hybrid-video-overlay" />
        </div>

        {/* FOREGROUND CONTAINER: 2-Column Split Layout */}
        <div className="container hero-hybrid-container">
          {/* LEFT CONTENT COLUMN */}
          <div className="hero-hybrid-content">
            {/* Eyebrow */}
            <div className="hero-hybrid-eyebrow">
              <span className="hero-hybrid-eyebrow-dot" aria-hidden="true" />
              <span>SALAS PHARMACEUTICALS PVT. LTD.</span>
            </div>

            {/* Headline with Cyan Highlight */}
            <h1 className="hero-hybrid-heading">
              <span>Advancing Healthcare.</span>
              <span className="hero-hybrid-highlight">With Every Commitment.</span>
            </h1>

            {/* Description */}
            <p className="hero-hybrid-description">
              Driven by pharmaceutical excellence, we manufacture and deliver high-quality finished dosage products for a healthier tomorrow.
            </p>

            {/* Two Differentiated Call to Action Buttons */}
            <div className="hero-hybrid-ctas">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="hero-hybrid-btn-primary"
                aria-label="Explore Salas Pharma"
              >
                <span>Explore Salas Pharma</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('manufacturing')}
                className="hero-hybrid-btn-secondary"
                aria-label="Our Capabilities"
              >
                <span>Our Capabilities</span>
              </button>
            </div>

            {/* Bottom Company Highlights */}
            <div className="hero-hybrid-highlights">
              <div className="hero-hybrid-highlight-item">
                <span className="hero-hybrid-highlight-value">2009</span>
                <span className="hero-hybrid-highlight-label">Established</span>
              </div>
              <div className="hero-hybrid-highlight-divider" aria-hidden="true" />
              <div className="hero-hybrid-highlight-item">
                <span className="hero-hybrid-highlight-value">Vadodara</span>
                <span className="hero-hybrid-highlight-label">Corporate Office</span>
              </div>
              <div className="hero-hybrid-highlight-divider" aria-hidden="true" />
              <div className="hero-hybrid-highlight-item">
                <span className="hero-hybrid-highlight-value">Sikkim</span>
                <span className="hero-hybrid-highlight-label">Manufacturing Location</span>
              </div>
            </div>
          </div>

          {/* RIGHT ASYMMETRIC GALLERY: 3 Angled Panels — interactive, keyboard-accessible */}
          <div className="hero-hybrid-gallery" aria-label="Pharmaceutical Operations Gallery">
            {/* Panel 1: R&D Laboratory → research route */}
            <button
              type="button"
              className="hero-hybrid-panel hero-hybrid-panel-1"
              onClick={() => onNavigate('research')}
              aria-label="Explore R&D Laboratory — navigate to R&D and Innovation"
            >
              <div className="hero-hybrid-panel-inner">
                <img
                  src="/assets/images/research/rnd-laboratory-research.webp"
                  alt="Pharmaceutical R&D laboratory research and formulation development"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-hybrid-panel-scrim" />
                <div className="hero-hybrid-panel-caption">
                  <span className="hero-hybrid-panel-tag">R&D</span>
                  <span className="hero-hybrid-panel-title">Laboratory Research</span>
                  <span className="hero-hybrid-panel-explore" aria-hidden="true">Explore →</span>
                </div>
              </div>
            </button>

            {/* Panel 2: cGMP Cleanroom Facility → manufacturing route */}
            <button
              type="button"
              className="hero-hybrid-panel hero-hybrid-panel-2"
              onClick={() => onNavigate('manufacturing')}
              aria-label="Explore cGMP Cleanroom Facility — navigate to Manufacturing & Quality"
            >
              <div className="hero-hybrid-panel-inner">
                <img
                  src="/assets/images/manufacturing/manufacturing-cleanroom.webp"
                  alt="Pharmaceutical cGMP cleanroom manufacturing facility"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-hybrid-panel-scrim" />
                <div className="hero-hybrid-panel-caption">
                  <span className="hero-hybrid-panel-tag">cGMP</span>
                  <span className="hero-hybrid-panel-title">Cleanroom Facility</span>
                  <span className="hero-hybrid-panel-explore" aria-hidden="true">Explore →</span>
                </div>
              </div>
            </button>

            {/* Panel 3: Quality Assurance → manufacturing route */}
            <button
              type="button"
              className="hero-hybrid-panel hero-hybrid-panel-3"
              onClick={() => onNavigate('manufacturing')}
              aria-label="Explore Quality Assurance — navigate to Manufacturing & Quality"
            >
              <div className="hero-hybrid-panel-inner">
                <img
                  src="/assets/images/quality/quality-control.webp"
                  alt="Scientist performing quality assurance testing and analytical assay"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-hybrid-panel-scrim" />
                <div className="hero-hybrid-panel-caption">
                  <span className="hero-hybrid-panel-tag">Quality Assurance</span>
                  <span className="hero-hybrid-panel-title">Quality Testing</span>
                  <span className="hero-hybrid-panel-explore" aria-hidden="true">Explore →</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FEATURE STRIP: 4 CORE FOUNDATIONS
          ==================================================================== */}
      <section className="hero-feature-strip" aria-label="SALAS Core Foundations">
        <div className="container">
          <div className="hero-feature-grid">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="hero-feature-title">Precision Formulation</h3>
                <p className="hero-feature-desc">Dedicated Sikkim cleanrooms and automated compression lines</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="hero-feature-title">Quality Assurance</h3>
                <p className="hero-feature-desc">Rigorous multi-stage analytical testing & batch traceability</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Pill size={22} />
              </div>
              <div>
                <h3 className="hero-feature-title"><AnimatedCounter target={8} /> Therapeutic Areas</h3>
                <p className="hero-feature-desc">Specialized solid and liquid dosage forms across clinical needs</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="hero-feature-title">Pan-India Reach</h3>
                <p className="hero-feature-desc">Robust healthcare supply network serving partners since <AnimatedCounter target={2009} /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          1. COMPANY INTRODUCTION
          Editorial statement with facility imagery from Mamring, South Sikkim.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Facility Visual */}
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
                  src={PAGE_HERO_IMAGES.home.image}
                  alt={PAGE_HERO_IMAGES.home.alt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
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
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: 'var(--color-navy)' }}>
                    South Sikkim Production Plant
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Modern formulation facility in Mamring, South Sikkim (PIN: 737132) · Est. 2009
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Statement */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <Compass size={14} /> Corporate Heritage & Purpose
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Committed to Quality. <br />
                <span style={{ color: 'var(--color-primary)' }}>Focused on Healthcare.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75, marginTop: '1.25rem' }}>
                <p>
                  Established in 2009, Salas Pharma has established its identity through reliable service, collaborative partnerships, and disciplined compliance across India.
                </p>
                <p>
                  With our corporate office in Vadodara, Gujarat, and our dedicated manufacturing plant situated in Mamring, South Sikkim, we formulate and manufacture oral solid and liquid dosage forms adhering strictly to applicable Indian regulatory standards.
                </p>
                <p>
                  Our robust distribution network ensures that high-quality therapeutic formulations remain reliably accessible to clinicians, institutions, and pharmacies nationwide.
                </p>
              </div>

              <div style={{ marginTop: '2.25rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn btn-primary"
                >
                  <span>Read Our Corporate Journey</span>
                  <ArrowRight size={16} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.95rem' }}>Pan-India Supply Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. THERAPEUTIC PORTFOLIO OVERVIEW
          Interactive 8-specialty selector, segment cards, and dosage forms showcase.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Pill size={14} /> Medical Specialties & Formulations
            </span>
            <h2 className="section-title">Supporting Diverse Healthcare Needs</h2>
            <p className="section-description">
              Our pharmaceutical portfolio covers eight therapeutic areas, delivering quality medications tailored to diverse patient demographics across India.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
          >
            {/* Left Interactive Category Selector */}
            <div className="reveal-left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>
                  Select Therapeutic Specialty
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
                  {therapeuticSegments.map((seg) => (
                    <button
                      key={seg.id}
                      type="button"
                      onClick={() => setActiveCategory(seg.id)}
                      className={`therapeutic-tab-btn ${activeCategory === seg.id ? 'is-active' : ''}`}
                      aria-pressed={activeCategory === seg.id}
                      style={{ padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
                    >
                      <span>{seg.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      color: currentSegment.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <CurrentSegmentIcon size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                      Active Segment Profile
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                      {currentSegment.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '1.025rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  {currentSegment.description}
                </p>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {currentSegment.detail}
                </p>

                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Explore {currentSegment.title} Formulations</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Image Group: Dosage Forms Showcase */}
            <div className="reveal-right">
              <div
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  marginBottom: '1.5rem',
                }}
              >
                <img
                  src={PAGE_HERO_IMAGES.products.image}
                  alt={PAGE_HERO_IMAGES.products.alt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={380}
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>

              {/* Staggered Capability Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { label: 'Solid Oral Tablets', detail: 'Precision immediate & sustained release coated/uncoated tablets' },
                  { label: 'Hard Gelatin Capsules', detail: 'Multi-particulate micro-pellet encapsulation & precision dosing' },
                  { label: 'Sterile Formulations', detail: 'Aseptically filled liquids and terminal sterilization lines' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`delay-${(idx + 1) * 100}`}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      alignItems: 'flex-start',
                      padding: '0.85rem 1.15rem',
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.925rem' }}>{item.label}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8-Card Grid Layout */}
          <div className="therapeutic-grid reveal-stagger" style={{ marginBottom: '4rem' }}>
            {therapeuticSegments.map((seg) => {
              const IconComp = seg.icon;
              return (
                <div
                  key={seg.id}
                  className="therapeutic-card"
                  role="button"
                  tabIndex={0}
                  aria-label={`View formulations for ${seg.title}`}
                  onClick={() => onNavigate('products')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate('products');
                    }
                  }}
                >
                  <span className="card-animated-underline" aria-hidden="true" />
                  <div>
                    <div
                      className="therapeutic-card-icon"
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
                    <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                      {seg.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                      {seg.description}
                    </p>
                  </div>

                  <div
                    className="therapeutic-card-action"
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

          {/* Authentic Finished Dosage Visual Showcase */}
          <div
            className="reveal-up"
            style={{
              marginBottom: '3rem',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-border)',
              maxHeight: '340px',
              position: 'relative',
            }}
          >
            <img
              src="/assets/images/products/dosage-forms.webp"
              alt="Salas Pharma finished oral dosage forms, blister packaging and capsules"
              loading="lazy"
              decoding="async"
              width={1200}
              height={340}
              style={{ width: '100%', height: '340px', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                insetInline: 0,
                padding: '1.25rem 2rem',
                background: 'linear-gradient(to top, rgba(7, 29, 54, 0.92) 0%, rgba(7, 29, 54, 0) 100%)',
                color: '#FFFFFF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#38BDF8' }}>
                  Finished Formulations
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0 0', color: '#FFFFFF' }}>
                  Multi-Dose Tablets, Precision Micro-Pellet Capsules & Stable Suspensions
                </h3>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#E2E8F0', backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '0.35rem 0.85rem', borderRadius: '9999px', backdropFilter: 'blur(4px)' }}>
                Schedule M & cGMP Compliant
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Explore Complete Product Portfolio</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. MANUFACTURING AND QUALITY OVERVIEW
          Cleanroom architecture, rotary compression, Quality Seal, & batch traceability.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Narrative & Quality Seal */}
            <div className="reveal-left">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <QualitySeal size={220} />
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem', textAlign: 'center' }}>
                Quality Assured at Every Phase
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.75rem', textAlign: 'center' }}>
                Quality assurance at Salas Pharma is an active operational discipline embedded within every phase of raw material qualification, blending, compression, and final release.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  { title: 'Raw Material Testing', desc: 'Pre-production identification and assay testing' },
                  { title: 'In-Process Checks', desc: 'Hardness, friability, and dissolution profiling' },
                  { title: 'Batch Traceability', desc: 'Complete batch manufacturing records for every lot' },
                  { title: 'Stability Testing', desc: 'Climate-controlled multi-zone shelf-life validation' }
                ].map((item, idx) => (
                  <div key={idx} style={{ padding: '0.85rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 0.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.785rem', color: 'var(--color-text-muted)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('manufacturing')}
                  className="btn btn-primary"
                >
                  <span>View Manufacturing Standards</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Visual Cards */}
            <div className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* Visual Card 1: Compression Machinery */}
                <div
                  className="img-zoom-wrapper delay-100"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--color-border)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={PAGE_HERO_IMAGES.manufacturing.image}
                    alt={PAGE_HERO_IMAGES.manufacturing.alt}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={260}
                    style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      insetInline: 0,
                      padding: '0.85rem 1.25rem',
                      background: 'linear-gradient(to top, rgba(7, 29, 54, 0.92) 0%, rgba(7, 29, 54, 0) 100%)',
                      color: '#FFFFFF',
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      Rotary Tablet Compression & High-Speed Tooling
                    </span>
                  </div>
                </div>

                {/* Visual Card 2: Cleanroom Architecture */}
                <div
                  className="img-zoom-wrapper delay-200"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--color-border)',
                    position: 'relative',
                  }}
                >
                  <img
                    src={MEDIA_CONFIG.manufacturing.cleanroomImage}
                    alt="Salas Pharma sterile bioprocess formulation vessels and AHU cleanrooms"
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={260}
                    style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      insetInline: 0,
                      padding: '0.85rem 1.25rem',
                      background: 'linear-gradient(to top, rgba(7, 29, 54, 0.92) 0%, rgba(7, 29, 54, 0) 100%)',
                      color: '#FFFFFF',
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      Positive-Pressure HEPA Cleanroom Suites & Bioprocess Vessels
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. LABORATORY AND SCIENTIFIC CAPABILITIES
          HPLC purity, active dissolution kinetics, and continuous stability controls.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Microscope size={14} /> Precision Laboratory Science
            </span>
            <h2 className="section-title">Rigorous Testing & Analytical Controls</h2>
            <p className="section-description">
              Our laboratories are equipped with analytical testing instrumentation to verify active ingredient purity, monitor batch dissolution profiles, and validate product safety.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Laboratory Video & Badge */}
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
                  src={VIDEO_ASSETS.laboratoryHero.video}
                  poster={VIDEO_ASSETS.laboratoryHero.poster}
                  playbackRate={VIDEO_ASSETS.laboratoryHero.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  preload="none"
                  priority={false}
                  ariaLabel={VIDEO_ASSETS.laboratoryHero.alt}
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginTop: '-1.5rem',
                  marginLeft: '1.5rem',
                  marginRight: '1.5rem',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <FlaskConical size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  Assay Potency & Dissolution Kinetics: Continuous chromatographic validation across batches
                </span>
              </div>
            </div>

            {/* Analytical Laboratory Pillars */}
            <div className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    title: 'Active Dissolution & In-Vitro Kinetics',
                    desc: 'Automated dissolution baths monitoring active ingredient release rate against pharmacopeial specifications.',
                    icon: FlaskConical
                  },
                  {
                    title: 'Analytical Chemistry & HPLC Characterization',
                    desc: 'Systematic chromatographic quantification confirming assay potency, chemical purity, and degradation thresholds.',
                    icon: Microscope
                  },
                  {
                    title: 'Microbial & Environmental Monitoring',
                    desc: 'Regular bioburden evaluation and sterile cleanroom air sampling ensuring non-pyrogenic manufacturing.',
                    icon: ShieldCheck
                  },
                  {
                    title: 'Stability & Shelf-Life Assessment',
                    desc: 'Climate-controlled stability chambers testing formulation resilience across varying Indian temperature and humidity zones.',
                    icon: FileCheck
                  }
                ].map((labPillar, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1.15rem',
                      padding: '1.15rem 1.25rem',
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <labPillar.icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--color-navy)' }}>
                        {labPillar.title}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.55 }}>
                        {labPillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('laboratories')}
                  className="btn btn-primary"
                >
                  <span>Explore Laboratory Capabilities</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. MILESTONES IN PHARMACEUTICAL EXCELLENCE
          Verified corporate milestones tracing our journey from 2009 to Present.
          ==================================================================== */}
      <CompanyTimeline />

      {/* ====================================================================
          6. CLOSING CONTACT & INQUIRY SECTION
          High-end editorial stage connecting visitors with Salas corporate leadership.
          ==================================================================== */}
      <SignatureClosingStatement
        headline1="Every Step."
        headline2="A Commitment to Better Healthcare."
        subtext="Driven by pharmaceutical excellence, we manufacture and deliver high-quality finished dosage products for a healthier tomorrow. Connect with our corporate office or explore healthcare distribution opportunities nationwide."
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default HomePage;
