import React, { useRef, useEffect, useState } from 'react';

export interface BrandedVideoProps {
  src: string;
  poster?: string;
  playbackRate?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  priority?: boolean;
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
  preload,
  priority = false,
  className = '',
  style = {},
  ariaLabel = 'Pharmaceutical video footage',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Hero videos are mounted immediately; below-the-fold videos are mounted only on proximity
  const [shouldLoadSource, setShouldLoadSource] = useState<boolean>(priority);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Effective preload: hero defaults to 'metadata', below-the-fold defaults to 'none'
  const effectivePreload = preload || (priority ? 'metadata' : 'none');

  // Step 1: Proximity Observation (load source 350px before entering viewport)
  useEffect(() => {
    if (shouldLoadSource) return;

    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) {
      setShouldLoadSource(true);
      return;
    }

    const proximityObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadSource(true);
          proximityObserver.disconnect();
        }
      },
      { rootMargin: '350px 0px 350px 0px' }
    );

    proximityObserver.observe(container);
    return () => proximityObserver.disconnect();
  }, [shouldLoadSource]);

  // Step 2: Viewport Playback Observer & Rate Control
  useEffect(() => {
    if (!shouldLoadSource) return;

    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      video.pause();
      return;
    }

    const applyPlaybackRate = () => {
      if (video && typeof playbackRate === 'number' && playbackRate > 0) {
        if (video.playbackRate !== playbackRate) {
          video.playbackRate = playbackRate;
        }
      }
    };

    applyPlaybackRate();
    video.addEventListener('play', applyPlaybackRate);
    video.addEventListener('loadedmetadata', applyPlaybackRate);

    // Track active playback state for smooth poster transitions
    const handlePlaying = () => setIsVideoPlaying(true);
    const handleError = () => setHasError(true);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);

    // Active Viewport IntersectionObserver:
    // Only decodes and plays when in active view; pauses immediately when scrolled away
    let playbackObserver: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      playbackObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (autoPlay && video.paused) {
                video.play().catch(() => {
                  // Catch browser autoplay policies gracefully
                });
              }
            } else {
              if (!video.paused) {
                video.pause();
              }
            }
          });
        },
        { threshold: 0.15, rootMargin: '80px 0px 80px 0px' }
      );
      playbackObserver.observe(video);
    } else {
      if (autoPlay && video.paused) {
        video.play().catch(() => {});
      }
    }

    // Handle tab visibility (pause playback when user switches tabs)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (!video.paused) video.pause();
      } else if (autoPlay && video.paused) {
        const rect = video.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          video.play().catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (playbackObserver) playbackObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('play', applyPlaybackRate);
      video.removeEventListener('loadedmetadata', applyPlaybackRate);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
      // Clean up buffers and release hardware decoder on unmount
      if (!video.paused) video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [shouldLoadSource, playbackRate, autoPlay]);

  return (
    <div
      ref={containerRef}
      className={`branded-video-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#0A2540',
        ...style,
      }}
    >
      {/* Poster Image / Static Fallback (Always visible until video actively streams frames) */}
      {poster && (
        <img
          src={poster}
          alt={ariaLabel}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isVideoPlaying && !hasError ? 0 : 1,
            transition: 'opacity 0.45s ease',
            zIndex: 1,
            pointerEvents: 'none',
          }}
          aria-hidden={isVideoPlaying}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload={effectivePreload}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'relative',
          zIndex: 0,
        }}
        aria-label={ariaLabel}
      >
        {shouldLoadSource && !hasError && (
          <source src={src} type="video/mp4" />
        )}
      </video>
    </div>
  );
};
