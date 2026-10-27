import React, { useState } from 'react';
import { Factory, ShieldCheck, MapPin, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { VIDEO_ASSETS, MEDIA_CONFIG, PAGE_HERO_IMAGES } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { QualitySeal } from '../components/common/QualitySeal';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { MolecularBackground } from '../components/common/MolecularBackground';
import { ScrollWordReveal } from '../components/common/ScrollWordReveal';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ManufacturingPageProps {
  onNavigate: (route: string) => void;
}

interface ProcessStage {
  id: number;
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specifications: string[];
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate }) => {
  useScrollReveal();
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [videoFeed, setVideoFeed] = useState<'packaging' | 'cleanroom' | 'terminal'>('packaging');

  const currentManufacturingVideo = videoFeed === 'packaging'
    ? VIDEO_ASSETS.manufacturing
    : videoFeed === 'cleanroom'
      ? VIDEO_ASSETS.cleanroomReactors
      : VIDEO_ASSETS.digitalTerminal;

  const processStages: ProcessStage[] = [
    {
      id: 1,
      stageNumber: '01',
      title: 'Raw Material Testing & Dispensing',
      subtitle: 'Quarantine & Analytical Verification',
      description: 'Incoming Active Pharmaceutical Ingredients (APIs) and excipients are logged into quarantine bays. Each container undergoes chemical identity testing and microbiological assay before dispensing under laminar downflow sampling booths.',
      image: MEDIA_CONFIG.quality.image,
      specifications: [
        '100% Raw material container identification testing',
        'Positive-pressure sampling booth with HEPA terminal filters',
        'Calibrated micro-balances with real-time audit logging'
      ]
    },
    {
      id: 2,
      stageNumber: '02',
      title: 'Cleanroom Granulation & Drying',
      subtitle: 'Homogeneous Mass Formulation',
      description: 'High-shear rapid mixer granulators (RMG) blend the active components with binding excipients, followed by fluid bed processor (FBP) drying to reach precise loss-on-drying (LOD) moisture limits.',
      image: MEDIA_CONFIG.manufacturing.cleanroomImage,
      specifications: [
        'Class D / ISO Class 8 cleanroom HVAC conditions',
        'Automated fluid-bed drying with digital temperature profiles',
        'Vibratory sifting and dry milling for uniform particle distribution'
      ]
    },
    {
      id: 3,
      stageNumber: '03',
      title: 'Rotary Tablet Compression & Coating',
      subtitle: 'Mechanical Shaping & Functional Release',
      description: 'Granules feed into multi-station rotary tablet presses with computerized weight regulation. Tablets are checked for weight variation, thickness, hardness, and friability (< 1%), then coated with aqueous enteric or film polymers.',
      image: MEDIA_CONFIG.manufacturing.image,
      specifications: [
        'High-speed rotary presses with automated rejection gates',
        'Perforated coating pans with automated spray rate regulation',
        'Routine in-process hardness and disintegration testing'
      ]
    },
    {
      id: 4,
      stageNumber: '04',
      title: 'Automated Blister Packaging & Dispatch',
      subtitle: 'Hermetic Sealing & Inspection',
      description: 'Finished solid orals move to high-speed blister packing machines producing cold-formed Alu-Alu or thermo-formed PVC/PVdC strips. Inline optical cameras verify tablet presence, foil seal integrity, and batch code printing.',
      image: MEDIA_CONFIG.packaging.image,
      specifications: [
        'High-barrier Alu-Alu forming protecting against humidity',
        'Automated 100% optical inspection for missing or chipped units',
        'Thermal inkjet serialization and tamper-evident carton sealing'
      ]
    }
  ];

  const activeStage = processStages.find(s => s.id === activeStageId) || processStages[0];

  return (
    <div className="manufacturing-page" style={{ marginTop: 'var(--header-height)', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. EDITORIAL PAGE HERO WITH STATIC HERO PHOTOGRAPHY */}
      <section className="page-hero-banner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-navy)', color: '#FFFFFF', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
        <img
          src={PAGE_HERO_IMAGES.manufacturing.image}
          alt={PAGE_HERO_IMAGES.manufacturing.alt}
          width={1920}
          height={1080}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
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
        <ScientificNetworkArtwork position="right" variant="combined" opacity={0.5} />
        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--color-teal)' }}>
              <Factory size={14} /> Production Infrastructure
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18, fontWeight: 800 }}>
              Engineering Precision. <br />
              <span style={{ color: '#38BDF8' }}>Manufacturing Excellence.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
              Operating dedicated pharmaceutical manufacturing facilities in South Sikkim, engineered for solid orals, cleanroom processing, and automated packaging under strict Schedule M cGMP controls.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SCROLL-CONTROLLED STORYTELLING SECTION (PINNED ON DESKTOP) */}
      <ScrollWordReveal
        pinnedStorytelling={true}
        eyebrow="cGMP Operational Integrity"
        text="Manufacturing integrity requires absolute repeatability. In our Sikkim production suites, environmental temperature, relative humidity, and air pressure differentials are monitored continuously, ensuring that every tablet and capsule meets uncompromised pharmacopeial criteria."
        highlightWords={['repeatability', 'Sikkim', 'temperature', 'humidity', 'uncompromised', 'pharmacopeial']}
      />

      {/* 3. SOUTH SIKKIM FACILITY SPOTLIGHT */}
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
              <span className="section-eyebrow">
                <MapPin size={14} /> Strategic Manufacturing Node
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy)', marginBottom: '1.5rem', fontWeight: 800 }}>
                South Sikkim Production Facility
              </h2>
              
              <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.75rem', padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <MapPin size={22} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-navy)', fontWeight: 700 }}>
                    Salas Pharmaceuticals Pvt. Ltd.
                  </h4>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                    Khatian No. 14, Plot Nos. 3 & 4, Village Kharpani, Mamring, South Sikkim, Sikkim – 737132, India
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Nestled in the temperate foothills of South Sikkim, our plant benefits from natural environmental purity, supplemented by dedicated positive-pressure HVAC air handling units (AHU) with multi-stage HEPA filtration to maintain continuous cleanroom conditions.
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
                  <span>View Product Formulations</span>
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
                  position: 'relative',
                }}
              >
                <img 
                  src={MEDIA_CONFIG.about.image} 
                  alt="Salas Pharmaceuticals manufacturing plant in South Sikkim valley" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={440}
                  style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
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
                    Mamring, South Sikkim
                  </span>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '1rem', fontWeight: 600 }}>
                    Dedicated Cleanrooms & Automated Dosage Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-STAGE INTERACTIVE MANUFACTURING PROCESS JOURNEY */}
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        {/* Subtle Cyclopentane Molecular Linework Background */}
        <MolecularBackground variant="section" theme="light" opacity={0.35} position="split" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span className="section-eyebrow">
              <Cpu size={14} /> Step-by-Step Flow
            </span>
            <h2 className="section-title">The 4-Stage Manufacturing Journey</h2>
            <p className="section-description">
              Follow our sequential production discipline from raw chemical verification to finished hermetic blister dispatch.
            </p>
          </div>

          <div className="manufacturing-journey-grid">
            
            {/* Left: Interactive Stepper */}
            <div className="journey-stepper-nav">
              {processStages.map((stg) => (
                <div
                  key={stg.id}
                  className={`journey-step-btn ${activeStageId === stg.id ? 'is-active' : ''}`}
                  onClick={() => setActiveStageId(stg.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveStageId(stg.id);
                    }
                  }}
                  aria-label={`Select stage ${stg.stageNumber}: ${stg.title}`}
                >
                  <div className="journey-step-num">{stg.stageNumber}</div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', display: 'block', marginBottom: '0.2rem' }}>
                      {stg.subtitle}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: '0 0 0.4rem 0', fontWeight: 700 }}>
                      {stg.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.55 }}>
                      {stg.description.slice(0, 110)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky Visual Showcase */}
            <div className="journey-visual-panel">
              <img
                src={activeStage.image}
                alt={activeStage.title}
                className="journey-visual-img"
                loading="lazy"
                decoding="async"
              />
              <div className="journey-visual-meta">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary-blue)' }}>
                    Stage {activeStage.stageNumber} Specifications
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)' }}>
                    {activeStage.subtitle}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '0.85rem', fontWeight: 700 }}>
                  {activeStage.title}
                </h3>

                <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {activeStage.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeStage.specifications.map((spec, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600 }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRODUCTION FOOTAGE SHOWCASE */}
      <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span className="section-eyebrow">
                <Factory size={14} /> Continuous Automation
              </span>
              <h2 className="section-title">Automated Conveyor & Packaging Lines</h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Our automated filling, blistering, and cartoning lines ensure high-throughput processing with minimal manual intervention. Calibrated sensors continuously monitor each unit to guarantee seal integrity and code legibility.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Automated de-dusting and metal detection on all tablet lines',
                  'Inline optical camera inspection detecting chipped tablets or empty pockets',
                  'Laser/thermal inkjet batch coding with non-smear pharmaceutical ink',
                  'Dedicated validation records generated per manufacturing lot'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              {/* Interactive Video Feed Selector Tabs */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  marginBottom: '1rem', 
                  flexWrap: 'wrap',
                  backgroundColor: 'var(--color-bg-light)',
                  padding: '0.4rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}
                role="tablist"
                aria-label="Manufacturing footage feeds"
              >
                {[
                  { id: 'packaging', label: 'Packaging Line', desc: 'Conveyor & Vision Sensors' },
                  { id: 'cleanroom', label: 'Cleanroom Bioprocess', desc: 'Formulation Reactors' },
                  { id: 'terminal', label: 'SCADA Terminal', desc: 'Process Control' },
                ].map((feed) => (
                  <button
                    key={feed.id}
                    type="button"
                    role="tab"
                    aria-selected={videoFeed === feed.id}
                    onClick={() => setVideoFeed(feed.id as 'packaging' | 'cleanroom' | 'terminal')}
                    style={{
                      flex: '1 1 auto',
                      padding: '0.5rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      border: 'none',
                      backgroundColor: videoFeed === feed.id ? 'var(--color-primary-blue)' : 'transparent',
                      color: videoFeed === feed.id ? '#FFFFFF' : 'var(--color-navy)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                      boxShadow: videoFeed === feed.id ? 'var(--shadow-sm)' : 'none',
                    }}
                  >
                    {feed.label}
                  </button>
                ))}
              </div>

              <div 
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
                  position: 'relative',
                }}
              >
                <BrandedVideo
                  key={currentManufacturingVideo.id}
                  src={currentManufacturingVideo.video}
                  poster={currentManufacturingVideo.poster}
                  playbackRate={currentManufacturingVideo.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel={currentManufacturingVideo.alt}
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>

              {/* Feed Metadata Badge */}
              <div
                style={{
                  marginTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 1rem',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8125rem',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>
                  {currentManufacturingVideo.title}
                </span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
                  Live Facility Archive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANALYTICAL ASSURANCE & QUALITY SEAL */}
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
                <ShieldCheck size={14} /> Quality Mandate
              </span>
              <h2 className="section-title">Analytical Assurance & Batch Release</h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Every manufactured lot is subjected to systematic chemical and physical assays. Our quality assurance framework mandates zero release of finished dosage units without full compliance with documented release specifications.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  'Chromatographic assay of Active Pharmaceutical Ingredients (APIs)',
                  'Microbiological limits and sterility monitoring for injectable forms',
                  'Dissolution profiles verified against Indian Pharmacopoeia standards',
                  'Accelerated and real-time stability chamber testing under Zone IVb conditions'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE CLOSING STATEMENT */}
      <SignatureClosingStatement onNavigate={onNavigate} />

    </div>
  );
};
