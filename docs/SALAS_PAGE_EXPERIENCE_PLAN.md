# SALAS Pharma — Comprehensive Page-by-Page Experience Plan
**Document:** `docs/SALAS_PAGE_EXPERIENCE_PLAN.md`  
**Application:** React + Vite + TypeScript (`salas-pharma`)  
**Design Standard:** Editorial pharmaceutical storytelling, verified factual accuracy, high-performance interactions.

---

## 1. Design & Engineering Strategy Overview

Each page in the SALAS Pharma ecosystem is structured around a distinct storytelling theme and interaction mechanic, ensuring that visiting different pages delivers unique, valuable digital engagement rather than repetitive marketing templates.

Every page adheres to:
1. **Lightweight First Render:** Hero posters, optimized image decoding (`decoding="async"`), and single-video playback orchestration (`VideoPlaybackManager`).
2. **Natural Native Scrolling:** No scroll-jacking or artificial momentum delays.
3. **Progressive Contrast Narrative:** Key statements employ a grey-to-navy word reveal triggered by scroll intersection.
4. **Verified Corporate Reality:** Only verified facts (founded in 2009, Vadodara HQ, Sikkim manufacturing facility, 8 therapeutic segments, strict cGMP and analytical controls).
5. **Standardized Signature Ending:** Unified closing sequence across all 8 routes featuring the SALAS pledge: *"Every Step. A Commitment to Better Healthcare."*

---

## 2. Page-by-Page Blueprint

### Page 1: Homepage (`/`)
- **Narrative Angle:** *The Nexus of Scientific Precision & Global Healthcare.* Establishing SALAS as a trusted Indian pharmaceutical manufacturer committed to therapeutic efficacy, cGMP adherence, and nationwide healthcare access.
- **Hero Structure:**
  - Split editorial composition: Deep navy panel with authoritative typography (`Precision Formulation`, `Uncompromising Quality`) on the left; cinematic laboratory video (`Lab1.mp4`) with smooth gradient seam on the right.
  - Floating capsule badge removed; clean visual seam with subtle downward scroll affordance.
- **Primary Interactive Component:**
  - *Therapeutic Portfolio Carousel / Grid Preview:* Interactive cards for the 8 therapeutic areas with animated underline progression and hover elevations.
  - *Verified Impact Metrics:* Animated numeric counter (15+ Years of Excellence since 2009, 8 Therapeutic Portfolios, 2 Core Strategic Facilities in Vadodara & Sikkim).
- **Transitions & Rhythm:** Seamless transition from deep navy hero into crisp clinical white Section A. Alternating editorial layout blocks with rich laboratory imagery.
- **Closing Sequence:** Signature closing statement leading to corporate inquiry and product catalog CTAs.

---

### Page 2: About Us (`/about`)
- **Narrative Angle:** *The Heritage of Trust & Formulation Discipline.* Chronicling the growth of SALAS Pharma from its 2009 inception in Gujarat to a multi-regional pharmaceutical powerhouse.
- **Hero Structure:**
  - Minimalist white-and-navy hero with an editorial display headline: *"Building Sustainable Healthcare Through Quality Formulation."*
- **Primary Interactive Component:**
  - *Scroll-Triggered Heritage Timeline:* Interactive vertical timeline tracking key corporate milestones (2009 Foundation, Vadodara Corporate Headquarters Establishment, Sikkim Manufacturing Plant Commissioning, Pan-India Therapeutic Expansion).
  - *Dual-Facility Interactive Cards:* Visual cards comparing the Vadodara Commercial & Administrative Office with the South Sikkim cGMP Manufacturing Facility, complete with address copy triggers.
- **Scroll Transitions:** `ScrollWordReveal` displaying the core mission statement, progressively brightening each word from muted grey to deep navy as the user scrolls.
- **Closing Sequence:** Signature closing statement with quick link to manufacturing standards and contact channels.

---

### Page 3: Products (`/products`)
- **Narrative Angle:** *Comprehensive Therapeutic Solutions Across Key Clinical Areas.* A transparent catalog designed for doctors, distributors, and healthcare procurement specialists.
- **Hero Structure:**
  - High-clarity search and filter command center with instant query input and category count badges.
- **Primary Interactive Component:**
  - *Multi-Axis Filter Command:*
    - Axis 1: 8 Therapeutic Segments (Gastroenterology, Antibiotics & Antibacterials, Respiratory, Pain & Anti-inflammatory, Cardiovascular, Diabetology, Neuropsychiatry, Multivitamins & Nutraceuticals).
    - Axis 2: Dosage Form (All, Tablets, Capsules, Injectables, Oral Liquids).
  - *Instant Search & Reset:* Real-time text filtering across name, generic composition, and indication tags.
  - *Product Detail Slide-Over Drawer:* Interactive quick-view modal presenting verified formulation parameters, administration routes, and storage conditions with honest placeholder notices for unverified batch numbers.
- **Transitions:** Grid cards gracefully filter with zero layout flicker or page reloads.
- **Closing Sequence:** Signature closing statement with direct B2B institutional inquiry trigger.

---

### Page 4: Laboratories (`/laboratories`)
- **Narrative Angle:** *Analytical Rigor & Unyielding Quality Control.* Where every formulation undergoes strict chromatographic, microbiological, and physical stability evaluation.
- **Hero Structure:**
  - Immersive lab hero featuring high-resolution analytical laboratory video (`Lab2.mp4` / `Lab2-poster.webp`) with clean typography.
