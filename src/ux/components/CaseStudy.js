import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, SectionLabel } from '../styles';
import { tagColor } from '../theme';
import { ArrowLeft, ArrowRight } from '../icons';
import { projects } from '../data/projects';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-decoration: none;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const BackWrap = styled.div`
  padding: 2rem 0 0;
`;

const CsIntro = styled.section`
  padding-top: 3rem;
  position: relative;
  z-index: 1;
`;

const CsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 180px;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const MetaLabel = styled.div`
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 0.25rem;
`;

const MetaValue = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.01em;
`;

const YearRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

const Year = styled.span`
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Divider = styled.span`
  width: 1px;
  height: 10px;
  background: ${({ theme }) => theme.colors.border};
`;

const Tag = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: 1.5px solid ${({ $border }) => $border};
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 6vw, 5rem);
  letter-spacing: -0.04em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 1rem;
`;

const HeroWrap = styled.div`
  padding: 3rem 0 0;
`;

const HeroImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 7;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 560px;
  gap: 6rem;
  align-items: start;
  padding: 5rem 0 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ProblemText = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.1rem, 2vw, 1.375rem);
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.6;
  letter-spacing: -0.02em;
`;

const ApproachList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ApproachItem = styled.li`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.7;
`;

const StepNum = styled.span`
  color: ${({ theme }) => theme.colors.accentGreen};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  padding-top: 0.2rem;
  flex-shrink: 0;
`;

const SolutionText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.8;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const ProcessStep = styled.div`
  margin-bottom: 3rem;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
`;

const StepLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

const StepLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

const StepIndex = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.625rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.accentBlue};
`;

const StepImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 0.875rem;
`;

const MetricsSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 0;
  margin-top: 5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MetricCell = styled.div`
  padding: 1.5rem 2rem;
  border-right: ${({ $last, theme }) =>
    $last ? 'none' : `1px solid ${theme.colors.border}`};

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const MetricValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ProcessStrip = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => `repeat(${$cols}, 1fr)`};
  gap: 0.75rem;
  padding: 3rem 0 0;
`;

const StripImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5rem 0 6rem;
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 3rem;
`;

const NavBtn = styled.button`
  background: ${({ $hovered, theme }) =>
    $hovered ? theme.colors.hoverYellow : theme.colors.card};
  border: 1.5px solid
    ${({ $hovered, theme }) =>
      $hovered ? theme.colors.hoverYellowBorder : theme.colors.border};
  padding: 1.5rem;
  text-align: ${({ $align }) => $align};
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
  border-radius: 1.25rem;
  box-shadow: ${({ $hovered }) =>
    $hovered
      ? '0 4px 14px rgba(196,122,30,0.13)'
      : '0 1px 4px rgba(92,51,23,0.07)'};
`;

const ExternalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const ExternalLink = styled.a`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    opacity: 0.8;
  }
`;

const ExtendedSection = styled.section`
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ExtendedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ExtendedBlock = styled.div`
  margin-bottom: 2.5rem;
`;

const BlockTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const ContextText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9375rem;
  line-height: 1.8;
  max-width: 720px;
