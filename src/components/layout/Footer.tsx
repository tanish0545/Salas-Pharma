import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Pill } from 'lucide-react';
import { BRAND_ASSETS } from '../../config/assets';
import { MolecularBackground } from '../common/MolecularBackground';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = CURRENT_YEAR;
  const footerRef = useRef<HTMLElement>(null);
  const [isOffscreen, setIsOffscreen] = useState<boolean>(true);

  // Performance optimization: Pause animations when footer is offscreen
  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl || !('IntersectionObserver' in window)) {
      setIsOffscreen(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsOffscreen(!entry.isIntersecting);
        }
      },
      { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const handleNav = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className={`site-footer ${isOffscreen ? 'is-offscreen' : ''}`}
      style={{
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        backgroundColor: '#071D36',
        color: '#FFFFFF',
        overflow: 'hidden',
      }}
      aria-label="SALAS Pharma Corporate Footer"
    >
      {/* ====================================================================
          FULL-WIDTH & FULL-HEIGHT SCIENTIFIC MOLECULAR BACKGROUND
          Accurate cyclopentane five-membered carbon ring geometry extending
          across the entire width and height of the footer, including the bottom bar.
          ==================================================================== */}
      <MolecularBackground 
        variant="footer" 
        theme="dark" 
        opacity={0.88} 
        animated={true}
        accentColor="#E5242A"
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Content Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand Info & Philosophy */}
          <div style={{ maxWidth: '320px' }}>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
              style={{ display: 'inline-block', marginBottom: '1.25rem' }}
              aria-label="SALAS Pharma Home"
            >
              <img 
                src={BRAND_ASSETS.logoWhite || BRAND_ASSETS.logoTransparent} 
                alt="SALAS Pharmaceuticals" 
                loading="lazy"
                decoding="async"
                width={180}
                height={46}
                style={{ height: '42px', width: 'auto', display: 'block' }} 
              />
            </a>
            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: '1.68', marginBottom: '1.35rem' }}>
              Salas Pharma is a pharmaceutical company headquartered in India, engaged in manufacturing and sales and marketing of quality finished dosage products.
            </p>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.55rem', 
                padding: '0.5rem 0.95rem', 
                backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                border: '1px solid rgba(56, 189, 248, 0.25)', 
                borderRadius: 'var(--radius-sm)', 
                color: '#38BDF8', 
                fontSize: '0.8125rem', 
                fontWeight: 700 
              }}
            >
              <ShieldCheck size={16} style={{ color: '#E5242A' }} />
              <span>Success Lies in Commitment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links with Cyan-to-Red Animated Underline */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Company Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0 }}>
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
                    className="footer-nav-link"
                  >
                    <ArrowUpRight size={13} style={{ color: '#38BDF8', flexShrink: 0 }} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Approved Therapeutic Specialties */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Therapeutic Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0 }}>
              {[
                'Neurology',
                'Psychiatry',
                'Orthopaedics',
                'Gynaecology',
                'Pain Management',
                'Gastro-intestinal',
                'Vitamins',
                'General Products',
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('products');
                    }}
                    className="footer-nav-link"
                  >
                    <Pill size={12} style={{ color: '#20AEEA', flexShrink: 0 }} />
                    <span>{area}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Office (Vadodara) */}
          <div className="footer-facility-card">
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={17} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  1st Floor, 4th Vama Villa Society,<br />
                  Behind Joy Complex, Nizampura,<br />
                  Vadodara, Gujarat – 390002
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span>0612-2323212 <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>(Verify STD code)</span></span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <a href="mailto:info@salaspharma.co.in" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 600 }}>
                  info@salaspharma.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Manufacturing Unit (Sikkim) */}
          <div className="footer-facility-card">
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Manufacturing Facility
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={17} style={{ color: '#E5242A', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring,<br />
                  South Sikkim, Sikkim – 737132
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#E5242A', flexShrink: 0 }} />
                <a href="mailto:adminsikkim@salaspharma.co.in" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 600 }}>
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
            borderTop: '1px solid rgba(56, 189, 248, 0.16)',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
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
