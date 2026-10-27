# Leucine.ai Interaction Audit & Design Intelligence
**Document:** `docs/INTERACTION_AUDIT.md`  
**Purpose:** Deep interaction and UX analysis of the reference platform (Leucine.ai) across 5 core page surfaces to distill high-end digital storytelling patterns for SALAS Pharma without duplicating proprietary brand assets, wording, or code.

---

## 1. Executive Summary & Core Design Philosophy

Leucine.ai positions itself as an enterprise AI platform for pharmaceutical manufacturing compliance and operations. The experience distinguishes itself from ordinary corporate websites through:
1. **Editorial Typography with High Contrast:** Clean grotesque sans-serif headlines with tight tracking and balanced line-heights, creating an authoritative, publication-grade feel.
2. **Scroll-Triggered Contrast Shift (Grey to Navy/Black):** Rather than standard fade-ins or slide-ups, sentences and paragraphs begin with subdued opacity (`rgba(10, 37, 64, 0.25)`) and progressively "fill" or darken as the reader scrolls past them, mimicking an active reading marker.
3. **Structured Sticky Process Steppers:** Complex workflows are mapped to sticky split-screen layouts where left-hand narrative blocks scroll while right-hand visual cards seamlessly cross-fade or update context.
4. **Subtle Interactive Micro-Affordances:** Hover states feature 3-4px micro-lifts, razor-thin animated underline expansions (`scaleX`), and card borders that shift from neutral borders (`#E2E8F0`) to active accent strokes without jarring layout shifts.
5. **Decisive, Low-Clutter Page Endings:** Every page terminates in a crisp, editorial manifesto statement followed by a high-conversion direct action prompt, avoiding endless footer bloat.

---

## 2. Page-by-Page Interaction Breakdown

### Page 1: Homepage (`https://leucine.ai/`)
- **Main Visual Concept:** High-conviction AI-native pharmaceutical transformation. Split composition contrasting clinical precision with digital intelligence.
- **Scroll Behavior:**
  - *Hero:* Clean, full-bleed split composition. Dark panel anchor on the left with high-impact headline; high-resolution imagery/video on the right with subtle perspective.
  - *Section A Transition:* Soft downward scroll indicator prompting natural progression; smooth background color inversion from deep navy into crisp clinical off-white.
  - *Core Platform Narrative:* Word-by-word opacity transition on core capability headlines.
  - *Interactive Showcase:* Horizontal feature pill-selector switching interactive application previews with instant state changes.
  - *Metrics & Social Proof:* Large numerical counters anchored by clear institutional definitions rather than vanity metrics.
- **Interactions Observed:**
  - Sticky sub-nav / segment switcher.
  - Interactive interactive card highlights with delayed gradient borders.
  - Tabbed showcase switching preview graphics.
  - Smooth closing callout with high-contrast button.
- **What Felt Premium:** Crisp typographic scale; smooth text contrast filling during scroll; lack of gimmick bouncing animations.
- **What to Avoid / Adapt for SALAS:**
  - Leucine's software-centric UI mockups and SaaS dashboard previews must **not** be copied.
  - For SALAS Pharma, replace software mockups with authentic physical pharmaceutical reality: cleanroom formulation, analytical testing (HPLC, dissolution testing), WHO-GMP compliant facilities, and physical therapeutic dosage forms.

---

### Page 2: About Us (`https://leucine.ai/about/`)
- **Main Visual Concept:** Origin story, mission, and the human expertise driving pharmaceutical excellence.
- **Scroll Behavior:**
  - Editorial mission statement with large display type.
  - Progressive paragraph reveal that highlights key sentences as the user scrolls down the page.
  - Vertical timeline with discrete milestone cards marking corporate growth.
  - Global facility/presence section mapping operational nodes with clean geographic labels and coordinates.
- **Interactions Observed:**
  - Scroll-linked active timeline nodes highlighting as the timeline line fills downwards.
  - Interactive leadership/location cards with subtle elevation and contextual details on hover.
  - Expandable history narrative.
- **What Felt Premium:** Restrained layout with generous editorial whitespace, clear hierarchy, and historical credibility.
- **What to Avoid / Adapt for SALAS:**
  - Do not invent fictitious executive quotes or venture funding milestones.
  - Adapt with SALAS's genuine history: Founded in 2009, corporate headquarters in Vadodara, Gujarat, and state-of-the-art manufacturing plant in Mamring, South Sikkim.
  - Use scroll-driven word-reveal text for SALAS's core ethos: *"Every Step. A Commitment to Better Healthcare."*

---

### Page 3: Use Cases / Solutions (`https://leucine.ai/use-cases/`)
- **Main Visual Concept:** Segment-driven solution discovery catering to distinct operational requirements (e.g. batch records, cleaning validation, quality control).
- **Scroll Behavior:**
  - Filter bar pinned or sticky below the hero for fast category selection.
  - Card grid organizing solutions with clear metadata badges, bulleted capabilities, and target departments.
  - Deep-dive cards that expand or reveal technical parameters upon click.
