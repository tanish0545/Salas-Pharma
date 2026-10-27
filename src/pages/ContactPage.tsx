import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, Building2, Factory, Copy, Check, ExternalLink } from 'lucide-react';
import { MEDIA_CONFIG } from '../config/assets';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactPage: React.FC = () => {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Distribution & Trade Partnership',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'dispatched'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const getInquirySummary = () => {
    return `SALAS PHARMACEUTICALS INQUIRY\nSubject: ${formData.subject}\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nPhone: ${formData.phone.trim() || 'Not provided'}\n\nMessage:\n${formData.message.trim()}\n\nRecipient: info@salaspharma.co.in`;
  };

  const getMailtoUri = () => {
    const subject = `[SALAS Inquiry] ${formData.subject} — ${formData.name.trim()}`;
    const body = `Dear Salas Pharmaceuticals Corporate Team,\n\nI am contacting you regarding: ${formData.subject}\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nPhone: ${formData.phone.trim() || 'Not provided'}\n\nInquiry Details:\n${formData.message.trim()}\n\n---\nTransmitted via Salas Pharma official website contact portal.`;
    return `mailto:info@salaspharma.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid corporate or professional email address.';
    }
    if (formData.phone.trim() && !/^[0-9+()-\s]{7,20}$/.test(formData.phone.trim())) {
      return 'Please enter a valid contact phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return 'Please provide more details in your message (minimum 10 characters).';
    }
    return null;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage('');
    const mailto = getMailtoUri();
    try {
      window.location.href = mailto;
    } catch {
      // Browser mail handler
    }
    setFormState('dispatched');
  };

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(getInquirySummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="contact-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Mail size={14} /> Corporate Liaison
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
            Connect With SALAS Pharma
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            We welcome inquiries regarding institutional supply, trade distribution, regulatory documentation, and career opportunities.
          </p>
        </div>
      </section>

      {/* Corporate & Manufacturing Location Cards with Authentic Architecture Photos */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '4rem 0' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Vadodara Corporate Office */}
            <div 
              className="reveal-left pharma-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="pharma-card-img-wrap" style={{ height: '220px' }}>
                  <img 
                    src={MEDIA_CONFIG.contact.officeImage} 
                    alt="Salas Pharmaceuticals corporate headquarters in Vadodara Gujarat" 
                    loading="lazy" 
                    decoding="async" 
                    width={480} 
                    height={220} 
                  />
                </div>
                <div className="pharma-card-seam" />
                <div className="pharma-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-primary-subtle)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Building2 size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                        Headquarters
                      </span>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0 }}>
                        Corporate Office
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--color-text-body)', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <MapPin size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                        1st Floor, 4th Vama Villa Society,<br />
                        Behind Joy Complex, Nizampura,<br />
                        Vadodara, Gujarat – 390002
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                      <Phone size={19} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <div>
                        <a href="tel:06122323212" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>0612-2323212</a>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '0.15rem' }}>
                          * Flagged for client verification (0612 is Bihar STD; Vadodara office is Gujarat)
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                      <Mail size={19} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <a href="mailto:info@salaspharma.co.in" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        info@salaspharma.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '0 1.75rem 1.75rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  Business Hours: Mon – Sat (9:30 AM – 6:30 PM IST)
                </span>
              </div>
            </div>

            {/* Sikkim Manufacturing Facility */}
            <div 
              className="reveal-right pharma-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="pharma-card-img-wrap" style={{ height: '220px' }}>
                  <img 
                    src={MEDIA_CONFIG.contact.facilityImage} 
                    alt="Salas Pharmaceuticals manufacturing unit in South Sikkim" 
                    loading="lazy" 
                    decoding="async" 
                    width={480} 
                    height={220} 
                  />
                </div>
                <div className="pharma-card-seam" />
                <div className="pharma-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-accent-subtle)',
                        color: 'var(--color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Factory size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
                        Cleanroom Plant
                      </span>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0 }}>
                        Manufacturing Facility
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--color-text-body)', fontSize: '0.95rem' }}>
                    <div style={{ display: 'flex', gap: '0.85rem' }}>
                      <MapPin size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                        Khatian No. 14, Plot Nos. 3 & 4,<br />
                        Village Kharpani, Mamring,<br />
                        South Sikkim, Sikkim – 737132
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                      <Phone size={19} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <div>
                        <span style={{ color: 'var(--color-text-muted)' }}>Telephone not specified in content record</span>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '0.15rem' }}>
                          * Awaiting dedicated Sikkim plant telephone from client
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                      <Mail size={19} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <a href="mailto:adminsikkim@salaspharma.co.in" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                        adminsikkim@salaspharma.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '0 1.75rem 1.75rem', borderTop: '1px solid var(--color-border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  Facility Operations: Mon – Sat (8:00 AM – 5:00 PM IST)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Interactive Inquiry Form */}
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
                <Send size={14} /> Send An Inquiry
              </span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                Corporate Contact Form
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Please specify your requirement and our regional corporate representative will respond promptly.
              </p>
            </div>

            {formState === 'dispatched' ? (
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
                  Inquiry Ready for Transmission
                </h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>"{formData.subject}"</em> has been prepared for our corporate office at <strong>info@salaspharma.co.in</strong>. Your default email application was prompted to transmit this message.
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
                        <span style={{ color: '#16A34A', fontWeight: 700 }}>Inquiry Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Inquiry Details</span>
                      </>
                    )}
                  </button>
                </div>

                <div style={{ borderTop: '1px solid #DBEAFE', paddingTop: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ name: '', email: '', phone: '', subject: 'Distribution & Trade Partnership', message: '' });
                      setFormState('idle');
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
                    Create another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {errorMessage && (
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
                    <span style={{ fontWeight: 600 }}>{errorMessage}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label 
                      htmlFor="contact-name"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. vikram@pharmadistributor.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label 
                      htmlFor="contact-phone"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}
                    >
                      Contact Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. +91 98250 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-subject"
                      style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}
                    >
                      Inquiry Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input-field"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <option value="Distribution & Trade Partnership">Distribution & Trade Partnership</option>
                      <option value="Institutional Supply Tender">Institutional Supply Tender</option>
                      <option value="Manufacturing Facility Inquiry">Manufacturing Facility Inquiry (Sikkim)</option>
                      <option value="Quality & Regulatory Documentation">Quality & Regulatory Documentation</option>
                      <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-message"
                    style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}
                  >
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Please specify your therapeutic interest, geographic territory, or inquiry details (min 10 characters)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input-field"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.9375rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 2.25rem' }}
                  >
                    <span>Send Corporate Inquiry</span>
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
