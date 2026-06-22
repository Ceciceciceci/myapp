import React from 'react';
import styled from 'styled-components';
import { Container, PageMain, DisplayHeading } from '../styles';

const experience = [
  {
    year: '2021–Current',
    role: 'Software Engineer',
    company: 'DreamWorks',
    location: 'Glendale, CA',
    desc: 'Develop web tool features for artists and technical directors. Work with the UX team on hi-fi mockups and transitioned app routes from Polymer to React, reducing API calls by 50% for viewing animation assets.',
  },
  {
    year: '2020',
    role: 'Software Engineer',
    company: 'Future Motion',
    location: 'Santa Cruz, CA',
    desc: 'Built front-end features for an internal factory tool that sped up picking, packing, and shipping OneWheel EV skateboards by 5×. Discussed UI ideas with the team before development.',
  },
  {
    year: '2019–2020',
    role: 'Web Developer',
    company: 'Classic Vacations',
    location: 'San Jose, CA',
    desc: 'Wireframed and shipped a site redesign with the UX designer and offshore dev team. Created a style guide, introduced React, and documented legacy code on JIRA.',
  },
  {
    year: '2018–2019',
    role: 'Fullstack Engineer',
    company: 'Aerohive Networks',
    location: 'Milpitas, CA',
    desc: 'Integrated Vue.js into the front-end framework. Redesigned wireframes for the A3 application and developed features with backend engineers in China.',
  },
  {
    year: '2017–2018',
    role: 'Web UI Developer Intern',
    company: 'Walt Disney Company',
    location: 'Orlando, FL',
    desc: 'Updated the Disney Theatrical System, wireframed custom query flows in Balsamiq, and wrote documentation and Python tests across multiple projects.',
  },
];

const skills = [
  { label: 'React', bg: '#FDDDD9', color: '#9B2B1E', border: '#F5B8B2' },
  { label: 'Figma', bg: '#FEF3CC', color: '#7A5010', border: '#F5DC88' },
  { label: 'UX Research', bg: '#D9EAF7', color: '#1A4A72', border: '#A8CCE8' },
  { label: 'Wireframing', bg: '#D9F0E4', color: '#1A5432', border: '#9ED4B4' },
  { label: 'Illustration', bg: '#F2E0D0', color: '#5C2E12', border: '#DEB898' },
  { label: 'JavaScript', bg: '#FDDDD9', color: '#9B2B1E', border: '#F5B8B2' },
  { label: 'HTML / CSS', bg: '#D9EAF7', color: '#1A4A72', border: '#A8CCE8' },
  { label: 'Three.js', bg: '#FEF3CC', color: '#7A5010', border: '#F5DC88' },
  { label: 'Photoshop', bg: '#D9F0E4', color: '#1A5432', border: '#9ED4B4' },
  { label: 'Node.js', bg: '#F2E0D0', color: '#5C2E12', border: '#DEB898' },
];

const Hero = styled.div`
  padding: 5rem 0 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const BodyText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.8;
  margin-bottom: ${({ $last }) => ($last ? 0 : '1.5rem')};
`;

const BodyGrid = styled.div`
  padding: 5rem 0 6rem;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 5rem;
  align-items: start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.03em;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;

const ExpRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  padding-top: ${({ $first }) => ($first ? 0 : '2.5rem')};
  border-bottom: ${({ $last, theme }) =>
    $last ? 'none' : `1px solid ${theme.colors.border}`};
`;

const ExpYear = styled.div`
  font-size: 0.6875rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.fonts.mono};
  padding-top: 0.2rem;
`;

const ExpRole = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 1rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
`;

const ExpCompany = styled.div`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  padding: 0.375rem 0.9rem;
  border-radius: 999px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: 1.5px solid ${({ $border }) => $border};
  box-shadow: 0 1px 4px rgba(92, 51, 23, 0.09);
`;

const EduCard = styled.div`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  margin-bottom: 1rem;
`;

const SidebarSection = styled.div`
  margin-bottom: 3rem;
`;

export default function UxAbout() {
  return (
    <PageMain>
      <Container>
        <Hero>
          <div>
            <Eyebrow>About</Eyebrow>
            <DisplayHeading style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Engineer
              <br />
              <span style={{ color: '#C47A1E' }}>&amp;</span> Designer
            </DisplayHeading>
          </div>
          <div>
            <BodyText>
              I'm Cecilia Tran — a software engineer with a focus on front-end
              development and UX/UI design. I like building creative solutions
              where technology intersects art.
            </BodyText>
            <BodyText $last>
              My work spans wireframing, interface design, React development, and
              illustration. Outside of work I draw, play video games, hike, watch
              anime, knit, and bake. Currently dabbling in React and Three.js.
            </BodyText>
          </div>
        </Hero>

        <BodyGrid>
          <div>
            <SectionTitle>Experience</SectionTitle>
            {experience.map((entry, i) => (
              <ExpRow key={i} $first={i === 0} $last={i === experience.length - 1}>
                <ExpYear>{entry.year}</ExpYear>
                <div>
                  <ExpRole>{entry.role}</ExpRole>
                  <ExpCompany>
                    {entry.company} · {entry.location}
                  </ExpCompany>
                  <BodyText $last>{entry.desc}</BodyText>
                </div>
              </ExpRow>
            ))}
          </div>

          <div>
            <SidebarSection>
              <SectionTitle style={{ marginBottom: '1.5rem' }}>Skills</SectionTitle>
              <SkillGrid>
                {skills.map((skill) => (
                  <Skill
                    key={skill.label}
                    $bg={skill.bg}
                    $color={skill.color}
                    $border={skill.border}
                  >
                    {skill.label}
                  </Skill>
                ))}
              </SkillGrid>
            </SidebarSection>

            <SidebarSection>
              <SectionTitle style={{ marginBottom: '1.5rem' }}>Education</SectionTitle>
              <EduCard>
                <ExpRole>UX and UI Design</ExpRole>
                <ExpCompany>UC Irvine, Continuing Education</ExpCompany>
                <ExpYear>2020 – 2021</ExpYear>
              </EduCard>
              <EduCard>
                <ExpRole>B.S. Software Engineering</ExpRole>
                <ExpCompany>San Jose State University</ExpCompany>
                <ExpYear>2012 – 2017</ExpYear>
              </EduCard>
            </SidebarSection>
          </div>
        </BodyGrid>
      </Container>
    </PageMain>
  );
}
