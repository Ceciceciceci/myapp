import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageMain } from '../styles';
import { projects, visibleProjects } from '../data/projects';
import { buildCaseStudy } from '../utils/buildCaseStudy';

const Page = styled(PageMain)`
  padding-bottom: 1rem;
`;

const Intro = styled.header`
  padding: 2.5rem 0 1.5rem;
`;

const AccentBar = styled.div`
  width: 72px;
  height: 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.placeholder};
  margin-bottom: 1.25rem;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 0.25rem;
`;

const MetaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const MetaLabel = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaValue = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MetaLine = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 52rem;
`;

const HeroWrap = styled.div`
  width: 100%;
  margin: 1.5rem 0 2.75rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
`;

const HeroSplit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  margin: 1.5rem 0 2.75rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const HeroSplitItem = styled.div`
  flex: 1 1 0;
  min-width: 0;
  background: transparent;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: top center;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: #111;
`;

const FullWidthMedia = styled.div`
  width: 100%;
  margin: 0.75rem 0 1.25rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};

  img,
  video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;

const Section = styled.section`
  margin-bottom: 2.75rem;
`;

const SectionTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Body = styled.p`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 48rem;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.typography.bodyBoldWeight};
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1rem 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const GridImage = styled.div`
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: top center;
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const BulletItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};
`;

const NumberList = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const NumberItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.foreground};
`;

const MediaText = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 1.75rem;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const MediaFrame = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
  aspect-ratio: ${({ $hasMedia, $wide }) =>
    $hasMedia ? 'auto' : $wide ? '21 / 5' : '1 / 1'};

  img,
  video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    background: #111;
  }
`;

const MediaCopy = styled.div`
  min-width: 0;
`;

const NavSection = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 3rem 0 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const NavCard = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  background: ${({ theme }) => theme.colors.placeholder};
  border-radius: 12px;
  min-height: 96px;
  overflow: hidden;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const NavCardInner = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 96px;
  justify-content: center;
`;

const NavLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  font-weight: ${({ theme }) => theme.typography.bodyWeight};
  color: ${({ theme }) => theme.colors.foreground};
`;

const NavTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.25;
`;

