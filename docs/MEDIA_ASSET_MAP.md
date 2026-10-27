# SALAS PHARMA — Comprehensive Media Asset Map & Architecture

This document serves as the official media asset registry for the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website. It defines asset mapping across all pages, aspect ratios, optimization status, video playback rates, and explicit fallback strategies.

---

## 1. Master Brand Identity Assets

| Asset Name | Canonical File Path | Format & Dimensions | Usage Locations | Optimization Status |
| :--- | :--- | :--- | :--- | :--- |
| **Master Logo (Transparent)** | `/assets/brand/salas-pharma-logo-transparent.webp` | WebP (520×120 equivalent, 66 KB) | Navbar, Mobile Drawer, Footer | Optimized (WebP with PNG fallback) |
| **Master Logo (White Canvas)** | `/assets/brand/salas-pharma-logo.webp` | WebP (520×120 equivalent, 45 KB) | Intro Loader Reveal Card | Optimized (WebP with PNG fallback) |
| **Master Vector Logo** | `/assets/brand/salas-pharma-logo.svg` | Scalable Vector Graphic (SVG) | High-DPI screens & Print | Crisp lossless SVG |
| **Brand Favicon (Ribbon Emblem)** | `/favicon.svg` & `/favicon.png` | SVG / PNG (64×64, 192×192, 512×512) | Browser tabs, bookmarks, PWA | Optimized |

---

## 2. Page-by-Page Media Asset Map

### A. Homepage (`#home`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Layer (Right Panel)** | `/assets/videos/salas2.mp4` | Video (Full HD) | Cleanroom Formulation Bioprocessing Reactors & Operator | 16:9 | `playbackRate: 1.75`, `autoPlay`, `muted`, `loop`, `priority: true` |
| **Hero Fallback / Poster** | `/assets/videos/posters/salas2.mp4_f50.webp` | WebP Poster | High-resolution freeze frame of formulation vessels | 16:9 | Instant decode, `loading="eager"` |
| **Feature Strip (Pillars)** | Inline SVG & Micro-Icons | Vector Icons | Manufacturing, Quality, Therapeutics, Pan-India Network | 1:1 | Lightweight zero-network SVG |
| **Corporate Overview Card** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | State-of-the-art South Sikkim facility landscape | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Quality Control Showcase** | `/assets/images/quality/quality-control.webp` | Image (WebP) | Analytical chemist verifying sample compliance | 4:3 | `loading="lazy"`, `decoding="async"` |
| **Formulation Science Showcase** | `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet effervescence and active dissolution | 16:9 | `playbackRate: 1.0`, IntersectionObserver auto-play |
| **Formulation Poster** | `/assets/videos/posters/salas4.mp4_f50.webp` | WebP Poster | High-resolution tablet dissolution freeze frame | 16:9 | `loading="lazy"` |
| **Manufacturing Line Card** | `/assets/images/manufacturing/manufacturing-line.webp` | Image (WebP) | Rotary tablet compression press and tooling | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Packaging & Cleanroom Card**| `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with inline cameras | 16:9 | `playbackRate: 1.0`, IntersectionObserver auto-play |
| **Packaging Poster** | `/assets/videos/posters/salas1.mp4_f50.webp` | WebP Poster | Automated conveyor line freeze frame | 16:9 | `loading="lazy"` |
| **Product Portfolio Showcase** | `/assets/videos/salas3.mp4` | Video (HD) | 3D capsule formulation and micro-pellet filling | 16:9 | `playbackRate: 1.0`, IntersectionObserver auto-play |
| **Product Portfolio Poster** | `/assets/videos/posters/salas3.mp4_f50.webp` | WebP Poster | 3D capsule assembly freeze frame | 16:9 | `loading="lazy"` |
| **People & Culture Card** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Pharmaceutical research team collaborating in lab | 16:9 | `loading="lazy"`, `decoding="async"` |

---

### B. About Us (`#about`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Image Showcase** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | Modern pharmaceutical plant in South Sikkim | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Philosophy Banner BG** | `/assets/videos/background.mp4` | Video (HD) | Subtle 3D DNA molecular helix ambient background | Full Width | `playbackRate: 1.0`, `opacity: 0.35`, soft edge mask |
| **Corporate Journey Card** | `/assets/images/hero/hero-laboratory.webp` | Image (WebP) | Sterile cleanroom formulation suite | 4:3 | `loading="lazy"`, `decoding="async"` |
| **Quality Commitment Card** | `/assets/images/quality/quality-control.webp` | Image (WebP) | Regulatory compliance & batch testing | 16:9 | `loading="lazy"`, `decoding="async"` |
| **People & Purpose Card** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Cross-functional pharmaceutical specialists | 16:9 | `loading="lazy"`, `decoding="async"` |

---

### C. Products Catalogue (`#products`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Products Hero Showcase** | `/assets/images/products/products-dosage-forms.webp` | Image (WebP) | Precision tablets, bicolored capsules & glass ampoules | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Pellet Encapsulation Video**| `/assets/videos/salas3.mp4` | Video (HD) | 3D micro-pellet capsule encapsulation technology | 16:9 | `playbackRate: 1.0`, IntersectionObserver auto-play |
| **Therapeutic Cards (8)** | Categorized visual badges & dosage imagery | WebP / SVG | Tablets, Capsules, Injectables, Oral Liquids | 1:1 & 16:9 | Zero shift, keyboard-accessible |

