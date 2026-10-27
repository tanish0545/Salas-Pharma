import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, FlaskConical, Factory, HeartPulse, CheckCircle2 } from 'lucide-react';
import { MolecularBackground } from './MolecularBackground';

interface CinematicScrollStoryProps {
  onNavigate: (route: string) => void;
  className?: string;
}

interface StoryChapter {
  id: string;
  step: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  accent: string;
  routeTarget?: string;
  routeLabel?: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'research',
    step: '01',
    eyebrow: 'SCIENTIFIC FOUNDATION',
    heading: 'Formulation Science & Predictive Kinetics',
    subheading: 'Pre-Formulation Screening',
    description: 'Before any batch enters production, rigorous pre-formulation analysis, excipient compatibility testing, and in-vitro dissolution kinetics establish an uncompromising baseline of therapeutic stability.',
    image: '/assets/images/research/rnd-laboratory-research.webp',
    alt: 'Analytical pre-formulation and dissolution testing in laboratory',
    icon: FlaskConical,
    accent: '#38BDF8',
    routeTarget: 'research',
    routeLabel: 'Explore R&D Science',
  },
  {
    id: 'manufacturing',
    step: '02',
    eyebrow: 'FACILITY EXCELLENCE',
    heading: 'Cleanroom Discipline in South Sikkim',
    subheading: 'Schedule M cGMP Facilities',
    description: 'Our dedicated manufacturing facility in Mamring, South Sikkim, operates Class D/ISO 8 cleanroom HVAC environments, automated high-shear granulation, and multi-station rotary tablet presses with computerized weight regulation.',
    image: '/assets/images/manufacturing/manufacturing-cleanroom.webp',
    alt: 'Cleanroom manufacturing suites at Salas Pharma Sikkim plant',
    icon: Factory,
    accent: '#E5242A',
    routeTarget: 'manufacturing',
    routeLabel: 'Inspect Facility Specs',
  },
  {
    id: 'quality',
    step: '03',
    eyebrow: 'ANALYTICAL RIGOR',
    heading: 'Success Lies in Commitment',
    subheading: '100% Quality Assurance',
    description: 'Every formulation batch is subjected to multi-point HPLC assay verification, friability testing under 1%, and Zone IVb tropical stability chambers to ensure 24-to-36-month potency under humid sub-continental conditions.',
    image: '/assets/images/quality/quality-control.webp',
    alt: 'High-performance liquid chromatography assay and quality validation',
    icon: ShieldCheck,
    accent: '#38BDF8',
    routeTarget: 'laboratories',
    routeLabel: 'View Testing Standards',
  },
  {
    id: 'purpose',
    step: '04',
    eyebrow: 'THERAPEUTIC PURPOSE',
    heading: 'Delivering Trusted Healthcare Across India',
    subheading: 'Pan-India Distribution Reach',
    description: 'Since 2009, Salas Pharma has partnered with healthcare professionals, institutions, and pharmacies nationwide to deliver dependable finished dosage oral solids and liquids across 8 vital therapeutic specialties.',
    image: '/assets/images/corporate/about-company-facility.webp',
    alt: 'Salas Pharma corporate headquarters and healthcare distribution reach',
    icon: HeartPulse,
    accent: '#20AEEA',
    routeTarget: 'products',
    routeLabel: 'Explore Therapeutic Portfolio',
  },
];

