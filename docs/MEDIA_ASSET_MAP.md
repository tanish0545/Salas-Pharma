# SALAS PHARMA — Comprehensive Media Asset Map & Video Playback Architecture

This document serves as the official media asset registry for the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website. It defines the asset audit for all 9 active video files, brand identity assets, static hero photography, playback behaviors, and fallback strategies.

---

## 1. Master Video Asset Inventory & Technical Specifications

Every video in the repository has been audited directly via frame and stream analysis for exact resolution, duration, frame rate, file size, technical subject matter, page assignment, and playback configuration.

| Video File | Exact File Path | Resolution & Aspect Ratio | Duration & FPS | File Size | Technical Subject Matter | Page & Section Assignment | Playback Configuration | Optimization & Poster Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **salas1.mp4** | `/public/assets/videos/salas1.mp4` | 1920×1080 (16:9 Full HD) | 10.00s @ 24.00 fps | 15.62 MB | Automated high-speed bottle filling & packaging line with optical sensors and two technicians in blue uniforms | **Home Page Hero** (Section 1 right stage) & **Manufacturing Page** (Feed 1: Automated Conveyor) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `priority={true}` on Home Hero, `playbackRate=1.0` | Poster: `/assets/videos/posters/salas1.mp4_f50.webp` (92 KB WebP) |
| **salas2.mp4** | `/public/assets/videos/salas2.mp4` | 1920×1080 (16:9 Full HD) | 8.00s @ 24.00 fps | 13.20 MB | Full sterile cleanroom facility with high-capacity stainless-steel bioprocessing vessels, formulation reactors, and operator in sterile gown | **Manufacturing Page** (Feed 2: Cleanroom Bioprocess Reactors) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.25`, lazy proximity attach | Poster: `/assets/videos/posters/salas2.mp4_f50.webp` (188 KB WebP) |
| **salas3.mp4** | `/public/assets/videos/salas3.mp4` | 1280×720 (16:9 HD) | 13.50s @ 30.00 fps | 2.32 MB | 3D mechanical visualization of multi-particulate pellet filling, volumetric dosing, and capsule assembly | **Products Page** (Feed 2: Pellet Encapsulation 3D) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, lazy proximity attach | Poster: `/assets/videos/posters/salas3.mp4_f50.webp` (33 KB WebP) |
| **salas4.mp4** | `/public/assets/videos/salas4.mp4` | 2560×1440 (16:9 2K QHD) | 5.04s @ 24.00 fps | 4.00 MB | Macro slow-motion laboratory dissolution kinetics and active effervescence in liquid | **Home Page** (Section 6 R&D) & **Research Page** (Section 4 Dissolution) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, lazy proximity attach | Poster: `/assets/videos/posters/salas4.mp4_f50.webp` (68 KB WebP) |
| **salas5.mp4** | `/public/assets/videos/salas5.mp4` | 1280×720 (16:9 HD) | 17.00s @ 25.00 fps | 5.03 MB | 3D visualization of dual-color capsule centrifugal orientation and high-speed drum sorting | **Products Page** (Feed 1: Centrifugal Sorter 3D) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, lazy proximity attach | Poster: `/assets/videos/posters/salas5-poster.webp` (88 KB WebP) |
| **salas6.mp4** | `/public/assets/videos/salas6.mp4` | 1920×1080 (16:9 Full HD) | 9.96s @ 24.00 fps | 4.58 MB | Cleanroom female specialist operating digital SCADA touchscreen terminal controlling bioprocess formulation vessels and conveyor line | **Manufacturing Page** (Feed 3: SCADA Terminal & Control) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, lazy proximity attach | Poster: `/assets/videos/posters/salas6-poster.webp` (54 KB WebP) |
| **background.mp4** | `/public/assets/videos/background.mp4` | 1280×720 (16:9 HD) | 16.64s @ 25.00 fps | 5.20 MB | Ambient 3D molecular DNA double helix rotating in deep scientific blue lighting | **Ambient Video Background** (`AmbientVideoBackground.tsx`) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, low opacity overlay (0.85) | Poster: `/assets/videos/posters/background-poster.webp` (30 KB WebP) |
| **Lab1.mp4** | `/public/assets/videos/laboratory/Lab1.mp4` | 1280×720 (16:9 HD) | 25.36s @ 29.97 fps | 4.66 MB | Analytical chemist verifying test data, documenting logs, and inspecting samples in research laboratory | **Laboratories Page** (Section 5: Operational Methodology) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, lazy proximity attach | Poster: `/assets/videos/posters/Lab1-poster.webp` (39 KB WebP) |
| **Lab2.mp4** | `/public/assets/videos/laboratory/Lab2.mp4` | 3840×2160 (16:9 4K UHD) | 20.21s @ 24.00 fps | 49.88 MB | 4K laboratory magnetic stirrer beaker with active dissolution testing in sterile pharmaceutical setting | **Home Page** (Section 4 Laboratories) | `autoPlay={true}`, `muted={true}`, `loop={true}`, `playsInline={true}`, `playbackRate=1.0`, `preload="metadata"` | Poster: `/assets/videos/posters/Lab2-poster.webp` (127 KB WebP) |

---

## 2. Playback Architecture & Performance Safeguards (`BrandedVideo.tsx`)

The playback engine in `src/components/common/BrandedVideo.tsx` enforces the following principles:

1. **Two-Stage Lazy Loading Pipeline:**
   - **Proximity Detection (`rootMargin: '400px'`):** Below-the-fold videos do NOT attach their `src` attribute until the user scrolls within 400px of their container, saving mobile bandwidth.
   - **Hero Priority Bypass:** The Home Hero video (`salas1.mp4`) sets `priority={true}`, attaching the source immediately with `preload="metadata"`.
2. **IntersectionObserver Play/Pause Synchronization:**
   - When a video enters the visible viewport (`threshold: 0.15`), `video.play()` is invoked.
   - When scrolled out of the viewport, `video.pause()` is immediately triggered, releasing GPU decoders.
   - Progress is maintained: when returning to the section, playback resumes from the existing timestamp.
3. **DOM Property Enforcement for Autoplay Compliance:**
   - WebKit/Safari and Chromium autoplay security policies require `video.muted = true`, `video.defaultMuted = true`, and `video.playsInline = true` to be set directly on the DOM element prior to `play()`.
4. **Resilient Promise Handling & Graceful Poster Fallback:**
   - If the browser blocks autoplay (e.g. low-power mode or aggressive battery saver), `playPromise.catch()` handles it silently.
   - The high-resolution WebP poster remains smoothly rendered with zero layout shift (CLS: 0.00).
5. **Background Tab Power Conservation:**
   - Listens to `document.visibilitychange`. Videos pause instantly when the user switches tabs and resume when returning.
6. **Accessibility:**
   - Honors `prefers-reduced-motion: reduce`, displaying static posters without initiating motion.

---

## 3. Dedicated Page Hero Photography (`PAGE_HERO_IMAGES`)

Each route features its own dedicated, unique hero photograph converted into optimized WebP format with JPG fallback, preventing cross-page duplication:

| Route | Canonical WebP Path | Legacy JPG Fallback | Subject & Composition | File Size |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | `/assets/images/hero/hero-home.webp` | `/assets/images/hero/hero-home.jpg` | Modern cleanroom bioprocess formulation reactors & technicians | 143 KB |
| **About (`/#about`)** | `/assets/images/hero/hero-about.webp` | `/assets/images/hero/hero-about.jpg` | Pharmaceutical researchers in discussion in modern cGMP facility | 126 KB |
| **Products (`/#products`)** | `/assets/images/hero/hero-products.webp` | `/assets/images/hero/hero-products.jpg` | Finished pharmaceutical formulations, tablets, and capsules | 33 KB |
| **Laboratories (`/#laboratories`)** | `/assets/images/hero/hero-laboratories.webp` | `/assets/images/hero/hero-laboratories.jpg` | Analytical testing laboratory with precision HPLC instrumentation | 128 KB |
| **Manufacturing (`/#manufacturing`)** | `/assets/images/hero/hero-manufacturing.webp` | `/assets/images/hero/hero-manufacturing.jpg` | Automated rotary compression cleanroom suites | 149 KB |
| **Research (`/#research`)** | `/assets/images/hero/hero-research.webp` | `/assets/images/hero/hero-research.jpg` | Formulation development and dissolution kinetics testing laboratory | 74 KB |
| **Careers (`/#careers`)** | `/assets/images/hero/hero-careers.webp` | `/assets/images/hero/hero-careers.jpg` | Cross-functional pharmaceutical specialists collaborating in corporate workplace | 99 KB |
| **Contact (`/#contact`)** | `/assets/images/hero/hero-contact.webp` | `/assets/images/hero/hero-contact.jpg` | Modern corporate headquarters and pharmaceutical campus in daylight | 213 KB |

