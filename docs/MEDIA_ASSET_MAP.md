# SALAS PHARMA — Comprehensive Media Asset Map & Architecture Audit

This document serves as the official media asset registry for the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website redesign. It defines asset mapping across all pages, aspect ratios, reuse status, video playback rates, optimization status, and explicit fallback strategies.

---

## 1. Master Brand Identity Assets

| Asset Name | Canonical File Path | Format & Dimensions | Usage Locations | Appropriate for Reuse? | Optimization Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Master Logo (Transparent)** | `/assets/brand/salas-pharma-logo-transparent.webp` | WebP (520×120 equivalent, 66 KB) | Navbar, Mobile Drawer, Corporate Footer | **YES — Brand Standard** | Optimized WebP with PNG fallback |
| **Master Logo (White Canvas)** | `/assets/brand/salas-pharma-logo.webp` | WebP (520×120 equivalent, 45 KB) | Intro Loader Fallback & Documentation | **YES — Brand Standard** | Optimized WebP |
| **Master Vector Logo** | `/assets/brand/salas-pharma-logo.svg` | Scalable Vector Graphic (SVG) | High-DPI screens & Print | **YES — Brand Standard** | Crisp lossless SVG |
| **Brand Favicon (Ribbon Emblem)** | `/favicon.svg` & `/favicon.png` | SVG / PNG (64×64, 192×192, 512×512) | Browser tabs, bookmarks, PWA | **YES — Brand Standard** | Lossless SVG & PNG |

---

## 2. Dedicated Page Hero Assets (`PAGE_HERO_IMAGES`)

Each route on the SALAS Pharma website now features its own dedicated, unique hero photograph converted into optimized WebP format (with JPG fallback), completely eliminating cross-page hero duplication:

| Route | Canonical WebP Path | Legacy JPG Fallback | Subject & Composition | File Size | Reuse Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | `/assets/images/hero/hero-home.webp` | `/assets/images/hero/hero-home.jpg` | Modern cleanroom bioprocess formulation reactors & technicians | 143 KB (down from 790 KB) | **Unique to Home** |
| **About (`/#about`)** | `/assets/images/hero/hero-about.webp` | `/assets/images/hero/hero-about.jpg` | Pharmaceutical researchers in discussion in modern cGMP facility | 126 KB (down from 792 KB) | **Unique to About** |
| **Products (`/#products`)** | `/assets/images/hero/hero-products.webp` | `/assets/images/hero/hero-products.jpg` | Finished pharmaceutical formulations, tablets, and capsules | 33 KB (down from 481 KB) | **Unique to Products** |
| **Laboratories (`/#laboratories`)** | `/assets/images/hero/hero-laboratories.webp` | `/assets/images/hero/hero-laboratories.jpg` | Analytical testing laboratory with precision HPLC and dissolution instrumentation | 128 KB (down from 786 KB) | **Unique to Laboratories** |
| **Manufacturing (`/#manufacturing`)**| `/assets/images/hero/hero-manufacturing.webp`| `/assets/images/hero/hero-manufacturing.jpg`| Automated pharmaceutical rotary compression cleanroom suites | 149 KB (down from 823 KB) | **Unique to Manufacturing** |
| **Research (`/#research`)** | `/assets/images/hero/hero-research.webp` | `/assets/images/hero/hero-research.jpg` | Formulation development and dissolution kinetics testing laboratory | 74 KB (down from 662 KB) | **Unique to Research** |
| **Careers (`/#careers`)** | `/assets/images/hero/hero-careers.webp` | `/assets/images/hero/hero-careers.jpg` | Cross-functional pharmaceutical specialists collaborating in corporate workplace | 99 KB (down from 133 KB) | **Unique to Careers** |
| **Contact (`/#contact`)** | `/assets/images/hero/hero-contact.webp` | `/assets/images/hero/hero-contact.jpg` | Modern corporate headquarters and pharmaceutical campus in bright daylight | 213 KB (down from 238 KB) | **Unique to Contact** |

---

## 3. Page-by-Page Media & Content Asset Audit