export const CinematicScrollStory: React.FC<CinematicScrollStoryProps> = ({ onNavigate, className = '' }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768;
  });

  // Track responsive screen size
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Coordinated scroll progress mechanism
  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const onScroll = () => {
      ticking = false;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollDistance = rect.height - windowHeight;

      if (scrollDistance <= 0) return;

      // Current scrolled distance through track
      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / scrollDistance));

      // Map progress cleanly to 4 chapters
      const chapterIdx = Math.min(
        STORY_CHAPTERS.length - 1,
        Math.floor(progress * STORY_CHAPTERS.length)
      );

      setActiveChapter(prev => (prev !== chapterIdx ? chapterIdx : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Mobile: Clean, compact stacked layout
  if (isMobile) {
    return (
      <section 
        className={`cinematic-story-mobile-section ${className}`}
        aria-label="SALAS Pharma Integrated Journey"
        style={{
          position: 'relative',
          backgroundColor: '#071D36',
          color: '#FFFFFF',
          padding: '4rem 0',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, marginBottom: '2.5rem' }}>
          <span 
            className="section-eyebrow"
            style={{ 
              backgroundColor: 'rgba(56, 189, 248, 0.12)', 
              color: '#38BDF8', 
              borderColor: 'rgba(56, 189, 248, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
            OUR INTEGRATED CAPABILITIES
          </span>
          <h2 style={{ fontSize: '1.85rem', color: '#FFFFFF', lineHeight: 1.25, margin: '0 0 1rem 0', fontWeight: 800 }}>
            From Molecule to Medicine
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
            How Salas Pharma translates scientific pre-formulation into finished pharmaceuticals trusted by doctors nationwide.
          </p>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {STORY_CHAPTERS.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <div
                  key={chapter.id}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    backgroundColor: '#0B2545',
                  }}
                >
                  <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(7, 29, 54, 0.2) 0%, rgba(7, 29, 54, 0.85) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: 'rgba(7, 29, 54, 0.85)',
                        border: `1px solid ${chapter.accent}40`,
                        borderRadius: 'var(--radius-full)',
                        padding: '0.35rem 0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: chapter.accent,
                      }}
                    >
                      <Icon size={14} />
                      <span>{chapter.subheading}</span>
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.08em' }}>
                      STEP {chapter.step} // {chapter.eyebrow}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: '0.5rem 0', fontWeight: 800, lineHeight: 1.3 }}>
                      {chapter.heading}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {chapter.description}
                    </p>
                    {chapter.routeTarget && (
                      <button
                        type="button"
                        onClick={() => onNavigate(chapter.routeTarget!)}
                        className="btn btn-secondary"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          padding: '0.65rem 1rem',
                          fontSize: '0.875rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: '#FFFFFF',
                          borderColor: 'rgba(255, 255, 255, 0.25)',
                        }}
                      >
                        <span>{chapter.routeLabel}</span>
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Coordinated cinematic scroll sequence
  return (
    <section 
      ref={trackRef} 
      className={`cinematic-story-track ${className}`}
      aria-label="SALAS Pharma Integrated Capability Storytelling"
      style={{
        position: 'relative',
        minHeight: '220vh',
        backgroundColor: '#071D36',
      }}
    >
      <div 
        className="cinematic-story-sticky"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Layered Background Imagery with smooth crossfades */}
        {STORY_CHAPTERS.map((chapter, idx) => {
          const isActive = activeChapter === idx;
          return (
            <div
              key={chapter.id}
              className={`cinematic-story-bg-layer ${isActive ? 'is-active' : ''}`}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.03)' : 'scale(1.0)',
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <img
                src={chapter.image}
                alt={chapter.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 40%',
                }}
              />
            </div>
          );
        })}

        {/* Cinematic Multi-stop Dark Navy Gradient Overlay: Guarantees 100% WCAG AAA Text Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(7, 29, 54, 0.95) 0%, rgba(7, 29, 54, 0.88) 45%, rgba(7, 29, 54, 0.55) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Molecular Linework in Margin */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
          <MolecularBackground variant="hero" theme="dark" opacity={0.35} position="right" />
        </div>

        {/* Foreground Content Container */}
        <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left: Active Chapter Narrative */}
            <div>
              {/* Chapter Progress Indicators */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', alignItems: 'center' }}>
                {STORY_CHAPTERS.map((ch, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChapter(idx)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: isActive ? 1 : 0.45,
                        transition: 'opacity 0.3s ease',
                      }}
                      aria-label={`Jump to chapter ${idx + 1}: ${ch.subheading}`}
                    >
                      <div
                        style={{
                          width: isActive ? '36px' : '16px',
                          height: '4px',
                          borderRadius: '2px',
                          backgroundColor: isActive ? ch.accent : '#94A3B8',
                          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease',
                        }}
                      />
                    </button>
                  );
                })}
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 700, marginLeft: '0.5rem', letterSpacing: '0.08em' }}>
                  0{activeChapter + 1} / 0{STORY_CHAPTERS.length}
                </span>
              </div>

              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: STORY_CHAPTERS[activeChapter].accent }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: STORY_CHAPTERS[activeChapter].accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {STORY_CHAPTERS[activeChapter].eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.18, letterSpacing: '-0.02em', margin: '0 0 1.25rem 0' }}>
                {STORY_CHAPTERS[activeChapter].heading}
              </h2>

              {/* Description */}
              <p style={{ fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)', color: '#CBD5E1', lineHeight: 1.7, maxWidth: '640px', margin: '0 0 2rem 0' }}>
                {STORY_CHAPTERS[activeChapter].description}
              </p>

              {/* Action Link & Route Navigation */}
              {STORY_CHAPTERS[activeChapter].routeTarget && (
                <button
                  type="button"
                  onClick={() => onNavigate(STORY_CHAPTERS[activeChapter].routeTarget!)}
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem 1.75rem',
                    fontSize: '0.9375rem',
                  }}
                >
                  <span>{STORY_CHAPTERS[activeChapter].routeLabel}</span>
                  <ArrowRight size={17} />
                </button>
              )}
            </div>

            {/* Right: Scientific Key Metric / Capability Card */}
            <div 
              style={{
                backgroundColor: 'rgba(7, 29, 54, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                    color: STORY_CHAPTERS[activeChapter].accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {React.createElement(STORY_CHAPTERS[activeChapter].icon, { size: 28 })}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8' }}>
                    OPERATIONAL FOCUS
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                    {STORY_CHAPTERS[activeChapter].subheading}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>Schedule M cGMP and Indian Pharmacopeial validation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>HPLC purity assay &amp; in-vitro dissolution kinetics</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: '#CBD5E1' }}>Zone IVb accelerated climatic stability controls</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

