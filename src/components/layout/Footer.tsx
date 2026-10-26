import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Pill } from 'lucide-react';
import { BRAND_ASSETS } from '../../config/assets';

interface FooterProps {
  onNavigate: (route: string) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = CURRENT_YEAR;
  const footerRef = useRef<HTMLElement>(null);
  const [isOffscreen, setIsOffscreen] = useState<boolean>(true);

  // Performance optimization: Pause chemistry SVG animation when footer is offscreen
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
      }}
      aria-label="SALAS Pharma Corporate Footer"
    >
      {/* ====================================================================
          CHEMISTRY-INSPIRED PHARMACEUTICAL BACKGROUND ARTWORK (INLINE SVG)
          Refined cyclopentane ring structures (5-membered carbon rings) in varying
          sizes and orientations, connected by thin molecular bonds and node vertices.
          Placed along outer edges & corners; center kept completely open for text clarity.
          All floating chemical formula text completely removed.
          ==================================================================== */}
      <div className="footer-chemistry-layer" aria-hidden="true">
        <svg 
          className="footer-chemistry-svg" 
          viewBox="0 0 1440 520" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="chemLineGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1456A0" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="chemLineGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1456A0" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* LEFT MOLECULAR COMPOSITION: Cyclopentane Motif */}
          <g className="chem-floating-group-1">
            {/* Ring 1: Primary Large 5-Membered Cyclopentane Ring */}
            <polygon 
              points="105,95 153,130 134,185 76,185 57,130" 
              stroke="url(#chemLineGradLeft)" 
              strokeWidth="1.4" 
              strokeOpacity="0.45" 
              fill="rgba(20, 86, 160, 0.02)" 
            />
            {/* Ring 1 Vertices */}
            <circle cx="105" cy="95" r="3.2" fill="#60A5FA" fillOpacity="0.55" />
            <circle cx="153" cy="130" r="3.2" fill="#60A5FA" fillOpacity="0.55" />
            <circle cx="134" cy="185" r="3.2" fill="#60A5FA" fillOpacity="0.55" />
            <circle cx="76" cy="185" r="3.2" fill="#60A5FA" fillOpacity="0.55" />
            <circle cx="57" cy="130" r="3.2" fill="#60A5FA" fillOpacity="0.55" />

            {/* Covalent Bond linking Ring 1 to Ring 2 */}
            <line x1="153" y1="130" x2="196" y2="125" stroke="#93C5FD" strokeWidth="1.3" strokeOpacity="0.4" />

            {/* Ring 2: Connected Medium Cyclopentane Ring */}
            <polygon 
              points="230,100 264,125 251,165 209,165 196,125" 
              stroke="#60A5FA" 
              strokeWidth="1.3" 
              strokeOpacity="0.4" 
              fill="none" 
            />
            {/* Ring 2 Vertices */}
            <circle cx="230" cy="100" r="2.6" fill="#3B82F6" fillOpacity="0.5" />
            <circle cx="264" cy="125" r="2.6" fill="#3B82F6" fillOpacity="0.5" />
            <circle cx="251" cy="165" r="2.6" fill="#3B82F6" fillOpacity="0.5" />
            <circle cx="209" cy="165" r="2.6" fill="#3B82F6" fillOpacity="0.5" />
            <circle cx="196" cy="125" r="2.6" fill="#3B82F6" fillOpacity="0.5" />

            {/* Covalent bond extension from Ring 2 */}
            <line x1="251" y1="165" x2="295" y2="195" stroke="#93C5FD" strokeWidth="1.3" strokeOpacity="0.38" />
            <circle cx="295" cy="195" r="3" fill="#3B82F6" fillOpacity="0.55" />

            <line x1="295" y1="195" x2="335" y2="180" stroke="#93C5FD" strokeWidth="1.1" strokeOpacity="0.3" />
            <circle cx="335" cy="180" r="2.4" fill="#60A5FA" fillOpacity="0.45" />

            {/* Ring 3: Isolated Floating Cyclopentane Ring (Lower Left Background) */}
            <polygon 
              points="42,280 88,280 102,324 65,350 28,324" 
              stroke="#93C5FD" 
              strokeWidth="1.2" 
              strokeOpacity="0.32" 
              fill="none" 
            />
            <circle cx="42" cy="280" r="2.5" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="88" cy="280" r="2.5" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="102" cy="324" r="2.5" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="65" cy="350" r="2.5" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="28" cy="324" r="2.5" fill="#60A5FA" fillOpacity="0.45" />

            {/* Fine coordinate dashed bond linking Ring 1 to Ring 3 */}
            <line x1="76" y1="185" x2="65" y2="280" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />

            {/* Ring 4: Compact Satellite Cyclopentane Ring */}
            <polygon 
              points="265,251 288,267 279,294 251,294 242,267" 
              stroke="#60A5FA" 
              strokeWidth="1.1" 
              strokeOpacity="0.3" 
              fill="none" 
            />
            <circle cx="265" cy="251" r="2.4" fill="#38BDF8" fillOpacity="0.55" className="chem-pulse-node" />
            <circle cx="288" cy="267" r="2" fill="#60A5FA" fillOpacity="0.4" />
            <circle cx="279" cy="294" r="2" fill="#60A5FA" fillOpacity="0.4" />
            <circle cx="251" cy="294" r="2" fill="#60A5FA" fillOpacity="0.4" />
            <circle cx="242" cy="267" r="2" fill="#60A5FA" fillOpacity="0.4" />

            {/* Dotted bond from Ring 2 branch to Ring 4 */}
            <line x1="295" y1="195" x2="265" y2="251" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.25" />

            {/* Left Edge Extension */}
            <line x1="57" y1="130" x2="10" y2="105" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />
            <circle cx="10" cy="105" r="2.2" fill="#60A5FA" fillOpacity="0.4" />
          </g>

          {/* RIGHT MOLECULAR COMPOSITION: Cyclopentane Motif */}
          <g className="chem-floating-group-2">
            {/* Ring 5: Primary Large 5-Membered Cyclopentane Ring with SALAS Red Accent */}
            <polygon 
              points="1335,88 1384,124 1366,182 1304,182 1286,124" 
              stroke="url(#chemLineGradRight)" 
              strokeWidth="1.4" 
              strokeOpacity="0.45" 
              fill="rgba(20, 86, 160, 0.02)" 
            />
            {/* Restrained Red Brand Heteroatom Node (Derived from SALAS Logo) */}
            <circle cx="1335" cy="88" r="3.5" fill="#E52D27" fillOpacity="0.85" />
            <circle cx="1335" cy="88" r="7.5" stroke="#E52D27" strokeWidth="0.8" strokeOpacity="0.4" className="chem-pulse-node" />

            {/* Ring 5 Other Vertices */}
            <circle cx="1384" cy="124" r="3.2" fill="#3B82F6" fillOpacity="0.55" />
            <circle cx="1366" cy="182" r="3.2" fill="#3B82F6" fillOpacity="0.55" />
            <circle cx="1304" cy="182" r="3.2" fill="#3B82F6" fillOpacity="0.55" />
            <circle cx="1286" cy="124" r="3.2" fill="#3B82F6" fillOpacity="0.55" />

            {/* Covalent Bond from Ring 5 to Ring 6 */}
            <line x1="1384" y1="124" x2="1412" y2="118" stroke="#93C5FD" strokeWidth="1.3" strokeOpacity="0.4" />

            {/* Ring 6: Connected Medium Cyclopentane Ring (Extending Towards Edge) */}
            <polygon 
              points="1450,90 1488,118 1473,162 1427,162 1412,118" 
              stroke="url(#chemLineGradRight)" 
              strokeWidth="1.3" 
              strokeOpacity="0.38" 
              fill="none" 
            />
            <circle cx="1450" cy="90" r="2.8" fill="#60A5FA" fillOpacity="0.5" />
            <circle cx="1488" cy="118" r="2.8" fill="#60A5FA" fillOpacity="0.5" />
            <circle cx="1473" cy="162" r="2.8" fill="#60A5FA" fillOpacity="0.5" />
            <circle cx="1427" cy="162" r="2.8" fill="#60A5FA" fillOpacity="0.5" />
            <circle cx="1412" cy="118" r="2.8" fill="#60A5FA" fillOpacity="0.5" />

            {/* Outer edge extension line */}
            <line x1="1488" y1="118" x2="1520" y2="95" stroke="#93C5FD" strokeWidth="1.1" strokeDasharray="3 3" strokeOpacity="0.3" />
            <circle cx="1520" cy="95" r="2.4" fill="#60A5FA" fillOpacity="0.4" />

            {/* Covalent Bond linking Ring 5 to Ring 7 */}
            <line x1="1304" y1="182" x2="1296" y2="261" stroke="#93C5FD" strokeWidth="1.3" strokeOpacity="0.38" />

            {/* Ring 7: Medium Cyclopentane Ring (Lower Right Corner) */}
            <polygon 
              points="1275,326 1241,301 1254,261 1296,261 1309,301" 
              stroke="#60A5FA" 
              strokeWidth="1.2" 
              strokeOpacity="0.35" 
              fill="none" 
            />
            <circle cx="1275" cy="326" r="2.6" fill="#38BDF8" fillOpacity="0.5" />
            <circle cx="1241" cy="301" r="2.6" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1254" cy="261" r="2.6" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1296" cy="261" r="2.6" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1309" cy="301" r="2.6" fill="#60A5FA" fillOpacity="0.45" />

            {/* Coordinate dashed bond to Ring 8 */}
            <line x1="1286" y1="124" x2="1209" y2="177" stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />

            {/* Ring 8: Compact Satellite Cyclopentane Ring with Micro Red Accent */}
            <polygon 
              points="1185,160 1209,177 1200,205 1170,205 1161,177" 
              stroke="#93C5FD" 
              strokeWidth="1.1" 
              strokeOpacity="0.3" 
              fill="none" 
            />
            <circle cx="1185" cy="160" r="2.2" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1209" cy="177" r="2.2" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1200" cy="205" r="2.2" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1170" cy="205" r="2.2" fill="#60A5FA" fillOpacity="0.45" />
            <circle cx="1161" cy="177" r="2.2" fill="#E52D27" fillOpacity="0.65" />
          </g>
        </svg>
      </div>

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
                src={BRAND_ASSETS.logo} 
                alt="SALAS Pharmaceuticals" 
                loading="lazy"
                decoding="async"
                width={180}
                height={46}
                style={{ height: '42px', width: 'auto', display: 'block' }} 
              />
            </a>
            <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Salas Pharma is a pharmaceutical company headquartered in India, engaged in manufacturing and sales and marketing of quality finished dosage products.
            </p>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.45rem 0.85rem', 
                backgroundColor: 'rgba(20, 86, 160, 0.06)', 
                border: '1px solid rgba(20, 86, 160, 0.18)', 
                borderRadius: 'var(--radius-sm)', 
                color: '#1456A0', 
                fontSize: '0.8125rem', 
                fontWeight: 700 
              }}
            >
              <ShieldCheck size={16} style={{ color: '#1456A0' }} />
              <span>Success Lies in Commitment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links with Blue-to-Red Animated Underline */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                    <ArrowUpRight size={13} style={{ color: '#1456A0', flexShrink: 0 }} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Approved Therapeutic Specialties */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                    <Pill size={12} style={{ color: '#1456A0', flexShrink: 0 }} />
                    <span>{area}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Office (Vadodara) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 'var(--radius-md)',
              padding: '1.4rem',
              boxShadow: '0 2px 8px -2px rgba(6, 29, 56, 0.04)',
            }}
          >
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#475569' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={17} style={{ color: '#1456A0', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#0B2340' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  1st Floor, 4th Vama Villa Society,<br />
                  Behind Joy Complex, Nizampura,<br />
                  Vadodara, Gujarat – 390002
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#1456A0', flexShrink: 0 }} />
                <span>0612-2323212 <span style={{ fontSize: '0.75rem', color: '#64748B' }}>(Verify STD code)</span></span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#1456A0', flexShrink: 0 }} />
                <a href="mailto:info@salaspharma.co.in" style={{ color: '#1456A0', textDecoration: 'none', fontWeight: 600 }}>
                  info@salaspharma.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Manufacturing Unit (Sikkim) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 'var(--radius-md)',
              padding: '1.4rem',
              boxShadow: '0 2px 8px -2px rgba(6, 29, 56, 0.04)',
            }}
          >
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Manufacturing Facility
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#475569' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={17} style={{ color: '#E52D27', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong style={{ color: '#0B2340' }}>Salas Pharmaceuticals Pvt. Ltd.</strong><br />
                  Khatian No. 14, Plot Nos. 3 & 4,<br />
                  Village Kharpani, Mamring,<br />
                  South Sikkim, Sikkim – 737132
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#E52D27', flexShrink: 0 }} />
                <a href="mailto:adminsikkim@salaspharma.co.in" style={{ color: '#1456A0', textDecoration: 'none', fontWeight: 600 }}>
                  adminsikkim@salaspharma.co.in
                </a>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                Dedicated manufacturing supporting finished dosage forms under applicable Indian regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div 
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#64748B',
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
