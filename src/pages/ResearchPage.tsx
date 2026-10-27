import React, { useState } from 'react';
import { FlaskConical, Microscope, Sparkles, CheckCircle2, ArrowRight, Atom } from 'lucide-react';
import { VIDEO_ASSETS, MEDIA_CONFIG, PAGE_HERO_IMAGES } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { MolecularBackground } from '../components/common/MolecularBackground';
import { ScrollWordReveal } from '../components/common/ScrollWordReveal';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ResearchPageProps {
  onNavigate: (route: string) => void;
}

interface FocusArea {
  id: string;
  title: string;
  tag: string;
  description: string;
  scientificDeliverable: string;
  technologies: string[];
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  useScrollReveal();
  const [activeFocusId, setActiveFocusId] = useState<string>('modified-release');

  const focusAreas: FocusArea[] = [
    {
      id: 'modified-release',
      title: 'Modified & Sustained Release Formulations',
      tag: 'Bioavailability & Kinetics',
      description: 'Engineering hydrophilic and hydrophobic polymeric matrix systems (HPMC, Ethylcellulose) to achieve controlled zero-order release profiles for once-daily antihypertensive and antidiabetic therapeutics.',
      scientificDeliverable: 'Eliminates peak-trough plasma drug spikes, enhances patient compliance, and minimizes gastrointestinal irritation.',
      technologies: ['Polymer matrix erosion control', 'Multi-layer bilayer tablet compression', 'In-vitro USP dissolution buffer modeling']
    },
    {
      id: 'taste-masking',
      title: 'Pediatric & Taste-Masking Technologies',
      tag: 'Patient Centricity',
      description: 'Micro-encapsulation of bitter active ingredients using pH-dependent cationic acrylic polymers, paired with homogeneous non-aqueous suspension carriers for pediatric and geriatric oral compliance.',
      scientificDeliverable: 'Neutralizes unpalatable API taste without impeding gastric release rate or bioavailability.',
      technologies: ['Fluidized bed Wurster spray coating', 'Ion-exchange resin complexation', 'Stabilized organoleptic flavor profiling']
    },
    {
      id: 'fixed-dose',
      title: 'Fixed-Dose Combinations (FDCs)',
      tag: 'Therapeutic Synergy',
      description: 'Formulating dual and triple active pharmaceuticals in single dosage units while preventing physical and chemical excipient incompatibility through barrier-coating and bilayer partition.',
      scientificDeliverable: 'Combines synergistic clinical modes of action (e.g. ARB + Diuretic or PPI + Prokinetic) in single, reliable tablets.',
      technologies: ['Physical segregation bilayer barrier', 'Micro-pellet capsule encapsulation', 'Differential dissolution rate tuning']
    },
    {
      id: 'climatic-stability',
      title: 'Zone IVb Climatic Stability Optimization',
      tag: 'Tropical Packaging & Potency',
      description: 'Designing high-barrier moisture protection systems and desiccated Alu-Alu cold-form blisters tested under ICH accelerated stability conditions (40°C ± 2°C / 75% RH ± 5% RH).',
      scientificDeliverable: 'Guarantees 24-to-36-month shelf-life potency across humid, tropical sub-continental conditions.',
      technologies: ['High-density cold-form aluminum foil', 'Dynamic vapor sorption (DVS) moisture profiling', 'Photostability exposure chambers']
    }
  ];

  const activeFocus = focusAreas.find(f => f.id === activeFocusId) || focusAreas[0];

