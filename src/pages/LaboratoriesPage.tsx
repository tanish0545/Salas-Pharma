import React, { useState } from 'react';
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
  Search,
  Layers,
  FileCheck,
  Sparkles,
  ClipboardList,
  TestTube2,
  Activity
} from 'lucide-react';
import { VIDEO_ASSETS, MEDIA_CONFIG, PAGE_HERO_IMAGES } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { MolecularBackground } from '../components/common/MolecularBackground';
import { ScrollWordReveal } from '../components/common/ScrollWordReveal';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface LaboratoriesPageProps {
  onNavigate: (route: string) => void;
  isLoaderComplete?: boolean;
}

export const LaboratoriesPage: React.FC<LaboratoriesPageProps> = ({ onNavigate }) => {
  useScrollReveal();
  const [activeHotspotId, setActiveHotspotId] = useState<string>('hplc');

  const handleScrollToOverview = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('lab-overview');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const labHotspots = [
    {
      id: 'hplc',
      name: 'High-Performance Liquid Chromatography (HPLC)',
      x: 34,
      y: 38,
      category: 'Analytical Assay',
      description: 'Ultra-sensitive chromatographic separation quantifying active pharmaceutical ingredient (API) potency and identifying organic impurities down to sub-microgram thresholds.',
      protocol: 'Validated under Indian Pharmacopoeia / USP monographs with system suitability checks before every batch assay.',
    },
    {
      id: 'dissolution',
      name: 'Automated USP Dissolution Station',
      x: 68,
      y: 44,
      category: 'Bioavailability Testing',
      description: 'Multi-vessel dissolution testing apparatus reproducing physiological human gastrointestinal fluids (pH 1.2 to 6.8) to verify sustained and enteric release profiles.',
      protocol: 'Measures multi-point release rates at 15, 30, 45, and 60 minutes with spectrophotometric quantitation.',
    },
    {
      id: 'cleanroom',
      name: 'Class 100 Laminar Airflow Hood',
      x: 82,
      y: 28,
      category: 'Microbiological Control',
      description: 'HEPA-filtered laminar horizontal airflow generating cleanroom conditions (ISO Class 5) for microbiological sterility assays and pyrogen-free sample handling.',
      protocol: 'Continuous particulate monitoring and scheduled agar plate exposure tests ensure zero biological contamination.',
    },
    {
      id: 'karl-fischer',
      name: 'Coulometric Karl Fischer Titration',
      x: 20,
      y: 68,
      category: 'Moisture Stability',
      description: 'High-precision reagent titration measuring trace residual water in moisture-sensitive beta-lactams, capsules, and effervescent tablet formulations.',
      protocol: 'Calculates moisture percentage to 0.01% precision to guarantee shelf-life stability in humid climatic zones (Zone IVb).',
    },
  ];

  const activeHotspot = labHotspots.find(h => h.id === activeHotspotId) || labHotspots[0];

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
          SECTION A: IMMERSIVE LABORATORY HERO
          ==================================================================== */}
      <section
        className="laboratory-hero-section"
        style={{
          position: 'relative',
          minHeight: 'clamp(740px, calc(100vh - var(--header-height)), 860px)',
          display: 'flex',
          alignItems: 'center',
          marginTop: 'var(--header-height)',
          overflow: 'hidden',
          backgroundColor: '#07182C',
        }}
      >
        {/* Full-width Dedicated Laboratory Hero Static Image Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src={PAGE_HERO_IMAGES.laboratories.image}
            alt={PAGE_HERO_IMAGES.laboratories.alt}
            width={1920}
            height={1080}
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 38%',
              display: 'block',
            }}
          />
          {/* Deep Navy Cinematic Gradient Overlay preserving rich laboratory visual depth */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(7, 24, 44, 0.95) 0%, rgba(7, 24, 44, 0.88) 45%, rgba(7, 24, 44, 0.55) 75%, rgba(7, 24, 44, 0.35) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Reusable Scientific Network Artwork (Bonds, Nodes & Fine Helices, pointer-events: none) */}
        <ScientificNetworkArtwork position="both" variant="combined" opacity={0.65} />

        {/* Hero Content Overlay */}
        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: '960px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                color: '#7DD3FC',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                border: '1px solid rgba(56, 189, 248, 0.22)',
              }}
            >
              <Sparkles size={15} style={{ color: '#E5242A' }} />
              <span>SCIENCE & ANALYTICAL PRECISION</span>
            </div>

            {/* Bold Heading with Highlighted Words in SALAS Blue */}
            <h1
              className="hero-main-heading"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
                lineHeight: 1.15,
                fontWeight: 900,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
              }}
            >
              Advancing Science <br />
              Through <span style={{ color: '#38BDF8', position: 'relative', display: 'inline-block' }}>Precision & Rigor</span>
            </h1>

            <p
              style={{
                color: '#CBD5E1',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '720px',
                fontWeight: 400,
              }}
            >
              Dedicated analytical testing and quality control laboratories in Sikkim operating under Schedule M cGMP discipline, conducting HPLC assays, in-vitro dissolution kinetics, and continuous stability validation.
            </p>

            {/* Two Clear Calls to Action */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem',
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
                <span>Explore Laboratory Capabilities</span>
                <ArrowDown size={18} />
              </a>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="btn btn-secondary"
                style={{
                  fontSize: '1rem',
                  padding: '0.9rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                }}
              >
                <span>Connect With Quality Team</span>
              </button>
            </div>

            {/* Row of Four Compact Capability Highlights */}
            <div className="lab-hero-highlights">
              <div className="lab-hero-highlight-card">
                <div className="lab-hero-highlight-icon">
                  <FlaskConical size={20} />
                </div>
                <h4 className="lab-hero-highlight-title">Analytical HPLC Assay</h4>
                <p className="lab-hero-highlight-desc">Chromatographic purity testing & active constituent assay</p>
              </div>

              <div className="lab-hero-highlight-card">
                <div className="lab-hero-highlight-icon">
                  <Activity size={20} />
                </div>
                <h4 className="lab-hero-highlight-title">Dissolution Kinetics</h4>
                <p className="lab-hero-highlight-desc">Pharmacopeial release rate profiling & in-vitro absorption</p>
              </div>

              <div className="lab-hero-highlight-card">
                <div className="lab-hero-highlight-icon">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="lab-hero-highlight-title">Dosage Form Integrity</h4>
                <p className="lab-hero-highlight-desc">Batch uniformity, friability, hardness & disintegration</p>
              </div>

              <div className="lab-hero-highlight-card">
                <div className="lab-hero-highlight-icon">
                  <Layers size={20} />
                </div>
                <h4 className="lab-hero-highlight-title">Stability & Climatic Control</h4>
                <p className="lab-hero-highlight-desc">Zone IVb sample retention & accelerated shelf-life studies</p>
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
          SEPARATE METRICS STRIP: VERIFIED LABORATORY FIGURES
          ==================================================================== */}
      <section className="lab-metrics-strip" aria-label="Laboratory Quality Standards & Verified Metrics">
        <div className="container">
          <div className="lab-metrics-grid">
            <div className="lab-metric-item">
              <span className="lab-metric-val">Schedule M</span>
              <span className="lab-metric-label">cGMP Facility Standards</span>
            </div>
            <div className="lab-metric-item">
              <span className="lab-metric-val">100% In-Process</span>
              <span className="lab-metric-label">Pre-Release Batch Testing</span>
            </div>
            <div className="lab-metric-item">
              <span className="lab-metric-val">Zone IVb</span>
              <span className="lab-metric-label">High-Humidity Stability Protocols</span>
            </div>
            <div className="lab-metric-item">
              <span className="lab-metric-val">ISO Class 5</span>
              <span className="lab-metric-label">Laminar Airflow Clean Sampling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. DEDICATED SCROLL-CONTROLLED STORYTELLING SECTION (PINNED ON DESKTOP)
          ==================================================================== */}
      <ScrollWordReveal
        pinnedStorytelling={true}
        eyebrow="Analytical Discipline"
        text="Pharmaceutical quality is established before any batch enters production. In our Sikkim laboratories, every chemical compound is scrutinized with chromatographic precision, dissolution kinetics, and continuous stability tracking to ensure uncompromised therapeutic safety."
        highlightWords={['quality', 'Sikkim', 'chromatographic', 'dissolution', 'stability', 'safety']}
      />

      {/* ====================================================================
          INTERACTIVE ANALYTICAL HOTSPOT STATION
          ==================================================================== */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow">
              <Microscope size={14} /> Interactive Laboratory Tour
            </span>
            <h2 className="section-title">Explore Our Analytical Stations</h2>
            <p className="section-description">
              Select any highlighted focal point below to inspect the instrumentation, validation standards, and testing protocols active inside our testing suites.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Visual Hotspot Canvas */}
            <div className="lab-hotspot-container">
              <div className="lab-hotspot-image-wrapper">
                <img
                  src={MEDIA_CONFIG.laboratory.environmentImage}
                  alt="Salas Pharma analytical testing laboratory"
                  className="lab-hotspot-image"
                  loading="lazy"
                  decoding="async"
                />

                {/* Hotspot Pins */}
                {labHotspots.map((pin) => (
                  <button
                    key={pin.id}
                    type="button"
                    className={`lab-hotspot-pin ${activeHotspotId === pin.id ? 'is-active' : ''}`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    onClick={() => setActiveHotspotId(pin.id)}
                    aria-label={`Inspect ${pin.name}`}
                  >
                    <div className="lab-hotspot-pulse-ring" aria-hidden="true" />
                    <div className="lab-hotspot-pin-core" />
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Inspection Card for Selected Hotspot */}
            <div style={{ padding: '2rem 2.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.3rem 0.75rem', borderRadius: '100px', backgroundColor: 'rgba(20, 86, 160, 0.1)', color: 'var(--color-primary-blue)' }}>
                  {activeHotspot.category}
                </span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                  Active Station
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.3 }}>
                {activeHotspot.name}
              </h3>

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
                {activeHotspot.description}
              </p>

              <div style={{ padding: '1.15rem 1.25rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-primary-blue)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-navy)' }}>
                    Validation Protocol:
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {activeHotspot.protocol}
                </p>
              </div>

              {/* Selector Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {labHotspots.map((pin) => (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={() => setActiveHotspotId(pin.id)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: activeHotspotId === pin.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
                      backgroundColor: activeHotspotId === pin.id ? 'var(--color-primary-blue)' : '#FFFFFF',
                      color: activeHotspotId === pin.id ? '#FFFFFF' : 'var(--color-navy)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {pin.id === 'hplc' ? 'HPLC' : pin.id === 'dissolution' ? 'Dissolution' : pin.id === 'cleanroom' ? 'Cleanroom Hood' : 'Karl Fischer'}
                  </button>
                ))}
              </div>
            </div>

          </div>
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
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
        {/* Subtle Cyclopentane Molecular Linework Background */}
        <MolecularBackground variant="section" theme="light" opacity={0.4} position="split" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
          SECTION F: SIGNATURE CLOSING STATEMENT
          ==================================================================== */}
      <SignatureClosingStatement onNavigate={onNavigate} />
    </div>
  );
};
