import React, { useState } from 'react';
import { Users, BookOpen, Send, CheckCircle2, ShieldCheck, HeartHandshake, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CareersPage: React.FC = () => {
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

  return (
    <div className="careers-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Users size={14} /> Career Opportunities
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
            Grow With SALAS
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            At Salas Pharma, we believe our people are central to our mission. We provide an environment built on continuous learning, ethical values, collaborative innovation, and purposeful healthcare work.
          </p>
        </div>
      </section>

      {/* Workplace Culture Pillars */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '4rem 0' }}>
        <div className="container">
          <div 
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                title: 'Professional Learning & Advancement',
                desc: 'Continuous exposure to current GMP guidelines, advanced analytical instrumentation, and modern pharmaceutical workflows.',
                icon: BookOpen
              },
              {
                title: 'Collaborative & Respectful Culture',
                desc: 'A dynamic, transparent workplace where cross-functional ideas in manufacturing, quality, and marketing are actively encouraged.',
                icon: HeartHandshake
              },
              {
                title: 'Purpose-Driven Healthcare Impact',
                desc: 'Experience the direct reward of producing and distributing affordable, dependable finished medicines for millions of patients across India.',
                icon: ShieldCheck
              }
            ].map((c, idx) => (
              <div 
                key={idx}
                className="interactive-card"
                tabIndex={0}
                role="region"
                aria-label={c.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                }}
              >
                <span className="card-animated-underline" aria-hidden="true" />
                <div>
                  <div 
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <c.icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                    {c.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / Talent Form Section */}
      <section className="section-spacing">
        <div className="container">
          <div 
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-eyebrow">
                <Send size={14} /> Submit Your Profile
              </span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Join Our Talent Community
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Whether your expertise lies in pharmaceutical manufacturing, quality assurance, regulatory affairs, sales, or administration, we welcome expressions of interest.
              </p>
            </div>

            {submitted ? (
              <div 
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'var(--color-primary-subtle)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid #BFDBFE',
                }}
              >
                <CheckCircle2 size={48} style={{ color: 'var(--color-primary)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 800 }}>
                  Application Profile Prepared
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Your candidate summary for <em>"{formData.department}"</em> has been formatted for our Human Resources team at <strong>info@salaspharma.co.in</strong>. Your default email client was prompted to send your application.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <a
                    href={getMailtoUri()}
                    className="btn btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Open in Email App</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="btn btn-secondary"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    {copied ? (
                      <>
                        <Check size={16} style={{ color: '#16A34A' }} />
                        <span style={{ color: '#16A34A', fontWeight: 700 }}>Profile Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Profile Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <div style={{ borderTop: '1px solid #DBEAFE', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ name: '', email: '', phone: '', department: 'Manufacturing & QC', experience: '1-3 years', message: '' });
                      setSubmitted(false);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {errorMsg && (
                  <div 
                    role="alert"
                    style={{ 
                      padding: '0.85rem 1.15rem', 
                      backgroundColor: '#FEE2E2', 
                      border: '1px solid #FCA5A5', 
                      color: '#991B1B', 
                      borderRadius: 'var(--radius-sm)', 
                      fontSize: '0.875rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem' 
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>{errorMsg}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                      Area of Expertise
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="Manufacturing & Production">Manufacturing & Production (Sikkim)</option>
                      <option value="Quality Assurance & QC">Quality Assurance & QC</option>
                      <option value="Formulation & R&D">Formulation & R&D</option>
                      <option value="Sales & Field Distribution">Sales & Field Distribution</option>
                      <option value="Regulatory Affairs & Documentation">Regulatory Affairs & Documentation</option>
                      <option value="Finance & Administration">Finance & Administration (Vadodara)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Relevant Experience & Qualifications Summary
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your pharmaceutical background, qualifications (e.g. B.Pharm, M.Pharm, M.Sc), and career aspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem' }}>
                    <span>Submit Application</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
