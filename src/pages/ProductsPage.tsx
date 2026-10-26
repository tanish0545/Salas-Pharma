import React, { useState, useMemo } from 'react';
import { Search, Pill, X, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductsPageProps {
  onNavigate: (route: string) => void;
}

interface ProductItem {
  id: string;
  category: string;
  dosageForm: 'Tablets' | 'Capsules' | 'Injectables' | 'Oral Liquids';
  categoryLabel: string;
  formulationType: string;
  packagingType: string;
  storageCondition: string;
  description: string;
}

const CATEGORIES = [
  { id: 'all', label: 'All Segments' },
  { id: 'neurology', label: 'Neurology' },
  { id: 'psychiatry', label: 'Psychiatry' },
  { id: 'orthopaedics', label: 'Orthopaedics' },
  { id: 'gynaecology', label: 'Gynaecology' },
  { id: 'pain-management', label: 'Pain Management' },
  { id: 'gastroenterology', label: 'Gastroenterology' },
  { id: 'vitamins', label: 'Vitamins & Supplements' },
  { id: 'general', label: 'General Products' },
];

const DOSAGE_FORMS = ['all', 'Tablets', 'Capsules', 'Injectables', 'Oral Liquids'];

// Structured catalogue framework matching Salas Pharma's 8 verified therapeutic segments
const SAMPLE_CATALOGUE: ProductItem[] = [
    {
      id: 'neuro-tab-01',
      category: 'neurology',
      categoryLabel: 'Neurology',
      dosageForm: 'Tablets',
      formulationType: 'Neuro-protective Formulation (Film-Coated Tablet)',
      packagingType: 'Alu-Alu Blister Pack (10x10 Tablets)',
      storageCondition: 'Store below 25°C in a dry place, protected from direct sunlight.',
      description: 'Manufactured under controlled low-humidity cleanroom conditions to preserve active chemical stability and sustained therapeutic release.'
    },
    {
      id: 'psych-cap-01',
      category: 'psychiatry',
      categoryLabel: 'Psychiatry',
      dosageForm: 'Capsules',
      formulationType: 'Neuro-transmitter Modulator (Hard Gelatin Capsule)',
      packagingType: 'Strip Blister Pack (10x10 Capsules)',
      storageCondition: 'Store in airtight containers protected from moisture and heat.',
      description: 'Engineered for precise active ingredient dispersion and dissolution in accordance with Indian pharmacopeial specifications.'
    },
    {
      id: 'ortho-tab-01',
      category: 'orthopaedics',
      categoryLabel: 'Orthopaedics',
      dosageForm: 'Tablets',
      formulationType: 'Calcium & Bone Mineral Matrix (Double-Layer Tablet)',
      packagingType: 'Blister Pack (3x10 Tablets) with Desiccant Pack',
      storageCondition: 'Store in a cool, dry place. Protect from light.',
      description: 'Specialised compression technology maintaining mineral potency and optimal gastro-tolerance for bone health support.'
    },
    {
      id: 'gynae-cap-01',
      category: 'gynaecology',
      categoryLabel: 'Gynaecology',
      dosageForm: 'Capsules',
      formulationType: 'Prenatal & Micronutrient Complex (Hard Gelatin Capsule)',
      packagingType: 'Alu-Alu Moisture Barrier (10x10 Capsules)',
      storageCondition: 'Store below 25°C. Keep out of reach of children.',
      description: 'High-purity formulation manufactured under rigorous environmental controls to maintain sensitive vitamin and trace mineral integrity.'
    },
    {
      id: 'pain-inj-01',
      category: 'pain-management',
      categoryLabel: 'Pain Management',
      dosageForm: 'Injectables',
      formulationType: 'Analgesic Solution for Injection (Sterile Aqueous Solution)',
      packagingType: 'Sterile Type I Glass Ampoules (5 x 2ml)',
      storageCondition: 'Store between 2°C to 8°C. Do not freeze. Protect from light.',
      description: 'Aseptically filled in Class A cleanrooms with validated terminal sterilization to ensure pyrogen-free therapeutic administration.'
    },
    {
      id: 'gastro-tab-01',
      category: 'gastroenterology',
      categoryLabel: 'Gastroenterology',
      dosageForm: 'Tablets',
      formulationType: 'Gastro-resistant Enteric Coated Tablet',
      packagingType: 'Alu-Alu Moisture Proof Pack (10x10 Tablets)',
      storageCondition: 'Store in dry place below 30°C.',
      description: 'Precision polymer enteric coating engineered to resist gastric acidity and ensure release in the intestinal tract.'
    },
    {
      id: 'vit-cap-01',
      category: 'vitamins',
      categoryLabel: 'Vitamins & Supplements',
      dosageForm: 'Capsules',
      formulationType: 'Multivitamin & Antioxidant Complex',
      packagingType: 'HDPE Container (30/60 Capsules) / Blister Strips',
      storageCondition: 'Store in a cool and dark environment below 25°C.',
      description: 'Formulated with stabilized vitamin and antioxidant compounds to provide dependable nutritional replenishment.'
    },
    {
      id: 'gen-tab-01',
      category: 'general',
      categoryLabel: 'General Products',
      dosageForm: 'Tablets',
      formulationType: 'Broad-Spectrum Essential Healthcare Tablet',
      packagingType: 'Standard PVC/PVDC Blister Pack (10x10 Tablets)',
      storageCondition: 'Store protected from excessive heat and direct sunlight.',
      description: 'High-volume finished dosage form providing quality primary therapeutic care across urban and rural healthcare centres.'
    },
    {
      id: 'gastro-oral-01',
      category: 'gastroenterology',
      categoryLabel: 'Gastroenterology',
      dosageForm: 'Oral Liquids',
      formulationType: 'Digestive Antacid & Enzyme Oral Suspension',
      packagingType: 'Amber PET Bottle (200ml) with Measuring Cup',
      storageCondition: 'Store below 25°C. Shake well before use.',
      description: 'Homogeneous pharmaceutical suspension delivering soothing gastrointestinal mucosal coating and pH buffering.'
    }
  ];

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  useScrollReveal();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDosage, setSelectedDosage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return SAMPLE_CATALOGUE.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesDosage = selectedDosage === 'all' || item.dosageForm === selectedDosage;
      const matchesSearch = 
        item.formulationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dosageForm.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDosage && matchesSearch;
    });
  }, [selectedCategory, selectedDosage, searchQuery]);

  return (
    <div className="products-page" style={{ marginTop: 'var(--header-height)', paddingTop: '3.5rem', backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Pill size={14} /> Pharmaceutical Catalogue
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.25rem', color: 'var(--color-navy)' }}>
            Explore Our Pharmaceutical Portfolio
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 0 }}>
            We produce a diverse portfolio of pharmaceutical products across multiple dosage forms and therapeutic segments, committed to safety, stability, and therapeutic consistency.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Search Input & Dosage Selector */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '480px' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search therapeutic categories or dosage forms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Dosage Form Tabs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.25rem' }}>
                  Dosage Form:
                </span>
                {DOSAGE_FORMS.map((df) => (
                  <button
                    key={df}
                    type="button"
                    onClick={() => setSelectedDosage(df)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid',
                      borderColor: selectedDosage === df ? 'var(--color-primary)' : 'var(--color-border)',
                      backgroundColor: selectedDosage === df ? 'var(--color-primary)' : '#FFFFFF',
                      color: selectedDosage === df ? '#FFFFFF' : 'var(--color-text-body)',
                      fontSize: '0.8125rem',
                      fontWeight: selectedDosage === df ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {df === 'all' ? 'All Forms' : df}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--color-primary)' : 'var(--color-border)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-primary-subtle)' : '#FFFFFF',
                    color: selectedCategory === cat.id ? 'var(--color-primary)' : 'var(--color-text-body)',
                    fontSize: '0.875rem',
                    fontWeight: selectedCategory === cat.id ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> formulation frameworks
            </span>
          </div>

          <div 
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="interactive-card"
                tabIndex={0}
                role="region"
                aria-label={prod.formulationType}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                }}
              >
                <span className="card-animated-underline" aria-hidden="true" />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary-subtle)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {prod.categoryLabel}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      {prod.dosageForm}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {prod.formulationType}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {prod.description}
                  </p>
                </div>

                <div>
                  <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem', marginBottom: '1.25rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    <div><strong>Packaging:</strong> {prod.packagingType}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-muted)' }}>
              <p style={{ fontSize: '1.1rem' }}>No pharmaceutical products matching your filter criteria.</p>
              <button 
                type="button"
                onClick={() => { setSelectedCategory('all'); setSelectedDosage('all'); setSearchQuery(''); }}
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProduct && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(6, 29, 56, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '600px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                padding: '0.25rem',
              }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <span 
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
            >
              {selectedProduct.categoryLabel} • {selectedProduct.dosageForm}
            </span>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              {selectedProduct.formulationType}
            </h2>

            <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedProduct.description}
            </p>

            <div style={{ backgroundColor: 'var(--color-bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <div><strong>Packaging Form:</strong> {selectedProduct.packagingType}</div>
              <div><strong>Storage & Handling:</strong> {selectedProduct.storageCondition}</div>
              <div><strong>Manufacturing Standard:</strong> Processed in certified cleanrooms according to Schedule M specifications.</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                type="button" 
                onClick={() => setSelectedProduct(null)} 
                className="btn btn-secondary"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                Close
              </button>
              <button 
                type="button" 
                onClick={() => { setSelectedProduct(null); onNavigate('contact'); }} 
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                Inquire With Sales
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
