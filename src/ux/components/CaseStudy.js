import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { PageMain } from '../styles';
import { projects, visibleProjects } from '../data/projects';
import { buildCaseStudy } from '../utils/buildCaseStudy';
import flowerMarker from '../../images/svgs/flower.svg';

const flowerNudge = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  40% { transform: rotate(18deg) scale(1.12); }
  100% { transform: rotate(0deg) scale(1); }
`;

const Page = styled(PageMain)`
  padding-bottom: 1rem;
`;

/* Sidebar 250 + gap 32 + content 750 = 1032; extra viewport width becomes side padding.
   Both columns share the same top edge (BACK // title). */
const CaseShell = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  padding: 0 max(40px, calc((100vw - 1032px) / 2)) 2rem;

  @media (max-width: 900px) {
    display: block;
    padding: 0 1.25rem 1.5rem;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: ${({ theme }) => theme.navHeight};
  flex: 0 0 250px;
  width: 250px;
  max-height: calc(100vh - ${({ theme }) => theme.navHeight});
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: flex-start;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SidebarBack = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.accentBlue};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.25;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  /* Beat .ux-portfolio main a { color: inherit } */
  &&& {
    color: ${({ theme }) => theme.colors.background};
  }

  &&&:hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.background};
  }
`;

const SideNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const SideMarkerCol = styled.div`
  position: relative;
  width: 14px;
  flex-shrink: 0;
  align-self: stretch;
`;

const SideMarkerTrack = styled.div`
  position: absolute;
  left: 0;
  width: 14px;
  height: 13px;
  transition: top 0.32s cubic-bezier(0.22, 1, 0.36, 1);
`;

const SideMarker = styled.img`
  display: block;
  width: 14px;
  height: 13px;
  transform-origin: center;
  animation: ${({ $nudge }) => ($nudge ? flowerNudge : 'none')} 0.32s ease-out;
`;

const SideLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`;

const SideLink = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ $active, theme }) =>
    $active ? theme.typography.bodyBoldWeight : theme.typography.bodyWeight};
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accentBlue : theme.colors.foreground};
  transition: color 0.15s ease;
`;

const MainColumn = styled.div`
  flex: 1 1 0;
  min-width: 0;
  max-width: 750px;
  padding-bottom: 3rem;
`;

const MobileBack = styled(Link)`
  display: none;
  margin: 1.5rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};

  @media (max-width: 900px) {
    display: inline-block;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.navLinkHover};
  }
`;

const Intro = styled.header`
  padding: 0 0 1.5rem;

  @media (max-width: 900px) {
    padding: 1.25rem 0 1.25rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 0.85rem;
  margin-bottom: 0.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
`;

const MetaLabel = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaValue = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaLine = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 52rem;
`;

const HeroWrap = styled.div`
  width: 100%;
  margin: 1.5rem 0 2.75rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
`;

const HeroSplit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  margin: 1.5rem 0 2.75rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const HeroSplitItem = styled.div`
  flex: 1 1 0;
  min-width: 0;
  background: transparent;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: top center;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: #111;
`;

const FullWidthMedia = styled.div`
  width: 100%;
  margin: 0;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: transparent;

  img,
  video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  video {
    background: #111;
  }
`;

const Section = styled.section`
  margin-bottom: 2.75rem;
  scroll-margin-top: calc(${({ theme }) => theme.navHeight} + 1rem);
`;

const SectionTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Body = styled.p`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 48rem;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 4}, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(
      ${({ $cols }) => Math.min($cols || 4, 2)},
      minmax(0, 1fr)
    );
  }
`;

const GridImage = styled.div`
  aspect-ratio: ${({ $ratio }) => $ratio || '1'};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
  min-height: ${({ $minHeight }) => $minHeight || '0'};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: top center;
  }
`;

const StackBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || '1rem'};
  width: 100%;
`;

const ModeStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ModeStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 6.5rem;
`;

const ModeStatValue = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 32px;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  color: ${({ $accent, theme }) =>
    $accent === 'orange' ? theme.colors.accentOrange : theme.colors.accentBlue};
`;

