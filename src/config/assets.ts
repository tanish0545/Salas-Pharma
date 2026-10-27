/**
 * SALAS PHARMA — Central Asset & Media Configuration
 * 
 * Maps master brand assets, official 4K/HD pharmaceutical footage, and video playback rates.
 */

export interface VideoMediaAsset {
  id: string;
  title: string;
  subtitle: string;
  video: string;
  poster: string;
  playbackRate: number;
  description: string;
  alt: string;
}

export const BRAND_ASSETS = {
  // Master Transparent Brand Logo (Optimized WebP, with PNG fallback)
  logo: "/assets/brand/salas-pharma-logo-transparent.webp",
  logoMaster: "/assets/brand/salas-pharma-logo.webp",
  logoTransparent: "/assets/brand/salas-pharma-logo-transparent.webp",
  logoSvg: "/assets/brand/salas-pharma-logo.svg",
  logoWhite: "/assets/brand/salas-pharma-logo-white.svg",
  favicon: "/favicon.png",
  faviconSvg: "/favicon.svg",
  emblem512: "/assets/brand/salas-emblem-512.png",
};

export const VIDEO_ASSETS: Record<string, VideoMediaAsset> = {
  hero: {
    id: "hero",
    title: "Precision Cleanroom Formulation & Processing",
    subtitle: "Sterile bioprocessing vessels, stainless-steel formulation lines, and automated cleanrooms",
    video: "/assets/videos/salas1.mp4",
    poster: "/assets/videos/posters/salas1.mp4_f50.webp",
    playbackRate: 1.0, // salas2.mp4 accelerated playback (1.5x - 2.0x recommended speed)
    description: "Full sterile cleanroom facility with high-capacity stainless-steel formulation reactors and cleanroom operator.",
    alt: "Technician in sterile cleanroom attire operating pharmaceutical bioprocess formulation vessels",
  },
  manufacturing: {
    id: "manufacturing",
    title: "High-Speed Automated Packaging & Conveyor Lines",
    subtitle: "Continuous automated bottle filling, labeling, and inline optical quality inspection",
    video: "/assets/videos/salas1.mp4",
    poster: "/assets/videos/posters/salas1.mp4_f50.webp",
    playbackRate: 1.0,
    description: "Automated high-speed packaging conveyor line with inline optical inspection and monitoring.",
    alt: "Pharmaceutical production specialists operating automated bottle packaging and conveyor line",
  },
  research: {
    id: "research",
    title: "Formulation Dissolution & Bioavailability",
    subtitle: "In-vitro dissolution kinetics, active ingredient release, and molecular stability",
    video: "/assets/videos/salas4.mp4",
    poster: "/assets/videos/posters/salas4.mp4_f50.webp",
    playbackRate: 1.0,
    description: "Macro slow-motion analysis of tablet effervescence and active dissolution kinetics.",
    alt: "Cinematic macro laboratory view of pharmaceutical tablet dissolution testing",
  },
  products: {
    id: "products",
    title: "Capsule Formulation & Micro-Pellet Encapsulation",
    subtitle: "Precision dosing, multi-particulate pellet filling, and gelatin capsule sealing",
    video: "/assets/videos/salas3.mp4",
    poster: "/assets/videos/posters/salas3.mp4_f50.webp",
    playbackRate: 1.0,
    description: "3D visualization of pharmaceutical pellet filling and capsule assembly mechanics.",
    alt: "3D rendered visualization of pharmaceutical capsule filling and sealing technology",
  },
  laboratoryHero: {
    id: "laboratoryHero",
    title: "Pharmaceutical Dissolution & Analytical Kinetics",
    subtitle: "4K magnetic stirring, active dissolution, and cleanroom analytical testing",
    video: "/assets/videos/laboratory/Lab2.mp4",
    poster: "/assets/videos/posters/Lab2-poster.webp",
    playbackRate: 1.0,
    description: "4K UHD laboratory magnetic stirrer beaker with active dissolution testing in sterile pharmaceutical setting.",
    alt: "Salas Pharma laboratory magnetic stirrer beaker with dissolution testing and analytical monitoring",
  },
  laboratoryEditorial: {
    id: "laboratoryEditorial",
    title: "Analytical Testing & Sample Traceability",
    subtitle: "Validated documentation, HPLC assay characterization, and batch release",
    video: "/assets/videos/laboratory/Lab1.mp4",
    poster: "/assets/videos/posters/Lab1-poster.webp",
    playbackRate: 1.0,
    description: "Pharmaceutical scientist verifying test metrics and documenting sample logs in research laboratory.",
    alt: "Salas Pharma scientist logging analytical test data and sample measurements in laboratory",
  },
  ambientBackground: {
    id: "ambientBackground",
    title: "Molecular DNA Helical Structure",
    subtitle: "Scientific ambient visualization for pharmaceutical research and discovery",
    video: "/assets/videos/background.mp4",
    poster: "/assets/videos/posters/background-poster.webp",
    playbackRate: 1.0,
    description: "3D molecular DNA double helix rotating in ambient scientific lighting.",
    alt: "Ambient scientific 3D molecular DNA background visualization",
  },
};

