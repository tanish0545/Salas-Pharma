import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, Building2, Factory } from 'lucide-react';
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

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    // Simulate resilient submission with client-side validation
    setTimeout(() => {
      setFormState('success');
    }, 600);
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

      {/* Corporate & Manufacturing Location Cards */}
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
              className="reveal-left"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-primary-subtle)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                      Headquarters
                    </span>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', margin: 0 }}>
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

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  Business Hours: Mon – Sat (9:30 AM – 6:30 PM IST)
                </span>
              </div>
            </div>

            {/* Sikkim Manufacturing Facility */}
            <div 
              className="reveal-right"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-accent-subtle)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Factory size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
                      Cleanroom Plant
                    </span>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', margin: 0 }}>
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

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  Production Operations: 24/7 Monitored Cleanrooms
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

            {formState === 'success' ? (
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
                <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Inquiry Received</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', margin: 0 }}>
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been logged. Our corporate office will contact you at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', subject: 'Distribution & Trade Partnership', message: '' });
                    setFormState('idle');
                  }}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {errorMessage && (
                  <div style={{ padding: '0.75rem 1rem', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
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
                      placeholder="e.g. Vikram Patel"
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
                      placeholder="e.g. vikram@pharmadistributor.com"
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
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98250 12345"
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
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                      <option value="Distribution & Trade Partnership">Distribution & Trade Partnership</option>
                      <option value="Institutional Supply Tender">Institutional Supply Tender</option>
                      <option value="Manufacturing Facility Inquiry">Manufacturing Facility Inquiry (Sikkim)</option>
                      <option value="Quality & Regulatory Documentation">Quality & Regulatory Documentation</option>
                      <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Please specify your therapeutic interest, geographic territory, or inquiry details..."
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
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={formState === 'submitting'}
                    style={{ padding: '0.85rem 2.25rem' }}
                  >
                    <span>{formState === 'submitting' ? 'Sending Message...' : 'Transmit Inquiry'}</span>
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
