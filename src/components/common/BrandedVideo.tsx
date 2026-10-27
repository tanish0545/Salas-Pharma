import React, { useRef, useEffect, useState, useId } from 'react';

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
  isReadyToPlay?: boolean; // When false (e.g. loader active), delays playback
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

// Global active video coordinator: guarantees at most ONE background video decodes/plays at any time
class VideoPlaybackManager {
  private static instance: VideoPlaybackManager;
  private activeVideoId: string | null = null;
  private registeredVideos = new Map<string, HTMLVideoElement>();

  static getInstance(): VideoPlaybackManager {
    if (!VideoPlaybackManager.instance) {
      VideoPlaybackManager.instance = new VideoPlaybackManager();
    }
    return VideoPlaybackManager.instance;
  }

  register(id: string, video: HTMLVideoElement) {
    this.registeredVideos.set(id, video);
  }

  unregister(id: string) {
    if (this.activeVideoId === id) {
      this.activeVideoId = null;
    }
    this.registeredVideos.delete(id);
  }

  requestPlay(id: string, video: HTMLVideoElement) {
    // If another video is playing, pause it to free hardware decoder sessions
    if (this.activeVideoId && this.activeVideoId !== id) {
      const prevVideo = this.registeredVideos.get(this.activeVideoId);
      if (prevVideo && !prevVideo.paused) {
        prevVideo.pause();
      }
    }

    this.activeVideoId = id;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handled silently: browser autoplay or power policy restriction
      });
    }
  }

  pause(id: string, video: HTMLVideoElement) {
    if (!video.paused) {
      video.pause();
    }
    if (this.activeVideoId === id) {
      this.activeVideoId = null;
    }
  }

  pauseAll() {
    this.registeredVideos.forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });
    this.activeVideoId = null;
  }
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
  isReadyToPlay = true,
  className = '',
  style = {},
  ariaLabel = 'Pharmaceutical video footage',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = useId();

  // Detect network conditions & data-saver mode
  const isDataConstrained = () => {
    if (typeof navigator === 'undefined') return false;
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (nav.connection) {
      if (nav.connection.saveData) return true;
      if (nav.connection.effectiveType === '2g' || nav.connection.effectiveType === '3g') {
        return true;
      }
    }
    return false;
  };

  // Check prefers-reduced-motion
  const isReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Hero videos attach immediately; below-the-fold videos attach on viewport proximity
  const [shouldAttachSource, setShouldAttachSource] = useState<boolean>(() => priority);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Effective preload: hero defaults to 'metadata', below-the-fold defaults to 'none'
  const effectivePreload = preload || (priority ? 'metadata' : 'none');

  // Step 1: Proximity Observer for below-the-fold videos (loads source 200px before entering viewport)
  useEffect(() => {
    if (shouldAttachSource) return;

    // Constrained networks: skip below-the-fold video attachments and use poster fallback
    if (!priority && (isDataConstrained() || isReducedMotion())) {
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
      { rootMargin: '200px 0px 200px 0px' }
    );

    proximityObserver.observe(container);
    return () => proximityObserver.disconnect();
  }, [shouldAttachSource, priority]);

  // Step 2: Global Playback Manager coordination & single active decoder
  useEffect(() => {
    if (!shouldAttachSource) return;

    const video = videoRef.current;
    if (!video) return;

    if (isReducedMotion()) {
      video.pause();
      return;
    }

    const manager = VideoPlaybackManager.getInstance();
    manager.register(videoId, video);

    // Apply playback rate
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

    const handlePlaying = () => setIsVideoPlaying(true);
    const handleError = () => setHasError(true);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);

    // Viewport IntersectionObserver: decodes and plays ONLY when in active view
    let playbackObserver: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      playbackObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            if (entry.isIntersecting && autoPlay && isReadyToPlay) {
              manager.requestPlay(videoId, video);
            } else {
              manager.pause(videoId, video);
            }
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px 0px 0px' }
      );
      playbackObserver.observe(video);
    } else {
      if (autoPlay && isReadyToPlay) {
        manager.requestPlay(videoId, video);
      }
    }

    // Document visibility change listener (pauses immediately on background tabs)
    const handleVisibility = () => {
      if (document.hidden) {
        manager.pause(videoId, video);
      } else {
        const rect = video.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && autoPlay && isReadyToPlay) {
          manager.requestPlay(videoId, video);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (playbackObserver) playbackObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      video.removeEventListener('play', applyPlaybackRate);
      video.removeEventListener('loadedmetadata', applyPlaybackRate);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);

      manager.pause(videoId, video);
      manager.unregister(videoId);

      // Clean up buffers and release hardware decoder
      video.removeAttribute('src');
      video.load();
    };
  }, [shouldAttachSource, playbackRate, autoPlay, isReadyToPlay, videoId]);

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
      {/* Poster Image Fallback (Always rendered with correct dimensions to eliminate CLS) */}
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
            transition: 'opacity 0.4s ease',
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
