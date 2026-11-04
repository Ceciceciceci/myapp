import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Container, PageMain, DisplayHeading, Tag, displayFont } from '../styles';
import { tagColor } from '../theme';

const experience = [
  {
    year: '2021–Present',
    role: 'Software Engineer',
    company: 'DreamWorks',
    location: 'Glendale, CA',
    bullets: [
      'Build web tools that help artists and technical directors move through their day-to-day work.',
      'Helped the team migrate app routes from Polymer to React for a clearer, easier-to-maintain codebase.',
      'Partnered with UX on high-fidelity mockups that cut animation-asset API calls by about 50%.',
    ],
  },
  {
    year: '2020',
    role: 'Software Engineer',
    company: 'Future Motion',
    location: 'Santa Cruz, CA',
    bullets: [
      'Built front-end features for an internal factory tool that sped up OneWheel packing and shipping by about 5×.',
      'Worked with the team on UI ideas early so we could shape the experience before writing production code.',
    ],
  },
  {
    year: '2019–2020',
    role: 'Web Developer',
    company: 'Classic Vacations',
    location: 'San Jose, CA',
    bullets: [
      'Wireframed and shipped a site redesign with the UX designer and an offshore development team.',
      'Created a shared style guide, introduced React into the stack, and documented legacy features in Jira.',
    ],
  },
  {
    year: '2018–2019',
    role: 'Fullstack Engineer',
    company: 'Aerohive Networks',
    location: 'Milpitas, CA',
    bullets: [
      'Brought Vue.js into the front-end framework to modernize how the product was built.',
      'Redesigned wireframes for the A3 app and shipped features alongside backend engineers.',
    ],
  },
  {
    year: '2017–2018',
    role: 'Web UI Developer Intern',
    company: 'Walt Disney Company',
    location: 'Orlando, FL',
    bullets: [
      'Updated the Disney Theatrical System so it could handle theatre data more reliably.',
      'Mapped custom query flows in Balsamiq and wrote documentation and Python tests to support the work.',
    ],
  },
];

const education = [
  { year: '2020–2021', school: 'UC Irvine, CE', detail: 'UX and UI Design' },
  { year: '2012–2017', school: 'San Jose State University', detail: 'B.S. Software Engineering' },
];

const skills = [
  'JavaScript', 'React', 'HTML / CSS', 'Node.js', 'Figma', 'Wireframing',
  'UX Research', 'Git / Jira', 'Adobe Photoshop / Illustrator', 'Miro', 'AWS',
];

// Dark-theme skill chips: text ≥ 4.5:1, chip vs page ≥ 3:1 (WCAG AA)
const darkTagColors = [
  { bg: '#FFB38A', color: '#1A2639' },
  { bg: '#8ECAE6', color: '#1A2639' },
  { bg: '#A8D98A', color: '#1A2639' },
  { bg: '#FDF5E6', color: '#1A2639' },
  { bg: '#E8D5A3', color: '#1A2639' },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
    gap: 4rem;
  }
`;

const SectionTitle = styled.h2`
  ${displayFont}
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 1.5rem;
`;

const Job = styled.article`
  &:not(:last-child) {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const JobMeta = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0 0 0.35rem;
`;

const JobTitle = styled.h3`
  ${displayFont}
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.75rem;
`;

const JobList = styled.ul`
  margin: 0;
  padding-left: 1.15rem;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};

  li + li {
    margin-top: 0.45rem;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

const SideBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const EduItem = styled.div`
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const EduYear = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.8125rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const EduTitle = styled.p`
  ${displayFont}
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.foreground};
`;

const EduDetail = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.foreground};
`;

const SkillRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default function UxResume() {
  const theme = useTheme();
  const isDark = theme.mode === 'dark';

  return (
    <PageMain>
      <Container style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <DisplayHeading as="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Resume
        </DisplayHeading>

        <Grid>
          <div>
            <SectionTitle>Experience</SectionTitle>
            {experience.map((job) => (
              <Job key={`${job.company}-${job.year}`}>
                <JobMeta>
                  {job.year}
                  {' · '}
                  {job.location}
                </JobMeta>
                <JobTitle>
                  {job.role}, {job.company}
                </JobTitle>
                <JobList>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </JobList>
              </Job>
            ))}
          </div>

          <div>
            <SideBlock>
              <SectionTitle>Education</SectionTitle>
              {education.map((item) => (
                <EduItem key={item.school}>
                  <EduYear>{item.year}</EduYear>
                  <EduTitle>{item.school}</EduTitle>
                  <EduDetail>{item.detail}</EduDetail>
                </EduItem>
              ))}
            </SideBlock>

            <SideBlock>
              <SectionTitle>Skills & Tools</SectionTitle>
              <SkillRow>
                {skills.map((skill, i) => {
                  const tc = isDark
                    ? darkTagColors[i % darkTagColors.length]
                    : tagColor(i);
                  return (
                    <li key={skill}>
                      <Tag $bg={tc.bg} $color={tc.color}>
                        {skill}
                      </Tag>
                    </li>
                  );
                })}
              </SkillRow>
            </SideBlock>
          </div>
        </Grid>
      </Container>
    </PageMain>
  );
}
