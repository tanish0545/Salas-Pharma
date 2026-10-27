# SALAS PHARMA — Comprehensive Website-Wide Audit

**Project:** `C:\Users\tanis\.gemini\antigravity-ide\scratch\salas-pharma`  
**Date:** October 2026  
**Scope:** Full-stack inspection across all 8 routes, shared components, typography, storytelling mechanics, video performance, and production configuration.

---

## 1. Executive Summary & Audit Scope

This audit evaluates the entire SALAS Pharma website following recent iterations. While foundational fixes (such as About Us pinned scroll mechanics and video playback resilience) have succeeded, a comprehensive upgrade is required to achieve high-end editorial prestige, consistent luxury pharmaceutical typography, unified storytelling interactions, and optimal Core Web Vitals.

| Area | Current Status | Issues Identified | Planned Interventions |
| :--- | :--- | :--- | :--- |
| **Typography System** | Basic Geometric Sans | Simple sans-serif throughout (`Plus Jakarta Sans`), no editorial serif contrast, unrefined letter-spacing, lack of fluid `clamp()` tokens for headings. | Establish cohesive luxury pharmaceutical type system pairing contemporary sans (`Plus Jakarta Sans` / `Inter`) with editorial serif (`Cormorant Garamond`) for signature titles and storytelling emphasis. |
| **Storytelling Interaction** | Pinned on About only | About Us has a proven 300vh pinned word-by-word reveal; however, 5 other pages contain manifesto statements that do not pin or have inconsistent behavior. | Generalize the proven pinned storytelling pattern into a standardized reusable mechanism across suitable editorial manifesto sections without affecting normal card grids. |
| **Home Page** | Functional Split Hero | `salas1.mp4` works well, but index.html preloads the wrong poster (`salas2.mp4_f50.webp`), typography needs editorial hierarchy, and transitions can be elevated. | Correct LCP poster preload to `salas1.mp4_f50.webp`, elevate typography tokens, refine alternating left-right editorial entries. |
| **Products Page** | Working Catalogue | Product catalogue and 3D simulation switcher work; manifesto section is currently unpinned; typography in filter pills and cards is plain. | Standardize pinned storytelling manifesto, enhance typography of filter buttons and product specification drawer, optimize search. |
| **Laboratories Page** | Scientific Network Hero | 4K dissolution video and Lab1 video work; hotspot interactive section works; manifesto section is unpinned; typography lacks editorial contrast. | Standardize pinned storytelling manifesto, apply editorial serif accents to laboratory pillars, ensure zero CLS. |
| **Manufacturing Page** | Multi-Feed Working | 3-feed video switcher works, 4-stage stepper works; manifesto section is unpinned; typography needs hierarchy refinement. | Standardize pinned storytelling manifesto, elevate typography across stage specifications and cGMP compliance cards. |
| **Research Page** | 2K QHD Video Working | Dissolution kinetics video active; pre-formulation workflows clear; manifesto section is unpinned; editorial typography needs polish. | Standardize pinned storytelling manifesto, refine editorial chromatography and kinetics typography. |
| **Careers Page** | Working Application Form | Form and positions clear; culture manifesto section unpinned; typography feels standard corporate. | Standardize pinned storytelling manifesto, elevate recruitment and culture typography. |
| **Contact Page** | Functional Contact Form | Vadodara and Sikkim location cards clear; communication manifesto unpinned; contact typography needs hierarchy polish. | Standardize pinned storytelling manifesto, refine typography across address cards and validation feedback. |
| **Shared Layout & Media** | Stable | Header and footer work; chemistry background is lightweight; all 9 videos audited and playing reliably. | Refine navigation typography, modernize button tokens, unify focus rings, and ensure all routes direct-refresh cleanly. |

---

## 2. Page-by-Page Audit Findings

### 2.1 Home Page (`#home`)
- **Strengths:** 
  - Section 1 hero split composition with `salas1.mp4` on the right and deep navy panel on the left provides immediate pharmaceutical credibility.
  - Alternating directional scroll animations (`LEFT → RIGHT → LEFT → RIGHT → LEFT → RIGHT`) across the 8 sections give a deliberate, structured cadence.
  - Authentic data points (Vadodara HQ, Mamring South Sikkim PIN: 737132, Est. 2009, 8 therapeutic segments) anchor genuine corporate identity.