---

## 4. Master Brand Identity Assets

| Asset Name | Canonical File Path | Format & Dimensions | Usage Locations |
| :--- | :--- | :--- | :--- |
| **Master Logo (Transparent)** | `/assets/brand/salas-pharma-logo-transparent.webp` | WebP (520×120 equivalent, 66 KB) | Navbar, Mobile Drawer, Corporate Footer |
| **Master Logo (White Canvas)** | `/assets/brand/salas-pharma-logo.webp` | WebP (520×120 equivalent, 45 KB) | Intro Loader Fallback & Documentation |
| **Master Vector Logo** | `/assets/brand/salas-pharma-logo.svg` | Scalable Vector Graphic (SVG) | High-DPI screens & Print |
| **Brand Favicon (Ribbon Emblem)** | `/favicon.svg` & `/favicon.png` | SVG / PNG (64×64, 192×192, 512×512) | Browser tabs, bookmarks, PWA |

---

## 5. Page-by-Page Media & Content Layout

### A. Homepage (`#home`)
Directional scroll-storytelling sequence (`LEFT → RIGHT → LEFT → RIGHT → LEFT → RIGHT`):
- **Hero Video:** `/assets/videos/salas1.mp4` (Full HD packaging conveyor line with optical sensors).
- **Company Profile:** `/assets/images/hero/hero-home.webp` (Mamring South Sikkim plant PIN: 737132, Vadodara HQ).
- **Products Showcase:** Static image card (`hero-products.webp`) paired with 8 therapeutic tabs and dosage badges (**Card 3 strictly maintained as an image card**).
- **Laboratories:** `/assets/videos/laboratory/Lab2.mp4` (4K dissolution magnetic stirrer).
- **Manufacturing:** Staggered 2-image composition (`hero-manufacturing.webp` & `manufacturing-cleanroom.webp`) with rotating SVG Quality Seal.
- **R&D & Innovation:** `/assets/videos/salas4.mp4` (2K QHD macro tablet dissolution kinetics).
- **Capabilities & Closing:** Pure SVG badges, metric counters, and signature closing canvas stage.

