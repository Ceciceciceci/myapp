import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(26, 29, 38, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const Frame = styled.div`
  position: relative;
  max-width: min(1100px, 100%);
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 4rem);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
`;

const Control = styled.button`
  appearance: none;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
  }
`;

const Close = styled(Control)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
`;

const Prev = styled(Control)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const Next = styled(Control)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  useEffect(() => {
    if (index == null) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [index, onClose, onPrev, onNext]);

  if (index == null || !photo) return null;

  return (
    <Overlay onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox">
      <Close type="button" onClick={onClose} aria-label="Close">
        ×
      </Close>
      {photos.length > 1 ? (
        <Prev
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          ‹
        </Prev>
      ) : null}
      <Frame onClick={(event) => event.stopPropagation()}>
        <Image src={photo.src} alt={photo.alt || ''} />
      </Frame>
      {photos.length > 1 ? (
        <Next
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          ›
        </Next>
      ) : null}
    </Overlay>
  );
}
