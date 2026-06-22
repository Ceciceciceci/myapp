import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, PageMain, DisplayHeading } from '../styles';
import { artworks } from '../data/artworks';

const Header = styled.div`
  padding: 5rem 0 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderDesc = styled.p`
  max-width: 280px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.7;
  padding-bottom: 0.25rem;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: 0.75rem;
  padding: 3rem 0 6rem;

  @media (max-width: 960px) {
    column-count: 2;
  }

  @media (max-width: 640px) {
    column-count: 1;
  }
`;

const ArtCardWrap = styled.div`
  break-inside: avoid;
  margin-bottom: 0.75rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  cursor: pointer;
`;

const ArtImage = styled.img`
  width: 100%;
  display: block;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.03)' : 'scale(1)')};
  transition: transform 0.5s ease;
`;

const ArtOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1rem 0.875rem;
  background: linear-gradient(
    to top,
    rgba(44, 26, 15, 0.88) 0%,
    rgba(44, 26, 15, 0) 100%
  );
  transform: ${({ $hovered }) => ($hovered ? 'translateY(0)' : 'translateY(8px)')};
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const ArtTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.875rem;
  letter-spacing: -0.01em;
  margin-bottom: 0.25rem;
`;

const ArtMeta = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.04em;
`;

const Cta = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CtaText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.7;
  max-width: 420px;
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1.5px solid
    ${({ $hovered, theme }) =>
      $hovered ? theme.colors.hoverYellowBorder : theme.colors.border};
  padding: 0.75rem 1.75rem;
  color: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.hoverBrown : theme.colors.foreground};
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.hoverYellow : 'transparent'};
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  font-family: ${({ theme }) => theme.fonts.display};
  transition: border-color 0.25s, color 0.25s, background 0.25s, box-shadow 0.25s;
  flex-shrink: 0;
  border-radius: 999px;
  box-shadow: ${({ $hovered }) =>
    $hovered
      ? '0 4px 14px rgba(196,122,30,0.15)'
      : '0 1px 4px rgba(92,51,23,0.08)'};
`;

function ArtCard({ artwork }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ArtCardWrap
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ArtImage src={artwork.img} alt={artwork.title} loading="lazy" $hovered={hovered} />
      <ArtOverlay $hovered={hovered}>
        <ArtTitle>{artwork.title}</ArtTitle>
        <ArtMeta>
          {artwork.medium} · {artwork.year}
        </ArtMeta>
      </ArtOverlay>
    </ArtCardWrap>
  );
}

function InstagramCta() {
  const [hovered, setHovered] = useState(false);
  return (
    <CtaLink
      href="https://www.instagram.com/ichiknees/"
      target="_blank"
      rel="noopener noreferrer"
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Follow on Instagram →
    </CtaLink>
  );
}

export default function UxArt() {
  return (
    <PageMain>
      <Container>
        <Header>
          <div>
            <Eyebrow>Art</Eyebrow>
            <DisplayHeading style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Drawing
              <br />
              &amp; Illustration
            </DisplayHeading>
          </div>
          <HeaderDesc>
            Fan art, botanical studies, and character illustrations — made in
            sketchbooks and on screen. Hobbies include drawing, graphic design,
            and baking.
          </HeaderDesc>
        </Header>

        <MasonryGrid>
          {artworks.map((artwork) => (
            <ArtCard key={artwork.id} artwork={artwork} />
          ))}
        </MasonryGrid>

        <Cta>
          <CtaText>
            More art on Instagram and Behance. Feel free to reach out if you'd
            like to collaborate or commission something.
          </CtaText>
          <InstagramCta />
        </Cta>
      </Container>
    </PageMain>
  );
}
