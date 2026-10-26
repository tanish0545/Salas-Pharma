import React from 'react';
import { VIDEO_ASSETS } from '../../config/assets';
import { BrandedVideo } from './BrandedVideo';

export interface AmbientVideoBackgroundProps {
  src?: string;
  poster?: string;
  playbackRate?: number;
  overlayGradient?: string;
  overlayOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
}

/**
 * AmbientVideoBackground
 * 
 * Renders a subtle, non-intrusive full-section ambient background video
 * strictly positioned behind page content with customizable contrast overlays,
 * soft white edge blending, and low-power / reduced-motion poster fallbacks.
 */
export const AmbientVideoBackground: React.FC<AmbientVideoBackgroundProps> = ({
  src = VIDEO_ASSETS.ambientBackground.video,
  poster = VIDEO_ASSETS.ambientBackground.poster,
  playbackRate = 1.0,
  overlayGradient = 'linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(248, 250, 252, 0.40) 40%, rgba(255, 255, 255, 0.60) 90%)',
  overlayOpacity = 1,
  className = '',
  style = {},
  children,
  ariaLabel = 'Subtle scientific ambient molecular background',
}) => {
  return (
    <div
      className={`ambient-video-section ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Absolute Background Video Layer */}
      <div
        className="ambient-video-layer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <BrandedVideo
          src={src}
          poster={poster}
          playbackRate={playbackRate}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          ariaLabel={ariaLabel}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.85, // Vibrant natural visual presence behind content cards
          }}
        />

        {/* Soft Contrast Gradient Mask (Blends into surrounding white background) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: overlayGradient,
            opacity: overlayOpacity,
            pointerEvents: 'none',
          }}
        />

        {/* Top and Bottom Soft Fade Edges */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to top, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content Layer (Always stacked safely above video) */}
      <div
        className="ambient-content-layer"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%'
        }}
      >
        {children}
      </div>
    </div>
  );
};
