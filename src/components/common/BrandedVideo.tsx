import React, { useRef, useEffect } from 'react';

export interface BrandedVideoProps {
  src: string;
  poster?: string;
  playbackRate?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export const BrandedVideo: React.FC<BrandedVideoProps> = ({
  src,
  poster,
  playbackRate = 1.0,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = 'metadata',
  className = '',
  style = {},
  ariaLabel = 'Pharmaceutical video footage',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // Apply on initial mount
    enforcePlaybackRate();

    // Re-enforce whenever the video plays, loops, or metadata loads
    video.addEventListener('play', enforcePlaybackRate);
    video.addEventListener('loadedmetadata', enforcePlaybackRate);
    video.addEventListener('canplay', enforcePlaybackRate);
    video.addEventListener('seeking', enforcePlaybackRate);

    // Safely trigger muted autoplay if requested
    if (autoPlay && video.paused) {
      video.play().catch(() => {
        // Fallback gracefully on strict browser power-saver modes
      });
    }

    return () => {
      video.removeEventListener('play', enforcePlaybackRate);
      video.removeEventListener('loadedmetadata', enforcePlaybackRate);
      video.removeEventListener('canplay', enforcePlaybackRate);
      video.removeEventListener('seeking', enforcePlaybackRate);
    };
  }, [src, playbackRate, autoPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video playback.
    </video>
  );
};
