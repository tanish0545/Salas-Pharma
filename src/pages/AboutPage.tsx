import React, { useState } from 'react';
import { Award, Target, Eye, Calendar, MapPin, Building2, Copy, Check } from 'lucide-react';
import { MEDIA_CONFIG, PAGE_HERO_IMAGES } from '../config/assets';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { MolecularBackground } from '../components/common/MolecularBackground';
import { ScrollWordReveal } from '../components/common/ScrollWordReveal';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useScrollReveal();
  const [copiedLocation, setCopiedLocation] = useState<string | null>(null);

  const handleCopy = (loc: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedLocation(loc);
    setTimeout(() => setCopiedLocation(null), 2500);
  };

  const timelineEvents = [
    {
      year: '2009',
      title: 'Foundation & Incorporation',
      desc: 'Salas Pharma was established in Gujarat, India, with the foundational pledge: "Success Lies in Commitment." Began marketing finished oral dosage pharmaceuticals.',
      tag: 'Genesis',
    },
    {
      year: '2014',
      title: 'Therapeutic & Distribution Scaling',
      desc: 'Expanded regional supply chain alliances across North, West, and Eastern India, introducing specialized portfolios in Gastroenterology, Antibacterials, and Pain Management.',
      tag: 'Expansion',
    },
    {
      year: '2018',
      title: 'Sikkim Manufacturing Plant Commissioning',
      desc: 'Commissioned dedicated manufacturing facility in Mamring, South Sikkim, featuring modern cleanroom air-handling units, high-speed tablet compression, and automated packaging lines.',
      tag: 'Infrastructure',
    },
    {
      year: 'Present',
      title: '8 Core Therapeutic Segments & Quality Assurance',
      desc: 'Operating comprehensive quality control laboratories with analytical assay, dissolution kinetics, and continuous stability monitoring serving healthcare providers nationwide.',
      tag: 'Operations',
    },
  ];

  return (
    <div className="about-page" style={{ marginTop: 'var(--header-height)', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. EDITORIAL PAGE HERO WITH STATIC HERO PHOTOGRAPHY */}
      <section className="page-hero-banner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-navy)', color: '#FFFFFF', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
        <img
          src={PAGE_HERO_IMAGES.about.image}
          alt={PAGE_HERO_IMAGES.about.alt}
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
        {/* Dark editorial gradient overlay to guarantee 100% WCAG AAA text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(11, 37, 69, 0.94) 0%, rgba(11, 37, 69, 0.85) 45%, rgba(11, 37, 69, 0.45) 100%)',
            zIndex: 2,
          }}
        />
        {/* Restrained Molecular Network Graphic along edge */}
        <ScientificNetworkArtwork position="right" variant="combined" opacity={0.5} />
        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: '820px' }}>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginTop: 0, marginBottom: '1.25rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18, fontWeight: 800 }}>
              Precision Formulation. <br />
              <span style={{ color: '#38BDF8' }}>Unwavering Commitment.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, fontWeight: 400, marginBottom: '2rem' }}>
              Headquartered in India, Salas Pharma manufactures, markets, and distributes high-quality finished dosage pharmaceuticals engineered to support dependable healthcare outcomes nationwide.
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#FFFFFF' }}>Founded in 2009</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#FFFFFF' }}>Vadodara Corporate Office</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-teal)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#FFFFFF' }}>Mamring, Sikkim Plant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESTORED CORE PHILOSOPHY SECTION (Directly below About Hero) */}
      <section 
        className="about-philosophy-section"
        aria-label="SALAS Pharma Core Philosophy"
      >
        {/* Softly blurred abstract laboratory/scientific background */}
        <img
          src={MEDIA_CONFIG.research.formulationImage || "/assets/images/research/laboratory-research.webp"}
          alt=""
          aria-hidden="true"
          className="about-philosophy-bg-media"
          loading="lazy"
          decoding="async"
        />

        {/* High-key translucent white overlay */}
        <div className="about-philosophy-overlay" aria-hidden="true" />

        {/* Subtle Cyclopentane Molecular Linework in Margins */}
        <MolecularBackground variant="section" theme="light" opacity={0.28} position="split" />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 1.5rem' }}>
          <div className="about-philosophy-card reveal-up">
            <div className="about-philosophy-grid">
              
              {/* Left Column: Eyebrow + Primary Statement */}
              <div className="about-philosophy-left">
                <span className="about-philosophy-eyebrow">
                  <span className="about-philosophy-eyebrow-dot" aria-hidden="true" />
                  OUR CORE PHILOSOPHY
                </span>
                <h2 className="about-philosophy-statement">
                  &ldquo;Success Lies in Commitment.&rdquo;
                </h2>
              </div>

              {/* Right Column: Supporting Mission Statement */}
              <div className="about-philosophy-right">
                <p className="about-philosophy-desc">
                  Founded on the belief that enduring success stems from an uncompromising dedication to patient wellness, therapeutic quality, and professional integrity.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SCROLL-CONTROLLED STORYTELLING SECTION (PINNED ON DESKTOP) */}
      <ScrollWordReveal
        pinnedStorytelling={true}
        eyebrow="Our Foundational Ethos"
        text="At Salas Pharma, every finished pharmaceutical dosage represents a disciplined commitment to patient health. We unite strict cGMP manufacturing standards, rigorous analytical validation, and nationwide distribution to ensure essential therapeutic solutions remain accessible and uncompromisingly reliable."
        highlightWords={['Salas', 'Pharma', 'commitment', 'cGMP', 'analytical', 'accessible', 'reliable']}
      />

      {/* 4. CORPORATE HERITAGE & INFRASTRUCTURE SHOWCASE */}
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
                  src={MEDIA_CONFIG.about.image} 
                  alt="Salas Pharmaceuticals Sikkim manufacturing facility in scenic valley" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                  style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(7, 29, 54, 0.92), transparent)',
                  padding: '2rem 1.75rem',
                  color: '#FFFFFF',
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary)' }}>
                    Production Infrastructure
                  </span>
                  <p style={{ margin: '0.35rem 0 0', fontSize: '1.05rem', fontWeight: 600 }}>
                    Salas Pharmaceuticals Facility — Mamring, South Sikkim
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <span className="section-eyebrow">
                <Award size={14} /> Established Excellence
              </span>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-navy)', fontSize: '2.4rem' }}>
                Building Healthcare Trust Since 2009
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
                <p>
                  Salas Pharma has methodically built its presence through service consistency, long-standing distributor alliances, and adherence to pharmaceutical manufacturing standards.
                </p>
                <p>
                  With therapeutic portfolios covering 8 critical clinical fields, our products are trusted by doctors, healthcare institutions, and retail pharmacies across India.
                </p>
                <p>
                  Our dedicated manufacturing plant in Mamring, South Sikkim, operates advanced machinery for tablet compression, oral capsule filling, and blister sealing under cleanroom environmental conditions.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', margin: 0 }}>
                    <AnimatedCounter target={2009} />
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '0.35rem', fontWeight: 600 }}>Year Established</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent)', margin: 0 }}>Pan-India</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '0.35rem', fontWeight: 600 }}>Distribution Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE HERITAGE TIMELINE */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <span className="section-eyebrow">
              <Calendar size={14} /> Chronology of Growth
            </span>
            <h2 className="section-title">Milestones in Pharmaceutical Capability</h2>
            <p className="section-description">
              A timeline reflecting deliberate, structured growth grounded in operational stability and genuine capacity investment.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
            {/* Center line */}
            <div 
              style={{
                position: 'absolute',
                left: '28px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                backgroundColor: 'rgba(20, 86, 160, 0.2)',
              }}
              aria-hidden="true"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {timelineEvents.map((evt, idx) => (
                <div 
                  key={evt.year} 
                  className="reveal-up"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    position: 'relative',
                  }}
                >
                  {/* Node icon */}
                  <div 
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50%',
                      backgroundColor: idx === 0 ? 'var(--color-accent)' : idx === 2 ? 'var(--color-primary-blue)' : '#FFFFFF',
                      color: idx === 0 || idx === 2 ? '#FFFFFF' : 'var(--color-primary)',
                      border: '3px solid var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 4px 12px rgba(11, 37, 69, 0.12)',
                    }}
                  >
                    {evt.year}
                  </div>

                  {/* Content card */}
                  <div 
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2rem 2.25rem',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    className="interactive-card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700 }}>
                        {evt.title}
                      </h3>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.25rem 0.65rem', borderRadius: '100px', backgroundColor: 'rgba(20, 86, 160, 0.08)', color: 'var(--color-primary-blue)' }}>
                        {evt.tag}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '0.975rem' }}>
                      {evt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC HUBS (VADODARA HQ & SIKKIM PLANT) */}
      <section className="section-spacing" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow">
              <Building2 size={14} /> Geographic Presence
            </span>
            <h2 className="section-title">Strategic Operational Hubs</h2>
            <p className="section-description">
              Dedicated corporate direction anchored in Gujarat coupled with high-capacity cGMP manufacturing in Sikkim.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Hub 1: Vadodara Corporate Office */}
            <div className="pharma-card reveal-up" style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg-light)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(20, 86, 160, 0.12)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                    Corporate Headquarters
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 700 }}>
                    Vadodara, Gujarat
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '0.975rem', marginBottom: '1.5rem' }}>
                Manages national marketing strategy, commercial distributor relations, procurement, and regulatory affairs administration.
              </p>

              <div style={{ padding: '1rem 1.25rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                  104, 1st Floor, "Arohi" Complex, Opp. Reliance Town Gate, Near Bhailal Amin Hospital, Gorwa, Vadodara - 390016
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy('vadodara', '104, 1st Floor, "Arohi" Complex, Opp. Reliance Town Gate, Near Bhailal Amin Hospital, Gorwa, Vadodara - 390016')}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
              >
                {copiedLocation === 'vadodara' ? (
                  <>
                    <Check size={16} style={{ color: 'var(--color-teal)' }} />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Vadodara Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Hub 2: Sikkim Manufacturing Plant */}
            <div className="pharma-card reveal-up" style={{ padding: '2.5rem', backgroundColor: 'var(--color-bg-light)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(229, 36, 42, 0.12)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary-blue)' }}>
                    Production Facility
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.35rem', color: 'var(--color-navy)', fontWeight: 700 }}>
                    Mamring, South Sikkim
                  </h3>
                </div>
              </div>

              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '0.975rem', marginBottom: '1.5rem' }}>
                Dedicated manufacturing suites for tablets, capsules, and blister packaging equipped with controlled AHU HEPA filtration and on-site testing.
              </p>

              <div style={{ padding: '1rem 1.25rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                  Plot No. 121, Mamring, South Sikkim - 737132, India
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy('sikkim', 'Plot No. 121, Mamring, South Sikkim - 737132, India')}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
              >
                {copiedLocation === 'sikkim' ? (
                  <>
                    <Check size={16} style={{ color: 'var(--color-teal)' }} />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Sikkim Plant Address</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. VISION & MISSION */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div 
              className="reveal-left"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(20, 86, 160, 0.1)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '1rem', fontWeight: 700 }}>
                Our Corporate Vision
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '1.025rem', margin: 0 }}>
                To be an enduringly trusted and respected Indian pharmaceutical enterprise recognized for sustained manufacturing quality, ethical corporate standards, and expanding access to vital finished dosage medicines.
              </p>
            </div>

            <div 
              className="reveal-right"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem 2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(229, 36, 42, 0.1)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '1rem', fontWeight: 700 }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '1.025rem', margin: 0 }}>
                To manufacture, market, and distribute dependable pharmaceutical dosage forms across critical therapeutic segments, driven by stringent quality management, robust distribution alliances, and societal responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE CLOSING STATEMENT */}
      <SignatureClosingStatement onNavigate={onNavigate} />

    </div>
  );
};
