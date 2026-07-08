import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, displayFont, pillFont } from '../styles';
import { tagColor } from '../theme';
import { ArrowRight } from '../icons';
import ceciliaAvatar from '../../images/cecilia-avatar.png';
import { visibleProjects } from '../data/projects';

const workGridItems = visibleProjects.slice(0, 4).map((project) => ({
  title: project.title,
  tags: project.tags,
  img: project.img,
  to: `/ux/projects/${project.id}`,
}));

const leftColumnItems = workGridItems.filter((_, i) => i % 2 === 0);
const rightColumnItems = workGridItems.filter((_, i) => i % 2 === 1);

const shortcuts = [
  { label: 'Case Studies', to: '/ux/projects', bg: '#7DC3E1', bgHover: '#6AB8D4', text: '#1A293D' },
  { label: 'Art & Drawing', to: '/ux/art', bg: '#A6C550', bgHover: '#95B548', text: '#1A293D' },
  { label: 'About Me', to: '/ux/about', bg: '#E0665A', bgHover: '#D0554A', text: '#FFFFFF' },
];

const HeroGrid = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 4rem 0 2.5rem;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 0 1.5rem;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  min-width: 0;
`;

const HeroRight = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-top: 0.25rem;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 440px;
    padding-top: 0;
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

const HeroTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

const HeroRole = styled.p`
  display: none;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.875rem, 1.75vw, 1.0625rem);
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: 0.04em;
  line-height: 1.2;

  @media (max-width: 899px) {
    display: block;
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
  margin: 0;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

const ShortcutGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 440px;
  }
`;

const ShortcutLink = styled(Link)`
  text-decoration: none;
  background: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
  border: none;
  padding: 0.875rem 1rem;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.25s;
  border-radius: 15px;

  &:hover {
    background: ${({ $bgHover }) => $bgHover};
  }
`;

const ShortcutLabel = styled.div`
  ${displayFont}
  font-size: 0.875rem;
`;

const WorkMasonry = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0 0 2.5rem;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0 2rem;
  }
`;

const MasonryColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
`;

const ProjectBlock = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: inherit;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
  line-height: 1.25;
  word-break: break-word;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const Tag = styled.span`
  ${pillFont}
  font-size: 0.825rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: none;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
`;

const ProjectImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.card};
`;

const ProjectImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;
  aspect-ratio: 16 / 10;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.03)' : 'scale(1)')};
  transition: transform 0.4s ease;
`;

function ProjectCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ProjectBlock
      to={item.to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ProjectHeader>
        <ProjectTitle>{item.title}</ProjectTitle>
        <TagList>
          {item.tags.map((tag, i) => {
            const tc = tagColor(i);
            return (
              <Tag key={tag} $color={tc.color} $bg={tc.bg}>
                {tag}
              </Tag>
            );
          })}
        </TagList>
      </ProjectHeader>
      <ProjectImageWrap>
        <ProjectImage src={item.img} alt={item.title} $hovered={hovered} />
      </ProjectImageWrap>
    </ProjectBlock>
  );
}

function ShortcutCard({ label, to, bg, bgHover, text }) {
  return (
    <ShortcutLink to={to} $bg={bg} $bgHover={bgHover} $text={text}>
      <ShortcutLabel>{label}</ShortcutLabel>
      <ArrowRight size={20} style={{ opacity: 0.9, flexShrink: 0 }} />
    </ShortcutLink>
  );
}

export default function UxHome() {
  return (
    <PageMain>
      <Container>
        <HeroGrid>
          <HeroLeft>
            <HeroTitleRow>
              <HeroAvatar src={ceciliaAvatar} alt="" />
              <HeroTitleGroup>
                <HeroTitle>
                  Cecilia
                  <br />
                  <span>Tran</span>
                </HeroTitle>
                <HeroRole>Design Engineer</HeroRole>
              </HeroTitleGroup>
            </HeroTitleRow>

            <AccentRule />

            <Bio>
              I love creating solutions that help bring joy and ease to everyday
              fun experiences and hobbies.
            </Bio>
          </HeroLeft>

          <HeroRight>
            <ShortcutGrid>
              {shortcuts.map((s) => (
                <ShortcutCard key={s.to} {...s} />
              ))}
            </ShortcutGrid>
          </HeroRight>
        </HeroGrid>

        <WorkMasonry>
          <MasonryColumn>
            {leftColumnItems.map((item) => (
              <ProjectCard key={item.to} item={item} />
            ))}
          </MasonryColumn>
          <MasonryColumn>
            {rightColumnItems.map((item) => (
              <ProjectCard key={item.to} item={item} />
            ))}
          </MasonryColumn>
        </WorkMasonry>
      </Container>
    </PageMain>
  );
}
