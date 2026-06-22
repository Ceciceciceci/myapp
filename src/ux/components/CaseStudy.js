import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain, SectionLabel, displayFont, pillFont } from '../styles';
import { tagColor, displayFontStyle } from '../theme';
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
  font-size: 0.825rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 0.25rem;
`;

const MetaValue = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.foreground};
  ${displayFont}
`;

const YearRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
`;

const Year = styled.span`
  font-size: 0.825rem;
  font-weight: 600;
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
  ${pillFont}
  font-size: 0.825rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
  border: none;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
`;

const Title = styled.h1`
  ${displayFont}
  font-size: clamp(2.5rem, 6vw, 5rem);
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
  object-position: top center;
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
  ${displayFont}
  font-size: clamp(1.1rem, 2vw, 1.375rem);
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.6;
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
  ${displayFont}
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
  font-size: 0.825rem;
  font-weight: 600;
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

const MobileCarousel = styled.div`
  margin-bottom: 0.875rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card || theme.colors.background};
`;

const MobileCarouselLabel = styled.p`
  margin: 0;
  padding: 0.625rem 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MobileCarouselStage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  min-height: 420px;

  @media (max-width: 600px) {
    padding: 1rem 2.75rem;
    min-height: 360px;
  }
`;

const MobileCarouselImg = styled.img`
  display: block;
  max-height: 400px;
  width: auto;
  max-width: 100%;
  object-fit: contain;

  @media (max-width: 600px) {
    max-height: 340px;
  }
`;

const CarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 0.75rem' : 'right: 0.75rem')};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBlue};
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
`;

const CarouselDot = styled.button`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentBlue : theme.colors.border};
  transition: background 0.2s;
`;

function MobileViewsCarousel({ views }) {
  const [index, setIndex] = useState(0);
  const count = views.length;

  const goTo = useCallback(
    (next) => setIndex((next + count) % count),
    [count],
  );

  useEffect(() => {
    if (count <= 1) return undefined;
    const timer = setInterval(() => goTo(index + 1), 4000);
    return () => clearInterval(timer);
  }, [index, count, goTo]);

  if (!views?.length) return null;

  const current = views[index];

  return (
    <MobileCarousel>
      <MobileCarouselLabel>Mobile views</MobileCarouselLabel>
      <MobileCarouselStage>
        {count > 1 && (
          <>
            <CarouselBtn
              type="button"
              $side="left"
              aria-label="Previous screen"
              onClick={() => goTo(index - 1)}
            >
              <ArrowLeft size={14} />
            </CarouselBtn>
            <CarouselBtn
              type="button"
              $side="right"
              aria-label="Next screen"
              onClick={() => goTo(index + 1)}
            >
              <ArrowRight size={14} />
            </CarouselBtn>
          </>
        )}
        <MobileCarouselImg src={current.src} alt={current.alt} />
      </MobileCarouselStage>
      {count > 1 && (
        <CarouselDots>
          {views.map((view, i) => (
            <CarouselDot
              key={view.alt}
              type="button"
              $active={i === index}
              aria-label={`Show ${view.alt}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </CarouselDots>
      )}
    </MobileCarousel>
  );
}

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
  ${displayFont}
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: ${({ theme }) => theme.colors.foreground};
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
  background: ${({ theme }) => theme.colors.tagYellow};
  border: none;
  padding: 2rem 1.5rem;
  text-align: ${({ $align }) => $align};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
  border-radius: 12px;
  box-shadow: ${({ $hovered }) =>
    $hovered ? '0 6px 18px rgba(44, 26, 15, 0.08)' : 'none'};
  transform: ${({ $hovered }) => ($hovered ? 'translateY(-2px)' : 'none')};
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

const PagePreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PagePreviewImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
`;

const PagePreviewTitle = styled.h4`
  ${displayFont}
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
`;

const ResearchCard = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ResearchTitle = styled.h4`
  ${displayFont}
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0 0 0.75rem;
`;

const ResearchList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResearchListItem = styled.li`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.65;
`;

const ExtendedBlock = styled.div`
  margin-bottom: 2.5rem;
`;

const BlockTitle = styled.h3`
  ${displayFont}
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.foreground};
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
  ${displayFont}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
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
  font-size: 0.825rem;
  font-weight: 600;
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
  ${displayFont}
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
  ${displayFont}
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

      {extended.siteMapPages && (
        <ExtendedSection>
          <SectionLabel>Site Map</SectionLabel>
          <ExtendedGrid>
            {extended.siteMapPages.map((page) => (
              <PagePreview key={page.title}>
                <PagePreviewTitle>{page.title}</PagePreviewTitle>
                <SolutionText>{page.description}</SolutionText>
                <PagePreviewImg src={page.img} alt={page.title} />
              </PagePreview>
            ))}
          </ExtendedGrid>
        </ExtendedSection>
      )}

      {extended.researchSteps && (
        <ExtendedSection>
          <SectionLabel>Research</SectionLabel>
          {extended.researchSteps.map((step) => (
            <ResearchCard key={step.title}>
              <ResearchTitle>{step.title}</ResearchTitle>
              <ResearchList>
                {step.items.map((item) => (
                  <ResearchListItem key={item}>{item}</ResearchListItem>
                ))}
              </ResearchList>
            </ResearchCard>
          ))}
        </ExtendedSection>
      )}

      {extended.prototyping && (
        <ExtendedSection>
          <SectionLabel>Prototyping</SectionLabel>
          <SolutionText style={{ marginBottom: '1rem' }}>{extended.prototyping.summary}</SolutionText>
          <GoalList>
            {extended.prototyping.items.map((item) => (
              <GoalItem key={item}>{item}</GoalItem>
            ))}
          </GoalList>
        </ExtendedSection>
      )}

      {extended.reflection && (
        <ExtendedSection>
          <SectionLabel>Reflection</SectionLabel>
          <ContextText>{extended.reflection}</ContextText>
        </ExtendedSection>
      )}

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
                    <Tag key={tag} $color={tc.color} $bg={tc.bg}>
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
                project.tools ? { label: 'Tools', value: project.tools } : null,
                { label: 'Team', value: project.team },
                { label: 'Outcome', value: project.outcome },
              ]
                .filter(Boolean)
                .map(({ label, value }) => (
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
                {step.mobileViews && <MobileViewsCarousel views={step.mobileViews} />}
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.825rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#333333' }}>
                  <ArrowLeft size={11} /> Previous
                </span>
                <span style={{ ...displayFontStyle(), fontSize: '1.125rem', color: '#000000' }}>
                  {prev.title}
                </span>
              </NavButton>
            ) : (
              <div />
            )}
            {next ? (
              <NavButton onClick={() => history.push(`/ux/projects/${next.id}`)} align="right">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.825rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#333333' }}>
                  Next <ArrowRight size={11} />
                </span>
                <span style={{ ...displayFontStyle(), fontSize: '1.125rem', color: '#000000' }}>
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
