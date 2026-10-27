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
  Users,
  Compass,
  Building2,
  Globe,
  Microscope,
  FileCheck
} from 'lucide-react';
import { MEDIA_CONFIG, VIDEO_ASSETS } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (route: string) => void;
  isLoaderComplete?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, isLoaderComplete = true }) => {
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

  const highlights = [
    {
      metric: (
        <span>
          Est. <AnimatedCounter target={2009} />
        </span>
      ),
      label: 'Corporate Heritage',
      description: 'Over 15 years of dedicated pharmaceutical service, compliance, and collaborative growth across India.',
      icon: Building2,
    },
    {
      metric: (
        <span>
          <AnimatedCounter target={8} /> Segments
        </span>
      ),
      label: 'Therapeutic Depth',
      description: 'Comprehensive product solutions addressing diverse chronic and acute medical requirements.',
      icon: Pill,
    },
    {
      metric: 'Multi-Dosage',
      label: 'Manufacturing Versatility',
      description: 'High-precision production capabilities for tablets, capsules, and injectables in cleanroom facilities.',
      icon: Factory,
    },
    {
      metric: 'Pan-India',
      label: 'Distribution Presence',
      description: 'Robust supply and marketing network ensuring accessible healthcare delivery nationwide.',
      icon: Globe,
    }
  ];

  const currentSegment = therapeuticSegments.find(s => s.id === activeCategory) || therapeuticSegments[0];
  const CurrentSegmentIcon = currentSegment.icon;

  return (
    <div className="homepage-wrapper">
      {/* ====================================================================
          SECTION 1: HERO — CINEMATIC PHARMACEUTICAL OPENING (SECTION 5)
          Bold editorial headline, compact eyebrow, differentiated CTAs,
          natural cleanroom manufacturing footage with angled red-accent seam.
          ==================================================================== */}
      <section
        className="hero-option5-section"
        aria-label="SALAS Pharmaceuticals Home Hero"
      >
        {/* RIGHT LAYER: Pharmaceutical Manufacturing Video */}
        <div className="hero-option5-video-layer">
          <BrandedVideo
            src={VIDEO_ASSETS.hero.video}
            poster={VIDEO_ASSETS.hero.poster}
            playbackRate={VIDEO_ASSETS.hero.playbackRate}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            priority={true}
            isReadyToPlay={isLoaderComplete}
            ariaLabel={VIDEO_ASSETS.hero.alt}
          />
          {/* Subtle localized boundary overlay (preserves natural video color & contrast) */}
          <div className="hero-option5-video-overlay" />
        </div>

        {/* LEFT LAYER: Deep Navy Scientific Panel Stage with Left-to-Right Reveal */}
        <div className="hero-option5-panel-stage">
          <div className="hero-option5-navy-panel">
            {/* Scientific Decorative Background: Thin bonds, connected nodes & molecular structures */}
            <div className="hero-option5-chemistry-bg" aria-hidden="true">
              <svg
                className="hero-option5-chemistry-art"
                viewBox="0 0 650 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bondGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.18" />
                  </linearGradient>
                  <linearGradient id="bondGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.14" />
                  </linearGradient>
                </defs>

                {/* Ambient Particle Nodes */}
                <circle cx="120" cy="180" r="2.5" fill="#38BDF8" opacity="0.45" />
                <circle cx="280" cy="120" r="2" fill="#60A5FA" opacity="0.40" />
                <circle cx="210" cy="680" r="2.5" fill="#38BDF8" opacity="0.35" />
                <circle cx="360" cy="740" r="2" fill="#60A5FA" opacity="0.40" />
                <circle cx="80" cy="420" r="1.5" fill="#38BDF8" opacity="0.30" />

                {/* Hexagonal Molecular Cluster (Upper Right / Angled Region) */}
                <g transform="translate(400, 130)">
                  <polygon
                    points="60,0 120,34.6 120,103.9 60,138.6 0,103.9 0,34.6"
                    stroke="url(#bondGrad1)"
                    strokeWidth="1.5"
                    fill="rgba(56, 189, 248, 0.04)"
                  />
                  <circle
                    cx="60"
                    cy="69.3"
                    r="28"
                    stroke="#38BDF8"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.25"
                  />
                  <circle cx="60" cy="0" r="3.5" fill="#38BDF8" opacity="0.6" />
                  <circle cx="120" cy="34.6" r="3.5" fill="#38BDF8" opacity="0.6" />
                  <circle cx="120" cy="103.9" r="3.5" fill="#38BDF8" opacity="0.6" />
                  <circle cx="60" cy="138.6" r="3.5" fill="#38BDF8" opacity="0.6" />
                  <circle cx="0" cy="103.9" r="3.5" fill="#38BDF8" opacity="0.6" />
                  <circle cx="0" cy="34.6" r="3.5" fill="#38BDF8" opacity="0.6" />

                  <polygon
                    points="120,34.6 180,0 240,34.6 240,103.9 180,138.6 120,103.9"
                    stroke="url(#bondGrad1)"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.65"
                  />
                  <circle cx="180" cy="0" r="3" fill="#60A5FA" opacity="0.5" />
                  <circle cx="240" cy="34.6" r="3" fill="#60A5FA" opacity="0.5" />
                  <circle cx="240" cy="103.9" r="3.5" fill="#60A5FA" opacity="0.5" />
                  <circle cx="180" cy="138.6" r="3" fill="#60A5FA" opacity="0.5" />

                  <line x1="60" y1="138.6" x2="60" y2="190" stroke="#38BDF8" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="60" cy="190" r="4" fill="#38BDF8" opacity="0.7" />
                  <line x1="60" y1="190" x2="18" y2="215" stroke="#38BDF8" strokeWidth="1.2" opacity="0.3" />
                  <circle cx="18" cy="215" r="3" fill="#60A5FA" opacity="0.5" />
                  <line x1="60" y1="190" x2="102" y2="215" stroke="#38BDF8" strokeWidth="1.2" opacity="0.3" />
                  <circle cx="102" cy="215" r="3" fill="#60A5FA" opacity="0.5" />
                </g>

                {/* Lower Region Subtle Cluster */}
                <g transform="translate(320, 520)">
                  <polygon
                    points="50,0 100,28.9 100,86.6 50,115.5 0,86.6 0,28.9"
                    stroke="url(#bondGrad2)"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.45"
                  />
                  <circle cx="50" cy="0" r="3" fill="#38BDF8" opacity="0.45" />
                  <circle cx="100" cy="28.9" r="3" fill="#38BDF8" opacity="0.45" />
                  <circle cx="100" cy="86.6" r="3" fill="#38BDF8" opacity="0.45" />
                  <circle cx="50" cy="115.5" r="3" fill="#38BDF8" opacity="0.45" />
                  <circle cx="0" cy="86.6" r="3" fill="#38BDF8" opacity="0.45" />
                  <circle cx="0" cy="28.9" r="3" fill="#38BDF8" opacity="0.45" />
                </g>
              </svg>
            </div>

            {/* Left Content Column */}
            <div className="hero-option5-content-inner">
              {/* Eyebrow Label */}
              <div className="hero-option5-badge">
                <ShieldCheck size={16} style={{ color: '#E5242A' }} />
                <span>Salas Pharmaceuticals Pvt. Ltd. · Est. 2009</span>
              </div>

              {/* Bold 3-line Editorial Headline */}
              <h1 className="hero-option5-heading">
                <span>Committed to Quality.</span>
                <span style={{ display: 'block' }}>Focused on Healthcare.</span>
                <span className="heading-salas-brand">
                  SALAS Pharma
                  <span className="heading-salas-underline" />
                </span>
              </h1>

              {/* Concise, accurate company description */}
              <p className="hero-option5-description">
                An Indian pharmaceutical enterprise engaged in the manufacture and marketing of high-precision formulations, dedicated to quality compliance, scientific integrity, and accessible healthcare across India.
              </p>

              {/* Two Clearly Differentiated CTAs */}
              <div className="hero-option5-ctas">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="hero-option5-btn-primary"
                  aria-label="Explore our pharmaceutical products portfolio"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('manufacturing')}
                  className="hero-option5-btn-secondary"
                  aria-label="Learn about our manufacturing capabilities"
                >
                  <span>Manufacturing & Quality</span>
                </button>
              </div>
            </div>
          </div>

          {/* Crisp Angled Seam with Restrained Red Accent */}
          <svg
            className="hero-option5-seam-svg"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="salasSeamGlow" x1="0%" y1="0%" x2="0%" y2="1">
                <stop offset="0%" stopColor="#E5242A" stopOpacity="0" />
                <stop offset="12%" stopColor="#E5242A" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#E5242A" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#E5242A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#E5242A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="salasSeamCore" x1="0%" y1="0%" x2="0%" y2="1">
                <stop offset="0%" stopColor="#FF4D47" stopOpacity="0.3" />
                <stop offset="10%" stopColor="#E5242A" stopOpacity="1" />
                <stop offset="85%" stopColor="#E5242A" stopOpacity="1" />
                <stop offset="100%" stopColor="#C51D22" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <line
              x1="1000"
              y1="0"
              x2="850"
              y2="1000"
              stroke="url(#salasSeamGlow)"
              strokeWidth="7"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="1000"
              y1="0"
              x2="850"
              y2="1000"
              stroke="url(#salasSeamCore)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
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
          SECTION A: COMMITMENT (SECTION 6.A)
          Large editorial headline, white background, company motto,
          molecular linework and restrained entrance transition.
          ==================================================================== */}
      <section className="editorial-commitment-section" aria-label="Commitment to Healthcare">
        <div className="container">
          <div className="editorial-commitment-inner reveal-up">
            <div className="editorial-commitment-eyebrow">
              <ShieldCheck size={15} />
              <span>Our Operating Philosophy</span>
            </div>
            
            <h2 className="editorial-commitment-title">
              Committed to Quality. Focused on Healthcare.
            </h2>

            <div className="editorial-commitment-motto">
              “Success Lies in Commitment.”
            </div>

            <p className="editorial-commitment-lead">
              At Salas Pharmaceuticals, our commitment begins in the laboratory and extends through every stage of sterile manufacturing, quality compliance, and pan-India distribution. We build trust by delivering dependable medicine that supports clinicians and transforms patient lives.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="btn btn-primary"
              >
                <span>Read Our Corporate Journey</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('laboratories')}
                className="btn btn-secondary"
              >
                <span>Explore Laboratory Testing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION B: THE COMPANY (SECTION 6.B)
          Split layout, verified corporate heritage (Est. 2009), Sikkim facility
          imagery with coordinated reveal sequence.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
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
                <Compass size={14} /> Corporate Heritage
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Salas Pharmaceuticals Pvt. Ltd.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  Established in 2009, Salas Pharma has developed its presence in the pharmaceutical industry through service, collaborative partnerships, scientific innovation, and corporate responsibility.
                </p>
                <p>
                  With our corporate office located in Vadodara, Gujarat, and our dedicated manufacturing plant situated in Mamring, South Sikkim, we formulate and manufacture oral solid and liquid dosage forms adhering to applicable Indian regulatory standards.
                </p>
                <p>
                  Our extensive distribution network enables reliable product availability across institutions, pharmacies, and healthcare professionals throughout India.
                </p>
              </div>

              <div style={{ marginTop: '2.25rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn btn-primary"
                >
                  <span>Explore Company Profile</span>
                  <ArrowRight size={16} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.95rem' }}>Pan-India Supply Network</span>
                </div>
              </div>
            </div>

            {/* Right Facility Imagery */}
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
                  src={MEDIA_CONFIG.about.image}
                  alt={MEDIA_CONFIG.about.alt}
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
                    Modern formulation facility in Mamring, South Sikkim (PIN: 737132)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION C: THERAPEUTIC AREAS (SECTION 6.C)
          Interactive therapeutic area showcase with the 8 approved categories
          and card-level interactions linking to products.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Pill size={14} /> Medical Specialties
            </span>
            <h2 className="section-title">Supporting Diverse Healthcare Needs</h2>
            <p className="section-description">
              Our pharmaceutical portfolio covers eight therapeutic areas, delivering quality medications tailored to diverse patient demographics across India.
            </p>
          </div>

          {/* Interactive Category Selector (Section C Interactive Feature) */}
          <div className="therapeutic-interactive-container reveal-up">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                Select Therapeutic Area
              </span>
              {therapeuticSegments.map((seg) => (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => setActiveCategory(seg.id)}
                  className={`therapeutic-tab-btn ${activeCategory === seg.id ? 'is-active' : ''}`}
                  aria-pressed={activeCategory === seg.id}
                >
                  <span>{seg.title}</span>
                  <ArrowRight size={14} style={{ opacity: activeCategory === seg.id ? 1 : 0.4 }} />
                </button>
              ))}
            </div>

            <div className="therapeutic-active-panel">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
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
                    <CurrentSegmentIcon size={28} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                      Therapeutic Segment
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                      {currentSegment.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {currentSegment.description}
                </p>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {currentSegment.detail}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Approved Formulations in {currentSegment.title}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                >
                  <span>View Product Formulations</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* 8-Card Grid Layout */}
          <div className="therapeutic-grid reveal-stagger" style={{ marginTop: '3.5rem' }}>
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
        </div>
      </section>

      {/* ====================================================================
          SECTION D: PRODUCTS (SECTION 6.D)
          Dosage-form presentation with verified assets (salas3.mp4 encapsulation)
          and clean dosage categorization.
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
            {/* Left Encapsulation Video Showcase */}
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
                We produce a diverse portfolio of pharmaceutical products across multiple dosage forms and therapeutic segments, manufactured to meet rigorous quality, dissolution, and stability standards.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { label: 'Solid Oral Dosages: Precision coated and uncoated tablets', detail: 'Immediate and sustained release formulations' },
                  { label: 'Hard Gelatin Capsules: Filled under precise environmental parameters', detail: 'Micro-pellet technology for optimal disintegration and absorption' },
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
          SECTION E: LABORATORIES (SECTION 6.E)
          Cinematic laboratory introduction featuring Lab2.mp4, analytical
          testing imagery, and rigorous scientific testing narrative.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '3.5rem',
            }}
          >
            {/* Left 4K Laboratory Testing Video (Lab2.mp4) */}
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
                  src={VIDEO_ASSETS.laboratoryEditorial.video}
                  poster={VIDEO_ASSETS.laboratoryEditorial.poster}
                  playbackRate={VIDEO_ASSETS.laboratoryEditorial.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel={VIDEO_ASSETS.laboratoryEditorial.alt}
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Analytical Laboratory Pillars */}
            <div className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    title: 'Active Dissolution & In-Vitro Kinetics',
                    desc: 'Automated dissolution baths monitoring active ingredient release rate against pharmacopeial specifications.',
                    icon: FlaskConical
                  },
                  {
                    title: 'Analytical Chemistry & HPLC Characterization',
                    desc: 'Systematic chromatographic quantification to confirm assay potency, chemical purity, and degradation thresholds.',
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
                      gap: '1.25rem',
                      padding: '1.25rem',
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
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
                      <labPillar.icon size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        {labPillar.title}
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.6 }}>
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
          SECTION F: MANUFACTURING AND QUALITY (SECTION 6.F)
          Visual transition into manufacturing imagery, compression presses,
          and rotating Quality Seal.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Manufacturing Line Visual Card */}
            <div
              className="pharma-card reveal-up"
              onClick={() => onNavigate('manufacturing')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('manufacturing'); }}
            >
              <div className="pharma-card-img-wrap" style={{ height: '260px' }}>
                <img
                  src={MEDIA_CONFIG.manufacturing.image}
                  alt={MEDIA_CONFIG.manufacturing.alt}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={260}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-badge">Compression Technology</span>
                <h3 className="pharma-card-title">
                  Tablet & Capsule Production Lines
                </h3>
                <p className="pharma-card-text">
                  Equipped with stainless-steel rotary tablet presses and automated capsule filling machinery, maintaining strict environmental temperature and humidity control.
                </p>
                <div className="pharma-card-action">
                  <span>View Production Lines</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>

            {/* Sterile Cleanroom & Formulation Reactors Card */}
            <div
              className="pharma-card reveal-up delay-100"
              onClick={() => onNavigate('manufacturing')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('manufacturing'); }}
            >
              <div className="pharma-card-img-wrap" style={{ height: '260px' }}>
                <img
                  src={MEDIA_CONFIG.manufacturing.cleanroomImage}
                  alt="Salas Pharma sterile bioprocess formulation vessels and AHU cleanrooms"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={260}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-badge">Cleanroom Architecture</span>
                <h3 className="pharma-card-title">
                  Bioprocess Vessels & Air Handling
                </h3>
                <p className="pharma-card-text">
                  Multi-stage HEPA air filtration and positive-pressure cleanroom suites ensure uncompromised aseptic environments for sensitive active ingredients.
                </p>
                <div className="pharma-card-action">
                  <span>Explore Cleanroom Facility</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>

            {/* Packaging & Optical Inspection Card */}
            <div
              className="pharma-card reveal-up delay-200"
              onClick={() => onNavigate('manufacturing')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('manufacturing'); }}
            >
              <div className="pharma-card-img-wrap" style={{ height: '260px' }}>
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
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-badge">Packaging Integrity</span>
                <h3 className="pharma-card-title">
                  Automated Cleanroom Packaging
                </h3>
                <p className="pharma-card-text">
                  High-speed blister packaging lines coupled with inline optical inspection ensure intact product sealing, accurate batch coding, and tamper-evident cartoning.
                </p>
                <div className="pharma-card-action">
                  <span>Inspect Packaging Standards</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Quality Seal Feature Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Rotating Quality Seal */}
            <div className="reveal-left" style={{ display: 'flex', justifyContent: 'center' }}>
              <QualitySeal size={240} />
            </div>

            {/* Quality Commitment Text */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <ShieldCheck size={14} /> Strict Standards
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem' }}>
                Quality Assured at Every Phase
              </h3>
              <p style={{ fontSize: '1.025rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Quality assurance at Salas Pharma is an active operational discipline embedded within every phase of raw material qualification, blending, compression, and final release.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { title: 'Raw Material Testing', desc: 'Pre-production identification and assay testing' },
                  { title: 'In-Process Checks', desc: 'Hardness, friability, and dissolution profiling' },
                  { title: 'Batch Traceability', desc: 'Complete batch manufacturing records for every lot' },
                  { title: 'Stability Testing', desc: 'Climate-controlled multi-zone shelf-life validation' }
                ].map((item, idx) => (
                  <div key={idx} style={{ padding: '0.85rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 0.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
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
          SECTION G: R&D AND INNOVATION (SECTION 6.G)
          Formulation science, dissolution kinetics video (salas4.mp4),
          and analytical chromatography imagery.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
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
            {/* Left Dissolution Video Showcase (salas4.mp4) */}
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.025rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--color-navy)' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.55 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('research')}
                  className="btn btn-secondary"
                >
                  <span>Explore Formulation Science & R&D</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8: COMPANY HIGHLIGHTS (QUALITATIVE MILESTONES)
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
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
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
            }}
          >
            {highlights.map((h, idx) => {
              const IconComp = h.icon;
              return (
                <div
                  key={idx}
                  className="stat-card reveal-up"
                >
                  <div className="stat-card-icon-wrap">
                    <IconComp size={24} />
                  </div>
                  <div
                    style={{
                      fontSize: '2.1rem',
                      fontWeight: 800,
                      color: 'var(--color-navy)',
                      marginBottom: '0.35rem',
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
                      marginBottom: '0.85rem',
                    }}
                  >
                    {h.label}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                    {h.description}
                  </p>
                  <div className="stat-card-gradient-underline" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION H: CAREERS (SECTION 6.H)
          Preserve career and culture functionality with team imagery.
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              boxShadow: 'var(--shadow-md)',
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
              <div 
                className="pharma-card"
                onClick={() => onNavigate('careers')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('careers'); }}
              >
                <div className="pharma-card-img-wrap" style={{ height: '240px' }}>
                  <img
                    src={MEDIA_CONFIG.careers.image}
                    alt={MEDIA_CONFIG.careers.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={240}
                  />
                </div>
                <div className="pharma-card-seam" />
                <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                    {[
                      { title: 'Continuous Professional Learning', desc: 'Engage with updated GMP methodologies, analytical instrumentation, and industry practices.' },
                      { title: 'Collaborative Environment', desc: 'Work alongside experienced professionals in formulation, quality control, and distribution management.' },
                      { title: 'Purpose-Driven Work', desc: 'Contribute directly to expanding healthcare accessibility through dependable pharmaceutical products.' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '0.85rem 1.15rem',
                          backgroundColor: 'var(--color-bg-light)',
                          borderRadius: 'var(--radius-sm)',
                          borderLeft: '3px solid var(--color-primary)',
                        }}
                      >
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.15rem' }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.5 }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7 (PRIORITY FEATURE): SIGNATURE BOTTOM-OF-PAGE EXPERIENCE
          High-end editorial stage, bold memorable typography:
          "Better Healthcare. Built on Commitment."
          ==================================================================== */}
      <SignatureClosingStatement onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
