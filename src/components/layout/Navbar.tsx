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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header 
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#FFFFFF',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid rgba(226, 232, 240, 0.7)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(6, 29, 56, 0.08)' : 'none',
        height: 'var(--header-height)',
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
            style={{ height: '46px', width: 'auto', display: 'block' }} 
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
                {isActive && (
                  <span 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: 'var(--color-primary)',
                      borderRadius: '2px',
                    }} 
                  />
                )}
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
              padding: '0.6rem 1.25rem',
              fontSize: '0.875rem',
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
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--color-navy)',
              padding: '0.5rem',
              cursor: 'pointer',
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
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-xl)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              style={{
                fontSize: '1.05rem',
                fontWeight: currentRoute === link.id ? 700 : 500,
                color: currentRoute === link.id ? 'var(--color-primary)' : 'var(--color-text-heading)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-border-light)',
                display: 'block',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
