import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Filter, ShieldCheck, AlertCircle, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PAGE_HERO_IMAGES, VIDEO_ASSETS } from '../config/assets';
import { BrandedVideo } from '../components/common/BrandedVideo';
import { ScientificNetworkArtwork } from '../components/common/ScientificNetworkArtwork';
import { SignatureClosingStatement } from '../components/common/SignatureClosingStatement';

interface ProductsPageProps {
  onNavigate: (route: string) => void;
}

interface ProductItem {
  id: string;
  category: string;
  dosageForm: 'Tablets' | 'Capsules' | 'Injectables' | 'Oral Liquids';
  categoryLabel: string;
  formulationType: string;
  genericComposition: string;
  packagingType: string;
  storageCondition: string;
  description: string;
  clinicalFocus: string;
}

const THERAPEUTIC_SEGMENTS = [
  { id: 'all', label: 'All Segments' },
  { id: 'gastro', label: 'Gastroenterology' },
  { id: 'antibiotics', label: 'Antibiotics & Antibacterials' },
  { id: 'respiratory', label: 'Respiratory' },
  { id: 'pain', label: 'Pain & Anti-inflammatory' },
  { id: 'cardio', label: 'Cardiovascular' },
  { id: 'diab', label: 'Diabetology' },
  { id: 'neuro', label: 'Neuropsychiatry' },
  { id: 'vitamins', label: 'Multivitamins & Nutraceuticals' },
];

const DOSAGE_FORMS = ['all', 'Tablets', 'Capsules', 'Injectables', 'Oral Liquids'] as const;

