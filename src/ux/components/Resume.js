import React from 'react';
import styled from 'styled-components';
import { Container, PageMain, DisplayHeading, Tag, displayFont } from '../styles';
import { tagColor } from '../theme';

const experience = [
  {
    year: '2021-Current',
    role: 'Software Engineer',
    company: 'DreamWorks',
    location: 'Glendale, CA',
    bullets: [
      'Develop web tool features for artists and technical directors.',
      'Transitioned app routes from Polymer to React with the team.',
      'Worked with UX on hi-fi mockups, reducing API calls by 50% for viewing animation assets.',
    ],
  },
  {
    year: '2020',
    role: 'Software Engineer',
    company: 'Future Motion',
    location: 'Santa Cruz, CA',
    bullets: [
      'Built front-end features for an internal factory tool that sped up OneWheel shipping by 5×.',
      'Discussed UI ideas with the team before development.',
    ],
  },
  {
    year: '2019-2020',
    role: 'Web Developer',
    company: 'Classic Vacations',
    location: 'San Jose, CA',
    bullets: [
      'Wireframed and shipped a site redesign with the UX designer and offshore dev team.',
      'Created a style guide, introduced React, and documented legacy code on JIRA.',
    ],
  },
  {
    year: '2018-2019',
    role: 'Fullstack Engineer',
    company: 'Aerohive Networks',
    location: 'Milpitas, CA',
    bullets: [
      'Integrated Vue.js into the front-end framework.',
      'Redesigned wireframes for the A3 application and developed features with backend engineers.',
    ],
  },
  {
    year: '2017-2018',
    role: 'Web UI Developer Intern',
    company: 'Walt Disney Company',
    location: 'Orlando, FL',
    bullets: [
      'Updated the Disney Theatrical System to handle theatre data.',
      'Wireframed custom query flows in Balsamiq and wrote documentation and Python tests.',
    ],
  },
];

const education = [
  { year: '2020-2021', school: 'UC Irvine, CE', detail: 'UX and UI Design' },
  { year: '2012-2017', school: 'San Jose State University', detail: 'B.S. Software Engineering' },
];

const skills = [
  'JavaScript', 'React', 'HTML / CSS', 'Node.js', 'Figma', 'Wireframing',
  'UX Research', 'Git / JIRA', 'Adobe Photoshop / Illustrator', 'Miro', 'AWS',
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
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 1.5rem;
`;

const Job = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const JobMeta = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0 0 0.35rem;
`;

const JobTitle = styled.p`
  ${displayFont}
  font-weight: 400;
  margin: 0 0 0.75rem;
`;

const JobList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedForeground};

  li + li {
    margin-top: 0.35rem;
  }
`;

const SideBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const EduItem = styled.div`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tagYellow};

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const EduTitle = styled(JobTitle)`
  color: #000000;
  margin-bottom: 0.35rem;
`;

const EduDetail = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #000000;
  line-height: 1.4;
`;

const EduYear = styled(EduDetail)`
  font-size: 0.8125rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;
`;

const SkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function UxResume() {
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
                <JobMeta>{job.year} · {job.location}</JobMeta>
                <JobTitle>{job.role}, {job.company}</JobTitle>
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
                  const tc = tagColor(i);
                  return (
                    <Tag key={skill} $bg={tc.bg} $color={tc.color}>
                      {skill}
                    </Tag>
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
