import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain } from '../styles';
import { ArrowRight, MapPin } from '../icons';
import { projects } from '../data/projects';
import { artworks } from '../data/artworks';

const gridItems = [
  {
    type: 'project',
    title: projects[0].title,
    tag: projects[0].tags[0],
    img: projects[0].img,
    to: `/ux/projects/${projects[0].id}`,
  },
  {
    type: 'project',
    title: projects[1].title,
    tag: projects[1].tags[0],
    img: projects[1].img,
    to: `/ux/projects/${projects[1].id}`,
  },
  {
    type: 'art',
    title: artworks[0].title,
    tag: artworks[0].medium,
    img: artworks[0].img,
    to: '/ux/art',
  },
  {
    type: 'project',
    title: projects[2].title,
    tag: projects[2].tags[0],
    img: projects[2].img,
    to: `/ux/projects/${projects[2].id}`,
  },
  {
    type: 'project',
    title: projects[3].title,
    tag: projects[3].tags[0],
    img: projects[3].img,
    to: `/ux/projects/${projects[3].id}`,
  },
  {
    type: 'art',
    title: artworks[6].title,
    tag: 'Fan art',
    img: artworks[6].img,
    to: '/ux/art',
  },
  {
    type: 'art',
    title: artworks[1].title,
    tag: artworks[1].medium,
    img: artworks[1].img,
    to: '/ux/art',
  },
  {
    type: 'art',
    title: artworks[3].title,
    tag: artworks[3].medium,
    img: artworks[3].img,
    to: '/ux/art',
  },
  {
    type: 'art',
    title: artworks[10].title,
    tag: 'Fan art',
    img: artworks[10].img,
    to: '/ux/art',
  },
];

const shortcuts = [
  { label: 'Case Studies', to: '/ux/projects', desc: `${projects.length} projects` },
  { label: 'Art & Drawing', to: '/ux/art', desc: 'Illustrations' },
  { label: 'About Me', to: '/ux/about', desc: 'Background' },
];

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: calc(100vh - 56px);
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`;

const LeftCol = styled.div`
  padding: 4rem 0;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.04em;
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  line-height: 0.95;
  margin-bottom: 1.75rem;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const RoleLine = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
`;

const AccentRule = styled.div`
  width: 2.5rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.75rem;
`;

const Bio = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.75;
  max-width: 440px;
  margin-bottom: 2rem;
`;

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.8125rem;
  margin-bottom: 3rem;
`;

const ShortcutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  max-width: 440px;
`;

const ShortcutLink = styled(Link)`
  text-decoration: none;
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.hoverYellow : theme.colors.card};
  border: 1.5px solid
    ${({ $hovered, theme }) =>
      $hovered ? theme.colors.hoverYellowBorder : theme.colors.border};
  padding: 0.875rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
  border-radius: 1rem;
  box-shadow: ${({ $hovered }) =>
    $hovered
      ? '0 4px 14px rgba(196,122,30,0.15)'
      : '0 1px 4px rgba(92,51,23,0.07)'};
`;

const GridPanel = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

const ThumbGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  gap: 0.375rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;

const GridCard = styled(Link)`
  text-decoration: none;
  display: block;
`;

const GridCardInner = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(92, 51, 23, 0.09);
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.06)' : 'scale(1)')};
  transition: transform 0.4s ease;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.overlay : theme.colors.overlayLight};
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.625rem;
`;

const GridTag = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.125rem;
`;

const GridTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.75rem;
  letter-spacing: -0.01em;
`;

const GridDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ $isArt, theme }) =>
    $isArt ? theme.colors.accent : theme.colors.foreground};
  opacity: 0.6;
`;

function GridItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <GridCard
      to={item.to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridCardInner>
        <GridImage src={item.img} alt={item.title} $hovered={hovered} />
        <GridOverlay $hovered={hovered}>
          {hovered ? (
            <div>
              <GridTag>{item.tag}</GridTag>
              <GridTitle>{item.title}</GridTitle>
            </div>
          ) : (
            <GridDot $isArt={item.type === 'art'} />
          )}
        </GridOverlay>
      </GridCardInner>
    </GridCard>
  );
}

function ShortcutCard({ label, to, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ShortcutLink
      to={to}
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-display, Bricolage Grotesque, sans-serif)',
            fontSize: '0.875rem',
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: '0.6875rem',
            color: '#7A5230',
            marginTop: '0.125rem',
          }}
        >
          {desc}
        </div>
      </div>
      <ArrowRight
        size={13}
        style={{
          color: hovered ? '#C47A1E' : '#7A5230',
          transition: 'color 0.2s',
        }}
      />
    </ShortcutLink>
  );
}

export default function UxHome() {
  return (
    <PageMain>
      <Container>
        <HeroGrid>
          <LeftCol>
            <HeroTitle>
              Cecilia
              <br />
              <span>Tran</span>
            </HeroTitle>

            <RoleLine>Software Engineer & UX/UI Designer</RoleLine>
            <AccentRule />

            <Bio>
              I design creative solutions where tech intersects art — focused on
              front-end engineering, user experience, and illustration. Currently
              exploring React and Three.js.
            </Bio>

            <Location>
              <MapPin />
              Glendale, CA / Remote
            </Location>

            <ShortcutGrid>
              {shortcuts.map((s) => (
                <ShortcutCard key={s.to} {...s} />
              ))}
            </ShortcutGrid>
          </LeftCol>

          <GridPanel>
            <ThumbGrid>
              {gridItems.map((item, i) => (
                <GridItem key={i} item={item} />
              ))}
            </ThumbGrid>
          </GridPanel>
        </HeroGrid>
      </Container>
    </PageMain>
  );
}
