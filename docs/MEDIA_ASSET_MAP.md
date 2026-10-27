# SALAS PHARMA — Comprehensive Media Asset Map & Architecture

This document serves as the official media asset registry for the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website redesign. It defines asset mapping across all pages, aspect ratios, reuse status, video playback rates, optimization status, and explicit fallback strategies.

---

## 1. Master Brand Identity Assets

| Asset Name | Canonical File Path | Format & Dimensions | Usage Locations | Appropriate for Reuse? | Optimization Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Master Logo (Transparent)** | `/assets/brand/salas-pharma-logo-transparent.webp` | WebP (520×120 equivalent, 66 KB) | Navbar, Mobile Drawer, Corporate Footer | **YES — Retained** | Optimized WebP with PNG fallback |
| **Master Logo (White Canvas)** | `/assets/brand/salas-pharma-logo.webp` | WebP (520×120 equivalent, 45 KB) | Intro Loader Fallback & Documentation | **YES — Retained** | Optimized WebP |
| **Master Vector Logo** | `/assets/brand/salas-pharma-logo.svg` | Scalable Vector Graphic (SVG) | High-DPI screens & Print | **YES — Retained** | Crisp lossless SVG |
| **Brand Favicon (Ribbon Emblem)** | `/favicon.svg` & `/favicon.png` | SVG / PNG (64×64, 192×192, 512×512) | Browser tabs, bookmarks, PWA | **YES — Retained** | Lossless SVG & PNG |

---

## 2. Page-by-Page Video & Image Media Asset Map

### A. Homepage (`#home`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Layer (Right Panel)** | `/assets/videos/salas2.mp4` | Video (Full HD) | Cleanroom Formulation Bioprocessing Reactors & Operator | 16:9 | **YES — Approved** | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop`, `priority: true` |
| **Hero Poster Fallback** | `/assets/videos/posters/salas2.mp4_f50.webp` | WebP Poster | High-resolution freeze frame of formulation vessels | 16:9 | **YES — Approved** | Instant decode, `loading="eager"` |
| **Feature Strip (Pillars)** | Inline SVG & Lucide Icons | Vector Icons | Precision Formulation, Quality, Therapeutics, Pan-India Network | 1:1 | **YES — Approved** | Lightweight zero-network SVG |
| **Section A — Commitment** | Pure SVG Vector Nodes & Typography | Inline Vector | Faint molecular nodes and bonds behind bold editorial statement | Responsive | **YES — Approved** | Zero-weight mathematical vector |
| **Section B — Corporate Overview** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | State-of-the-art South Sikkim facility landscape | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Section C — Therapeutic Showcase** | Dynamic Vector Icons & Badges | Vector / CSS | Neurology, Psychiatry, Orthopaedics, Gynaecology, Pain, GI, Vitamins, General | 1:1 | **YES — Approved** | Responsive SVG |
| **Section D — Products Encapsulation** | `/assets/videos/salas3.mp4` | Video (HD) | 3D capsule formulation and micro-pellet filling technology | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |
| **Section D — Products Poster** | `/assets/videos/posters/salas3.mp4_f50.webp` | WebP Poster | 3D capsule assembly freeze frame | 16:9 | **YES — Approved** | `loading="lazy"` |
| **Section E — Laboratory Dissolution** | `/assets/videos/laboratory/Lab2.mp4` | Video (4K UHD) | Magnetic stirrer beaker with active dissolution testing | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |
| **Section E — Laboratory Poster** | `/assets/videos/posters/Lab2-poster.webp` | WebP Poster | High-resolution dissolution beaker freeze frame | 16:9 | **YES — Approved** | `loading="lazy"` |
| **Section F — Manufacturing Press** | `/assets/images/manufacturing/manufacturing-line.webp` | Image (WebP) | Rotary tablet compression press and tooling | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Section F — Cleanroom AHU & Vessels**| `/assets/images/manufacturing/manufacturing-cleanroom.webp` | Image (WebP) | Sterile formulation reactors and cleanroom air handling | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Section F — Packaging Conveyor Line** | `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with optical sensor | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |
| **Section F — Packaging Poster** | `/assets/videos/posters/salas1.mp4_f50.webp` | WebP Poster | Automated conveyor line freeze frame | 16:9 | **YES — Approved** | `loading="lazy"` |
| **Section F — Rotating Quality Seal** | SVG Canvas Vector | Vector Seal | Concentric ring with certified pharmaceutical quality motto | 1:1 | **YES — Approved** | Lightweight CSS rotation |
| **Section G — Dissolution Kinetics** | `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet dissolution kinetics and active release | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |
| **Section G — Dissolution Poster** | `/assets/videos/posters/salas4.mp4_f50.webp` | WebP Poster | High-resolution effervescence freeze frame | 16:9 | **YES — Approved** | `loading="lazy"` |
| **Section H — Careers Team Culture** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Pharmaceutical research team collaborating in lab | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Section 7 — Signature Closing** | Inline Vector Capsule & Rings | Vector Motif | Tilted bicolored capsule with cyclopentane molecular rings | Responsive | **YES — Approved** | Smooth GPU transform |

