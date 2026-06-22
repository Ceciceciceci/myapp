import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, displayFont, pillFont } from '../styles';
import { tagColor } from '../theme';
import { ArrowRight } from '../icons';
import ceciliaAvatar from '../../images/cecilia-avatar.png';
import { projects } from '../data/projects';

const workGridItems = projects.slice(0, 4).map((project) => ({
  type: 'project',
  title: project.title,
  tag: project.tags[0],
  img: project.img,
  to: `/ux/projects/${project.id}`,
}));

const shortcuts = [
  { label: 'Case Studies', to: '/ux/projects' },
  { label: 'Art & Drawing', to: '/ux/art' },
  { label: 'About Me', to: '/ux/about' },
];

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, 520px);
  gap: 3rem;
  align-items: center;

  @media (min-width: 901px) {
    min-height: calc(100dvh - 64px);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftCol = styled.div`
  padding: 4rem 0;

  @media (max-width: 900px) {
    padding: 3rem 0 1.5rem;
  }
`;

const HeroTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

const HeroAvatar = styled.img`
  width: clamp(6.6rem, 18.5vw, 9.9rem);
  height: auto;
  flex-shrink: 0;
  display: block;
`;

const HeroTitle = styled.h1`
  ${displayFont}
  color: ${({ theme }) => theme.colors.foreground};
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  line-height: 0.95;
  margin: 0;
  font-weight: 400;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
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
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 0.875rem 1rem;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.25s;
  border-radius: 15px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBgHover};
  }
`;

const GridPanel = styled.div`
  padding: 4rem 0;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 1rem 2rem;
    margin-left: -2rem;
    margin-right: -2rem;
    width: calc(100% + 4rem);
  }
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const GridCard = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  min-width: 0;
`;

const GridCardInner = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(92, 51, 23, 0.1);
  display: ${({ $isCta }) => ($isCta ? 'flex' : 'block')};
  flex-direction: ${({ $isCta }) => ($isCta ? 'column' : 'unset')};
  align-items: ${({ $isCta }) => ($isCta ? 'center' : 'unset')};
  justify-content: ${({ $isCta }) => ($isCta ? 'center' : 'unset')};
  gap: ${({ $isCta }) => ($isCta ? '0.75rem' : '0')};
  padding: ${({ $isCta }) => ($isCta ? '1.5rem' : '0')};
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  ${GridCard}:hover & {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(92, 51, 23, 0.12);
    border-color: ${({ theme }) => theme.colors.hoverYellowBorder};
  }
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
  background: linear-gradient(
    to top,
    rgba(44, 26, 15, 0.82) 0%,
    rgba(44, 26, 15, 0.2) 45%,
    rgba(44, 26, 15, 0.05) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
`;

const GridTag = styled.div`
  ${pillFont}
  display: inline-block;
  font-size: 0.825rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: none;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  margin-bottom: 0.375rem;
`;

const GridTitle = styled.div`
  ${displayFont}
  color: ${({ theme }) => theme.colors.buttonTextMuted};
  font-size: clamp(0.875rem, 1.6vw, 1.0625rem);
  line-height: 1.2;
`;

const CtaTitle = styled.div`
  ${displayFont}
  color: ${({ theme }) => theme.colors.foreground};
  font-size: clamp(1rem, 2vw, 1.25rem);
  text-align: center;
  line-height: 1.2;
`;

const CtaArrow = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShortcutLabel = styled.div`
  ${displayFont}
  font-size: 0.875rem;
`;

function WorkGridItem({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const tc = tagColor(index);
  const isCta = item.type === 'cta';

  return (
    <GridCard
      to={item.to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GridCardInner $isCta={isCta}>
        {isCta ? (
          <>
            <GridTag $bg={tc.bg} $color={tc.color}>
              {item.tag}
            </GridTag>
            <CtaTitle>{item.title}</CtaTitle>
            <CtaArrow>
              <ArrowRight size={18} />
            </CtaArrow>
          </>
        ) : (
          <>
            <GridImage src={item.img} alt={item.title} $hovered={hovered} />
            <GridOverlay>
              <GridTag $bg={tc.bg} $color={tc.color}>
                {item.tag}
              </GridTag>
              <GridTitle>{item.title}</GridTitle>
            </GridOverlay>
          </>
        )}
      </GridCardInner>
    </GridCard>
  );
}

function ShortcutCard({ label, to }) {
  return (
    <ShortcutLink to={to}>
      <ShortcutLabel>{label}</ShortcutLabel>
      <ArrowRight size={13} style={{ opacity: 0.9 }} />
    </ShortcutLink>
  );
}

export default function UxHome() {
  return (
    <PageMain>
      <Container>
        <HeroGrid>
          <LeftCol>
            <HeroTitleRow>
              <HeroAvatar src={ceciliaAvatar} alt="" />
              <HeroTitle>
                Cecilia
                <br />
                <span>Tran</span>
              </HeroTitle>
            </HeroTitleRow>

            <AccentRule />

            <Bio>
              I love creating solutions that help bring joy and ease to everyday
              and fun experiences and hobbies.
            </Bio>

            <ShortcutGrid>
              {shortcuts.map((s) => (
                <ShortcutCard key={s.to} {...s} />
              ))}
            </ShortcutGrid>
          </LeftCol>

          <GridPanel>
            <WorkGrid>
              {workGridItems.map((item, i) => (
                <WorkGridItem key={item.to} item={item} index={i} />
              ))}
            </WorkGrid>
          </GridPanel>
        </HeroGrid>
      </Container>
    </PageMain>
  );
}