- **Primary Interactive Component:**
  - *Interactive Analytical Hotspot Station:* High-resolution cleanroom lab photograph with pulsing focal points (HPLC Systems, Dissolution Testers, Stability Environmental Chambers, Microbiological Laminar Flow Hoods). Hovering or clicking a hotspot reveals precise analytical protocols and standards.
  - *Equipment & Testing Capability Accordion:* Interactive technical breakdown of physicochemical assay, dissolution kinetics, and impurity profiling.
- **Transitions:** Image-first layout transitions with clinical spacing and high-contrast callout boxes.
- **Closing Sequence:** Signature closing statement with link to R&D and QA compliance documentation.

---

### Page 5: Manufacturing & Quality (`/manufacturing`)
- **Narrative Angle:** *cCGMP Compliant Production in the Foothills of Sikkim.* Engineering excellence from raw material entry to final automated blister packaging.
- **Hero Structure:**
  - Industrial manufacturing panorama highlighting the South Sikkim facility against the Himalayan foothills.
- **Primary Interactive Component:**
  - *4-Stage Scroll-Driven Manufacturing Journey:*
    - Stage 1: Raw Material Quarantine, Dispensing & Particle Sizing.
    - Stage 2: Cleanroom Granulation, Fluid Bed Drying & Compression.
    - Stage 3: In-Process Quality Controls (Friability, Hardness, Disintegration).
    - Stage 4: Automated Blister Packaging, Batch Coding & Final Quarantine.
  - Interactive stage stepper allowing direct navigation or scroll synchronization with dedicated visual asset switching.
- **Transitions:** Sticky progress indicator tracking the 4 phases during vertical scroll on desktop; responsive stacked accordion on mobile devices.
- **Closing Sequence:** Signature closing statement with facility audit inquiry CTA.

---

### Page 6: R&D and Innovation (`/research`)
- **Narrative Angle:** *Formulation Science, Bioavailability Enhancement & Drug Delivery.* Advancing generic formulation stability and patient adherence.
- **Hero Structure:**
  - Cleanroom formulation research imagery with subtle SVG molecular line illustrations framing the title.
- **Primary Interactive Component:**
  - *Interactive Scientific Research Matrix:* Tabbed panels highlighting Key Focus Areas (Modified Release Formulations, Taste Masking & Pediatric Formulations, Fixed-Dose Combinations, Stability Optimization in Climatic Zone IVb).
  - *Formulation Lifecycle Interactive Explorer:* Step-by-step schematic of pre-formulation screening, pilot batch trials, and stability protocols.
- **Transitions:** Molecular line drawings fade into view as explanatory cards scroll into view.
- **Closing Sequence:** Signature closing statement prompting academic and formulation partnership discussions.

---

### Page 7: Careers (`/careers`)
- **Narrative Angle:** *Join a Purpose-Driven Team Shaping Everyday Healthcare.* Cultivating pharmaceutical talent across manufacturing, QA/QC, regulatory affairs, and field sales.
- **Hero Structure:**
  - Team collaboration hero emphasizing ethical work culture, scientific curiosity, and operational safety.
- **Primary Interactive Component:**
  - *Live Department Opportunities Grid:* Transparent listing of current openings and general talent pool registrations across QA, QC, Production, Regulatory Affairs, and Formulation R&D.
  - *Interactive Direct Application Form:* Clean, accessible application modal with validation, role selection, resume notes, and immediate confirmation feedback.
- **Transitions:** Crisp editorial card grid with responsive hover elevation and focus rings.
- **Closing Sequence:** Signature closing statement celebrating pharmaceutical craftsmanship.

---

### Page 8: Contact Us (`/contact`)
- **Narrative Angle:** *Direct Access to Corporate & Manufacturing Leadership.* Transparent communication channels for healthcare practitioners, distributors, suppliers, and regulatory bodies.
- **Hero Structure:**
  - Dual-location executive header establishing presence in Vadodara (HQ) and South Sikkim (Manufacturing).
- **Primary Interactive Component:**
  - *Interactive Inquiry Router:* Department selector (Trade & Distribution, Institutional Supply, Contract Manufacturing, Quality & Regulatory, General).
  - *Validated Interactive Form:* Real-time input validation, subject routing, and built-in "Copy Email to Clipboard" and "Open in Mail Client" fail-safe actions.
  - *Verified Location Cards:* Interactive cards with quick Google Maps directions links, phone numbers, and direct email triggers.
- **Transitions:** Side-by-side card and form layout with clean shadow elevation.
- **Closing Sequence:** Signature closing statement concluding the entire website experience.

---

## 3. Performance & Quality Guarantees

1. **Zero Layout Shifts (CLS < 0.05):** Explicit aspect ratios on all image containers and video wrappers.
2. **Bundle Footprint:** Minimized vendor chunks (`vendor-react`, `vendor-icons`), entry bundle under 50 kB gzip.
3. **Hardware Decoder Safety:** `VideoPlaybackManager` ensures `video.pause()` when out of viewport or when another video is requested.
4. **Universal Accessibility (WCAG 2.1 AA):** All interactive buttons and drawer close controls contain `aria-label`, visible keyboard focus states, and screen reader friendly dialog semantics.

