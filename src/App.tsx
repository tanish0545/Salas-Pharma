import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { CinematicLoader } from './components/common/CinematicLoader';
import { CapsuleCursor } from './components/common/CapsuleCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Code-split page route modules for faster initial payload and optimized network performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const LaboratoriesPage = lazy(() => import('./pages/LaboratoriesPage').then(m => ({ default: m.LaboratoriesPage })));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage').then(m => ({ default: m.ManufacturingPage })));
const ResearchPage = lazy(() => import('./pages/ResearchPage').then(m => ({ default: m.ResearchPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

export function App() {
  // Determine initial route from URL hash or pathname
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'products', 'laboratories', 'manufacturing', 'research', 'careers', 'contact'].includes(hash)) {
      return hash;
    }
    const path = window.location.pathname.replace(/^\//, '');
    if (path && ['home', 'about', 'products', 'laboratories', 'manufacturing', 'research', 'careers', 'contact'].includes(path)) {
      return path;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  // Single intro experience: runs exactly once on initial load, never restarts on re-renders or navigation
  const [showCinematicLoader, setShowCinematicLoader] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('salas_intro_played') !== 'true';
    }
    return true;
  });

  const handleLoaderComplete = useCallback(() => {
    setShowCinematicLoader(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('salas_intro_played', 'true');
    }
  }, []);

  // Sync route changes with URL and SEO document titles
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'SALAS Pharma — Pharmaceutical Manufacturing, Quality & Healthcare Solutions',
      about: 'About Us — Salas Pharmaceuticals Pvt. Ltd. | Corporate Heritage Since 2009',
      products: 'Pharmaceutical Products Portfolio | Tablets, Capsules & Injectables — SALAS Pharma',
      laboratories: 'Laboratories & Analytical Testing | Precision Science — SALAS Pharma',
      manufacturing: 'Manufacturing & Quality Assurance | Sikkim Production Plant — SALAS Pharma',
      research: 'R&D and Innovation | Formulation Science & Testing — SALAS Pharma',
      careers: 'Careers at SALAS Pharma | Growth, Collaboration & Healthcare Purpose',
      contact: 'Contact Us | Vadodara Corporate Office & Sikkim Plant — SALAS Pharma',
    };

    document.title = pageTitles[currentRoute] || pageTitles.home;
    window.location.hash = currentRoute;
  }, [currentRoute]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'products', 'laboratories', 'manufacturing', 'research', 'careers', 'contact'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback((route: string) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="salas-pharma-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Custom Capsule Cursor for Desktop (Concept Board Panel 3) */}
      <CapsuleCursor />

      {/* Exactly ONE initial intro/loading experience */}
      {showCinematicLoader && (
        <CinematicLoader onComplete={handleLoaderComplete} />
      )}

      {/* Main Header / Navigation */}
      <Navbar 
        currentRoute={currentRoute} 
        onNavigate={handleNavigate} 
      />

      {/* Main Page Stage (Already loaded & live beneath loader curtains) */}
      <main style={{ flex: '1 0 auto' }}>
        <Suspense fallback={<div style={{ minHeight: '80vh', backgroundColor: 'var(--color-bg-white)' }} />}>
          {currentRoute === 'home' && (
            <HomePage 
              onNavigate={handleNavigate} 
              isLoaderComplete={!showCinematicLoader} 
            />
          )}
          {currentRoute === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {currentRoute === 'products' && <ProductsPage onNavigate={handleNavigate} />}
          {currentRoute === 'laboratories' && <LaboratoriesPage onNavigate={handleNavigate} />}
          {currentRoute === 'manufacturing' && <ManufacturingPage onNavigate={handleNavigate} />}
          {currentRoute === 'research' && <ResearchPage onNavigate={handleNavigate} />}
          {currentRoute === 'careers' && <CareersPage onNavigate={handleNavigate} />}
          {currentRoute === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        </Suspense>
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
