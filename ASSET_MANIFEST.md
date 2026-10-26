# SALAS PHARMA — Asset Manifest & Media Integration Status

This manifest catalogs every brand asset and official pharmaceutical video for the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website, detailing its functional purpose, implementation status, exact file location, and configured playback parameters.

---

## 1. Master Brand Identity Assets

| Asset Name | Public Path | Purpose | Integration Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Master Logo (Transparent)** | `/assets/brand/salas-pharma-logo-transparent.png` | Main Navigation, Footer, Mobile Drawer | **Integrated** | High-resolution transparent PNG with 3D red-and-blue ribbon emblem, serif "SALAS", and "PHARMA". Original colors, proportions, and typography strictly preserved. |
| **Master Logo (Original Canvas)** | `/assets/brand/salas-pharma-logo.png` | Archival Master & OG Social Previews | **Integrated** | Client-uploaded source file (`media_1793013371610.png`) saved to public brand directory. |
| **Cinematic Loader Brand Badge** | `/assets/brand/salas-pharma-logo-transparent.png` | Phase C & D Brand Reveal in `CinematicLoader.tsx` | **Integrated** | Displayed within high-gloss frosted acrylic brand badge with specular beam shine sweep traveling left-to-right. |
| **Emblem Browser Favicon** | `/favicon.png` & `/favicon.svg` | Browser tab icon, bookmark bar, search engine snippet | **Integrated** | Cropped cleanly to the iconic 3D red-and-blue ribbon 'S' emblem at 64px, 192px, and 512px (`/assets/brand/salas-emblem-512.png`). |

---

## 2. Integrated Client Video Assets (`public/assets/videos/`)

All pharmaceutical videos are deployed in `public/assets/videos/` and `public/assets/videos/laboratory/` with matching poster frames in `public/assets/videos/posters/`:

| Video Filename | Assigned Website Section | File Specs | Playback Speed | Visual Content & Matching Rationale | Implementation Component |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`salas2.mp4`** | **Homepage Hero Background** (`Section 1: Hero`) | 1920×1080 Full HD, 8.0s, H.264 | **1.75× speed** (`playbackRate: 1.75`) | **Cleanroom Formulation Reactors**: Technician in sterile cleanroom attire methodically operating high-capacity stainless-steel bioprocessing formulation vessels. Plays at accelerated 1.75× rate for a modern, active cleanroom feel. | `<BrandedVideo>` with enforced `playbackRate={1.75}`, `autoPlay`, `muted`, `loop`, `playsInline` |
| **`salas1.mp4`** | **Manufacturing Excellence** (`Section 4` & `ManufacturingPage`) | 1920×1080 Full HD, 10.0s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **Precision Packaging & Conveyor Line**: Automated high-speed bottle conveyor system with inline optical inspection and monitoring by pharmaceutical specialists. | `<BrandedVideo>` with `playbackRate={1.0}`, poster fallback |
| **`salas4.mp4`** | **Scientific Research & Innovation** (`Section 3` & `ResearchPage`) | 2560×1440 2K QHD, 5.0s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **Formulation Dissolution Kinetics**: Ultra-high-resolution macro slow-motion analysis of tablet effervescence, dissolution testing, and active release mechanics in laboratory solvent. | `<BrandedVideo>` with `playbackRate={1.0}`, poster fallback |
| **`salas3.mp4`** | **Product Portfolio / Finished Dosage Forms** (`Section 7`) | 1280×720 HD, 13.5s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **3D Capsule Formulation & Micro-Pellet Encapsulation**: High-precision 3D visualization of multi-particulate pellet filling and gelatin capsule assembly mechanics. Directly aligns with Salas hard gelatin capsule manufacturing. | `<BrandedVideo>` with `playbackRate={1.0}`, poster fallback |
| **`laboratory/Lab2.mp4`** | **Laboratories Page Hero Background** (`LaboratoriesPage` Section A) | 3840×2160 4K UHD, 20.2s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **Pharmaceutical Dissolution Testing**: 4K UHD magnetic stirrer beaker with dispersing effervescent capsule cloud in clean laboratory setting. Fills full hero width with soft right-side white gradient fade. | `<BrandedVideo>` with `playbackRate={1.0}`, poster fallback |
| **`laboratory/Lab1.mp4`** | **Laboratories Editorial Showcase** (`LaboratoriesPage` Section C) | 1280×720 HD, 25.4s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **Laboratory Documentation & Testing**: Pharmaceutical scientist in protective coat verifying sample data and documenting test metrics at workstation. Integrated into editorial split layout. | `<BrandedVideo>` with `playbackRate={1.0}`, poster fallback |
| **`background.mp4`** | **Global Ambient Scientific Background** (`AboutPage` Philosophy & `ResearchPage` Pillars) | 1280×720 HD, 16.6s, H.264 | **1.0× speed** (`playbackRate: 1.0`) | **3D Molecular DNA Spiral**: Elegant 3D rotating DNA double helix in scientific lighting. Serves as subtle ambient background layer behind content with soft white gradient overlays. | `<AmbientVideoBackground>` with 0.35 opacity and soft gradient mask |

