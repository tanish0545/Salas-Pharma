# SALAS PHARMA — Corporate Asset Management & Video Integration Guide

This guide provides technical specifications and operational instructions for managing, replacing, and configuring all visual media and pharmaceutical video assets across the **SALAS PHARMA / Salas Pharmaceuticals Pvt. Ltd.** website.

---

## 1. Asset Storage & Directory Structure

All media assets are served statically from the `public/assets/` directory:

```text
public/
├── favicon.png                               # 64px browser favicon (cropped emblem)
├── favicon.svg                               # Scalable browser favicon
├── salas-pharma-logo.png                     # Master canvas logo PNG
└── assets/
    ├── brand/
    │   ├── salas-pharma-logo.png             # Master 300 DPI brand logo
    │   ├── salas-pharma-logo-transparent.png # High-res transparent master logo (Navbar, Footer, Loader)
    │   ├── salas-emblem-512.png              # 512px emblem app/PWA icon
    │   ├── salas-pharma-logo.svg             # Vector brand logo
    │   └── favicon.png                       # High-res favicon
    ├── videos/
    │   ├── salas1.mp4                        # Manufacturing packaging conveyor line (1080p, 10s)
    │   ├── salas2.mp4                        # Hero cleanroom formulation reactors (1080p, 8s, 1.75x speed)
    │   ├── salas3.mp4                        # 3D capsule formulation & pellet encapsulation (720p, 13.5s)
    │   ├── salas4.mp4                        # Macro tablet dissolution kinetics (1440p 2K, 5s)
    │   ├── background.mp4                    # Ambient 3D DNA molecular helix video (720p, 16.6s)
    │   ├── laboratory/
    │   │   ├── Lab1.mp4                      # Laboratory documentation & scientist testing (720p, 25.4s)
    │   │   └── Lab2.mp4                      # Laboratories hero dissolution beaker (4K UHD 2160p, 20.2s)
    │   └── posters/
    │       ├── salas1.mp4_f50.jpg            # Poster frame for salas1
    │       ├── salas2.mp4_f50.jpg            # Poster frame for salas2
    │       ├── salas3.mp4_f50.jpg            # Poster frame for salas3
    │       ├── salas4.mp4_f50.jpg            # Poster frame for salas4
    │       ├── background-poster.jpg         # Poster frame for background.mp4
    │       ├── Lab1-poster.jpg               # Poster frame for Lab1.mp4
    │       └── Lab2-poster.jpg               # Poster frame for Lab2.mp4
    └── images/
        ├── hero/hero-laboratory.jpg          # Cleanroom formulation backup photo
        ├── laboratory/
        │   ├── analytical-testing.jpg        # Scientists performing analytical testing
        │   ├── microscope-evaluation.jpg     # Precision microscope inspection
        │   └── lab-environment.jpg           # Clean laboratory overview
        ├── manufacturing/manufacturing-line.jpg # Tablet compression press photo
        ├── manufacturing/packaging-inspection.jpg # Blister packaging line photo
        ├── research/laboratory-research.jpg  # Analytical chemistry laboratory photo
        ├── quality/quality-control.jpg       # Quality assurance testing photo
        └── products/dosage-forms.jpg         # Finished dosage forms photo
```

---

## 2. Integrated Video Footages & Section Assignment

All pharmaceutical video files have been assigned based on detailed visual analysis:

### 1. `salas2.mp4` — Homepage Hero Video
- **Assigned Location**: `HomePage.tsx` (Section 1: Hero Background)
- **Visual Subject**: High-capacity stainless-steel bioprocessing vessels, sterile cleanroom formulation reactors, and an operator in sterile gown methodically adjusting valves.
- **Playback Rate**: **`1.75×`**
- **Technical Rationale**: The original footage was recorded in slow motion. Playing at `1.75×` speed makes the sterile facility look energetic, modern, and actively productive, avoiding both the sluggishness of 1.0× and the robotic artifacts of >2.0×.
- **Poster Fallback**: `/assets/videos/posters/salas2.mp4_f50.jpg`

### 2. `salas1.mp4` — Manufacturing Excellence Video
- **Assigned Location**: `HomePage.tsx` (Section 4: Manufacturing Line Card) & `ManufacturingPage.tsx`
- **Visual Subject**: High-speed automated bottle conveyor line with inline optical inspection, automated labeling, and pharmaceutical manufacturing personnel.
- **Playback Rate**: `1.0×` (normal speed)
- **Poster Fallback**: `/assets/videos/posters/salas1.mp4_f50.jpg`

### 3. `salas4.mp4` — Scientific Research & Innovation Video
- **Assigned Location**: `HomePage.tsx` (Section 3: Scientific Research) & `ResearchPage.tsx`
- **Visual Subject**: 2K QHD macro slow-motion view of pharmaceutical tablet effervescence, dissolution testing kinetics, and drug release dynamics in laboratory solvent.
- **Playback Rate**: `1.0×` (normal speed)
- **Poster Fallback**: `/assets/videos/posters/salas4.mp4_f50.jpg`

### 4. `salas3.mp4` — Product Portfolio / Finished Dosage Forms Video
- **Assigned Location**: `HomePage.tsx` (Section 7: Finished Dosage Forms Showcase)
- **Visual Subject**: High-precision 3D visualization of pharmaceutical multi-particulate pellet filling and gelatin capsule assembly mechanics.
- **Playback Rate**: `1.0×` (normal speed)
- **Poster Fallback**: `/assets/videos/posters/salas3.mp4_f50.jpg`