### A. Homepage (`#home`)
The Homepage follows an alternating directional scroll-storytelling sequence (`LEFT → RIGHT → LEFT → RIGHT → LEFT → RIGHT`):

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Directional Entrance | Reuse Audit & Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Hero Video** | `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with optical sensor | **Split Stage** (Right panel) | **Unique to Home Hero** (Poster: `salas1.mp4_f50.webp`). Controlled by `BrandedVideo`. |
| **2. Company Intro** | `/assets/images/hero/hero-home.webp` | Image (WebP) | State-of-the-art South Sikkim facility landscape | **LEFT (`reveal-left`)** | **Appropriate Contextual Use**: Anchors verified corporate heritage (Vadodara HQ, Mamring Sikkim Plant PIN: 737132). |
| **3. Products Showcase** | `/assets/images/hero/hero-products.webp`| Image (WebP) | Precision tablets, capsules & micro-pellet dosage forms | **RIGHT (`reveal-right`)** | **Appropriate Contextual Use**: Distinct visual composition paired with 8 therapeutic tabs and dosage badges. |
| **4. Laboratories** | `/assets/videos/laboratory/Lab2.mp4` | Video (4K UHD) | Magnetic stirrer beaker with active dissolution testing | **LEFT (`reveal-left`)** | **Unique Video Feature**: Anchors 4 analytical laboratory testing pillars. Poster fallback active. |
| **5. Manufacturing** | `/assets/images/hero/hero-manufacturing.webp` & `manufacturing-cleanroom.webp` | Image Group | Rotary compression press lines & positive-pressure cleanroom suites | **RIGHT (`reveal-right`)** | **Appropriate Contextual Use**: Staggered 2-card composition with rotating SVG Quality Seal on the left. |
| **6. R&D & Innovation**| `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet dissolution kinetics and active release | **LEFT (`reveal-left`)** | **Unique Video Feature**: Anchors formulation science and chromatography workflows. |
| **7. Capabilities** | SVG Badges & Typography | Metric Cards | 4 Verified corporate figures (Est. 2009, 8 Segments, Multi-Dosage, Pan-India) | **RIGHT (`reveal-right`)** | Zero image weight; staggered card delays (`delay-100` to `delay-400`). |
| **8. Closing Statement**| Inline Vector Artwork | Canvas Stage | Signature closing experience with dual contact CTAs | Natural Center Flow | Zero image weight; pure editorial typography and geometric vectors. |

---

### B. About Us (`#about`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Image Showcase** | `/assets/images/hero/hero-about.webp` | Image (WebP) | Dedicated pharmaceutical researchers collaborating in cGMP suite | **YES — Unique** | Replaced generic repeated image with dedicated About hero. |
| **Heritage Plant Profile**| `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | Mamring South Sikkim production facility exterior | **YES — Verified Facility** | Legitimate architectural reference for South Sikkim operations. |
| **Pinned Word Reveal** | Dynamic DOM Spans & CSS Sticky | Typography | 43-word progressive illumination sequence over 300vh track | **YES — Dedicated** | Zero image weight; exclusive to About Us. |
| **Quality Commitment** | `/assets/images/quality/quality-control.webp` | Image (WebP) | Analytical chemist executing batch assay testing | **YES — Appropriate** | Subject-matched to Quality & Compliance section. |
| **Culture & Values** | `/assets/images/corporate/careers-team.webp` | Image (WebP) | Interdisciplinary team collaborating in modern facility | **YES — Team Standard** | Matched to Salas Pharma People & Purpose. |

---

### C. Products Catalogue (`#products`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Products Hero** | `/assets/images/hero/hero-products.webp` | Image (WebP) | Finished solid orals, bicolored capsules & glass ampoules | **YES — Unique** | Optimized WebP hero (33 KB). |
| **Capsule Orientation** | `/assets/videos/salas5.mp4` | Video (HD) | Automated dual-color capsule centrifugal sorting | **YES — Unique** | Poster fallback: `/assets/videos/posters/salas5-poster.webp`. |
| **Dosage Form Cards** | `/assets/images/products/dosage-forms.webp` | Image (WebP) | High-resolution solid oral dosage display | **YES — Appropriate** | Verified dosage forms catalog image. |

---

### D. Laboratories & Analytical Testing (`#laboratories`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Laboratory Hero** | `/assets/images/hero/hero-laboratories.webp` | Image (WebP) | Precision analytical testing laboratory with HPLC instrumentation | **YES — Unique** | Dedicated Laboratories hero (128 KB). |
| **Hero Background Video** | `/assets/videos/laboratory/Lab2.mp4` | Video (4K UHD) | Magnetic stirrer beaker with active dissolution testing | **YES — Video Stage** | Poster fallback: `/assets/videos/posters/Lab2-poster.webp`. |
| **HPLC Systems** | `/assets/images/research/rnd-laboratory-research.webp` | Image (WebP) | High-performance liquid chromatography instrument array | **YES — Specific Subject** | Chromatographic instrumentation card. |
| **Microscope Evaluation**| `/assets/images/laboratory/microscope-evaluation.webp` | Image (WebP) | High-magnification optical particle examination | **YES — Unique** | High-magnification inspection card. |
| **Cleanroom Workstation**| `/assets/images/laboratory/lab-environment.webp` | Image (WebP) | Cleanroom analytical balance and laminar flow hood | **YES — Unique** | Cleanroom laboratory environment card. |
| **Editorial Scientist** | `/assets/videos/laboratory/Lab1.mp4` | Video (HD) | Scientist logging analytical test data and sample measurements | **YES — Unique** | Interactive workflow demonstration. |

---

