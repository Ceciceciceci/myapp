import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, DisplayHeading, displayFont } from '../styles';
import breadFriends from '../../images/bread-friends.png';

const experience = [
  {
    year: '2023-now',
    company: 'Future Motion',
    role: 'Lead UX Designer + Software Engineer',
    bullets: [
      'Led a design language system across 10+ applications: documented reusable Figma components, set team documentation standards, and presented adoption plans to the COO and graphic design.',
      'Shipped a React + Redux middleman app that shortened custom board and accessory fulfillment reviews by 20 minutes and improved internal order status visibility by 40%.',
      'Led design and front-end implementation of the Onewheel warranty recall page, moving a high-stakes customer flow from concept to production.',
      'Owned end-to-end UX for the trade-in process in Figma (2024), then partnered with engineering to ship the customer-facing flow.',
      'Designed backend APIs and built features across in-house tools for factory, warehouse, sales, and customer service teams.',
      'Built a customer service order console that reduced long phone calls and manual entry by 15% by surfacing order context in one place.',
      'Replaced spreadsheet-driven warehouse workflows with a touchscreen shelving UI and REST integrations, speeding fulfillment tracking by 40%.',
      'Built a Shopify B2B app for sales to manage vendors, doors, and contacts, reducing spend on additional Shopify subscriptions.',
      'Designed, prototyped, and developed front-end and backend features for the Onewheel Owner Portal.',
      'Project-managed the custom shaping quiz with leadership and graphic design, then built the React experience, driving a 50% lift in account registration and more app logins.',
      'Improved factory pick-pack-ship tooling to make fulfillment workflows roughly 3× faster through UI and front-end feature work.',
    ],
  },
  {
    year: '2021-2023',
    company: 'DreamWorks Animation',
    role: 'Software Engineer 2',
    bullets: [
      'Designed and shipped features across 4 production web tools for artists and technical directors, replacing terminal-heavy asset access with organized in-browser workflows.',
      'Partnered with UX on hi-fi Figma mockups, then built React + Node initialization improvements that cut asset-viewing API calls by 50% and reduced load times by 20 seconds.',
      'Migrated core application routes from Polymer to TypeScript and React, documenting architecture changes and presenting the transition plan to the broader engineering team.',
      'Led the DPEL open-source migration under ASWF, moving public documentation and the project site from WordPress to GitHub Pages with Astro.',
      'Ran code reviews, testing, and releases across animation pipeline tools to keep production software maintainable as features scaled.',
      'Translated UX prototypes and stakeholder feedback into shippable interfaces, balancing craft, feasibility, and timelines on artist-facing pipeline tools.',
    ],
  },
  {
    year: '2019-2020',
    company: 'Classic Vacations - Expedia',
    role: 'Web UI Developer',
    bullets: [
      'Decreased load times by 15% with optimized Javascript and PHP code and UI designs for the Classic Vacations site.',
      'Improved user experience and consistent design across the platform by wireframing and collaborating with the UX designer and offshore team to enhance usability, optimize design code, and create a style guide.',
    ],
  },
  {
    year: '2018-2019',
    company: 'Aerohive Networks',
    role: 'Fullstack Engineer',
    bullets: [
      'Integrated Vue.js into the front-end framework.',
      'Redesigned wireframes for the A3 application and developed features with backend engineers in China.',
    ],
  },
  {
    year: '2017-2018',
    company: 'Walt Disney Company',
    role: 'Web UI Developer Intern',
    bullets: [
      'Updated the Disney Theatrical System, wireframed custom query flows in Balsamiq, and wrote documentation and Python tests across multiple projects.',
    ],
  },
];

const designerSkills = [
  'Figma (Slides, Figjam, Make)',
  'Miro',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Clip Studio Paint',
  'Sketch',
  'Womp 3D',
  'Google Docs/Sheets',
  'User Research',
  'Storyboarding',
  'Prototyping',
  'Agile Development',
  'Design Language',
  'Design Systems',
  'Interaction Design',
  'Slides',
  'Proposals',
  'System Design',
  'Color Matching',
  'AI assisted workflow',
  'Ticketing',
];

const developerSkills = [
  'ReactJS',
  'HTML / HTML5',
  'CSS / CSS3',
  'Javascript',
  'Python',
  'Node.js',
  'Git / Github / Copilot',
  'Docker',
  'Claude',
  'Figma MCP',
  'Storybook',
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

const HeroIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const HeroBanner = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  display: block;
`;

const BodyText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.8;
  margin-bottom: ${({ $last }) => ($last ? 0 : '1.5rem')};
`;

const InlineLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.navLinkActive};
  }
