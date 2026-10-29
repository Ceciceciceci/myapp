import React from 'react';
import styled from 'styled-components';
import { Container, PageMain } from '../styles';
import { homeProjects } from '../data/homeProjects';
import Hero from './Hero';
import Squiggle from './Squiggle';
import ProjectCard from './ProjectCard';

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.75rem 1.75rem;
  padding-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

export default function UxHome() {
  return (
    <PageMain>
      <Container>
        <Hero
          greeting="Hello!"
          lead="Cecilia likes to click clack and swish swash, designing and coding systems and products that make life easier for both devs and customers"
          funFact="My fun fact: I have three Dreamworks movie credits! ( Bad Guys, Ruby Gillman Teenage Kraken, Puss in Boots 2 )"
        />

        <Squiggle />

        <ProjectGrid>
          {homeProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ProjectGrid>
      </Container>
    </PageMain>
  );
}