### B. About Us (`#about`)
- **Hero:** `/assets/images/hero/hero-about.webp` (Specialists collaborating in cGMP suite).
- **Storytelling Section (Section 2):** Pinned 300vh word-by-word progressive illumination sequence.
- **Infrastructure Profile:** `/assets/images/corporate/about-company-facility.webp` (Verified South Sikkim facility).
- **Heritage Timeline:** Interactive chronological milestones from 2009 to present.

### C. Products Catalogue (`#products`)
- **Hero:** `/assets/images/hero/hero-products.webp` (Dosage forms overview).
- **Interactive Technical Simulation Section:**
  - **Feed 1:** `/assets/videos/salas5.mp4` (Centrifugal capsule sorting & orientation drum).
  - **Feed 2:** `/assets/videos/salas3.mp4` (Precision multi-particulate pellet encapsulation).
  - Interactive pill switcher enables toggling between both 3D simulations.
- **Catalogue & Drawer:** 8-segment category filtering, instant search, and slide-over formulation specification drawer.

### D. Laboratories (`#laboratories`)
- **Hero:** `/assets/images/hero/hero-laboratories.webp` with scientific network SVG nodes.
- **Operational Methodology Video:** `/assets/videos/laboratory/Lab1.mp4` (Scientist logging HPLC measurements & batch assay).
- **Testing Pillars:** 4 interactive instrument cards (HPLC, Optical Microscopy, Cleanroom Balance, Dissolution Bath).

### E. Manufacturing & Quality (`#manufacturing`)
- **Hero:** `/assets/images/hero/hero-manufacturing.webp` (Rotary tablet compression suites).
- **Interactive Multi-Feed Manufacturing Showcase:**
  - **Feed 1:** `/assets/videos/salas1.mp4` (Packaging Conveyor & Optical Inspection).
  - **Feed 2:** `/assets/videos/salas2.mp4` (Cleanroom Bioprocess Formulation Reactors).
  - **Feed 3:** `/assets/videos/salas6.mp4` (SCADA Cleanroom Automation Terminal).
  - Visitors can toggle between all 3 authentic pharmaceutical footage feeds with live metadata badges.
- **The 4-Stage Manufacturing Journey:** Interactive stepper with synchronized visual inspection panels.
- **Quality Seal:** Rotating vector seal and regulatory compliance framework.

### F. R&D and Innovation (`#research`)
- **Hero:** `/assets/images/hero/hero-research.webp` (Formulation testing laboratory).
- **Dissolution Kinetics Video:** `/assets/videos/salas4.mp4` (Macro tablet dissolution effervescence).
- **Formulation Development:** Pre-formulation assay development, stability chambers, and HPLC analysis.
