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
  min-height: ${({ $ready, $minHeight }) =>
    $ready ? '0' : $minHeight || '11rem'};
  background: ${({ theme, $ready }) =>
    $ready ? 'transparent' : theme.colors.placeholder};
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

function MediaSpinner() {
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
      $minHeight={fill ? '100%' : minHeight}
    >
      {!ready ? <MediaSpinner /> : null}
      <MediaSlot $ready={ready} $fill={fill}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
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
  ...rest
}) {
  const [ready, setReady] = useMediaReady(src);

  return (
    <Wrap
      className={className}
      $ready={ready}
      $minHeight={fill ? '100%' : minHeight}
    >
      {!ready ? <MediaSpinner /> : null}
      <MediaSlot $ready={ready} $fill={fill}>
        <video
          src={src}
          aria-label={ariaLabel}
          onLoadedData={() => setReady(true)}
          onCanPlay={() => setReady(true)}
          onError={() => setReady(true)}
          {...rest}
        />
      </MediaSlot>
    </Wrap>
  );
}