- **Deficiencies:**
  - `index.html` has a leftover preload link pointing to `salas2.mp4_f50.webp` instead of `salas1.mp4_f50.webp`, degrading initial LCP efficiency.
  - Main hero headline (`Committed to Quality. Focused on Healthcare.`) uses standard sans-serif font weights with uniform tracking, lacking the bespoke editorial elegance of high-end life-sciences brands.
  - The feature strip beneath the hero lacks subtle border delineation on certain responsive viewports.

### 2.2 About Us (`#about`)
- **Strengths:**
  - Section 2 pinned 300vh word-by-word storytelling reveal is working smoothly: it locks into place, progressively illuminates words from muted grey to deep navy with red highlights, dwells for reading comfort, and releases cleanly to Section 3.
  - Section 3 highlights the verified South Sikkim facility in the mountain valley.
  - Chronological timeline (2009–present) renders cleanly.
- **Deficiencies:**
  - The typography in the pinned section can be elevated with an editorial serif accent on the headline/eyebrow to match premium European biopharma benchmarks.
  - Word wrapping on mid-sized tablet displays (768px–1024px) could benefit from tighter fluid max-width constraints to prevent orphan single-word lines.

### 2.3 Products Page (`#products`)
- **Strengths:**
  - Dedicated art-directed hero image (`hero-products.webp`) with zero duplication.
  - Live 3D technical switcher between Centrifugal Sorting (`salas5.mp4`) and Pellet Encapsulation (`salas3.mp4`).
  - Robust 8-segment filtering and instant search across oral solids, capsules, and injectables.
  - Accessible slide-over detail drawer for formulation specifications.
- **Deficiencies:**
  - Section 2 ("Therapeutic Standard") is currently rendered in a static section without pinned storytelling, despite containing an identical high-impact manifesto text.
  - Category filter pills use uniform grey borders without premium subtle hover lifts or active gradient highlights.

### 2.4 Laboratories Page (`#laboratories`)
- **Strengths:**
  - Hero features full-width `hero-laboratories.webp` with interactive scientific node geometry.
  - Section 5 integrates `Lab1.mp4` (Analytical Testing & Sample Traceability) seamlessly.
  - Interactive Hotspot station and testing pillars are informative and responsive.
- **Deficiencies:**
  - Section 2 ("Analytical Discipline") is currently unpinned.
  - Typography in the 4 testing pillars can be made much more distinctive with refined numerical badges and editorial headings.

### 2.5 Manufacturing & Quality (`#manufacturing`)
- **Strengths:**
  - Route renders cleanly without any runtime crashes.
  - Section 5 features the new 3-feed live video switcher (`salas1.mp4` Packaging, `salas2.mp4` Cleanroom Bioprocess, `salas6.mp4` SCADA Terminal).
  - The 4-Stage Manufacturing Journey provides interactive step-by-step clarity.
  - Animated SVG Quality Seal provides authentic compliance authority.
- **Deficiencies:**
  - Section 2 ("cGMP Operational Integrity") is currently unpinned.
  - Stepper navigation buttons on the manufacturing journey have slightly dense typography on smaller screens.

### 2.6 R&D and Innovation (`#research`)
- **Strengths:**
  - Section 4 incorporates `salas4.mp4` (2K QHD macro tablet dissolution kinetics).
  - Pre-formulation screening, stability testing, and HPLC assays are clearly articulated.
- **Deficiencies:**
  - Section 2 ("Formulation Discipline") is unpinned.
  - Heading hierarchy between formulation pillars and chromatography workflows lacks distinct typographic scale.

### 2.7 Careers Page (`#careers`)
- **Strengths:**
  - Functional application form with resume file attachment and field validation.
  - Verified departmental categories (Formulation R&D, Quality Assurance, Production Operations, Regulatory Affairs).
- **Deficiencies:**
  - Section 2 ("Our People & Culture") is unpinned.
  - Job vacancy cards use standard borders without luxury card styling.

### 2.8 Contact Us (`#contact`)
- **Strengths:**
  - Dual location cards for Vadodara HQ and South Sikkim Plant with one-click address copying and verified coordinates.
  - Functional inquiry form with validation and clear submission confirmation.