---

### B. About Us (`#about`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Image Showcase** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | Modern pharmaceutical plant in South Sikkim | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Philosophy Ambient BG** | `/assets/videos/background.mp4` | Video (HD) | Subtle 3D DNA molecular helix ambient background | Full Width | **YES — Approved** | `playbackRate: 1.0`, `opacity: 0.35`, soft edge mask |
| **Corporate Journey Card** | `/assets/images/hero/hero-laboratory.webp` | Image (WebP) | Sterile cleanroom formulation suite | 4:3 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Quality Commitment Card** | `/assets/images/quality/quality-control.webp` | Image (WebP) | Regulatory compliance & batch testing | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **People & Purpose Card** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Cross-functional pharmaceutical specialists | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |

---

### C. Products Catalogue (`#products`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Products Hero Showcase** | `/assets/images/products/products-dosage-forms.webp` | Image (WebP) | Precision tablets, bicolored capsules & glass ampoules | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Encapsulation Technology Video**| `/assets/videos/salas3.mp4` | Video (HD) | 3D micro-pellet capsule encapsulation technology | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |
| **Therapeutic Badges (8 Categories)** | Inline SVG Badges | SVG Icons | Neurology, Psychiatry, Orthopaedics, Gynaecology, etc. | 1:1 | **YES — Approved** | Zero layout-shift |

---

### D. Laboratories & Analytical Testing (`#laboratories`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background Video** | `/assets/videos/laboratory/Lab2.mp4` | Video (4K UHD) | Magnetic stirrer beaker with active dissolution testing | 16:9 Full | **YES — Approved** | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop`, `priority: true` |
| **Hero Poster Frame** | `/assets/videos/posters/Lab2-poster.webp` | WebP Poster | High-resolution beaker dissolution freeze frame | 16:9 | **YES — Approved** | Instant decode, `loading="eager"` |
| **Analytical Testing Card** | `/assets/images/laboratory/analytical-testing.webp`| Image (WebP) | Analytical chemist executing assay validation | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Instrumentation Card** | `/assets/images/laboratory/microscope-evaluation.webp` | Image (WebP) | High-magnification microscope examination | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Lab Environment Card** | `/assets/images/laboratory/lab-environment.webp` | Image (WebP) | Cleanroom analytical testing workstation | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Editorial Showcase Video**| `/assets/videos/laboratory/Lab1.mp4` | Video (HD) | Scientist documenting assay metrics and sample logs | 16:9 | **YES — Approved** | `playbackRate: 1.0`, Proximity auto-play |

---