  return (
    <div className="research-page" style={{ marginTop: 'var(--header-height)', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. EDITORIAL SCIENTIFIC HERO WITH STATIC HERO PHOTOGRAPHY */}
      <section className="page-hero-banner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-navy)', color: '#FFFFFF', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
        <img
          src={PAGE_HERO_IMAGES.research.image}
          alt={PAGE_HERO_IMAGES.research.alt}
          width={1920}
          height={1080}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(11, 37, 69, 0.95) 0%, rgba(11, 37, 69, 0.88) 45%, rgba(11, 37, 69, 0.4) 100%)',
            zIndex: 2,
          }}
        />
        {/* Restrained Molecular Network Graphic along edge */}
        <ScientificNetworkArtwork position="right" variant="combined" opacity={0.6} />
        <div className="container" style={{ position: 'relative', zIndex: 4, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-teal)' }}>
              <FlaskConical size={14} /> Pharmaceutical Science & Formulation
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18, fontWeight: 800 }}>
              Formulation Science. <br />
              <span style={{ color: '#38BDF8' }}>Predictable Release Kinetics.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
              Bridging laboratory pre-formulation screening with scalable cGMP manufacturing to deliver finished dosage pharmaceuticals with verified bio-absorption and shelf-life stability.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SCROLL-CONTROLLED STORYTELLING SECTION (PINNED ON DESKTOP) */}
      <ScrollWordReveal
        pinnedStorytelling={true}
        eyebrow="Formulation Discipline"
        text="A pharmaceutical molecule is only as effective as its delivery mechanism. Through systematic polymer selection, dissolution kinetics, and degradation pathway studies, our science team turns active chemical entities into stable, dependable finished medicines."
        highlightWords={['delivery', 'polymer', 'dissolution', 'kinetics', 'degradation', 'dependable', 'medicines']}
      />

      {/* 3. EDITORIAL R&D PRESENTATION */}
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
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img 
                  src={MEDIA_CONFIG.research.image} 
                  alt="High performance liquid chromatography HPLC system in Salas Pharma research lab" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={440}
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(7, 29, 54, 0.92), transparent)',
                  padding: '1.75rem 2rem',
                  color: '#FFFFFF',
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>
                    Analytical Characterization
                  </span>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '1rem', fontWeight: 600 }}>
                    HPLC Assay Validation & Quantitative Purity Evaluation
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <span className="section-eyebrow">
                <Microscope size={14} /> Formulation Science
              </span>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-navy)', fontSize: '2.4rem', fontWeight: 800 }}>
                Evidence-Based Drug Delivery
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
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCIENTIFIC FOCUS MATRIX */}
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        {/* Subtle Cyclopentane Molecular Linework Background */}
        <MolecularBackground variant="section" theme="light" opacity={0.35} position="split" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow">
              <Sparkles size={14} /> Core Formulation Disciplines
            </span>
            <h2 className="section-title">Key Formulation Programs</h2>
            <p className="section-description">
              Select a research area to inspect the formulation mechanics, analytical deliverables, and technological platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* Left: Interactive Tab Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {focusAreas.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFocusId(f.id)}
                  style={{
                    padding: '1.5rem 1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeFocusId === f.id ? 'var(--color-primary-blue)' : 'var(--color-border)',
                    backgroundColor: activeFocusId === f.id ? '#FFFFFF' : 'var(--color-bg-light)',
                    boxShadow: activeFocusId === f.id ? '0 10px 25px -5px rgba(20, 86, 160, 0.15)' : 'none',
                    transform: activeFocusId === f.id ? 'translateX(6px)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: activeFocusId === f.id ? 'var(--color-accent)' : 'var(--color-text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                    {f.tag}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--color-navy)', fontWeight: 700 }}>
                    {f.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Right: Dynamic Exploration Panel */}
            <div style={{ padding: '2.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Atom size={24} style={{ color: 'var(--color-primary-blue)' }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary-blue)' }}>
                  {activeFocus.tag}
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '1rem', fontWeight: 800 }}>
                {activeFocus.title}
              </h3>

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.75, fontSize: '1.025rem', marginBottom: '1.75rem' }}>
                {activeFocus.description}
              </p>

              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', display: 'block', marginBottom: '0.35rem' }}>
                  Scientific & Patient Deliverable:
                </span>
                <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.55 }}>
                  {activeFocus.scientificDeliverable}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                  Technical Platforms Employed:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {activeFocus.technologies.map((t, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DISSOLUTION KINETICS FOOTAGE SHOWCASE */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
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
              <span className="section-eyebrow">
                <Sparkles size={14} /> Release Profiles
              </span>
              <h2 className="section-title">In-Vitro Dissolution Kinetics & Release Science</h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Tablet disintegration and effervescence behavior determine the timing and consistency of active drug bioavailability. Through automated multi-vessel dissolution testing, our formulations are optimized to deliver dependable therapeutic curves.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  onClick={() => onNavigate('laboratories')} 
                  className="btn btn-primary"
                >
                  <span>Explore Testing Laboratories</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="reveal-right">
              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
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
                  ariaLabel="Salas Pharma laboratory tablet dissolution testing footage" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE CLOSING STATEMENT */}
      <SignatureClosingStatement onNavigate={onNavigate} />

    </div>
  );
};
