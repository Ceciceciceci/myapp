import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
  grid-column: ${({ $layout }) => ($layout === 'full' ? '1 / -1' : 'auto')};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Meta = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
  word-break: break-word;
`;

const MetaLink = styled.a`
  color: ${({ theme }) => theme.colors.accentBlue};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

const ImageLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const ImageWrap = styled.div`
  width: 100%;
  margin-top: 0.35rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
  aspect-ratio: ${({ $layout }) => ($layout === 'full' ? '21 / 9' : '4 / 3')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.03)' : 'scale(1)')};
  transition: transform 0.4s ease;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

function MetaLine({ meta, url }) {
  if (!url) {
    return <Meta>{meta}</Meta>;
  }

  return (
    <Meta>
      {meta}
      {' | '}
      <MetaLink href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </MetaLink>
    </Meta>
  );
}

export default function ProjectCard({
  title,
  meta,
  url,
  img,
  video,
  to,
  layout = 'half',
}) {
  const [hovered, setHovered] = useState(false);

  const mediaNode = (
    <ImageWrap
      $layout={layout}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {video ? (
        <Video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          aria-label={title}
        />
      ) : img ? (
        <Image src={img} alt={title} $hovered={hovered && Boolean(to)} />
      ) : null}
    </ImageWrap>
  );

  return (
    <Card $layout={layout}>
      <Title>
        {to ? <TitleLink to={to}>{title}</TitleLink> : title}
      </Title>
      <MetaLine meta={meta} url={url} />
      {to ? <ImageLink to={to}>{mediaNode}</ImageLink> : mediaNode}
    </Card>
  );
}