### 5. `laboratory/Lab2.mp4` — Dedicated Laboratories Page Hero Background Video
- **Assigned Location**: `LaboratoriesPage.tsx` (Section A: Laboratory Hero Background)
- **Visual Subject**: 4K UHD cinematic footage of pharmaceutical dissolution testing inside a laboratory beaker on a magnetic stirrer, with a dissolving capsule producing an effervescent suspension in clean laboratory environment.
- **Playback Rate**: `1.0×` (normal speed)
- **Design Layout**: Full hero section coverage (`object-fit: cover`), subtle white overlay, and smooth right-side gradient fade into white background.
- **Poster Fallback**: `/assets/videos/posters/Lab2-poster.jpg`

### 6. `laboratory/Lab1.mp4` — Laboratories Split Editorial Video
- **Assigned Location**: `LaboratoriesPage.tsx` (Section C: Laboratory Imagery & Editorial Split)
- **Visual Subject**: Pharmaceutical laboratory scientist in white protective attire systematically documenting analytical metrics and testing records at a research workstation.
- **Playback Rate**: `1.0×` (normal speed)
- **Design Layout**: Large premium visual frame paired with explanatory text on analytical data integrity and sampling procedures.
- **Poster Fallback**: `/assets/videos/posters/Lab1-poster.jpg`

### 7. `background.mp4` — Global Ambient Molecular DNA Background Video
- **Assigned Location**: `AboutPage.tsx` (Corporate Philosophy Banner) & `ResearchPage.tsx` (Four Pillars Section)
- **Visual Subject**: 3D rendered animated DNA double-helix spiral rotating in soft scientific studio lighting.
- **Playback Rate**: `1.0×` (normal speed)
- **Design Layout**: Stacked strictly behind content (`position: absolute`, `zIndex: 0`, `opacity: 0.35`) via `<AmbientVideoBackground>`, with a soft white frosted gradient mask and edge fades to maintain readability.
- **Poster Fallback**: `/assets/videos/posters/background-poster.jpg`

---

## 3. Playback Speed Implementation Details (`BrandedVideo.tsx`)

In modern browsers, setting `playbackRate` on an HTML5 `<video>` element must be applied via JavaScript after the video's metadata is loaded and re-enforced upon loop or play events.

The `<BrandedVideo>` component (`src/components/common/BrandedVideo.tsx`) handles this automatically:

```tsx
// Inside BrandedVideo.tsx
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const enforcePlaybackRate = () => {
    if (video && typeof playbackRate === 'number' && playbackRate > 0) {
      if (video.playbackRate !== playbackRate) {
        video.playbackRate = playbackRate;
      }
    }
  };

  // Enforce on mount
  enforcePlaybackRate();

  // Re-enforce on all playback lifecycle events
  video.addEventListener('play', enforcePlaybackRate);
  video.addEventListener('loadedmetadata', enforcePlaybackRate);
  video.addEventListener('canplay', enforcePlaybackRate);
  video.addEventListener('seeking', enforcePlaybackRate);

  return () => {
    video.removeEventListener('play', enforcePlaybackRate);
    video.removeEventListener('loadedmetadata', enforcePlaybackRate);
    video.removeEventListener('canplay', enforcePlaybackRate);
    video.removeEventListener('seeking', enforcePlaybackRate);
  };
}, [src, playbackRate]);
```

All background videos are configured with `muted`, `autoPlay`, `loop`, and `playsInline` to ensure seamless, non-blocking playback across iOS Safari, Android Chrome, and desktop browsers.

---

## 4. How to Replace Video Footage in the Future

If the client records new facility footage and wishes to replace an existing video:

1. **Format Requirements**:
   - Container: `.mp4`
   - Codec: H.264 / AVC (Baseline or Main profile for maximum cross-browser hardware decoding)
   - Audio: Strip audio tracks (or keep muted) to minimize file size
   - Recommended Bitrate: 2,500 – 4,500 kbps (target file size: under 15 MB)
   - Resolution: 1920×1080 (16:9)

2. **Step-by-Step Replacement**:
   - **Option A (In-Place)**: Overwrite the corresponding file in `public/assets/videos/` (e.g. `salas2.mp4` for the hero video).
   - **Option B (New Filename)**: Save the new file to `public/assets/videos/new_filename.mp4` and update `src/config/assets.ts`:
     ```typescript
     export const VIDEO_ASSETS = {
       hero: {
         // ...
         video: "/assets/videos/new_filename.mp4",
         poster: "/assets/videos/posters/new_poster.jpg",
         playbackRate: 1.5, // Adjust as needed
       },
     };
     ```

3. **Generating New Poster Frames**:
   - Extract a sharp, non-blurry frame from the middle of the video:
     ```bash
     ffmpeg -ss 00:00:03 -i input.mp4 -vframes 1 -q:v 2 output_poster.jpg
     ```
   - Save the poster in `public/assets/videos/posters/` and update `poster` in `src/config/assets.ts`.

---

## 5. Master Logo Guidelines

The master logo incorporates a 3D red-and-blue ribbon emblem with the brand wordmark "SALAS PHARMA".

- **Navigation & Footer**: Uses `/assets/brand/salas-pharma-logo-transparent.png`.
- **Intro Loader**: Uses `/assets/brand/salas-pharma-logo-transparent.png` on an illuminated, frosted-glass acrylic card with specular beam animation.
- **Favicon**: Uses `/favicon.png` (cropped to the iconic 3D emblem).
- **Integrity Rule**: Never distort, stretch, recolor, or change typography. Original proportions and colors are strictly maintained.
