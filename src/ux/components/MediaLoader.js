import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${({ $ready, $minHeight, $fill }) =>
    $fill ? '100%' : $ready ? '0' : $minHeight || '11rem'};
  height: ${({ $fill }) => ($fill ? '100%' : 'auto')};
  background: ${({ theme }) => theme.colors.placeholder};
  border-radius: inherit;
  overflow: hidden;
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 4px;
  margin-top: -2px;
  margin-left: -30px;
  background: #e1c399f0;
  animation: ${spin} 1.5s infinite ease;

  &:nth-of-type(2) {
    animation-delay: 0.1s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(4) {
    animation-delay: 0.3s;
  }
`;

export function MediaSpinner() {
  return (
    <Spinner aria-hidden="true">
      <Line />
      <Line />
      <Line />
      <Line />
    </Spinner>
  );
}

const MediaSlot = styled.div`
  width: 100%;
  height: ${({ $fill }) => ($fill ? '100%' : 'auto')};
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  transition: opacity 0.25s ease;

  img,
  video {
    width: 100%;
    height: ${({ $fill }) => ($fill ? '100%' : 'auto')};
    display: block;
  }
`;

function useMediaReady(resetKey) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [resetKey]);

  return [ready, setReady];
}

function useNearViewport(rootMargin = '320px 0px') {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || near) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [near, rootMargin]);

  return [ref, near];
}

export function LoadableImage({
  src,
  alt = '',
  className,
  minHeight,
  fill = false,
  ...rest
}) {
  const [ready, setReady] = useMediaReady(src);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setReady(true);
    }
  }, [src, setReady]);

  return (
    <Wrap
      className={className}
      $ready={ready}
      $fill={fill}
      $minHeight={fill ? '100%' : minHeight}
    >
      {!ready ? <MediaSpinner /> : null}
      <MediaSlot $ready={ready} $fill={fill}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setReady(true)}
          onError={() => setReady(true)}
          {...rest}
        />
      </MediaSlot>
    </Wrap>
  );
}

export function LoadableVideo({
  src,
  className,
  minHeight,
  fill = false,
  'aria-label': ariaLabel,
  preload = 'metadata',
  autoPlay = false,
  ...rest
}) {
  const [ready, setReady] = useMediaReady(src);
  const [wrapRef, near] = useNearViewport();
  const videoRef = useRef(null);
  const activeSrc = near ? src : undefined;
  const activePreload = near && autoPlay ? 'auto' : preload;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc || !autoPlay) return undefined;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Autoplay can be blocked until more data buffers; ignore.
        });
      }
    };

    tryPlay();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
    };
  }, [activeSrc, autoPlay]);

  return (
    <Wrap
      ref={wrapRef}
      className={className}
      $ready={ready}
      $fill={fill}
      $minHeight={fill ? '100%' : minHeight}
    >
      {!ready ? <MediaSpinner /> : null}
      <MediaSlot $ready={ready} $fill={fill}>
        {activeSrc ? (
          <video
            ref={videoRef}
            src={activeSrc}
            aria-label={ariaLabel}
            preload={activePreload}
            autoPlay={autoPlay}
            onLoadedData={() => setReady(true)}
            onCanPlay={() => setReady(true)}
            onError={() => setReady(true)}
            {...rest}
          />
        ) : null}
      </MediaSlot>
    </Wrap>
  );
}