---

## 3. High-Resolution Video Poster Frames

To ensure instantaneous rendering and zero blank-screen flash before videos begin streaming, poster frames have been extracted directly from each video stream:

| Source Video | Extracted Poster Path | Resolution | Usage |
| :--- | :--- | :--- | :--- |
| `salas2.mp4` | `/assets/videos/posters/salas2.mp4_f50.jpg` | 1920×1080 | Homepage hero poster & low-bandwidth fallback |
| `salas1.mp4` | `/assets/videos/posters/salas1.mp4_f50.jpg` | 1920×1080 | Manufacturing line card poster & fallback |
| `salas4.mp4` | `/assets/videos/posters/salas4.mp4_f50.jpg` | 2560×1440 | Scientific research showcase poster & fallback |
| `salas3.mp4` | `/assets/videos/posters/salas3.mp4_f50.jpg` | 1280×720 | Finished dosage forms showcase poster & fallback |
| `laboratory/Lab2.mp4` | `/assets/videos/posters/Lab2-poster.jpg` | 3840×2160 | Laboratories hero background poster & fallback |
| `laboratory/Lab1.mp4` | `/assets/videos/posters/Lab1-poster.jpg` | 1280×720 | Laboratories editorial split video poster & fallback |
| `background.mp4` | `/assets/videos/posters/background-poster.jpg` | 1280×720 | Ambient molecular DNA background poster & fallback |

---

## 4. Cinematic Opening Sequence Integration

The redesigned opening experience in `src/components/common/CinematicLoader.tsx` executes the following sequence:

1. **Phase A — Full-Screen Royal-Blue Environment**: Deep royal-blue background (`#061D38` to `#094793`).
2. **Phase B — Scaled 3D Pharmaceutical Capsule Assembly (0.0s – 1.3s)**:
   - Sizable, high-resolution SVG capsule (320px wide) with volumetric cylindrical lighting.
   - Pure pharmaceutical white left shell and ruby red right shell glide in from opposite sides.
   - Precision chrome interlock collar locks in with a laser seam flash and expanding molecular energy rings.
3. **Phase C — Master SALAS Pharma Logo Reveal (1.3s – 2.5s)**:
   - Capsule scales down and dissolves into the master SALAS Pharma logo on a high-gloss frosted acrylic brand badge.
   - Preserves original proportions, 3D red/blue ribbons, and serif typography.
4. **Phase D — Polished White Specular Beam Sweep (1.6s – 2.5s)**:
   - Focused 45-degree beam of white light sweeps across the logo from left to right.
5. **Phase E — Centre-Out Royal Blue Theatre Curtain Parting (2.5s – 3.7s)**:
   - Two fixed-position, GPU-accelerated panels (`.curtain-left` and `.curtain-right`) split symmetrically down the center line.
   - Left panel glides off-screen (`translateX(-102%)`), right panel glides off-screen (`translateX(102%)`).
6. **Phase F — Homepage Live Reveal (3.7s+)**:
   - The fully rendered SALAS Pharma homepage appears seamlessly underneath.
   - `salas2.mp4` hero video is already playing at 1.75× speed.
   - Overlay is fully removed from DOM pointer events (`pointer-events: none; display: none`).

---

## 5. Corporate Information Verification Items

1. **Corporate Office Telephone**:
   - Flagged for client confirmation: `0612-2323212` has a Patna, Bihar STD code (`0612`), whereas the registered corporate office address is in Nizampura, Vadodara, Gujarat (Vadodara STD code is `0265`).
2. **Manufacturing Facility Telephone**:
   - South Sikkim unit currently routes to `adminsikkim@salaspharma.co.in`. Client may provide dedicated Sikkim landline if desired.
3. **Accreditations**:
   - Compliance statements follow applicable Indian regulatory standards and GMP principles. Specific Schedule M / WHO-GMP certificate registration numbers can be inserted when official certificate documents are supplied.