- **Interactions Observed:**
  - Instant client-side segment filtering with zero page reload.
  - Micro-animated tags and category pills with keyboard focus rings.
  - Modal / Slide-over detail preview preserving user scroll position.
- **What Felt Premium:** Instantaneous, buttery smooth filtering without layout jumps; deep structured data hierarchy.
- **What to Avoid / Adapt for SALAS (Products Page Transformation):**
  - Adapt this structure for SALAS's 8 verified therapeutic segments: Gastroenterology, Antibiotics & Antibacterials, Respiratory, Pain & Anti-inflammatory, Cardiovascular, Diabetology, Neuropsychiatry, and Multivitamins & Nutraceuticals.
  - Provide multi-axis filtering: by Therapeutic Segment and by Dosage Form (Tablets, Capsules, Injectables, Oral Liquids).
  - Include an interactive Product Drawer / Quick-View Modal displaying composition, indications, packaging specs, and verified storage standards.

---

### Page 4: Resources / Knowledge Hub (`https://leucine.ai/resources/`)
- **Main Visual Concept:** Thought leadership, compliance whitepapers, regulatory guides, and industry case studies.
- **Scroll Behavior:**
  - Featured banner with editorial layout for primary whitepaper.
  - Multi-tag selector allowing multi-axis filtering (Topic, Content Type, Date).
  - Search input with clear button and real-time result count.
- **Interactions Observed:**
  - Live query filtering with search highlighting.
  - Smooth card hover lift with subtle shadow dilation.
  - Active tag toggle states with accessible `aria-pressed` states.
- **What Felt Premium:** High typographic legibility, clear content classification, and responsive search responsiveness.
- **What to Avoid / Adapt for SALAS (R&D & Innovation Page):**
  - Adapt the knowledge structure to present SALAS's formulation research, stability testing, bioequivalence studies, and pharmaceutical analytical rigor.
  - Incorporate subtle scientific SVG line diagrams (molecular bond angles, formulation matrices) with clean explanatory accordions.

---

### Page 5: Experience Centre / Demos (`https://leucine.ai/experience-centre/`)
- **Main Visual Concept:** Immersive exploration where prospective clients test workflows and view direct technical demonstrations.
- **Scroll Behavior:**
  - Hero with embedded high-resolution media and guided tour invitation.
  - Interactive hotspot tour: a visual overview of a facility/system with clickable focal points that open technical inspection cards.
  - Tabbed workflow demonstration highlighting each stage of validation and execution.
- **Interactions Observed:**
  - Interactive pulse hotspots over facility/process photography.
  - Step-by-step interactive workflow selector with active progress bars.
  - Seamless form modal for booking a live audit or facility tour.
- **What Felt Premium:** Direct tactile engagement—the user isn't just reading text; they are actively probing system capabilities.
- **What to Avoid / Adapt for SALAS (Laboratories & Manufacturing Pages):**
  - Build interactive hotspot inspection over SALAS's analytical testing laboratories (HPLC, dissolution testing, microbiological assay, stability chambers).
  - Build a 4-stage sticky/scroll-driven process journey through the Sikkim manufacturing plant (Raw Material Dispensing &rarr; Formulation & Granulation &rarr; Compression & Capsule Filling &rarr; In-Process Quality Checks & Packaging).

---

## 3. Interaction Principles Adapted for SALAS Pharma

| Principle | Leucine Pattern | SALAS Pharma Implementation |
| :--- | :--- | :--- |
| **Typography & Contrast** | Editorial Grotesque with bold titles and grey subheads | Inter + Playfair/Editorial Display headers; deep navy (`#0B2545`) + crisp body (`#1E293B`) on clinical light backgrounds (`#F8FAFC`). |
| **Scroll Narrative** | Word-by-word grey-to-navy contrast transition on scroll | Custom `ScrollWordReveal` component animating spans based on `IntersectionObserver` scroll intersection ratios. |
| **Process Journey** | Sticky step-by-step workflow with active progress bars | 4-Stage Manufacturing Journey with interactive stage selection, progress indicators, and technical equipment specs. |
| **Discovery & Filtering** | Instantaneous multi-tag solution filtering | Multi-axis filter bar for Products (Therapeutic Area + Dosage Form) with instant search, clear button, and detail drawer. |
| **Tactile Exploration** | Interactive UI hotspots and tour nodes | Interactive Laboratory Hotspots overlaying cleanroom/analytical images, revealing factual QA/QC protocols on hover/click. |
| **Signature Ending** | Crisp editorial closing quote + high-contrast action card | Standardized `SignatureClosingStatement` across all 8 pages: *"Every Step. A Commitment to Better Healthcare."* with corporate contact CTA. |

---

## 4. Anti-Patterns Avoided

1. **No Scroll-Hijacking:** Browser native scroll is preserved with zero momentum interception or artificial inertial damping.
2. **No Hardware Exhaustion:** Single-video playback manager ensures only 1 video decoder runs at any time.
3. **No Continuous RAF Re-renders:** State updates are strictly decoupled from cursor and scroll listeners.
4. **No Synthetic Claims:** Zero fabricated certifications, customer logos, or unverified statistical claims.

