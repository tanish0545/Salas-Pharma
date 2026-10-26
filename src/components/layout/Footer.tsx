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
        backgroundColor: '#041224',
        backgroundImage: 'linear-gradient(180deg, #061D38 0%, #041224 100%)',
        borderTop: '1px solid rgba(10, 77, 158, 0.35)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        color: '#FFFFFF',
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
              src={BRAND_ASSETS.logoWhite} 
              alt="SALAS Pharmaceuticals" 
              loading="lazy"
              decoding="async"
              width={180}
              height={46}
              style={{ height: '46px', width: 'auto', marginBottom: '1.25rem' }} 
            />
            <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Salas Pharma is a pharmaceutical company headquartered in India, engaged in manufacturing and sales and marketing of quality finished dosage products.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.85rem', backgroundColor: 'rgba(10, 77, 158, 0.25)', border: '1px solid rgba(10, 77, 158, 0.45)', borderRadius: 'var(--radius-sm)', color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>Success Lies in Commitment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF', letterSpacing: '0.02em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
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
                      color: '#CBD5E1',
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#60A5FA';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowUpRight size={14} style={{ color: '#64748B' }} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Corporate Office (Vadodara) */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
            }}
          >
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF' }}>
              Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: '#60A5FA', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  1st Floor, 4th Vama Villa Society,<br />
                  Behind Joy Complex, Nizampura,<br />
                  Vadodara, Gujarat – 390002
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={17} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <span>0612-2323212 <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>(Verify STD code)</span></span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a href="mailto:info@salaspharma.co.in" style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: 500 }}>
                  info@salaspharma.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Manufacturing Unit (Sikkim) */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
            }}
          >
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF' }}>
              Manufacturing Facility
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring,<br />
                  South Sikkim, Sikkim – 737132
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href="mailto:adminsikkim@salaspharma.co.in" style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: 500 }}>
                  adminsikkim@salaspharma.co.in
                </a>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: '1.5', margin: 0 }}>
                Dedicated manufacturing supporting finished dosage forms under applicable Indian regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#94A3B8',
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