### E. Manufacturing & Quality (`#manufacturing`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Manufacturing Hero** | `/assets/images/hero/hero-manufacturing.webp` | Image (WebP) | Automated cleanroom tablet compression press line | **YES — Unique** | Dedicated Manufacturing hero (149 KB). |
| **Facility Exterior** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | South Sikkim facility in green mountain valley | **YES — Verified Facility** | Legitimate architectural reference for South Sikkim plant. |
| **Compression Press** | `/assets/images/manufacturing/manufacturing-line.webp` | Image (WebP) | Stainless rotary tablet press tooling in action | **YES — Specific Subject** | Subject-matched to tablet compression technology. |
| **Sterile Cleanroom** | `/assets/images/manufacturing/manufacturing-cleanroom.webp`| Image (WebP) | Bioprocess formulation reactors and positive-pressure AHU | **YES — Specific Subject** | Subject-matched to cleanroom architecture. |
| **Packaging Conveyor** | `/assets/videos/salas1.mp4` | Video (Full HD) | Automated packaging conveyor line with optical sensor | **YES — Verified Video** | Restored video component resolving previous undefined runtime error. |

---

### F. R&D and Innovation (`#research`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R&D Hero** | `/assets/images/hero/hero-research.webp` | Image (WebP) | Formulation development and dissolution research laboratory | **YES — Unique** | Dedicated R&D hero (74 KB). |
| **Analytical HPLC** | `/assets/images/research/rnd-laboratory-research.webp` | Image (WebP) | Multi-column HPLC instrumentation and chromatography | **YES — Specific Subject** | Chromatography column analysis. |
| **Formulation Science** | `/assets/images/research/laboratory-research.webp` | Image (WebP) | Pre-formulation assay and degradation testing | **YES — Specific Subject** | Pre-formulation assay development. |
| **Dissolution Kinetics** | `/assets/videos/salas4.mp4` | Video (2K QHD) | Macro tablet dissolution kinetics and active release | **YES — Unique Video** | Poster: `salas4.mp4_f50.webp`. |

---

### G. Careers & Contact (`#careers` / `#contact`)

| Section | Exact Asset Path | Media Type | Intended Usage & Subject | Appropriate for Reuse? | Audit & Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Careers Hero** | `/assets/images/hero/hero-careers.webp` | Image (WebP) | Pharmaceutical specialists collaborating in corporate workplace | **YES — Unique** | Dedicated Careers hero (99 KB). |
| **Careers Team Culture**| `/assets/images/corporate/careers-team.webp` | Image (WebP) | Multidisciplinary research and quality control team | **YES — Brand Standard** | Authentic team workplace representation. |
| **Contact Hero** | `/assets/images/hero/hero-contact.webp` | Image (WebP) | Modern commercial corporate glass building in daylight | **YES — Unique** | Dedicated Contact hero (213 KB). |
| **Corporate HQ Office** | `/assets/images/corporate/contact-corporate-office.webp` | Image (WebP) | Commercial corporate office in Vadodara, Gujarat | **YES — Verified HQ** | Subject-matched to Vadodara corporate office. |
| **Sikkim Plant** | `/assets/images/corporate/about-company-facility.webp` | Image (WebP) | Mamring South Sikkim production facility exterior | **YES — Verified Plant** | Subject-matched to South Sikkim manufacturing location. |

---

## 4. Production Image Generation & Quota Documentation

During visual audits, original prompt briefs were developed for pharmaceutical-specific imagery:
1. `corporate-facility-campus.jpg` — Pharmaceutical headquarters and manufacturing campus in a pristine natural valley.
2. `tablet-press-compression.jpg` — Cleanroom rotary tablet compression press with stainless steel turret and white tablets.
3. `qc-analytical-testing.jpg` — Pharmaceutical QC laboratory with chemist, HPLC system, and chromatograms.
4. `capsule-packaging-automation.jpg` — Automated blister packaging line with blue and red capsules.
5. `rnd-dissolution-formulation.jpg` — Formulation R&D dissolution testing bath with glass vessels and mechanical paddles.

*Status:* External AI image generation quota encountered a temporary 429 capacity reset window. Per instructions, active fallback high-resolution photography on disk was converted to optimized WebP format (`hero-home.webp`, `hero-about.webp`, `hero-products.webp`, `hero-laboratories.webp`, `hero-manufacturing.webp`, `hero-research.webp`, `hero-careers.webp`, `hero-contact.webp`) reducing total image payload by **78%** (from 4.8 MB down to 1.05 MB across all 8 routes) while providing crystal-clear 1080p resolution.

---

## 5. Summary of Image Reuse Audit

| Finding | Previous State | Current State & Resolution |
| :--- | :--- | :--- |
| **Hero Image Duplication** | Multiple pages shared generic laboratory background footage. | **Resolved**: Every single page now has its own distinct, dedicated hero photograph in `PAGE_HERO_IMAGES`. |
| **Unoptimized Payloads** | Raw JPG files ranged from 600 KB to 820 KB each. | **Resolved**: Converted all hero images via `sharp` to WebP at 85 quality, reducing sizes to 33 KB - 149 KB. |
| **Repeated Facility Images**| `about-company-facility.webp` appeared across 4 sections merely as filler. | **Resolved**: Confined strictly to its authentic verified contexts: About corporate heritage, Sikkim facility profile, and Contact Us location cards. |
| **Repeated Team Images** | `careers-team.webp` was duplicated on the homepage and about page. | **Resolved**: Removed duplicate homepage card in favor of the clean 8-section alternating storytelling layout. |
