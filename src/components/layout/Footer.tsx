import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS } from '../../config/assets';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = CURRENT_YEAR;

  const handleNav = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand Info & Philosophy */}
          <div>
            <img 
              src={BRAND_ASSETS.logo} 
              alt="SALAS Pharmaceuticals" 
              style={{ height: '48px', width: 'auto', marginBottom: '1.25rem' }} 
            />
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Salas Pharma is a pharmaceutical company headquartered in India, engaged in manufacturing and sales and marketing of quality finished dosage products.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', backgroundColor: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-sm)', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>Success Lies in Commitment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Pharmaceutical Products' },
                { id: 'laboratories', label: 'Laboratories & Testing' },
                { id: 'manufacturing', label: 'Manufacturing & Quality' },
                { id: 'research', label: 'R&D and Innovation' },
                { id: 'careers', label: 'Careers at SALAS' },
                { id: 'contact', label: 'Contact Corporate Office' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-text-body)',
                      fontSize: '0.9375rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-body)')}
                  >
                    <ArrowUpRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Corporate Office (Vadodara) */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
              Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  1st Floor, 4th Vama Villa Society,<br />
                  Behind Joy Complex, Nizampura,<br />
                  Vadodara, Gujarat – 390002
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={17} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>0612-2323212 <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>(Verify STD code)</span></span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a href="mailto:info@salaspharma.co.in" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                  info@salaspharma.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Manufacturing Unit (Sikkim) */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
              Manufacturing Facility
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring,<br />
                  South Sikkim, Sikkim – 737132
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href="mailto:adminsikkim@salaspharma.co.in" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                  adminsikkim@salaspharma.co.in
                </a>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Dedicated manufacturing supporting finished dosage forms under applicable Indian regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div 
          style={{
            borderTop: '1px solid var(--color-border-light)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            © {currentYear} Salas Pharmaceuticals Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Quality Commitment</span>
            <span>•</span>
            <span>Ethical Healthcare</span>
            <span>•</span>
            <span>Pharmacovigilance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