const VERIFIED_CATALOGUE: ProductItem[] = [
  // 1. Gastroenterology
  {
    id: 'gastro-tab-01',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    dosageForm: 'Tablets',
    formulationType: 'Proton Pump Inhibitor + Prokinetic (Enteric-Coated Tablet)',
    genericComposition: 'Pantoprazole Sodium Gastro-resistant & Domperidone Sustained Release',
    packagingType: 'Alu-Alu Moisture-Barrier Blister (10x10 Tablets)',
    storageCondition: 'Store below 25°C in a dry place. Protect from moisture and light.',
    description: 'Precision dual-release core formulation protecting acid-labile pantoprazole through gastric transit while delivering sustained prokinetic motility modulation.',
    clinicalFocus: 'Gastro-esophageal reflux disease (GERD), acid peptic disorders & dyspepsia',
  },
  {
    id: 'gastro-cap-01',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    dosageForm: 'Capsules',
    formulationType: 'Anti-secretory Micro-Pellet Complex (Hard Gelatin Capsule)',
    genericComposition: 'Rabeprazole Sodium Enteric-Coated Pellets & Levosulpiride SR Pellets',
    packagingType: 'High-Density Alu-Alu Blister (10x10 Capsules)',
    storageCondition: 'Store at 20°C to 25°C in a dry location.',
    description: 'Multi-particulate bead technology ensuring uniform gastric emptying, consistent bioavailability, and minimal inter-patient plasma variability.',
    clinicalFocus: 'Non-ulcer dyspepsia, diabetic gastroparesis & reflux esophagitis',
  },
  {
    id: 'gastro-liq-01',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    dosageForm: 'Oral Liquids',
    formulationType: 'Mucosal Protective & Antacid Suspension',
    genericComposition: 'Magaldrate & Simethicone Oral Suspension USP',
    packagingType: 'Amber PET Bottle with Tamper-Evident Measure Cap (200 ml)',
    storageCondition: 'Store below 30°C. Shake well before use. Do not freeze.',
    description: 'Homogeneous colloidal suspension delivering rapid acid neutralization and mucosal barrier shielding without sodium-load concerns.',
    clinicalFocus: 'Hyperacidity, gastritis, heartburn & post-prandial fullness',
  },

  // 2. Antibiotics & Antibacterials
  {
    id: 'anti-tab-01',
    category: 'antibiotics',
    categoryLabel: 'Antibiotics & Antibacterials',
    dosageForm: 'Tablets',
    formulationType: 'Potentiated Broad-Spectrum Beta-Lactam (Film-Coated Tablet)',
    genericComposition: 'Amoxicillin Trihydrate & Potassium Clavulanate (625 mg)',
    packagingType: 'Hermetically Sealed Desiccant Alu-Alu (10x1x10 Strips)',
    storageCondition: 'Store below 25°C in dry conditions. Protect from atmospheric moisture.',
    description: 'Clavulanate-stabilized formulation manufactured in dedicated dehumidified suites (RH < 30%) to ensure enzymatic beta-lactamase resistance inhibition.',
    clinicalFocus: 'Lower respiratory tract infections, sinusitis, skin & soft tissue infections',
  },
  {
    id: 'anti-inj-01',
    category: 'antibiotics',
    categoryLabel: 'Antibiotics & Antibacterials',
    dosageForm: 'Injectables',
    formulationType: 'Broad-Spectrum Third-Generation Cephalosporin (Sterile Powder for Injection)',
    genericComposition: 'Ceftriaxone Sodium Sterile USP with Sulbactam Sodium (1.5g)',
    packagingType: 'Type I Borosilicate Glass Vial with Sterile Water for Injection (WFI)',
    storageCondition: 'Store below 25°C. Protect from light. Use reconstituted solution immediately.',
    description: 'Lyophilized sterile crystalline powder processed under Class 100 laminar airflow with validated endotoxin testing (< 0.20 EU/mg).',
    clinicalFocus: 'Hospital-acquired pneumonia, surgical prophylaxis, intra-abdominal sepsis',
  },

  // 3. Respiratory
  {
    id: 'resp-tab-01',
    category: 'respiratory',
    categoryLabel: 'Respiratory',
    dosageForm: 'Tablets',
    formulationType: 'Leukotriene Receptor Antagonist + Antihistaminic (Film-Coated Tablet)',
    genericComposition: 'Montelukast Sodium & Levocetirizine Dihydrochloride',
    packagingType: 'Alu-Alu Blister (10x10 Tablets)',
    storageCondition: 'Store below 25°C. Protect from direct heat, sunlight and moisture.',
    description: 'Synergistic dual-action tablet stabilizing mast cells and inhibiting cysteinyl leukotriene receptors to maintain airway patency and relieve allergic rhinitis.',
    clinicalFocus: 'Seasonal & perennial allergic rhinitis, bronchial asthma prophylaxis',
  },
  {
    id: 'resp-liq-01',
    category: 'respiratory',
    categoryLabel: 'Respiratory',
    dosageForm: 'Oral Liquids',
    formulationType: 'Bronchodilator, Mucolytic & Expectorant Syrup',
    genericComposition: 'Ambroxol Hydrochloride, Terbutaline Sulphate & Guaiphenesin Syrup',
    packagingType: 'PET Bottle with Calibrated Dispensing Cup (100 ml)',
    storageCondition: 'Store in a cool and dry place. Keep bottle tightly closed.',
    description: 'Stabilized oral liquid formulation promoting surfactant synthesis, bronchial secretolysis, and relaxed airway smooth muscle tone.',
    clinicalFocus: 'Productive cough, chronic bronchitis, asthma exacerbation',
  },

  // 4. Pain & Anti-inflammatory
  {
    id: 'pain-tab-01',
    category: 'pain',
    categoryLabel: 'Pain & Anti-inflammatory',
    dosageForm: 'Tablets',
    formulationType: 'COX-2 Selective NSAID + Proteolytic Enzyme (Enteric-Coated Tablet)',
    genericComposition: 'Aceclofenac, Paracetamol & Serratiopeptidase (100mg/325mg/15mg)',
    packagingType: 'Alu-Alu Blister Pack (10x10 Tablets)',
    storageCondition: 'Store below 25°C in a dry place.',
    description: 'Micro-encapsulated serratiopeptidase protecting enzyme bioactivity through stomach transit to accelerate edema resolution and tissue healing.',
    clinicalFocus: 'Post-operative trauma, osteoarthritis, spondylitis, sports injuries',
  },
  {
    id: 'pain-inj-01',
    category: 'pain',
    categoryLabel: 'Pain & Anti-inflammatory',
    dosageForm: 'Injectables',
    formulationType: 'Potent Non-Narcotic Analgesic Solution for Injection',
    genericComposition: 'Diclofenac Sodium Solution for Injection (75mg/1ml)',
    packagingType: 'Clear Type I Glass Ampoules (10 x 1ml)',
    storageCondition: 'Store between 15°C to 25°C. Do not freeze. Protect from light.',
    description: 'Aseptically filled sterile formulation developed with bio-compatible solubilizers minimizing post-injection site pain and localized crystallization.',
    clinicalFocus: 'Acute renal colic, acute post-surgical pain, severe arthritic flare-ups',
  },

  // 5. Cardiovascular
  {
    id: 'cardio-tab-01',
    category: 'cardio',
    categoryLabel: 'Cardiovascular',
    dosageForm: 'Tablets',
    formulationType: 'Angiotensin II Receptor Blocker + Diuretic (Bilayer Tablet)',
    genericComposition: 'Telmisartan & Hydrochlorothiazide (40mg/12.5mg)',
    packagingType: 'Alu-Alu Moisture-Barrier Blister (10x10 Tablets)',
    storageCondition: 'Store below 25°C. Hygroscopic active ingredients require immediate consumption upon strip opening.',
    description: 'Bilayer compression technology isolating telmisartan from hydrochlorothiazide to prevent chemical interaction and ensure 24-hour blood pressure control.',
    clinicalFocus: 'Essential hypertension, cardiovascular risk reduction in hypertensive patients',
  },

  // 6. Diabetology
  {
    id: 'diab-tab-01',
    category: 'diab',
    categoryLabel: 'Diabetology',
    dosageForm: 'Tablets',
    formulationType: 'DPP-4 Inhibitor + Biguanide (Sustained-Release Tablet)',
    genericComposition: 'Teneligliptin Hydrobromide Hydrate & Metformin Hydrochloride SR (20mg/500mg)',
    packagingType: 'Alu-Alu Blister (10x10 Tablets)',
    storageCondition: 'Store in a dry place below 25°C.',
    description: 'Controlled polymeric matrix providing gradual zero-order release of metformin over 12 hours while delivering rapid DPP-4 glycemic stabilization.',
    clinicalFocus: 'Type 2 Diabetes Mellitus inadequately controlled on monotherapy',
  },

  // 7. Neuropsychiatry
  {
    id: 'neuro-tab-01',
    category: 'neuro',
    categoryLabel: 'Neuropsychiatry',
    dosageForm: 'Tablets',
    formulationType: 'SSRI Antidepressant + High-Potency Anxiolytic (Film-Coated Tablet)',
    genericComposition: 'Escitalopram Oxalate & Clonazepam (10mg/0.5mg)',
    packagingType: 'Alu-Alu Strip (10x10 Tablets)',
    storageCondition: 'Store in a cool and dark location protected from light.',
    description: 'High-uniformity micro-blending ensuring precise sub-milligram distribution of clonazepam across every batch in compliance with Schedule H1 guidelines.',
    clinicalFocus: 'Generalized anxiety disorder (GAD), panic disorder, co-morbid depressive anxiety',
  },
  {
    id: 'neuro-cap-01',
    category: 'neuro',
    categoryLabel: 'Neuropsychiatry',
    dosageForm: 'Capsules',
    formulationType: 'Neuropathic Analgesic & Nerve Remethylation Complex',
    genericComposition: 'Pregabalin & Methylcobalamin (75mg/750mcg)',
    packagingType: 'Strip Blister Pack (10x10 Capsules)',
    storageCondition: 'Store below 25°C in airtight containers.',
    description: 'Hard gelatin capsule formulation engineered for rapid gastrointestinal dissolution and bioavailability for diabetic peripheral neuropathic recovery.',
    clinicalFocus: 'Diabetic peripheral neuropathy, post-herpetic neuralgia, fibromyalgia',
  },

  // 8. Multivitamins & Nutraceuticals
  {
    id: 'vit-cap-01',
    category: 'vitamins',
    categoryLabel: 'Multivitamins & Nutraceuticals',
    dosageForm: 'Capsules',
    formulationType: 'Antioxidant, Multivitamin & Multi-Mineral Complex',
    genericComposition: 'Ginseng Extract, Lycopene, Essential Minerals & Methylcobalamin',
    packagingType: 'Moisture Barrier Blister (3x10 Capsules)',
    storageCondition: 'Store in a cool, dry place away from sunlight.',
    description: 'Stabilized micro-nutrient matrix preserving antioxidant potency and vitamin stability against oxidation in tropical climatic zones (Zone IVb).',
    clinicalFocus: 'General convalescence, nutritional deficiency, fatigue & oxidative stress support',
  },
  {
    id: 'vit-liq-01',
    category: 'vitamins',
    categoryLabel: 'Multivitamins & Nutraceuticals',
    dosageForm: 'Oral Liquids',
    formulationType: 'Iron, Folic Acid & Vitamin B12 Hematinic Syrup',
    genericComposition: 'Ferric Ammonium Citrate, Cyanocobalamin & Folic Acid Syrup',
    packagingType: 'Food-Grade Amber PET Bottle with Dispensing Measure (200 ml)',
    storageCondition: 'Store below 25°C. Do not freeze.',
    description: 'Palatable non-staining hematinic solution formulated with pleasant flavoring to enhance pediatric and geriatric compliance.',
    clinicalFocus: 'Iron-deficiency anemia, pregnancy nutritional support, post-illness debility',
  },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDosage, setSelectedDosage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [capsuleVideoMode, setCapsuleVideoMode] = useState<'sorting' | 'pellet'>('sorting');

  const activeCapsuleVideo = capsuleVideoMode === 'sorting'
    ? VIDEO_ASSETS.capsuleSorting
    : VIDEO_ASSETS.pelletEncapsulation;

  // Filter logic
  const filteredProducts = useMemo(() => {
    return VERIFIED_CATALOGUE.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesDosage = selectedDosage === 'all' || item.dosageForm === selectedDosage;
      
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery = !query || 
        item.formulationType.toLowerCase().includes(query) ||
        item.genericComposition.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.clinicalFocus.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesDosage && matchesQuery;
    });
  }, [selectedCategory, selectedDosage, searchQuery]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedDosage('all');
    setSearchQuery('');
  };

  const isFiltered = selectedCategory !== 'all' || selectedDosage !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="products-page" style={{ marginTop: 'var(--header-height)', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. EDITORIAL HERO WITH STATIC HERO PHOTOGRAPHY */}
      <section className="page-hero-banner" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-navy)', color: '#FFFFFF', minHeight: '440px', display: 'flex', alignItems: 'center' }}>
        <img
          src={PAGE_HERO_IMAGES.products.image}
          alt={PAGE_HERO_IMAGES.products.alt}
          width={1920}
          height={1080}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center right',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(11, 37, 69, 0.95) 0%, rgba(11, 37, 69, 0.88) 45%, rgba(11, 37, 69, 0.4) 100%)',
            zIndex: 2,
          }}
        />
        {/* Restrained Molecular Network Graphic along edge */}
        <ScientificNetworkArtwork position="right" variant="combined" opacity={0.5} />
        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '4.5rem 1.5rem', width: '100%' }}>
          <div style={{ maxWidth: '820px' }}>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18, marginTop: 0, marginBottom: '1.25rem', fontWeight: 800 }}>
              Therapeutic Breadth. <br />
              <span style={{ color: '#38BDF8' }}>Formulation Discipline.</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.92)', lineHeight: 1.65, marginBottom: '2rem' }}>
              Salas Pharma manufactures and distributes high-quality pharmaceuticals across 8 therapeutic segments, offering dependable oral solids, liquids, and sterile dosages engineered to strict Indian pharmacopeial and cGMP standards.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('catalogue-explorer');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
              >
                <span>Explore 8 Therapeutic Segments</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('manufacturing')}
                className="btn btn-secondary"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <span>Quality & Cleanroom Specs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-AXIS FILTER & SEARCH COMMAND BAR */}
      <section id="catalogue-explorer" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0' }}>
        <div className="container">
          
          {/* Top row: Search input & Dosage pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 340px', maxWidth: '520px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1.15rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search by generic composition, clinical indication, or form..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 2.75rem 0.85rem 2.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg-light)',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-text-muted)',
                    padding: '0.2rem',
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Dosage Form Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', marginRight: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Dosage:
              </span>
              {DOSAGE_FORMS.map((form) => (
                <button
                  key={form}
                  type="button"
                  onClick={() => setSelectedDosage(form)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: selectedDosage === form ? 'var(--color-primary-blue)' : 'var(--color-border)',
                    backgroundColor: selectedDosage === form ? 'var(--color-primary-blue)' : '#FFFFFF',
                    color: selectedDosage === form ? '#FFFFFF' : 'var(--color-navy)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {form === 'all' ? 'All Dosages' : form}
                </button>
              ))}
            </div>

          </div>

          {/* Bottom row: Therapeutic Segment horizontal pill selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              Segment:
            </span>
            {THERAPEUTIC_SEGMENTS.map((seg) => (
              <button
                key={seg.id}
                type="button"
                onClick={() => setSelectedCategory(seg.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedCategory === seg.id ? 'var(--color-navy)' : 'var(--color-border)',
                  backgroundColor: selectedCategory === seg.id ? 'var(--color-navy)' : 'var(--color-bg-light)',
                  color: selectedCategory === seg.id ? '#FFFFFF' : 'var(--color-text-body)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {seg.label}
              </button>
            ))}
          </div>

          {/* Active filters & Results counter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--color-border)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Showing <strong>{filteredProducts.length}</strong> formulation standards</span>
              {isFiltered && (
                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>(Filtered)</span>
              )}
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={resetAllFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-accent)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: 0,
                }}
              >
                <X size={14} />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE PRODUCT GRID */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', maxWidth: '520px', margin: '0 auto' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(20, 86, 160, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <Filter size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                No Formulations Match Your Filter
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '0.95rem' }}>
                We couldn't find any products matching your specific query. Try clearing filters to browse our full portfolio across 8 therapeutic segments.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="btn btn-primary"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
              {filteredProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="interactive-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.25rem 2rem',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProduct(prod)}
                >
                  <div>
                    {/* Top tags */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.25rem 0.65rem', borderRadius: '100px', backgroundColor: 'rgba(20, 86, 160, 0.08)', color: 'var(--color-primary-blue)' }}>
                        {prod.categoryLabel}
                      </span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                        {prod.dosageForm}
                      </span>
                    </div>

                    {/* Formulation Type */}
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', lineHeight: 1.4, marginBottom: '0.65rem', fontWeight: 700 }}>
                      {prod.formulationType}
                    </h3>

                    {/* Active composition */}
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-blue)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.5 }}>
                      {prod.genericComposition}
                    </p>

                    {/* Clinical focus */}
                    <div style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.2rem' }}>
                        Clinical Indication Focus:
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 500 }}>
                        {prod.clinicalFocus}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {prod.description}
                    </p>
                  </div>

                  {/* Card bottom action */}
                  <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      Packaging: {prod.packagingType.split('(')[0]}
                    </span>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Quick View</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4B. ENCAPSULATION & CAPSULE SORTING MECHANICS (FEATURING salas5.mp4) */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Footage: salas5.mp4 (Sorting Drum) & salas3.mp4 (Pellet Encapsulation) */}
            <div className="reveal-left">
              {/* Interactive Video Switcher */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  backgroundColor: '#FFFFFF',
                  padding: '0.4rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                }}
                role="tablist"
                aria-label="Encapsulation 3D technical views"
              >
                {[
                  { id: 'sorting', label: 'Centrifugal Sorter (3D)' },
                  { id: 'pellet', label: 'Pellet Encapsulation (3D)' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={capsuleVideoMode === mode.id}
                    onClick={() => setCapsuleVideoMode(mode.id as 'sorting' | 'pellet')}
                    style={{
                      flex: '1 1 auto',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      border: 'none',
                      backgroundColor: capsuleVideoMode === mode.id ? 'var(--color-primary-blue)' : 'transparent',
                      color: capsuleVideoMode === mode.id ? '#FFFFFF' : 'var(--color-navy)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                      boxShadow: capsuleVideoMode === mode.id ? 'var(--shadow-sm)' : 'none',
                    }}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              <div
                className="img-zoom-wrapper"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  backgroundColor: '#05182C',
                }}
              >
                <BrandedVideo
                  key={activeCapsuleVideo.id}
                  src={activeCapsuleVideo.video}
                  poster={activeCapsuleVideo.poster}
                  playbackRate={activeCapsuleVideo.playbackRate}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  ariaLabel={activeCapsuleVideo.alt}
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>

              {/* Feed Metadata Badge */}
              <div
                style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8125rem',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--color-navy)' }}>
                  {activeCapsuleVideo.title}
                </span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
                  3D Engineering Simulation
                </span>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="reveal-right">
              <span className="section-eyebrow">
                <Cpu size={14} /> Solid Oral Technology
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                High-Speed Capsule Encapsulation & Sorting
              </h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Our automated encapsulation suites utilize high-speed centrifugal drum sorters and precision tamping pins to achieve micro-gram dosage accuracy across hard gelatin and multi-particulate pellet formulations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Centrifugal dual-color capsule orientation and alignment',
                  'Precision volumetric micro-pellet dosing with minimal fill weight variation (< 1%)',
                  'Automated optical detection and rejection of deformed or unclosed capsules',
                  'Positive-pressure cleanroom suites maintaining controlled relative humidity (RH < 40%)'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('manufacturing')}
                className="btn btn-primary"
              >
                <span>View Manufacturing Process</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT DETAIL SLIDE-OVER DRAWER */}
      {selectedProduct && (
        <div 
          className="product-drawer-overlay" 
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.formulationType}
        >
          <div 
            className="product-drawer-body" 
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '2.5rem' }}
          >
            {/* Header with close button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.3rem 0.75rem', borderRadius: '100px', backgroundColor: 'rgba(20, 86, 160, 0.1)', color: 'var(--color-primary-blue)', display: 'inline-block', marginBottom: '0.75rem' }}>
                  {selectedProduct.categoryLabel} • {selectedProduct.dosageForm}
                </span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>
                  {selectedProduct.formulationType}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                style={{
                  background: 'rgba(11, 37, 69, 0.06)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-navy)',
                }}
                aria-label="Close product details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Generic composition */}
            <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Active Pharmacopeial Composition:
              </span>
              <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-navy)' }}>
                {selectedProduct.genericComposition}
              </p>
            </div>

            {/* Scientific narrative */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem', fontWeight: 700 }}>
                Formulation & Release Profile
              </h4>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '0.975rem', margin: 0 }}>
                {selectedProduct.description}
              </p>
            </div>

            {/* Technical specifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  Primary Packaging Specification:
                </span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  {selectedProduct.packagingType}
                </span>
              </div>

              <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  Validated Storage Protocol:
                </span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                  {selectedProduct.storageCondition}
                </span>
              </div>

              <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(20, 86, 160, 0.04)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-blue)', display: 'block', marginBottom: '0.25rem' }}>
                  Manufacturing Facility Standard:
                </span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-navy)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--color-primary-blue)' }} />
                  Manufactured in Sikkim cGMP Cleanroom Suite (Schedule M)
                </span>
              </div>
            </div>

            {/* Transparent Disclaimer Notice */}
            <div style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(229, 36, 42, 0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(229, 36, 42, 0.2)', marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <AlertCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                <em>Institutional Notice:</em> Exact brand trade names, batch certificates of analysis (CoA), and regional distribution allocations are shared directly with licensed medical practitioners, institutional buyers, and authorized stockists upon formal request.
              </p>
            </div>

            {/* Actions */}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>Back to Catalogue</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  onNavigate('contact');
                }}
                className="btn btn-primary"
                style={{ flex: 1.5, justifyContent: 'center' }}
              >
                <span>Inquire With Sales</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. SIGNATURE CLOSING STATEMENT */}
      <SignatureClosingStatement onNavigate={onNavigate} />

    </div>
  );
};
