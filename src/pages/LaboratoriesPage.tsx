import React from 'react';
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  Search,
  Layers,
  FileCheck,
  Sparkles,
  ClipboardList,
  TestTube2
} from 'lucide-react';
import { VIDEO_ASSETS, MEDIA_CONFIG } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { ScientificParticles } from '../components/common/ScientificParticles';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LaboratoriesPageProps {
  onNavigate: (route: string) => void;
  isLoaderComplete?: boolean;
}

export const LaboratoriesPage: React.FC<LaboratoriesPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  const handleScrollToOverview = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('lab-overview');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      id: 'research-analysis',
      title: 'Laboratory Research & Analysis',
      icon: FlaskConical,
      description: 'Systematic pre-formulation study, active ingredient characterization, excipient compatibility evaluation, and analytical method verification.',
      details: ['Active pharmaceutical ingredient (API) assay', 'Excipient interaction studies', 'Physicochemical characterization']
    },
    {
      id: 'scientific-testing',
      title: 'Scientific Testing',
      icon: Microscope,
      description: 'Controlled in-vitro dissolution kinetics, physical parameter testing, disintegration evaluation, and particle size distribution analysis.',
      details: ['In-vitro dissolution profiles', 'Disintegration & friability testing', 'Potency & assay quantification']
    },
    {
      id: 'sample-evaluation',
      title: 'Pharmaceutical Sample Evaluation',
      icon: Layers,
      description: 'Comprehensive sample retention, finished dosage form evaluation, stability monitoring, and batch uniformity assessment across manufacturing cycles.',
      details: ['Batch-to-batch uniformity', 'Stability sample monitoring', 'Dosage integrity verification']
    },
    {
      id: 'quality-control-support',
      title: 'Quality Control Support',
      icon: FileCheck,
      description: 'Analytical documentation, standard operating procedure adherence, testing verification, and regulatory compliance data generation.',
      details: ['Testing record documentation', 'Instrument calibration oversight', 'Regulatory data compilation']
    }
  ];

  return (
    <div className="laboratories-page" style={{ backgroundColor: '#FFFFFF' }}>
      {/* ====================================================================
          SECTION A: LABORATORY HERO WITH Lab2.mp4
          ==================================================================== */}
      <section
        className="laboratory-hero-section"
        style={{
          position: 'relative',
          minHeight: 'clamp(680px, calc(100vh - var(--header-height)), 780px)',
          display: 'flex',
          alignItems: 'center',
          marginTop: 'var(--header-height)',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Full-width Dedicated Laboratory Hero Video Background (Lab2.mp4) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
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
            priority={true}
            ariaLabel={VIDEO_ASSETS.laboratoryHero.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 42%',
            }}
          />
          {/* Natural Footage Clarity: Left & Center (0-65%) remain completely clear and unwashed;
              Gradual right-side white fade begins at ~65% to guarantee crisp text legibility */}
          <div
            className="hero-gradient-mask"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0.35) 75%, rgba(255, 255, 255, 0.85) 88%, #FFFFFF 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Layered Scientific Molecular Particles (Subtle drifting nodes & connecting lines, pointer-events: none) */}
        <ScientificParticles
          particleCount={18}
          interactive={true}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content Overlay (Aligned to centered max-width container, stable stacking order) */}
        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '3.5rem 1.5rem', width: '100%' }}>
          <div
            className="hero-grid-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr minmax(320px, 680px)',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            {/* Left Spacer Column so the 4K dissolution beaker footage is clearly visible */}
            <div className="hero-video-window" style={{ minHeight: '1px' }} />

            {/* Right Content Panel sitting on clean white background */}
            <div className="hero-text-content" style={{ padding: '1rem 0', textAlign: 'left' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(20, 86, 160, 0.08)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  color: '#1456A0',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(20, 86, 160, 0.18)',
                }}
              >
                <Sparkles size={15} style={{ color: '#D32F2F' }} />
                <span>SCIENCE & PRECISION</span>
              </div>

              {/* Main Heading: "Advancing Science Through Precision" (Always 100% visible, robust typography) */}
              <h1
                className="hero-main-heading hero-animate-entrance"
                style={{
                  marginBottom: '1.25rem',
                  lineHeight: 1.15,
                  fontWeight: 900,
                }}
              >
                <span style={{ color: '#24364B' }}>Advancing Science </span>
                <br className="hero-heading-br" />
                <span style={{ color: '#24364B' }}>Through </span>
                <span style={{ color: '#1456A0', position: 'relative', display: 'inline-block' }}>
                  Precision
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: '#D32F2F',
                      borderRadius: '2px',
                    }}
                  />
                </span>
              </h1>

              <p
                style={{
                  color: '#34445A',
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  maxWidth: '600px',
                  fontWeight: 500,
                }}
              >
                Discover our commitment to laboratory research, analytical testing and quality-focused pharmaceutical processes.
              </p>

              <div
                className="reveal-left delay-300"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <a
                  href="#lab-overview"
                  onClick={handleScrollToOverview}
                  className="btn btn-primary"
                  style={{
                    fontSize: '1rem',
                    padding: '0.9rem 2rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                >
                  <span>Explore Our Laboratories</span>
                  <ArrowDown size={18} />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '1rem',
                    padding: '0.9rem 2rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <span>Connect With Our Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Ambient Scroll Indicator */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <div className="hero-scroll-pill">
            <div className="hero-scroll-dot" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ====================================================================
          SECTION B: LABORATORY OVERVIEW
          ==================================================================== */}
      <section
        id="lab-overview"
        className="section-spacing"
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--color-border)',
          scrollMarginTop: 'var(--header-height)'
        }}
      >
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
                <FlaskConical size={14} /> Laboratory Overview
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
                Science That Drives Progress
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  At Salas Pharmaceuticals, laboratory science serves as the foundational pillar for our pharmaceutical formulations, analytical evaluations, and finished dosage verification.
                </p>
                <p>
                  Our laboratory operations focus on systematic testing, active ingredient characterization, and rigorous evaluation of formulation kinetics. Through disciplined methodology, every workflow supports the delivery of safe, consistent, and dependable healthcare solutions across our therapeutic portfolio.
                </p>
                <p>
                  From pre-formulation screening to ongoing in-process control testing, our analytical processes operate under applicable Indian pharmacopeial requirements and quality standards, maintaining transparency and reproducible clinical efficacy.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>Analytical Rigor</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Assay accuracy, dissolution monitoring, and ingredient verification.</p>
                </div>

                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>Process Uniformity</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>Standardized testing ensuring batch-to-batch consistency.</p>
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
                  overflow: 'hidden',
                }}
              >
                <img
                  src={MEDIA_CONFIG.laboratory.environmentImage}
                  alt="Modern clean pharmaceutical laboratory testing environment"
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
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)',
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <TestTube2 size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, margin: 0, color: 'var(--color-navy)' }}>
                    Controlled Laboratory Environment
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Calibrated instruments, standardized glassware, and systematic sample management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION C: LABORATORY IMAGERY AND VIDEO (FEATURING Lab1.mp4)
          ==================================================================== */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: 'var(--color-bg-light)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Microscope size={14} /> Analytical Documentation & Testing
            </span>
            <h2 className="section-title">Precision Documentation in Laboratory Science</h2>
            <p className="section-description">
              Analytical testing requires absolute diligence in logging experimental data, sample verification, and parameter tracking across every development stage.
            </p>
          </div>

          {/* Premium Split Composition with Lab1.mp4 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
              marginBottom: '4.5rem',
            }}
          >
            {/* Left Visual: Lab1.mp4 editorial video */}
            <div className="reveal-left">
              <div
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
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

            {/* Right Explanatory Content */}
            <div className="reveal-right">
              <span className="section-eyebrow" style={{ color: 'var(--color-accent)' }}>
                <ClipboardList size={14} /> Operational Methodology
              </span>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginBottom: '1.25rem', fontWeight: 800 }}>
                Analytical Data Integrity & Sample Logging
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.025rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  Every sample entering the testing lifecycle is tracked with unique identification, analytical logs, and validated measurement protocols. Laboratory personnel record observation timestamps, dissolution profiles, and assay metrics with rigorous traceability.
                </p>
                <p>
                  By combining modern workstation analytics with classical wet-chemistry procedures, our teams maintain verified audit trails that support reproducible pharmaceutical formulations.
                </p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Real-time analytical data recording and sample batch serialization',
                  'Controlled cross-validation of physical testing parameters',
                  'Traceable documentation aligned with applicable regulatory guidelines',
                  'Continuous protocol calibration before every analytical cycle'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curated Laboratory Photo Gallery: Scientists, Instruments, Equipment */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Card 1: Analytical Chemistry & Chromatography */}
            <div className="pharma-card reveal-up">
              <div className="pharma-card-img-wrap">
                <img
                  src={MEDIA_CONFIG.laboratory.hplcImage || MEDIA_CONFIG.laboratory.analyticalImage}
                  alt="HPLC high performance liquid chromatography instrumentation in pharmaceutical laboratory"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={240}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Instrumentation</span>
                <h3 className="pharma-card-title">HPLC & Chromatography</h3>
                <p className="pharma-card-desc">
                  High-performance chromatography, spectrophotometric characterization, and quantitative evaluation of active pharmaceutical compounds.
                </p>
              </div>
            </div>

            {/* Card 2: Precision Microscope Inspection */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '100ms' }}>
              <div className="pharma-card-img-wrap">
                <img
                  src={MEDIA_CONFIG.laboratory.microscopeImage}
                  alt="Laboratory scientist examining pharmaceutical samples using a precision binocular microscope"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={240}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Microscopy</span>
                <h3 className="pharma-card-title">Microscopic Sample Inspection</h3>
                <p className="pharma-card-desc">
                  Particle sizing, crystal morphology analysis, and granular stability assessment utilizing precision binocular microscopy.
                </p>
              </div>
            </div>

            {/* Card 3: Quality-Driven Formulation Testing */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '200ms' }}>
              <div className="pharma-card-img-wrap">
                <img
                  src={MEDIA_CONFIG.quality.image}
                  alt="Laboratory glassware and pharmaceutical quality control testing"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={240}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Standards</span>
                <h3 className="pharma-card-title">Laboratory Glassware & Controls</h3>
                <p className="pharma-card-desc">
                  Calibrated volumetric glassware, standardized chemical reagents, and rigorous in-process controls supporting batch uniformity.
                </p>
              </div>
            </div>

            {/* Card 4: Laboratory Environment & AHU */}
            <div className="pharma-card reveal-up" style={{ animationDelay: '300ms' }}>
              <div className="pharma-card-img-wrap">
                <img
                  src={MEDIA_CONFIG.laboratory.environmentImage}
                  alt="Modern clean pharmaceutical laboratory testing environment"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={240}
                />
              </div>
              <div className="pharma-card-seam" />
              <div className="pharma-card-body">
                <span className="pharma-card-tag">Environment</span>
                <h3 className="pharma-card-title">Controlled Environment</h3>
                <p className="pharma-card-desc">
                  Calibrated humidity controls, laminar airflow workstations, and cleanroom air handling maintaining test environment stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION D: LABORATORY CAPABILITIES
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Search size={14} /> Core Competencies
            </span>
            <h2 className="section-title">Laboratory Capabilities</h2>
            <p className="section-description">
              Our laboratory infrastructure supports four comprehensive testing and analysis areas, delivering verified technical oversight across all stages of production.
            </p>
          </div>

          <div
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="interactive-card"
                  tabIndex={0}
                  role="region"
                  aria-label={cap.title}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.25rem 2rem',
                  }}
                >
                  <span className="card-animated-underline" aria-hidden="true" />
                  <div>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        boxShadow: 'var(--shadow-xs)',
                      }}
                    >
                      <IconComp size={26} />
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.85rem' }}>
                      {cap.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {cap.description}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {cap.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontStyle: 'italic', margin: 0 }}>
              * General laboratory capability overview. Specific analytical testing services are aligned with internal production and quality control requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION E: QUALITY AND PRECISION (QUALITY SEAL ROTATION)
          ==================================================================== */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: 'var(--color-bg-light)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Clockwise Rotating Quality Seal Graphic */}
            <div className="reveal-left" style={{ display: 'flex', justifyContent: 'center' }}>
              <QualitySeal size={250} />
            </div>

            {/* Right: Quality Principles */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <ShieldCheck size={14} /> Quality Assurance
              </span>
              <h2 className="section-title">Quality in Every Detail</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: '2rem' }}>
                <p>
                  At Salas Pharmaceuticals, precision is not merely an aspirational goal—it is a continuous operational practice woven into every analytical assay, sample evaluation, and formulation inspection.
                </p>
                <p>
                  Our testing methodologies prioritize repeatability, stringent protocol adherence, and transparent documentation, ensuring that every finished dosage form complies with established pharmaceutical quality specifications.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {[
                  {
                    title: 'Calibrated Instrumentation',
                    desc: 'Scheduled verification and standardized calibration schedules for analytical balances, pH meters, and testing apparatus.'
                  },
                  {
                    title: 'Systematic Method Validation',
                    desc: 'Methodical verification of testing precision, linearity, and reproducibility according to applicable standards.'
                  },
                  {
                    title: 'Sample Chain of Custody',
                    desc: 'Secure sample logging, controlled climate storage, and detailed traceability throughout the testing cycle.'
                  },
                  {
                    title: 'Batch Traceability Records',
                    desc: 'Complete audit records archived for every analytical batch, supporting transparent quality verification.'
                  }
                ].map((item, idx) => (
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
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
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
          SECTION F: CONTACT CTA
          ==================================================================== */}
      <section className="section-spacing" style={{ textAlign: 'center', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> Connect With Us
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.25rem', color: 'var(--color-navy)', fontWeight: 800 }}>
              Connect With SALAS Pharma
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Contact our team to learn more about our pharmaceutical operations and capabilities.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="btn btn-primary"
                style={{
                  padding: '0.9rem 2.25rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('products')}
                className="btn btn-secondary"
                style={{
                  padding: '0.9rem 2.25rem',
                  fontSize: '1rem',
                }}
              >
                <span>View Products</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
