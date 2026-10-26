import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BRAND_ASSETS } from '../../config/assets';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'laboratories', label: 'Laboratories' },
    { id: 'manufacturing', label: 'Manufacturing & Quality' },
    { id: 'research', label: 'R&D and Innovation' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#FFFFFF',
          transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
          borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(6, 29, 56, 0.08)' : 'none',
          height: isScrolled ? '64px' : 'var(--header-height)',
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="brand-logo-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            aria-label="SALAS Pharma Home"
          >
            <img 
              src={BRAND_ASSETS.logo} 
              alt="SALAS Pharmaceuticals" 
              loading="eager"
              decoding="async"
              width={180}
              height={44}
              style={{
                height: isScrolled ? '38px' : '44px',
                width: 'auto',
                display: 'block',
                transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }} 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-body)',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s ease',
                  }}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Utilities (Contact CTA & Mobile Toggle) */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{
                padding: isScrolled ? '0.5rem 1.15rem' : '0.65rem 1.35rem',
                fontSize: '0.875rem',
                transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <PhoneCall size={15} />
              <span>Inquire</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--color-navy)',
                padding: '0.5rem',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-nav-drawer"
            style={{
              position: 'absolute',
              top: isScrolled ? '64px' : 'var(--header-height)',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderBottom: '2px solid var(--color-primary)',
              boxShadow: 'var(--shadow-xl)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
            }}
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-heading)',
                    backgroundColor: isActive ? 'var(--color-primary-subtle)' : 'transparent',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span 
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        )}

        <style>{`
          @media (max-width: 992px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-toggle { display: block !important; }
          }
        `}</style>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(6, 29, 56, 0.45)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};