### E. Manufacturing & Quality (`#manufacturing`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Packaging Banner Video** | `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with optical sensor | 16:9 | **YES — Approved** | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop` |
| **Facility Exterior** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | South Sikkim facility in green mountain valley | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Cleanroom AHU & Vessels** | `/assets/images/manufacturing/manufacturing-cleanroom.webp` | Image (WebP) | Sterile formulation reactors and cleanroom AHU | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Tablet Compression Press** | `/assets/images/manufacturing/manufacturing-line.webp` | Image (WebP) | Stainless rotary compression press in action | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Packaging & Optical Inspection**| `/assets/images/manufacturing/packaging-inspection.webp` | Image (WebP) | Blister strip inspection and automated cartoning | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |

---

### F. R&D and Innovation (`#research`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R&D Hero Video** | `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet dissolution kinetics and active release | 16:9 | **YES — Approved** | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop` |
| **Analytical HPLC Systems** | `/assets/images/research/rnd-laboratory-research.webp` | Image (WebP) | Multi-column HPLC instrumentation and chromatography | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Formulation Science** | `/assets/images/research/laboratory-research.webp` | Image (WebP) | Pre-formulation assay and degradation testing | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Ambient DNA Helix BG** | `/assets/videos/background.mp4` | Video (HD) | Subtle rotating DNA helix behind R&D pillars | Full Width | **YES — Approved** | `playbackRate: 1.0`, `opacity: 0.35` |

---

### G. Careers & Contact (`#careers` / `#contact`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Appropriate for Reuse? | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Careers Hero Showcase** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Multidisciplinary pharmaceutical team | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Corporate HQ Building** | `/assets/images/corporate/contact-corporate-office.webp` | Image (WebP) | Modern commercial corporate glass building | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |
| **Sikkim Manufacturing Plant** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | South Sikkim facility in mountain valley | 16:9 | **YES — Approved** | `loading="lazy"`, `decoding="async"` |

---

## 3. Explicit Missing Asset Registry (`NEEDED`)

The following assets are marked `NEEDED` from the client for final production deployment. Real verified fallback assets are currently active to ensure zero broken images or missing media:

| Target Page & Section | Recommended Filename | Suggested Subject / Composition | Aspect Ratio & Recommended Dimensions | Status | Active Existing Fallback |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Video (New Client Reel)** | `hero-brand-cinematic.mp4` | High-resolution on-site footage of South Sikkim plant cleanrooms, compression, and analytical scientists | 16:9 (1920×1080 @ 60fps, WebM/MP4) | `NEEDED` | Active fallback: `/assets/videos/salas2.mp4` |
| **Hero Video Poster** | `hero-brand-cinematic-poster.webp` | High-res sharp still from official on-site video reel | 16:9 (1920×1080 WebP) | `NEEDED` | Active fallback: `/assets/videos/posters/salas2.mp4_f50.webp` |
| **Regulatory Certificates** | `certificates-gmp.webp` | Official Schedule M / WHO-GMP certificate scan with seal | A4 / 3:4 (1200×1600 WebP) | `NEEDED` | Active fallback: Verified SVG Quality Seal with text compliance statement |
| **Individual Product Blisters** | `sku-[product-name].webp` | Individual SKU product carton and blister pack studio shot on clean white background | 1:1 (800×800 WebP) | `NEEDED` | Active fallback: Labeled category dosage cards (`products-dosage-forms.webp`) |
| **Leadership / Founders** | `leadership-directors.webp` | Executive management and founders portrait in formal corporate attire | 3:2 (1200×800 WebP) | `NEEDED` | Active fallback: Corporate heritage timeline & team showcase |

---

## 4. Verification Check & Asset Integrity

- All referenced assets in this map exist on disk in `public/assets/` in both modern WebP format and legacy JPG fallback.
- No proprietary assets, logos, or screenshots from leucine.ai are used in any capacity.
- All media complies with responsive loading standards (`decoding="async"`, `loading="lazy"` on below-the-fold elements, and explicit dimensions to eliminate Cumulative Layout Shift).
