import React, { useState } from 'react';
import { ArrowUpRight, FlaskConical, Microscope, Factory, Pill } from 'lucide-react';

interface ChapterItem {
  id: string;
  route: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  accent: string;
}

interface ChapterNavigationProps {
  onNavigate: (route: string) => void;
  className?: string;
}

const CHAPTERS: ChapterItem[] = [
  {
    id: 'research',
    route: 'research',
    tag: 'Formulation Science',
    title: 'Research & Development',
    description: 'Pre-formulation screening, active dissolution kinetics, and Zone IVb tropical stability profiling.',
    image: '/assets/images/research/rnd-laboratory-research.webp',
    alt: 'Salas Pharma pharmaceutical research and formulation development laboratory',
    icon: FlaskConical,
    accent: '#38BDF8',
  },
  {
    id: 'laboratories',
    route: 'laboratories',
    tag: 'Analytical Rigor',
    title: 'Laboratories & Testing',
    description: 'High-performance liquid chromatography (HPLC) assays and continuous in-vitro dissolution validation.',
    image: '/assets/images/laboratory/analytical-testing.webp',
    alt: 'Salas Pharma Sikkim quality control and analytical testing laboratory',
    icon: Microscope,
    accent: '#20AEEA',
  },
  {
    id: 'manufacturing',
    route: 'manufacturing',
    tag: 'cGMP Cleanrooms',
    title: 'Manufacturing & Quality',
    description: 'South Sikkim production facility engineered for solid oral dosage forms under strict Schedule M discipline.',
    image: '/assets/images/manufacturing/manufacturing-cleanroom.webp',
    alt: 'Automated cGMP cleanroom manufacturing suites at Salas Pharma Sikkim facility',
    icon: Factory,
    accent: '#E5242A',
  },
  {
    id: 'products',
    route: 'products',
    tag: 'Therapeutic Breadth',
    title: 'Pharmaceutical Products',
    description: 'Dependable finished dosage formulations spanning 8 critical clinical fields trusted across India.',
    image: '/assets/images/products/products-dosage-forms.webp',
    alt: 'Finished pharmaceutical tablets, capsules, and dosage forms manufactured by Salas Pharma',
    icon: Pill,
    accent: '#38BDF8',
  },
];

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ onNavigate, className = '' }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section 
      className={`chapter-nav-section ${className}`}
      aria-label="SALAS Pharma Operational Chapters"
      style={{
        position: 'relative',
        backgroundColor: '#071D36',
        color: '#FFFFFF',
        padding: '5rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, marginBottom: '2.5rem' }}>
        <div style={{ maxWidth: '780px' }}>
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
            EXPLORE SALAS PHARMA
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#FFFFFF', lineHeight: 1.2, margin: '0 0 1rem 0', fontWeight: 800 }}>
            Four Pillars of Pharmaceutical Excellence
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', color: '#CBD5E1', lineHeight: 1.65, margin: 0 }}>
            Inspect our integrated capabilities across pre-formulation science, analytical testing, cleanroom manufacturing, and nationwide healthcare supply.
          </p>
        </div>
      </div>

      {/* Full-width interactive horizontal chapter accordion */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="chapter-nav-track">
          {CHAPTERS.map((chapter, idx) => {
            const isHovered = activeIdx === idx;
            const Icon = chapter.icon;

            return (
              <button
                key={chapter.id}
                type="button"
                className={`chapter-panel ${isHovered ? 'is-active' : ''}`}
                onClick={() => onNavigate(chapter.route)}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                aria-label={`Explore ${chapter.title} — navigate to ${chapter.tag}`}
              >
                {/* Background Photography */}
                <div className="chapter-panel-bg">
                  <img
                    src={chapter.image}
                    alt={chapter.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                  <div className="chapter-panel-overlay" />
                </div>

                {/* Top Chapter Tag & Icon */}
                <div className="chapter-panel-top">
                  <div className="chapter-panel-badge" style={{ borderColor: `${chapter.accent}40`, color: chapter.accent }}>
                    <Icon size={16} />
                    <span>{chapter.tag}</span>
                  </div>
                  <div className="chapter-panel-num" aria-hidden="true">
                    0{idx + 1}
                  </div>
                </div>

                {/* Bottom Content & Navigation Cue */}
                <div className="chapter-panel-bottom">
                  <h3 className="chapter-panel-title">
                    {chapter.title}
                  </h3>
                  <p className="chapter-panel-desc">
                    {chapter.description}
                  </p>
                  <div className="chapter-panel-cue" style={{ color: chapter.accent }}>
                    <span>Explore Section</span>
                    <ArrowUpRight size={16} className="chapter-cue-icon" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

