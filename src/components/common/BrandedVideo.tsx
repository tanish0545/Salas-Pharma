import React, { useRef, useEffect, useState, useCallback } from 'react';

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
  isReadyToPlay?: boolean; // When false (e.g. initial cinematic loader), delays playback
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

/**
 * BrandedVideo
 * 
 * High-performance, rock-solid pharmaceutical video component.
 * Features:
 * - Lazy-attaches video source when near viewport (rootMargin: 400px)
 * - Hero/priority videos attach immediately with preload="metadata"
 * - Plays smoothly when entering viewport, pauses when leaving viewport
 * - Explicitly enforces DOM property .muted = true for cross-browser autoplay compliance
 * - Robust error handling with zero layout shift (CLS) via instant WebP poster
 * - Respects prefers-reduced-motion
 * - Auto-pauses on background tabs and resumes when visible
 */
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
  isReadyToPlay = true,
  className = '',
  style = {},
  ariaLabel = 'Pharmaceutical video footage',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check prefers-reduced-motion
  const isReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Priority videos attach source immediately; below-the-fold videos attach on proximity
  const [shouldAttachSource, setShouldAttachSource] = useState<boolean>(() => priority);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Track if container is currently in the viewport
  const isInViewportRef = useRef<boolean>(priority);

  // Effective preload
  const effectivePreload = preload || (priority ? 'metadata' : 'none');

  // Step 1: Proximity Observer for below-the-fold videos (attaches source 400px before entering viewport)
  useEffect(() => {
    if (priority || shouldAttachSource) {
      return;
    }

    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) {
      setShouldAttachSource(true);
      return;
    }

    const proximityObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldAttachSource(true);
          proximityObserver.disconnect();
        }
      },
      { rootMargin: '400px 0px 400px 0px' }
    );

    proximityObserver.observe(container);
    return () => proximityObserver.disconnect();
  }, [priority, shouldAttachSource]);

  // Helper to safely play the video
  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || isReducedMotion()) return;

    // DOM property enforcement for mobile & Chrome autoplay security policy
    video.muted = muted;
    video.defaultMuted = muted;
    video.playsInline = playsInline;

    if (typeof playbackRate === 'number' && playbackRate > 0) {
      video.playbackRate = playbackRate;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoPlaying(true);
          setHasError(false);
        })
        .catch(() => {
          // Handled gracefully: autoplay blocked or device power-saver active
          // Poster remains seamlessly visible
        });
    }
  }, [isReducedMotion, muted, playsInline, playbackRate]);

  // Helper to safely pause the video
  const pauseVideo = useCallback(() => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
  }, []);

  // Step 2: Viewport IntersectionObserver — plays when visible, pauses when out of view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!('IntersectionObserver' in window)) {
      isInViewportRef.current = true;
      if (autoPlay && isReadyToPlay && shouldAttachSource) {
        playVideo();
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          const isIntersecting = entry.isIntersecting;
          isInViewportRef.current = isIntersecting;

          if (isIntersecting) {
            if (autoPlay && isReadyToPlay && shouldAttachSource) {
              playVideo();
            }
          } else {
            pauseVideo();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlay, isReadyToPlay, shouldAttachSource, playVideo, pauseVideo]);

  // Step 3: React to isReadyToPlay or autoPlay state changes
  useEffect(() => {
    if (isReadyToPlay && autoPlay && isInViewportRef.current && shouldAttachSource) {
      playVideo();
    } else if (!isReadyToPlay) {
      pauseVideo();
    }
  }, [isReadyToPlay, autoPlay, shouldAttachSource, playVideo, pauseVideo]);

  // Step 4: React to src or playbackRate changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (typeof playbackRate === 'number' && playbackRate > 0) {
      video.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Step 5: Handle tab visibility change (pause on background tabs, resume when returning)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo();
      } else {
        if (isInViewportRef.current && autoPlay && isReadyToPlay && shouldAttachSource) {
          playVideo();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [autoPlay, isReadyToPlay, shouldAttachSource, playVideo, pauseVideo]);

  // Step 6: Video event listeners for state synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => setIsVideoPlaying(true);
    const handlePause = () => {
      // Handled silently
    };
    const handleError = () => {
      setHasError(true);
      setIsVideoPlaying(false);
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [shouldAttachSource]);

  return (
    <div
      ref={containerRef}
      className={`branded-video-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#071D36',
        ...style,
      }}
    >
      {/* Poster Image Fallback (Always rendered with exact dimensions to eliminate CLS) */}
      {poster && (
        <img
          src={poster}
          alt={ariaLabel}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isVideoPlaying && !hasError ? 0 : 1,
            transition: 'opacity 0.5s ease',
            zIndex: 1,
            pointerEvents: 'none',
          }}
          aria-hidden={isVideoPlaying}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={shouldAttachSource && !hasError ? src : undefined}
        poster={poster}
        autoPlay={autoPlay && isReadyToPlay}
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
        {shouldAttachSource && !hasError && (
          <source src={src} type="video/mp4" />
        )}
      </video>
    </div>
  );
};