export const MEDIA_CONFIG = {
  hero: {
    image: "/assets/images/hero/hero-laboratory.webp",
    video: "/assets/videos/salas2.mp4",
    poster: "/assets/videos/posters/salas2.mp4_f50.webp",
    playbackRate: 1.75,
    alt: "Salas Pharma sterile bioprocess formulation reactors",
  },
  manufacturing: {
    image: "/assets/images/manufacturing/manufacturing-line.webp",
    cleanroomImage: "/assets/images/manufacturing/manufacturing-cleanroom.webp",
    packagingImage: "/assets/images/manufacturing/packaging-inspection.webp",
    video: "/assets/videos/salas1.mp4",
    poster: "/assets/videos/posters/salas1.mp4_f50.webp",
    playbackRate: 1.0,
    alt: "Salas Pharma automated packaging and conveyor line",
  },
  research: {
    image: "/assets/images/research/rnd-laboratory-research.webp",
    formulationImage: "/assets/images/research/laboratory-research.webp",
    video: "/assets/videos/salas4.mp4",
    poster: "/assets/videos/posters/salas4.mp4_f50.webp",
    playbackRate: 1.0,
    alt: "Salas Pharma laboratory research and analytical HPLC testing",
  },
  quality: {
    image: "/assets/images/quality/quality-control.webp",
    alt: "Salas Pharma quality assurance testing and compliance inspection",
  },
  products: {
    image: "/assets/images/products/products-dosage-forms.webp",
    dosageFormsImage: "/assets/images/products/dosage-forms.webp",
    video: "/assets/videos/salas3.mp4",
    poster: "/assets/videos/posters/salas3.mp4_f50.webp",
    playbackRate: 1.0,
    alt: "Salas Pharma pharmaceutical dosage forms - tablets, capsules and injectables",
  },
  about: {
    image: "/assets/images/corporate/about-company-facility.webp",
    cleanroomImage: "/assets/images/hero/hero-laboratory.webp",
    alt: "Salas Pharmaceuticals corporate heritage and Sikkim production facility",
  },
  careers: {
    image: "/assets/images/corporate/careers-team.webp",
    alt: "Salas Pharma multidisciplinary research and quality control team",
  },
  contact: {
    officeImage: "/assets/images/corporate/contact-corporate-office.webp",
    facilityImage: "/assets/images/corporate/about-company-facility.webp",
    alt: "Salas Pharma Vadodara corporate headquarters and South Sikkim plant",
  },
  packaging: {
    image: "/assets/images/manufacturing/packaging-inspection.webp",
    alt: "Salas Pharma automated pharmaceutical packaging line",
  },
  laboratory: {
    environmentImage: "/assets/images/laboratory/lab-environment.webp",
    analyticalImage: "/assets/images/laboratory/analytical-testing.webp",
    microscopeImage: "/assets/images/laboratory/microscope-evaluation.webp",
    hplcImage: "/assets/images/research/rnd-laboratory-research.webp",
    video: "/assets/videos/laboratory/Lab2.mp4",
    poster: "/assets/videos/posters/Lab2-poster.webp",
    alt: "Salas Pharma analytical testing and research laboratory facilities",
  },
};

/**
 * Static Art-Directed Hero Images for Every Page
 * High-resolution static photography replacing background video heroes.
 */
export const PAGE_HERO_IMAGES = {
  home: {
    image: "/assets/images/hero/hero-home.jpg",
    alt: "Salas Pharma modern pharmaceutical manufacturing cleanroom facility",
  },
  about: {
    image: "/assets/images/hero/hero-about.jpg",
    alt: "Salas Pharma pharmaceutical researchers collaborating in modern facility",
  },
  products: {
    image: "/assets/images/hero/hero-products.jpg",
    alt: "Salas Pharma finished pharmaceutical formulations, tablets and capsules",
  },
  laboratories: {
    image: "/assets/images/hero/hero-laboratories.jpg",
    alt: "Salas Pharma analytical testing laboratory with precision instrumentation",
  },
  manufacturing: {
    image: "/assets/images/hero/hero-manufacturing.jpg",
    alt: "Salas Pharma automated pharmaceutical production cleanroom",
  },
  research: {
    image: "/assets/images/hero/hero-research.jpg",
    alt: "Salas Pharma formulation development and dissolution research laboratory",
  },
  careers: {
    image: "/assets/images/hero/hero-careers.jpg",
    alt: "Salas Pharma pharmaceutical specialists collaborating in corporate workplace",
  },
  contact: {
    image: "/assets/images/hero/hero-contact.jpg",
    alt: "Salas Pharma modern corporate headquarters and pharmaceutical campus",
  },
};