`;

const BodyGrid = styled.div`
  padding: 5rem 0 6rem;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 340px);
  gap: 3.75rem;
  align-items: start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SectionTitle = styled.h2`
  ${displayFont}
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

const ExpBlock = styled.div`
  padding-bottom: 2rem;
  padding-top: ${({ $first }) => ($first ? 0 : '2rem')};
  border-bottom: ${({ $last, theme }) =>
    $last ? 'none' : `1px solid ${theme.colors.border}`};
`;

const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.25rem;
`;

const ExpCompanyName = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  font-size: 1.125rem;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.3;
`;

const ExpDates = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.875rem;
  color: #828282;
  flex-shrink: 0;
  letter-spacing: 0.04em;
`;

const ExpRoleLine = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.875rem;
  color: #828282;
  margin-bottom: 0.75rem;
  letter-spacing: 0.04em;
`;

const ExpBullets = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  list-style-type: disc;
  list-style-position: outside;
  color: #4f4f4f;
  font-size: 0.9375rem;
  line-height: 1.6;

  li {
    display: list-item;
    list-style-type: disc;
  }

  li + li {
    margin-top: 0.35rem;
  }
`;

const SkillGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const SkillGroupTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  font-size: 0.875rem;
  color: #4f4f4f;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
`;

const SkillList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  list-style-type: disc;
  list-style-position: outside;

  li {
    display: list-item;
    list-style-type: disc;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.875rem;
    color: #828282;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }

  li + li {
    margin-top: 0.35rem;
  }
`;

const EduCard = styled.div`
  padding: 1.25rem;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tagYellow};
  margin-bottom: 1rem;
`;

const EduTitle = styled.div`
  ${displayFont}
  color: #000000;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const EduDetail = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #000000;
  line-height: 1.4;
`;

const SidebarSection = styled.div`
  margin-bottom: 2.5rem;
`;

function SkillBullets({ labels }) {
  return (
    <SkillList>
      {labels.map((label) => (
        <li key={label}>{label}</li>
      ))}
    </SkillList>
  );
}

export default function UxAbout() {
  return (
    <PageMain>
      <Container>
        <Hero>
          <HeroIntro>
            <HeroBanner src={breadFriends} alt="Bread Friends illustration" />
            <DisplayHeading style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Hello there!
            </DisplayHeading>
          </HeroIntro>
          <div>
            <BodyText>
              I'm Cecilia! Currently I'm a design engineer with a focus on
              front-end development and UX/UI design. I like building creative
              solutions where technology intersects art.
            </BodyText>
            <BodyText $last>
              My work spans wireframing, interface design, product development
              (actually building it too), and illustration. Outside of work I
              draw, play video games, hike, watch anime, knit, and sew. I love
              bread as well and drew all the mini illustrations on this page that
              you can see more of in the{' '}
              <InlineLink to="/ux/art">Art page</InlineLink>.
            </BodyText>
          </div>
        </Hero>

        <BodyGrid>
          <div>
            <SectionTitle>Experience</SectionTitle>
            {experience.map((entry, i) => (
              <ExpBlock
                key={`${entry.company}-${entry.year}`}
                $first={i === 0}
                $last={i === experience.length - 1}
              >
                <ExpHeader>
                  <ExpCompanyName>{entry.company}</ExpCompanyName>
                  <ExpDates>{entry.year}</ExpDates>
                </ExpHeader>
                <ExpRoleLine>{entry.role}</ExpRoleLine>
                <ExpBullets>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ExpBullets>
              </ExpBlock>
            ))}
          </div>

          <div>
            <SidebarSection>
              <SectionTitle>Skills</SectionTitle>
              <SkillGroup>
                <SkillGroupTitle>Designer</SkillGroupTitle>
                <SkillBullets labels={designerSkills} />
              </SkillGroup>
              <SkillGroup>
                <SkillGroupTitle>Developer</SkillGroupTitle>
                <SkillBullets labels={developerSkills} />
              </SkillGroup>
            </SidebarSection>

            <SidebarSection>
              <SectionTitle>Education</SectionTitle>
              <EduCard>
                <EduTitle>San Jose State University</EduTitle>
                <EduDetail>Software Engineering</EduDetail>
              </EduCard>
              <EduCard>
                <EduTitle>UC Irvine</EduTitle>
                <EduDetail>DCE UX/UI Boot Camp</EduDetail>
              </EduCard>
            </SidebarSection>
          </div>
        </BodyGrid>
      </Container>
    </PageMain>
  );
}