`;

const GoalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const GoalItem = styled.li`
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9rem;
  line-height: 1.6;

  &::before {
    content: '→';
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const FindingCard = styled.div`
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
`;

const FindingStat = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
`;

const FindingText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0;
`;

const QuoteCard = styled.blockquote`
  margin: 0 0 1rem;
  padding: 1.25rem 1.25rem 1.25rem 1.5rem;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0 0.5rem 0.5rem 0;
`;

const QuoteText = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 0.9rem;
  line-height: 1.7;
  font-style: italic;
  margin: 0 0 0.5rem;
`;

const QuoteTheme = styled.span`
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const PersonaCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const PersonaName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.75rem;
`;

const HmwList = styled.ol`
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HmwItem = styled.li`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.9rem;
  line-height: 1.65;
  padding-left: 0.25rem;
`;

const FlowCard = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const FlowTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.5rem;
`;

function CaseStudyExtended({ extended }) {
  if (!extended) return null;

  return (
    <>
      <ExtendedSection>
        <SectionLabel>Project Context</SectionLabel>
        <ContextText>{extended.context}</ContextText>
        {extended.goals && (
          <ExtendedBlock style={{ marginTop: '2.5rem' }}>
            <BlockTitle>Design Goals</BlockTitle>
            <GoalList>
              {extended.goals.map((goal) => (
                <GoalItem key={goal}>{goal}</GoalItem>
              ))}
            </GoalList>
          </ExtendedBlock>
        )}
      </ExtendedSection>

      {extended.survey && (
        <ExtendedSection>
          <SectionLabel>Survey Findings ({extended.survey.count} participants)</SectionLabel>
          <ExtendedGrid>
            {extended.survey.findings.map((finding) => (
              <FindingCard key={finding.stat + finding.text.slice(0, 20)}>
                <FindingStat>{finding.stat}</FindingStat>
                <FindingText>{finding.text}</FindingText>
              </FindingCard>
            ))}
          </ExtendedGrid>
        </ExtendedSection>
      )}

      {extended.interviews && (
        <ExtendedSection>
          <SectionLabel>Interview Insights ({extended.interviews.count} participants)</SectionLabel>
          {extended.interviews.quotes.map((quote) => (
            <QuoteCard key={quote.text}>
              <QuoteText>"{quote.text}"</QuoteText>
              <QuoteTheme>{quote.theme}</QuoteTheme>
            </QuoteCard>
          ))}
        </ExtendedSection>
      )}

      {extended.insights && (
        <ExtendedSection>
          <SectionLabel>Key Insights</SectionLabel>
          <ApproachList>
            {extended.insights.map((insight, i) => (
              <ApproachItem key={insight}>
                <StepNum>0{i + 1}</StepNum>
                {insight}
              </ApproachItem>
            ))}
          </ApproachList>
        </ExtendedSection>
      )}

      {extended.personas && (
        <ExtendedSection>
          <SectionLabel>Personas</SectionLabel>
          {extended.personas.map((persona) => (
            <PersonaCard key={persona.name}>
              <PersonaName>{persona.name}</PersonaName>
              <SolutionText style={{ marginBottom: '1rem' }}>{persona.description}</SolutionText>
              <BlockTitle style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>Needs</BlockTitle>
              <GoalList>
                {persona.needs.map((need) => (
                  <GoalItem key={need}>{need}</GoalItem>
                ))}
              </GoalList>
            </PersonaCard>
          ))}
        </ExtendedSection>
      )}

      {extended.howMightWe && (
        <ExtendedSection>
          <SectionLabel>How Might We</SectionLabel>
          <HmwList>
            {extended.howMightWe.map((prompt) => (
              <HmwItem key={prompt}>{prompt}</HmwItem>
            ))}
          </HmwList>
        </ExtendedSection>
      )}

      {extended.userFlows && (
        <ExtendedSection>
          <SectionLabel>User Flows</SectionLabel>
          {extended.userFlows.map((flow) => (
            <FlowCard key={flow.title}>
              <FlowTitle>{flow.title}</FlowTitle>
              <SolutionText>{flow.description}</SolutionText>
            </FlowCard>
          ))}
          {extended.iaNotes && (
            <ExtendedBlock style={{ marginTop: '2rem' }}>
              <BlockTitle>Information Architecture</BlockTitle>
              <SolutionText>{extended.iaNotes}</SolutionText>
            </ExtendedBlock>
          )}
        </ExtendedSection>
      )}

      {extended.styleGuide && (
        <ExtendedSection>
          <SectionLabel>Style Guide</SectionLabel>
          <SolutionText>{extended.styleGuide}</SolutionText>
        </ExtendedSection>
      )}

      {extended.testing && (
        <ExtendedSection>
          <SectionLabel>Usability Testing</SectionLabel>
          <SolutionText style={{ marginBottom: '1.5rem' }}>{extended.testing.summary}</SolutionText>
          <ApproachList>
            {extended.testing.findings.map((finding, i) => (
              <ApproachItem key={finding}>
                <StepNum>0{i + 1}</StepNum>
                {finding}
              </ApproachItem>
            ))}
          </ApproachList>
        </ExtendedSection>
      )}

      {extended.futureSteps && (
        <ExtendedSection>
          <SectionLabel>Future Steps</SectionLabel>
          <GoalList>
            {extended.futureSteps.map((step) => (
              <GoalItem key={step}>{step}</GoalItem>
            ))}
          </GoalList>
        </ExtendedSection>
      )}
    </>
  );
}

function NavButton({ onClick, align, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <NavBtn
      type="button"
      $hovered={hovered}
      $align={align}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </NavBtn>
  );
}

export default function UxCaseStudy() {
  const { id } = useParams();
  const history = useHistory();

  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const prev = projects[index - 1] || null;
  const next = projects[index + 1] || null;

  if (!project) {
    return (
      <PageMain>
        <Container style={{ textAlign: 'center', padding: '6rem 0' }}>
          <p style={{ color: '#7A5230', marginBottom: '1.5rem' }}>Project not found.</p>
          <BackLink to="/ux/projects">← Back to projects</BackLink>
        </Container>
      </PageMain>
    );
  }

  return (
    <PageMain>
      <Container>
        <BackWrap>
          <BackLink to="/ux/projects">
            <ArrowLeft size={13} />
            All projects
          </BackLink>
        </BackWrap>

        <CsIntro>
          <CsHeader>
            <div>
              <YearRow>
                <Year>{project.year}</Year>
                <Divider />
                {project.tags.map((tag, i) => {
                  const tc = tagColor(i);
                  return (
                    <Tag key={tag} $color={tc.color} $bg={tc.bg} $border={tc.border}>
                      {tag}
                    </Tag>
                  );
                })}
              </YearRow>
              <Title>{project.title}</Title>
              <Subtitle>{project.subtitle}</Subtitle>
              {project.links && project.links.length > 0 && (
                <ExternalLinks>
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </ExternalLink>
                  ))}
                </ExternalLinks>
              )}
            </div>
            <MetaBlock>
              {[
                { label: 'Role', value: project.role },
                { label: 'Duration', value: project.duration },
                { label: 'Team', value: project.team },
                { label: 'Outcome', value: project.outcome },
              ].map(({ label, value }) => (
                <div key={label}>
                  <MetaLabel>{label}</MetaLabel>
                  <MetaValue>{value}</MetaValue>
                </div>
              ))}
            </MetaBlock>
          </CsHeader>
        </CsIntro>

        <HeroWrap>
          <HeroImage src={project.heroImg} alt={project.title} />
        </HeroWrap>

        <BodyGrid>
          <div>
            <Section>
              <SectionLabel>The Problem</SectionLabel>
              <ProblemText>{project.problem}</ProblemText>
            </Section>

            <Section>
              <SectionLabel>Approach</SectionLabel>
              <ApproachList>
                {project.approach.map((item, i) => (
                  <ApproachItem key={i}>
                    <StepNum>0{i + 1}</StepNum>
                    {item}
                  </ApproachItem>
                ))}
              </ApproachList>
            </Section>

            <Section style={{ marginBottom: 0 }}>
              <SectionLabel>Solution</SectionLabel>
              <SolutionText>{project.solution}</SolutionText>
            </Section>
          </div>

          <div>
            <SectionLabel>Process</SectionLabel>
            {project.process.map((step, i) => (
              <ProcessStep key={i}>
                <StepHeader>
                  <StepIndex>{String(i + 1).padStart(2, '0')}</StepIndex>
                  <StepLine />
                  <StepLabel>{step.label}</StepLabel>
                </StepHeader>
                {step.img && <StepImg src={step.img} alt={step.label} />}
                <SolutionText>{step.body}</SolutionText>
              </ProcessStep>
            ))}
          </div>
        </BodyGrid>

        <MetricsSection>
          <SectionLabel>Results</SectionLabel>
          <MetricsGrid>
            {project.metrics.map((m, i) => (
              <MetricCell key={i} $last={i === project.metrics.length - 1}>
                <MetricValue>{m.value}</MetricValue>
                <MetricLabel>{m.label}</MetricLabel>
              </MetricCell>
            ))}
          </MetricsGrid>
        </MetricsSection>

        {project.processImgs.length > 0 && (
          <ProcessStrip $cols={project.processImgs.length}>
            {project.processImgs.map((img, i) => (
              <StripImg key={i} src={img} alt={`Process ${i + 1}`} />
            ))}
          </ProcessStrip>
        )}

        <CaseStudyExtended extended={project.extended} />

        <NavSection>
          <NavGrid>
            {prev ? (
              <NavButton onClick={() => history.push(`/ux/projects/${prev.id}`)} align="left">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.6875rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A5230' }}>
                  <ArrowLeft size={11} /> Previous
                </span>
                <span style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                  {prev.title}
                </span>
              </NavButton>
            ) : (
              <div />
            )}
            {next ? (
              <NavButton onClick={() => history.push(`/ux/projects/${next.id}`)} align="right">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.6875rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A5230' }}>
                  Next <ArrowRight size={11} />
                </span>
                <span style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                  {next.title}
                </span>
              </NavButton>
            ) : (
              <div />
            )}
          </NavGrid>
        </NavSection>
      </Container>
    </PageMain>
  );
}