const ModeStatLabel = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
`;

const FeatureColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  width: 100%;
  margin-top: 0.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCol = styled.div`
  min-width: 0;

  ${Body} {
    max-width: none;
    margin-bottom: 0;
  }
`;

const FeatureColTitle = styled.p`
  margin: 0 0 0.15rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.foreground};
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;

const SubSectionTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.4;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.foreground};
`;

const PlaceholderBlock = styled.div`
  width: 100%;
  min-height: ${({ $height }) => $height || '100px'};
  background: ${({ theme }) => theme.colors.placeholder};
  border-radius: 8px;
`;

const SubMediaStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  width: 100%;
`;

const SubMediaItem = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: transparent;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: top center;
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const BulletItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};
`;

const ResultsPanel = styled.div`
  background: transparent;
  border: none;
  padding: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 4}, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: ${({ $hasItems }) => ($hasItems ? '1.5rem' : '0')};

  @media (max-width: 800px) {
    grid-template-columns: repeat(
      ${({ $cols }) => Math.min($cols || 4, 2)},
      minmax(0, 1fr)
    );
  }
`;

const StatCard = styled.div`
  min-width: 0;
`;

const StatValue = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${({ $accent, theme }) =>
    $accent === 'orange'
      ? theme.colors.accentOrange
      : $accent === 'red'
        ? theme.colors.accentRed
        : theme.colors.accentBlue};
`;

const StatLabel = styled.p`
  margin: 0.45rem 0 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const ResultsGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ResultItem = styled.li`
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.foreground};
`;

const NumberIntro = styled(Body)`
  margin: 0 0 20px;
  padding: 0;
`;

const NumberList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NumberItem = styled.li`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 2.25rem minmax(0, 1fr);
  column-gap: 0.85rem;
  align-items: start;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.foreground};
`;

const NumberMarker = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accentBlue};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  line-height: 1;
  white-space: nowrap;
  flex-shrink: 0;
`;

const NumberText = styled.span`
  min-width: 0;
  padding-top: 0.4rem;
`;

const MediaText = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 1.75rem;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const MediaFrame = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ $hasMedia, theme }) =>
    $hasMedia ? 'transparent' : theme.colors.placeholder};
  aspect-ratio: ${({ $hasMedia, $wide }) =>
    $hasMedia ? 'auto' : $wide ? '21 / 5' : '1 / 1'};

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    background: transparent;
  }

  video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    background: #111;
  }
`;

const MediaCopy = styled.div`
  min-width: 0;
`;

const NavSection = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 3rem 0 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const NavCard = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  background: ${({ theme }) => theme.colors.placeholder};
  border-radius: 12px;
  min-height: 96px;
  overflow: hidden;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const NavCardInner = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 96px;
  justify-content: center;
`;

const NavLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  color: ${({ theme }) => theme.colors.foreground};
`;

const NavTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.25;
`;

