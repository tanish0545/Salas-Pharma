import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, AlertCircle, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { PAGE_HERO_IMAGES } from '../config/assets';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { ScrollWordReveal } from '../components/common/ScrollWordReveal';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CareersPageProps {
  onNavigate?: (route: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Manufacturing & QC',
    experience: '1-3 years',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const getApplicationSummary = () => {
    return `SALAS PHARMACEUTICALS TALENT APPLICATION\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nPhone: ${formData.phone.trim()}\nArea of Expertise: ${formData.department}\n\nQualifications & Summary:\n${formData.message.trim() || 'Please see attached resume / contact details.'}\n\nRecipient: info@salaspharma.co.in`;
  };

  const getMailtoUri = () => {
    const subject = `[SALAS Career Application] ${formData.department} — ${formData.name.trim()}`;
    const body = `Dear Salas Pharmaceuticals HR Team,\n\nI am expressing interest in career opportunities with Salas Pharma.\n\nApplicant Details:\n- Name: ${formData.name.trim()}\n- Email: ${formData.email.trim()}\n- Phone: ${formData.phone.trim()}\n- Area of Expertise: ${formData.department}\n\nQualifications & Background Summary:\n${formData.message.trim() || 'Attached / Provided upon request'}\n\n---\nTransmitted via Salas Pharma Careers portal.`;
    return `mailto:info@salaspharma.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || !/^[0-9+()-\s]{7,20}$/.test(formData.phone.trim())) {
      return 'Please enter a valid contact phone number.';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }
    setErrorMsg('');
    try {
      window.location.href = getMailtoUri();
    } catch {
      // Browser mail fallback
    }
    setSubmitted(true);
  };

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(getApplicationSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const departments = [
    {
      title: 'Manufacturing & Cleanroom Production',
      location: 'Mamring, South Sikkim Plant',
      type: 'On-site cGMP Facility',
      description: 'Granulation machine operators, compression technicians, blister packing line supervisors, and facility maintenance engineers.',
      disciplines: ['D.Pharm / B.Pharm / Diploma Mechanical', 'cGMP & Cleanroom Protocol Knowledge', 'Machine Operation Experience']
    },
    {
      title: 'Quality Assurance & Quality Control',
      location: 'Sikkim Quality Control Labs',
      type: 'On-site Laboratory',
      description: 'Analytical chemists for HPLC assay, dissolution kinetics testing, microbiological sample incubation, and stability testing documentation.',
      disciplines: ['B.Pharm / M.Pharm / M.Sc Chemistry', 'HPLC & Dissolution Instrument Proficiency', 'Schedule M & GLP Compliance']
    },
    {
      title: 'Regulatory Affairs & Documentation',
      location: 'Vadodara Corporate Office',
      type: 'Headquarters / Hybrid',
      description: 'Product dossier compilation, brand registration liaison with regulatory authorities, variation filings, and Certificate of Analysis auditing.',
      disciplines: ['B.Pharm / M.Pharm Regulatory Affairs', 'CTD/ACTD Dossier Formatting', 'State Licensing & Tender Documentation']
    },
    {
      title: 'Sales & Field Distribution Management',
      location: 'Pan-India Territory Hubs',
      type: 'Field Operations',
      description: 'Regional sales managers, medical representatives, and stockist network liaisons driving ethical relationships with medical professionals.',
      disciplines: ['Science / Pharmacy Graduate (B.Sc / B.Pharm)', 'Territory Medical Network Knowledge', 'Strong Communication Skills']
    }
  ];

  return (
    <div className="careers-page" style={{ marginTop: 'var(--header-height)', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. HERO SHOWCASE WITH STATIC HERO PHOTOGRAPHY */}
      <section className="page-hero-banner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-navy)', color: '#FFFFFF', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
        <img
          src={PAGE_HERO_IMAGES.careers.image}
          alt={PAGE_HERO_IMAGES.careers.alt}
          width={1920}
          height={1080}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
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
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', marginTop: 0, marginBottom: '1.25rem', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18, fontWeight: 800 }}>
              Build Your Purpose. <br />
              <span style={{ color: '#38BDF8' }}>Advance Everyday Healthcare.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, marginBottom: '2rem' }}>
              At Salas Pharma, our people transform pharmaceutical science into dependable therapies. We cultivate an ethical, safety-first culture where analytical curiosity, operational discipline, and integrity thrive.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#talent-application" className="btn btn-primary">
                <span>Submit Talent Application</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SCROLL-CONTROLLED STORYTELLING SECTION (PINNED ON DESKTOP) */}
      <ScrollWordReveal
        pinnedStorytelling={true}
        eyebrow="Our People & Culture"
        text="Every medicine that leaves our Sikkim facility carries the dedication of our pharmacists, chemists, and operators. We invest in technical training, rigorous safety standards, and merit-based career progression so our talent can build lasting pharmaceutical careers."
        highlightWords={['Sikkim', 'pharmacists', 'chemists', 'training', 'safety', 'merit-based', 'careers']}
      />

      {/* 3. DEPARTMENTAL OPPORTUNITIES GRID */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-eyebrow">
              <Briefcase size={14} /> Functional Verticals
            </span>
            <h2 className="section-title">Open Departmental Talent Pools</h2>
            <p className="section-description">
              We continually welcome qualified candidates across our primary operational divisions in Gujarat and Sikkim.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="interactive-card"
                style={{
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem 2rem',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.25rem 0.65rem', borderRadius: '100px', backgroundColor: 'rgba(20, 86, 160, 0.08)', color: 'var(--color-primary-blue)' }}>
                      {dept.type}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} style={{ color: 'var(--color-accent)' }} />
                      {dept.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.85rem', fontWeight: 700 }}>
                    {dept.title}
                  </h3>

                  <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    {dept.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {dept.disciplines.map((d, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 500 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href="#talent-application" 
                  onClick={() => setFormData(prev => ({ ...prev, department: dept.title }))}
                  className="card-cta"
                  style={{ textDecoration: 'none', color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span>Apply for this Vertical</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section id="talent-application" className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '3.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-eyebrow">
                <Send size={14} /> Direct HR Channel
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
                Submit Your Talent Profile
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                Send your qualifications and background directly to the Salas Pharmaceuticals human resources review panel.
              </p>
            </div>

            {submitted ? (
              <div style={{ padding: '2.5rem', backgroundColor: 'rgba(20, 86, 160, 0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(20, 86, 160, 0.2)', textAlign: 'center' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-teal)', margin: '0 auto 1.25rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Application Dispatched
                </h3>
                <p style={{ color: 'var(--color-text-body)', lineHeight: 1.65, fontSize: '1rem', marginBottom: '2rem' }}>
                  Your profile has been formulated for dispatch to <strong>info@salaspharma.co.in</strong>. You can copy the application summary to your clipboard below.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="btn btn-secondary"
                  >
                    {copied ? (
                      <>
                        <Check size={16} style={{ color: 'var(--color-teal)' }} />
                        <span>Summary Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Application Summary</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                  >
                    <span>Submit Another Application</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {errorMsg && (
                  <div style={{ padding: '1rem', backgroundColor: 'rgba(229, 36, 42, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(229, 36, 42, 0.3)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem' }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh.patel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98250 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Target Department Vertical
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="Manufacturing & Cleanroom Production">Manufacturing & Cleanroom Production (Sikkim)</option>
                      <option value="Quality Assurance & Quality Control">Quality Assurance & Quality Control (Sikkim)</option>
                      <option value="Regulatory Affairs & Documentation">Regulatory Affairs & Documentation (Vadodara)</option>
                      <option value="Sales & Field Distribution Management">Sales & Field Distribution Management (Pan-India)</option>
                      <option value="General Corporate Application">General Corporate Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Qualifications, Experience & Summary Notes *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your degree (e.g. B.Pharm, M.Pharm, B.Sc), years of relevant experience, and specific areas of pharmaceutical interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2.5rem' }}>
                    <span>Submit Talent Profile</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE CLOSING STATEMENT */}
      <SignatureClosingStatement onNavigate={onNavigate || (() => {})} />

    </div>
  );
};