- **Deficiencies:**
  - Section 2 ("Our Commitment to Responsiveness") is unpinned.
  - Form inputs look utilitarian rather than premium pharmaceutical.

---

## 3. Shared Components Audit

### 3.1 Navigation (`Navbar.tsx`)
- Scroll detection with `requestAnimationFrame` is performant.
- Active route state indicator is clear.
- Typography in the desktop nav is standard sans-serif; letter-spacing can be elevated (`letter-spacing: 0.02em`, `font-size: 0.875rem`, `font-weight: 600`).
- Mobile drawer transitions smoothly and locks scroll when open.

### 3.2 Corporate Footer (`Footer.tsx`)
- Background cyclopentane molecular SVG is optimized with `IntersectionObserver` to pause animations when offscreen.
- Vadodara HQ and Sikkim Plant details are clearly distinguished in dedicated white cards.
- Bottom copyright and compliance notes are clean and responsive.

### 3.3 Interactive Media & Custom Cursor
- `CapsuleCursor.tsx`: Smooth lerp animation for desktop pointer; automatically hidden on touch devices and small viewports.
- `CinematicLoader.tsx`: Plays once per session using `sessionStorage.getItem('salas_intro_played')`, preventing disruptive re-plays on internal page navigation.
- `BrandedVideo.tsx`: Independent IntersectionObserver per instance, direct `src` DOM binding, explicit `.muted = true` property enforcement, and lazy proximity loading.

---

## 4. Typography System Deficiencies & Upgrade Strategy

1. **Current Shortcoming:** The entire application relies exclusively on `Plus Jakarta Sans` and `Inter`, resulting in a tech-startup aesthetic rather than a heritage pharmaceutical / medical science authority.
2. **Luxury Editorial Solution:**
   - Retain `Plus Jakarta Sans` for clean, high-legibility UI components, form inputs, buttons, navigation, data tables, and metrics.
   - Introduce `Cormorant Garamond` (weights 500, 600, 700 with italic) as a high-end editorial serif pairing for display headings, manifesto storytelling paragraphs, and signature quote accents.
   - Establish fluid typography tokens via `clamp()` in `:root`.
   - Standardize line lengths using `max-width: 65ch - 75ch` on body paragraphs for optimal reading comfort.
   - Restrain uppercase eyebrows to `letter-spacing: 0.12em - 0.14em` with subtle background tinting.

---

## 5. Storytelling Generalization Strategy

- The About Us pinned scroll-storytelling effect (`ScrollWordReveal.tsx`) is proven and robust.
- Standardize `ScrollWordReveal` so that setting `pinnedStorytelling={true}` creates a dedicated 280vh–300vh scroll-controlled track on desktop while gracefully collapsing to natural document flow on mobile (`<= 768px`) or when `prefers-reduced-motion` is active.
- Apply this pinned storytelling pattern to the dedicated manifesto sections across:
  1. **About Us** (`Our Foundational Ethos`) — existing benchmark.
  2. **Laboratories** (`Analytical Discipline`).
  3. **Manufacturing** (`cGMP Operational Integrity`).
  4. **Products** (`Therapeutic Standard`).
  5. **Research** (`Formulation Discipline`).
  6. **Careers** (`Our People & Culture`).
  7. **Contact** (`Our Commitment to Responsiveness`).
- Ensure each section has an independent, stable scroll track so nested or consecutive sticky sections never collide. Normal image galleries, cards, forms, and tables remain on standard smooth document scroll.

---

## 6. Performance & Production Hosting Audit

- **LCP Optimization:** Update `index.html` poster preload to `/assets/videos/posters/salas1.mp4_f50.webp`.
- **Fonts Optimization:** Use Google Fonts `display=swap` with `preconnect` for `Cormorant Garamond` and `Plus Jakarta Sans`.
- **Hosting (`vercel.json`):** Clean URLs, SPA rewrites, and 1-year immutable caching for `/assets/*` are already properly configured.
- **Bundle Optimization:** es2022 target with CSS code splitting and manual vendor chunks (`vendor-react`, `vendor-icons`). Oxlint passes with 0 warnings.

