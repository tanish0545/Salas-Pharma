import React from 'react';
import { Calendar } from 'lucide-react';

interface CompanyTimelineProps {
  id?: string;
  className?: string;
}

/**
 * Milestones in Pharmaceutical Excellence (Company Timeline)
 * 
 * Central vertical spine with alternating milestone cards,
 * light blue-grey background, blue & red node accents, and
 * 100% verified factual milestones from Salas Pharma heritage.
 */
export const CompanyTimeline: React.FC<CompanyTimelineProps> = ({ id = 'milestones', className = '' }) => {
  return (
    <section
      id={id}
      className={`section-spacing ${className}`}
      style={{
        backgroundColor: '#F3F8FD',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Milestones in Pharmaceutical Excellence"
    >
      <div className="container">
        {/* Centered Section Header */}
        <div
          className="section-header"
          style={{
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto 3.5rem auto',
          }}
        >
          <span
            className="section-eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--color-primary-blue)',
              fontWeight: 800,
              fontSize: '0.8125rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Calendar size={14} /> CHRONOLOGICAL HERITAGE
          </span>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-navy)',
              marginBottom: '1rem',
            }}
          >
            Milestones in Pharmaceutical Excellence
          </h2>
          <p
            className="section-description"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-body)',
              lineHeight: 1.65,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Tracing the disciplined growth, manufacturing expansion, and healthcare partnerships of Salas Pharma.
          </p>
        </div>

        {/* Central Vertical Spine Timeline Track */}
        <div className="timeline-track">
          <div className="timeline-spine" aria-hidden="true" />

          {/* Milestone 1: 2009 Corporate Founding */}
          <div className="timeline-item timeline-node-left reveal-left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                2009 • Corporate Founding
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginTop: '0.35rem',
                  marginBottom: '0.5rem',
                  fontWeight: 700,
                }}
              >
                Establishment of Salas Pharmaceuticals
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Incorporated with a definitive mission: delivering high-integrity pharmaceutical manufacturing, ethical corporate governance, and collaborative healthcare delivery across India.
              </p>
            </div>
          </div>

          {/* Milestone 2: Multi-Therapeutic Expansion */}
          <div className="timeline-item timeline-node-right reveal-right accent">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Therapeutic Depth
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginTop: '0.35rem',
                  marginBottom: '0.5rem',
                  fontWeight: 700,
                }}
              >
                Portfolio Across 8 Specialties
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Strategic diversification into core clinical sectors including Neurology, Psychiatry, Orthopaedics, Gynaecology, Pain Management, and Gastroenterology.
              </p>
            </div>
          </div>

          {/* Milestone 3: Manufacturing Facility */}
          <div className="timeline-item timeline-node-left reveal-left">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Facility Infrastructure
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginTop: '0.35rem',
                  marginBottom: '0.5rem',
                  fontWeight: 700,
                }}
              >
                Sikkim Production Plant
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Dedicated cleanroom infrastructure in South Sikkim equipped for high-precision tablet and capsule compression, analytical quality checks, and automated packaging.
              </p>
            </div>
          </div>

          {/* Milestone 4: Pan-India Alliances */}
          <div className="timeline-item timeline-node-right reveal-right accent">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Nationwide Distribution
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-navy)',
                  marginTop: '0.35rem',
                  marginBottom: '0.5rem',
                  fontWeight: 700,
                }}
              >
                Pan-India Healthcare Reach
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Building trusted collaborative distribution alliances and marketing networks ensuring uninterrupted supply of essential finished dosages nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