const Missing = styled.div`
  text-align: center;
  padding: 6rem 0;

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

function Media({ src, video, alt = '', wide = false }) {
  const hasMedia = Boolean(src || video);
  return (
    <MediaFrame $wide={wide} $hasMedia={hasMedia}>
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
          aria-label={alt}
        />
      ) : src ? (
        <img src={src} alt={alt} />
      ) : null}
    </MediaFrame>
  );
}

function renderBody(body) {
  if (!body) return null;
  if (Array.isArray(body)) {
    return body.map((para) => <Body key={para}>{para}</Body>);
  }
  return <Body>{body}</Body>;
}

function CaseSection({ section }) {
  if (!section) return null;

  if (section.type === 'prose') {
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.img ? (
          <FullWidthMedia>
            <img src={section.img} alt={section.title || ''} />
          </FullWidthMedia>
        ) : null}
        {renderBody(section.body)}
      </Section>
    );
  }

  if (section.type === 'image-grid') {
    const images = section.images || [null, null, null];
    const cols = Math.min(Math.max(images.length, 1), 4);
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.intro ? <Body>{section.intro}</Body> : null}
        <ImageGrid $cols={cols}>
          {images.slice(0, cols).map((src, i) => (
            <GridImage key={src || `ph-${i}`} $ratio={cols === 3 ? '239 / 205' : '1'}>
              {src ? <img src={src} alt="" /> : null}
            </GridImage>
          ))}
        </ImageGrid>
        {section.caption ? <Body>{section.caption}</Body> : null}
      </Section>
    );
  }

  if (section.type === 'results') {
    const accents = ['blue', 'orange', 'red', 'blue'];
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <ResultsPanel>
          {section.stats?.length ? (
            <StatsGrid
              $cols={Math.min(section.stats.length, 4)}
              $hasItems={Boolean(section.items?.length)}
            >
              {section.stats.map((stat, i) => (
                <StatCard key={`${stat.value}-${stat.label}`}>
                  <StatValue $accent={accents[i % accents.length]}>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          ) : null}
          {section.items?.length ? (
            <ResultsGrid>
              {section.items.map((item) => (
                <ResultItem key={item}>{item}</ResultItem>
              ))}
            </ResultsGrid>
          ) : null}
        </ResultsPanel>
      </Section>
    );
  }

  if (section.type === 'bullets') {
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <BulletList>
          {(section.items || []).map((item) => (
            <BulletItem key={item}>{item}</BulletItem>
          ))}
        </BulletList>
      </Section>
    );
  }

  if (section.type === 'numbered') {
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.intro ? <NumberIntro>{section.intro}</NumberIntro> : null}
        <NumberList>
          {(section.items || []).map((item, i) => {
            const match = String(item).match(/^(\d+)[.)]+\s*(.*)$/);
            const marker = match ? match[1] : String(i + 1);
            const text = match ? match[2] : item;
            return (
              <NumberItem key={item}>
                <NumberMarker>{marker}</NumberMarker>
                <NumberText>{text}</NumberText>
              </NumberItem>
            );
          })}
        </NumberList>
      </Section>
    );
  }

  if (section.type === 'stacked-media') {
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <StackBlock $gap={section.stackGap || '1rem'}>
          {(section.video || section.img || section.placeholder) && (
            section.placeholder && !section.video && !section.img ? (
              <PlaceholderBlock $height={section.placeholderHeight || '260px'} />
            ) : (
              <FullWidthMedia>
                {section.video ? (
                  <video
                    src={section.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    aria-label={section.title || ''}
                  />
                ) : (
                  <img src={section.img} alt={section.title || ''} />
                )}
              </FullWidthMedia>
            )
          )}
          {section.modeStats?.length ? (
            <ModeStats>
              {section.modeStats.map((stat) => (
                <ModeStat key={stat.label}>
                  <ModeStatValue $accent={stat.accent}>{stat.value}</ModeStatValue>
                  <ModeStatLabel>{stat.label}</ModeStatLabel>
                </ModeStat>
              ))}
            </ModeStats>
          ) : null}
          {renderBody(section.body)}
          {section.columns?.length ? (
            <FeatureColumns>
              {section.columns.map((col) => (
                <FeatureCol key={col.title}>
                  <FeatureColTitle>{col.title}</FeatureColTitle>
                  <Body>{col.body}</Body>
                </FeatureCol>
              ))}
            </FeatureColumns>
          ) : null}
          {section.subsections?.map((sub) => {
            const imgs = sub.imgs || (sub.img ? [sub.img] : []);
            return (
              <SubSection key={sub.title} id={sub.id}>
                {sub.title ? <SubSectionTitle>{sub.title}</SubSectionTitle> : null}
                {imgs.length > 1 ? (
                  <SubMediaStack>
                    {imgs.map((src, i) => (
                      <SubMediaItem key={src || i}>
                        <img src={src} alt={`${sub.title || ''} ${i + 1}`} />
                      </SubMediaItem>
                    ))}
                  </SubMediaStack>
                ) : imgs.length === 1 ? (
                  <FullWidthMedia>
                    <img src={imgs[0]} alt={sub.title || ''} />
                  </FullWidthMedia>
                ) : (
                  <PlaceholderBlock $height={sub.placeholderHeight || '100px'} />
                )}
                {renderBody(sub.body)}
              </SubSection>
            );
          })}
        </StackBlock>
      </Section>
    );
  }

  if (section.type === 'media-text') {
    const stacked = section.layout === 'column';
    const Content = stacked ? StackBlock : MediaText;
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <Content $gap="1rem">
          <Media
            src={section.img}
            video={section.video}
            alt={section.title || ''}
            wide={stacked}
          />
          <MediaCopy>{renderBody(section.body)}</MediaCopy>
        </Content>
      </Section>
    );
  }

  if (section.type === 'bar-text') {
    return (
      <Section id={section.id}>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <MediaText>
          <Media
            src={section.img}
            video={section.video}
            alt={section.title || ''}
            wide
          />
          <MediaCopy>{renderBody(section.body)}</MediaCopy>
        </MediaText>
      </Section>
    );
  }

  return null;
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const SCROLL_SPY_OFFSET = 96;
const SCROLL_CLICK_OFFSET = 88;

function markerTopFor(sectionId) {
  const btn = document.querySelector(`[data-side-nav="${sectionId}"]`);
  if (!btn) return null;
  return btn.offsetTop + 4;
}

export default function UxCaseStudy() {
  const { id } = useParams();
  const history = useHistory();
  const [activeId, setActiveId] = useState(null);
  const [markerTop, setMarkerTop] = useState(4);
  const [markerNudge, setMarkerNudge] = useState(0);
  const scrollLockRef = useRef(null);
  const unlockTimerRef = useRef(null);

  const index = visibleProjects.findIndex((p) => p.id === id);
  const project = projects.find((p) => p.id === id);
  const prev = visibleProjects[index - 1] || null;
  const next = visibleProjects[index + 1] || null;

  const study = useMemo(
    () => (project ? buildCaseStudy(project) : null),
    [project],
  );

  const sections = useMemo(() => {
    if (!study) return [];
    return study.sections.map((section, i) => ({
      ...section,
      id: section.id || slugify(section.title) || `section-${i}`,
    }));
  }, [study]);

  // Custom nav only when the project defines one (Design System).
  // All other case studies mirror visible section headers 1:1.
  const navItems = useMemo(() => {
    if (!study) return [];
    if (study.customNav && study.nav?.length) return study.nav;
    return sections
      .filter((section) => section.title)
      .map((section) => ({
        id: section.id,
        label: section.navLabel || section.title,
      }));
  }, [study, sections]);

  const activateNav = (sectionId, { nudge = false } = {}) => {
    setActiveId(sectionId);
    const top = markerTopFor(sectionId);
    if (top != null) setMarkerTop(top);
    if (nudge) setMarkerNudge((n) => n + 1);
  };

  useEffect(() => {
    scrollLockRef.current = null;
    if (unlockTimerRef.current) {
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = null;
    }
    setActiveId(null);
    setMarkerTop(4);
  }, [id]);

  useEffect(() => {
    if (!navItems.length) return undefined;

    let ticking = false;
    const readActive = () => {
      if (scrollLockRef.current) return;
      let current = navItems[0]?.id || null;
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        if (el.getBoundingClientRect().top - SCROLL_SPY_OFFSET <= 0) {
          current = item.id;
        }
      });
      if (current) activateNav(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        readActive();
      });
    };

    readActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems, id]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Pin active state immediately so scroll-spy can't chase intermediate sections.
    activateNav(sectionId, { nudge: true });
    scrollLockRef.current = sectionId;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - SCROLL_CLICK_OFFSET;
    const distance = Math.abs(window.pageYOffset - top);
    window.scrollTo({ top, behavior: 'smooth' });

    const onScrollEnd = () => {
      window.removeEventListener('scrollend', onScrollEnd);
      if (scrollLockRef.current !== sectionId) return;
      scrollLockRef.current = null;
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = null;
      }
    };
    window.addEventListener('scrollend', onScrollEnd);

    if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
    // Fallback when scrollend is missing or never fires.
    unlockTimerRef.current = window.setTimeout(() => {
      window.removeEventListener('scrollend', onScrollEnd);
      if (scrollLockRef.current !== sectionId) return;
      scrollLockRef.current = null;
      unlockTimerRef.current = null;
    }, Math.min(1400, Math.max(320, distance * 0.6 + 180)));
  };

  if (!project || !study) {
    return (
      <Page>
        <CaseShell style={{ display: 'block' }}>
          <MainColumn style={{ maxWidth: '750px' }}>
            <Missing>
              <p>Project not found.</p>
              <Link to="/">Back to work</Link>
            </Missing>
          </MainColumn>
        </CaseShell>
      </Page>
    );
  }

  return (
    <Page>
      <CaseShell>
        <Sidebar aria-label="Case study sections">
          <SidebarBack to="/">BACK</SidebarBack>
          {navItems.length ? (
            <SideNav>
              <SideMarkerCol aria-hidden="true">
                <SideMarkerTrack style={{ top: `${markerTop}px` }}>
                  <SideMarker
                    key={markerNudge}
                    src={flowerMarker}
                    alt=""
                    $nudge={markerNudge > 0}
                  />
                </SideMarkerTrack>
              </SideMarkerCol>
              <SideLinkList>
                {navItems.map((item) => (
                  <SideLink
                    key={item.id}
                    type="button"
                    data-side-nav={item.id}
                    $active={activeId === item.id}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </SideLink>
                ))}
              </SideLinkList>
            </SideNav>
          ) : null}
        </Sidebar>

        <MainColumn>
          <MobileBack to="/">&lt; BACK</MobileBack>

          <Intro>
            <Title>{study.title}</Title>
            {study.metaFields?.length ? (
              <MetaBlock>
                {study.metaFields.map((field) => (
                  <MetaGroup key={field.label}>
                    <MetaLabel>{field.label}</MetaLabel>
                    <MetaValue>{field.value}</MetaValue>
                  </MetaGroup>
                ))}
              </MetaBlock>
            ) : study.meta ? (
              <MetaLine>{study.meta}</MetaLine>
            ) : null}
          </Intro>

          {study.heroImgs?.length ? (
            <HeroSplit>
              {study.heroImgs.map((src, i) => (
                <HeroSplitItem key={src || i}>
                  <img src={src} alt={`${study.title} ${i + 1}`} />
                </HeroSplitItem>
              ))}
            </HeroSplit>
          ) : (
            <HeroWrap>
              {study.heroVideo ? (
                <HeroVideo
                  key={study.heroVideo}
                  src={study.heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  aria-label={study.title}
                />
              ) : study.heroImg ? (
                <HeroImage src={study.heroImg} alt={study.title} />
              ) : null}
            </HeroWrap>
          )}

          {sections.map((section, i) => (
            <CaseSection
              key={`${section.type}-${section.title || i}`}
              section={section}
            />
          ))}

          <NavSection aria-label="More case studies">
            <NavCard
              type="button"
              disabled={!prev}
              onClick={() => prev && history.push(`/projects/${prev.id}`)}
            >
              <NavCardInner>
                <NavLabel>Previous</NavLabel>
                <NavTitle>{prev ? prev.title : '—'}</NavTitle>
              </NavCardInner>
            </NavCard>
            <NavCard
              type="button"
              disabled={!next}
              onClick={() => next && history.push(`/projects/${next.id}`)}
            >
              <NavCardInner>
                <NavLabel>Next</NavLabel>
                <NavTitle>{next ? next.title : '—'}</NavTitle>
              </NavCardInner>
            </NavCard>
          </NavSection>
        </MainColumn>
      </CaseShell>
    </Page>
  );
}
