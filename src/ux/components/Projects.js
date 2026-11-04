import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain } from '../styles';
import { visibleProjects } from '../data/projects';

const Page = styled(PageMain)`
  padding-bottom: 5rem;
`;

const Header = styled.header`
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: lowercase;
`;

const Intro = styled.p`
  margin: 1.25rem 0 0;
  max-width: 32rem;
  font-size: 1.05rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const List = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const RowLink = styled(Link)`
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 1.5rem;
  align-items: start;
  padding: 1.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease;

  &:hover h2 {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.mutedForeground};
  padding-top: 0.45rem;
`;

const Copy = styled.div`
  min-width: 0;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.25rem, 2.5vw, 1.65rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.foreground};
  transition: color 0.2s ease;
`;

const Subtitle = styled.p`
  margin: 0.45rem 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const Brief = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Thumb = styled.div`
  width: 100%;
  max-width: 260px;
  justify-self: end;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.placeholder};

  @media (max-width: 800px) {
    max-width: 100%;
    justify-self: stretch;
  }
`;

const ThumbImg = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: top center;
  display: block;
  transform: ${({ $hovered }) => ($hovered ? 'scale(1.03)' : 'scale(1)')};
  transition: transform 0.4s ease;
`;

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <RowLink
      to={`/projects/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Year>{project.year}</Year>
      <Copy>
        <ProjectTitle>{project.title}</ProjectTitle>
        {project.subtitle ? <Subtitle>{project.subtitle}</Subtitle> : null}
        {project.brief ? <Brief>{project.brief}</Brief> : null}
      </Copy>
      {project.img || project.heroImg ? (
        <Thumb>
          <ThumbImg
            src={project.img || project.heroImg}
            alt=""
            $hovered={hovered}
          />
        </Thumb>
      ) : (
        <span />
      )}
    </RowLink>
  );
}

export default function UxProjects() {
  return (
    <Page>
      <Container>
        <Header>
          <Eyebrow>selected work</Eyebrow>
          <Title>work</Title>
          <Intro>
            Case studies spanning design systems, customer product flows, and
            shipped frontend — from Future Motion to personal and open-source
            work.
          </Intro>
        </Header>

        <List>
          {visibleProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </List>
      </Container>
    </Page>
  );
}