const Missing = styled.div`
  text-align: center;
  padding: 6rem 0;

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

function Media({ src, video, alt = '', wide = false }) {
  const hasMedia = Boolean(src || video);
  return (
    <MediaFrame $wide={wide} $hasMedia={hasMedia}>
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
          aria-label={alt}
        />
      ) : src ? (
        <img src={src} alt={alt} />
      ) : null}
    </MediaFrame>
  );
}

function renderBody(body) {
  if (!body) return null;
  if (Array.isArray(body)) {
    return body.map((para) => <Body key={para}>{para}</Body>);
  }
  return <Body>{body}</Body>;
}

function CaseSection({ section }) {
  if (!section) return null;

  if (section.type === 'prose') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.img ? (
          <FullWidthMedia>
            <img src={section.img} alt={section.title || ''} />
          </FullWidthMedia>
        ) : null}
        {renderBody(section.body)}
      </Section>
    );
  }

  if (section.type === 'image-grid') {
    const images = section.images || [null, null, null, null];
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.intro ? <Body>{section.intro}</Body> : null}
        <ImageGrid>
          {images.slice(0, 4).map((src, i) => (
            <GridImage key={src || `ph-${i}`}>
              {src ? <img src={src} alt="" /> : null}
            </GridImage>
          ))}
        </ImageGrid>
        {section.caption ? <Body>{section.caption}</Body> : null}
      </Section>
    );
  }

  if (section.type === 'bullets') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <BulletList>
          {(section.items || []).map((item) => (
            <BulletItem key={item}>{item}</BulletItem>
          ))}
        </BulletList>
      </Section>
    );
  }

  if (section.type === 'numbered') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {section.intro ? <Body>{section.intro}</Body> : null}
        <NumberList>
          {(section.items || []).map((item) => (
            <NumberItem key={item}>{item}</NumberItem>
          ))}
        </NumberList>
      </Section>
    );
  }

  if (section.type === 'stacked-media') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        {(section.video || section.img) && (
          <FullWidthMedia>
            {section.video ? (
              <video
                src={section.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
                aria-label={section.title || ''}
              />
            ) : (
              <img src={section.img} alt={section.title || ''} />
            )}
          </FullWidthMedia>
        )}
        {renderBody(section.body)}
      </Section>
    );
  }

  if (section.type === 'media-text') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <MediaText>
          <Media
            src={section.img}
            video={section.video}
            alt={section.title || ''}
          />
          <MediaCopy>{renderBody(section.body)}</MediaCopy>
        </MediaText>
      </Section>
    );
  }

  if (section.type === 'bar-text') {
    return (
      <Section>
        {section.title ? <SectionTitle>{section.title}</SectionTitle> : null}
        <MediaText>
          <Media
            src={section.img}
            video={section.video}
            alt={section.title || ''}
            wide
          />
          <MediaCopy>{renderBody(section.body)}</MediaCopy>
        </MediaText>
      </Section>
    );
  }

  return null;
}

export default function UxCaseStudy() {
  const { id } = useParams();
  const history = useHistory();

  const index = visibleProjects.findIndex((p) => p.id === id);
  const project = projects.find((p) => p.id === id);
  const prev = visibleProjects[index - 1] || null;
  const next = visibleProjects[index + 1] || null;

  if (!project) {
    return (
      <Page>
        <Container>
          <Missing>
            <p>Project not found.</p>
            <Link to="/">Back to work</Link>
          </Missing>
        </Container>
      </Page>
    );
  }

  const study = buildCaseStudy(project);

  return (
    <Page>
      <Container>
        <Intro>
          <AccentBar aria-hidden="true" />
          <Title>{study.title}</Title>
          {study.metaFields?.length ? (
            <MetaBlock>
              {study.metaFields.map((field) => (
                <MetaGroup key={field.label}>
                  <MetaLabel>{field.label}</MetaLabel>
                  <MetaValue>{field.value}</MetaValue>
                </MetaGroup>
              ))}
            </MetaBlock>
          ) : study.meta ? (
            <MetaLine>{study.meta}</MetaLine>
          ) : null}
        </Intro>

        {study.heroImgs?.length ? (
          <HeroSplit>
            {study.heroImgs.map((src, i) => (
              <HeroSplitItem key={src || i}>
                <img src={src} alt={`${study.title} ${i + 1}`} />
              </HeroSplitItem>
            ))}
          </HeroSplit>
        ) : (
          <HeroWrap>
            {study.heroVideo ? (
              <HeroVideo
                key={study.heroVideo}
                src={study.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
                aria-label={study.title}
              />
            ) : study.heroImg ? (
              <HeroImage src={study.heroImg} alt={study.title} />
            ) : null}
          </HeroWrap>
        )}

        {study.sections.map((section, i) => (
          <CaseSection
            key={`${section.type}-${section.title || i}`}
            section={section}
          />
        ))}

        <NavSection aria-label="More case studies">
          <NavCard
            type="button"
            disabled={!prev}
            onClick={() => prev && history.push(`/projects/${prev.id}`)}
          >
            <NavCardInner>
              <NavLabel>Previous</NavLabel>
              <NavTitle>{prev ? prev.title : '—'}</NavTitle>
            </NavCardInner>
          </NavCard>
          <NavCard
            type="button"
            disabled={!next}
            onClick={() => next && history.push(`/projects/${next.id}`)}
          >
            <NavCardInner>
              <NavLabel>Next</NavLabel>
              <NavTitle>{next ? next.title : '—'}</NavTitle>
            </NavCardInner>
          </NavCard>
        </NavSection>
      </Container>
    </Page>
  );
}