---

### D. Laboratories & Analytical Testing (`#laboratories`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background Video** | `/assets/videos/laboratory/Lab2.mp4` | Video (4K UHD) | Magnetic stirrer beaker with active dissolution testing | 16:9 Full | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop`, `priority: true` |
| **Hero Poster Frame** | `/assets/videos/posters/Lab2-poster.webp` | WebP Poster | High-resolution beaker dissolution freeze frame | 16:9 | Instant decode, `loading="eager"` |
| **Analytical Testing Card** | `/assets/images/laboratory/analytical-testing.webp`| Image (WebP) | Analytical chemist executing assay validation | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Instrumentation Card** | `/assets/images/laboratory/microscope-evaluation.webp` | Image (WebP) | High-magnification microscope examination | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Lab Environment Card** | `/assets/images/laboratory/lab-environment.webp` | Image (WebP) | Cleanroom analytical testing workstation | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Editorial Showcase Video**| `/assets/videos/laboratory/Lab1.mp4` | Video (HD) | Scientist documenting assay metrics and sample logs | 16:9 | `playbackRate: 1.0`, IntersectionObserver auto-play |

---

### E. Manufacturing & Quality (`#manufacturing`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Facility Banner Video** | `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with optical sensor | 16:9 | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop` |
| **Facility Banner Poster** | `/assets/videos/posters/salas1.mp4_f50.webp` | WebP Poster | Packaging conveyor freeze frame | 16:9 | `loading="lazy"` |
| **Sikkim Plant Exterior** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | South Sikkim facility in pristine mountain valley | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Cleanroom AHU & Vessels** | `/assets/images/manufacturing/manufacturing-cleanroom.webp` | Image (WebP) | Sterile formulation reactors and cleanroom AHU | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Tablet Compression Press** | `/assets/images/manufacturing/manufacturing-line.webp` | Image (WebP) | Stainless rotary compression press in action | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Packaging & Optical Inspection**| `/assets/images/manufacturing/packaging-inspection.webp` | Image (WebP) | Blister strip inspection and automated cartoning | 16:9 | `loading="lazy"`, `decoding="async"` |

---

### F. R&D and Innovation (`#research`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R&D Hero Video** | `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet dissolution kinetics and active release | 16:9 | `playbackRate: 1.0`, `autoPlay`, `muted`, `loop` |
| **R&D Hero Poster** | `/assets/videos/posters/salas4.mp4_f50.webp` | WebP Poster | High-resolution effervescence freeze frame | 16:9 | `loading="lazy"` |
| **Analytical HPLC Systems** | `/assets/images/research/rnd-laboratory-research.webp` | Image (WebP) | Multi-column HPLC instrumentation and chromatography | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Formulation Science** | `/assets/images/research/laboratory-research.webp` | Image (WebP) | Pre-formulation assay and degradation testing | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Ambient DNA Helix BG** | `/assets/videos/background.mp4` | Video (HD) | Subtle rotating DNA helix behind R&D pillars | Full Width | `playbackRate: 1.0`, `opacity: 0.35` |

---

### G. Careers (`#careers`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Careers Hero Showcase** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Cross-functional Indian pharmaceutical scientists | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Workplace Pillars** | Micro-illustrations & clean SVG | Vector Icons | Learning, Collaboration, Healthcare Purpose | 1:1 | High performance, zero bloat |

---

### H. Contact Us (`#contact`)

| Section | Asset Path | Media Type | Intended Usage & Subject | Aspect Ratio | Playback / Load Config |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Corporate HQ Building** | `/assets/images/corporate/contact-corporate-office.webp` | Image (WebP) | Modern commercial corporate glass building | 16:9 | `loading="lazy"`, `decoding="async"` |
| **Sikkim Manufacturing Plant** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | South Sikkim facility in green mountain valley | 16:9 | `loading="lazy"`, `decoding="async"` |

---

## 3. Asset Request Registry (Future Client Additions)

If the client wishes to provide proprietary high-resolution photographs taken on-site, the following slots are designated:

| Target Page & Section | Recommended Filename | Composition / Subject | Recommended Dimensions | Status | Fallback Implemented |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **About Us: Heritage** | `about-founding-team.webp` | Historical founding team or executive leadership | 1200×800 (3:2) | `OPTIONAL` | Neutral corporate profile timeline |
| **Products: Individual SKU** | `products-sku-[name].webp` | Clean white-background product blister carton | 800×800 (1:1) | `OPTIONAL` | Structured category dosage cards |
| **Laboratories: Specific HPLC** | `laboratories-hplc-rack.webp` | Verified Waters/Agilent HPLC machine with serial | 1600×900 (16:9) | `OPTIONAL` | `analytical-testing.webp` |
| **Manufacturing: Certificate** | `certificates-gmp.webp` | Official Schedule M / WHO-GMP certificate scan | 800×1130 (A4) | `AWAITING CLIENT`| Verified text compliance statement |

---

## 4. Verification Check of Assets on Disk

All referenced assets have been verified to exist on disk in `public/assets/` in both modern WebP format and legacy JPG fallback.
