import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import PhotoAlbum from 'react-photo-album';
import styled from 'styled-components';
import { galleryMeta, galleryPhotos } from './photos';
import Lightbox from './Lightbox';
import { MediaSpinner } from '../ux/components/MediaLoader';

const Page = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 1.25rem 3rem;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0 0.5rem;
`;

const BackLink = styled(Link)`
  font-family: var(--openSans);
  font-size: 14px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--dark-blue);
  text-transform: lowercase;

  &:hover {
    color: #f16a4c;
  }
`;

const Header = styled.p`
  background-color: #ffb700;
  text-align: center;
  padding-top: 5px;
  margin: 30px 0 18px;
  color: white;
  font-size: clamp(40px, 8vw, 60px);
  font-weight: bold;
  line-height: 1.15;
  font-family: var(--dongle);
  letter-spacing: 10px;
`;

const Subtext = styled.p`
  font-family: var(--openSans);
  font-size: 14px;
  text-align: center;
  margin: 0 0 30px;
  letter-spacing: 1px;
  color: var(--dark-blue);
`;

const AlbumWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  img {
    cursor: zoom-in;
    border-radius: 4px;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: center;
  }
`;

const Loading = styled.div`
  position: relative;
  min-height: 16rem;
`;

function GalleryPhoto({ photo, imageProps, wrapperStyle }) {
  const [ready, setReady] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setReady(true);
    }
  }, [imageProps.src]);

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      {!ready ? (
        <Loading style={{ position: 'absolute', inset: 0, minHeight: 0 }}>
          <MediaSpinner />
        </Loading>
      ) : null}
      <img
        {...imageProps}
        ref={imgRef}
        alt={photo.alt || ''}
        style={{
          ...imageProps.style,
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
        onLoad={(event) => {
          if (imageProps.onLoad) imageProps.onLoad(event);
          setReady(true);
        }}
        onError={(event) => {
          if (imageProps.onError) imageProps.onError(event);
          setReady(true);
        }}
      />
    </div>
  );
}

function measurePhotos(sourcePhotos) {
  return Promise.all(
    sourcePhotos.map(
      (photo) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              ...photo,
              width: img.naturalWidth || photo.width,
              height: img.naturalHeight || photo.height,
            });
          };
          img.onerror = () => resolve(photo);
          img.src = photo.src;
        }),
    ),
  );
}

export default function ArtistGallery() {
  const { category } = useParams();
  const sourcePhotos = galleryPhotos[category];
  const meta = galleryMeta[category];
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setPhotos([]);
    setIndex(null);

    if (!sourcePhotos?.length) return undefined;

    measurePhotos(sourcePhotos).then((measured) => {
      if (!cancelled) setPhotos(measured);
    });

    return () => {
      cancelled = true;
    };
  }, [sourcePhotos]);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((current) =>
        current == null || !photos.length
          ? null
          : (current + photos.length - 1) % photos.length,
      ),
    [photos],
  );
  const next = useCallback(
    () =>
      setIndex((current) =>
        current == null || !photos.length ? null : (current + 1) % photos.length,
      ),
    [photos],
  );

  if (!sourcePhotos || !meta) {
    return <Redirect to="/artist" />;
  }

  return (
    <Page>
      <TopBar>
        <BackLink to="/artist">← back</BackLink>
        <BackLink
          to={`/artist/${
            category === 'original'
              ? 'fanart'
              : category === 'fanart'
                ? 'foodart'
                : 'original'
          }`}
        >
          next gallery →
        </BackLink>
      </TopBar>

      <Header>{meta.title}</Header>
      <Subtext>{meta.blurb}</Subtext>

      <AlbumWrap>
        {photos.length ? (
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            padding={5}
            spacing={8}
            columns={(containerWidth) => {
              if (containerWidth < 500) return 1;
              if (containerWidth < 800) return 2;
              return 3;
            }}
            renderPhoto={GalleryPhoto}
            onClick={(_event, _photo, photoIndex) => setIndex(photoIndex)}
          />
        ) : (
          <Loading>
            <MediaSpinner />
          </Loading>
        )}
      </AlbumWrap>

      <Lightbox
        photos={photos}
        index={index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </Page>
  );
}
