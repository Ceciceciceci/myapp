import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, DisplayHeading, displayFont, pillFont } from '../styles';
import { tagColor } from '../theme';
import { ArrowUpRight } from '../icons';
import { projects } from '../data/projects';

const Header = styled.div`
  padding: 5rem 0 3rem;
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
  max-width: 300px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.7;
  padding-bottom: 0.25rem;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const ProjectRow = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  box-shadow: ${({ $hovered }) =>
    $hovered ? '0 6px 18px rgba(44, 26, 15, 0.08)' : 'none'};
  transform: ${({ $hovered }) => ($hovered ? 'translateY(-2px)' : 'none')};
  border-color: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.hoverYellowBorder : theme.colors.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ProjectYear = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;

  @media (max-width: 900px) {
    padding-top: 0;
    order: -1;
  }
`;

const CardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectTitle = styled.h2`
  ${displayFont}
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 1.75rem;
  margin: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const Brief = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  max-width: 520px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1rem;
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

const Outcome = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: 0.04em;
  font-weight: 500;
`;

const Thumb = styled.div`
  width: 200px;
  flex-shrink: 0;
  overflow: hidden;
  border: none;
  border-radius: 8px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ThumbImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.04)' : 'scale(1)')};
  transition: transform 0.4s ease;
`;

const ListEnd = styled.div`
  padding: 2rem 0 6rem;
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ProjectLink
      to={`/ux/projects/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ProjectRow $hovered={hovered}>
        <ProjectYear>{project.year}</ProjectYear>
        <div>
          <CardInner>
            <div>
              <TitleRow>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ArrowUpRight
                  size={16}
                  style={{
                    color: 'inherit',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.2s',
                  }}
                />
              </TitleRow>
              <Subtitle>{project.subtitle}</Subtitle>
              <Brief>{project.brief}</Brief>
              <TagList>
                {project.tags.map((tag, i) => {
                  const tc = tagColor(i);
                  return (
                    <Tag key={tag} $color={tc.color} $bg={tc.bg}>
                      {tag}
                    </Tag>
                  );
                })}
              </TagList>
              <Outcome>↳ {project.outcome}</Outcome>
            </div>
            <Thumb>
              <ThumbImg src={project.img} alt={project.title} $hovered={hovered} />
            </Thumb>
          </CardInner>
        </div>
      </ProjectRow>
    </ProjectLink>
  );
}

export default function UxProjects() {
  return (
    <PageMain>
      <Container>
        <Header>
          <div>
            <Eyebrow>Case Studies</Eyebrow>
            <DisplayHeading style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Selected
              <br />
              Work
            </DisplayHeading>
          </div>
          <HeaderDesc>
            Four case studies spanning desktop product design, Shopify e-commerce,
            travel web development, and conservation-focused UX research.
          </HeaderDesc>
        </Header>

        <ListEnd>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ListEnd>
      </Container>
    </PageMain>
  );
}
