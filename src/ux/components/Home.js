import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContentFrame, PageMain } from '../styles';
import { homeProjects } from '../data/homeProjects';
import FloatingPlayground from './FloatingPlayground';
import { LoadableImage, LoadableVideo } from './MediaLoader';
import me1 from '../../images/me1.png';
import me2 from '../../images/me2.png';

const Page = styled(PageMain)`
  padding-bottom: 4rem;
`;

const DateLine = styled.p`
  margin: 2.5rem 0 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

function formatToday(date = new Date()) {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}.${dd}.${yyyy}`;
}

function useSanFranciscoTemp() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles',
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (cancelled) return;
        const value = data?.current?.temperature_2m;
        if (typeof value === 'number') {
          setTemp(Math.round(value));
        }
      })
      .catch(() => {
        if (!cancelled) setTemp(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return temp;
}

const IntroRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 2rem;
  align-items: end;
  margin-top: 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: start;
  }
`;

const IntroCopy = styled.div`
  min-width: 0;
`;

const Portrait = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  justify-self: end;
  aspect-ratio: 1;
  cursor: pointer;

  @media (max-width: 800px) {
    max-width: 240px;
    justify-self: start;
  }

  @media (max-width: 550px) {
    width: 75%;
    max-width: none;
    justify-self: end;
  }
`;

const PortraitImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom right;
  display: block;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.2s ease;
  pointer-events: none;
`;

const Name = styled.h1`
  margin: 1.75rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.typography.heroSize};
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: lowercase;
`;

const Tagline = styled.p`
  margin: 1.25rem 0 0;
  max-width: 34rem;
  font-size: clamp(1.15rem, 2.4vw, 1.45rem);
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Status = styled.p`
  margin: 1.5rem 0 0;
  max-width: 38rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedForeground};

  a {
    color: ${({ theme }) => theme.colors.foreground};
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const WorkList = styled.section`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem 1.5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const WorkItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  grid-column: ${({ $layout }) => ($layout === 'full' ? '1 / -1' : 'auto')};
`;

const WorkCopy = styled.div`
  min-width: 0;
  order: 2;
`;

const WorkTitle = styled.h2`
  margin: 0;
  font-size: ${({ $layout }) =>
    $layout === 'full' ? 'clamp(1.35rem, 3vw, 1.75rem)' : '1.2rem'};
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.foreground};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const WorkRole = styled.p`
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const WorkBlurb = styled.p`
  margin: 0.55rem 0 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.foreground};
`;

const WorkMeta = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.mutedForeground};
  word-break: break-word;

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

const MediaFrame = styled.div`
  position: relative;
  width: 100%;
  order: 1;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.placeholder};
  aspect-ratio: ${({ $layout }) => ($layout === 'full' ? '21 / 9' : '4 / 3')};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 800px) {
    aspect-ratio: ${({ $layout }) =>
      $layout === 'full' ? '16 / 9' : '16 / 10'};
  }

  /* Absolute fill so iOS Safari respects object-fit on video */
  > div {
    position: absolute !important;
    inset: 0;
    width: 100%;
    height: 100% !important;
    min-height: 0 !important;
    background: ${({ theme }) => theme.colors.placeholder};
  }

  > div > div {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100% !important;
  }

  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: top center;
    transform: ${({ $hovered }) => ($hovered ? 'scale(1.03)' : 'scale(1)')};
    transition: transform 0.45s ease;
  }
`;

const MediaLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const MediaExternal = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

function WorkMedia({ project, hovered, setHovered }) {
  const layout = project.layout || 'half';
  const media = (
    <MediaFrame $hovered={hovered} $layout={layout}>
      {project.video ? (
        <LoadableVideo
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          aria-label={project.title}
          fill
        />
      ) : project.img ? (
        <LoadableImage src={project.img} alt={project.title} fill />
      ) : null}
    </MediaFrame>
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (project.to) {
    return (
      <MediaLink to={project.to} {...handlers}>
        {media}
      </MediaLink>
    );
  }

  if (project.url) {
    return (
      <MediaExternal
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        {...handlers}
      >
        {media}
      </MediaExternal>
    );
  }

  return <div {...handlers}>{media}</div>;
}

function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const layout = project.layout || 'half';
  const titleNode = project.to ? (
    <Link to={project.to}>{project.title}</Link>
  ) : project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <WorkItem $layout={layout}>
      <WorkMedia
        project={project}
        hovered={hovered}
        setHovered={setHovered}
      />
      <WorkCopy>
        <WorkTitle $layout={layout}>{titleNode}</WorkTitle>
        {project.meta ? (
          <WorkMeta>
            {project.meta}
            {project.url ? (
              <>
                {' | '}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </>
            ) : null}
          </WorkMeta>
        ) : null}
        {project.role ? <WorkRole>{project.role}</WorkRole> : null}
        <WorkBlurb>{project.blurb}</WorkBlurb>
      </WorkCopy>
    </WorkItem>
  );
}

export default function UxHome() {
  const today = formatToday();
  const outsideTemp = useSanFranciscoTemp();
  const [portraitHover, setPortraitHover] = useState(false);

  return (
    <Page>
      <ContentFrame>
        <DateLine>
          Today is {today}
          <br />
          Outside is{' '}
          {outsideTemp == null ? '…' : `${outsideTemp}°`} in San Francisco, CA
        </DateLine>

        <IntroRow>
          <IntroCopy>
            <Name>cecilia tran</Name>
            <Tagline>
              designing and coding systems and products that make life easier for
              both devs and customers
            </Tagline>
            <Status>
              currently @{' '}
              <a
                href="https://onewheel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Future Motion
              </a>
              , prev. design &amp; engineering @ DreamWorks Animation
            </Status>
          </IntroCopy>

          <Portrait
            onMouseEnter={() => setPortraitHover(true)}
            onMouseLeave={() => setPortraitHover(false)}
            onFocus={() => setPortraitHover(true)}
            onBlur={() => setPortraitHover(false)}
            tabIndex={0}
            role="img"
            aria-label="Portrait of Cecilia"
          >
            <PortraitImg src={me1} alt="" $active={!portraitHover} />
            <PortraitImg src={me2} alt="" $active={portraitHover} />
          </Portrait>
        </IntroRow>

        <WorkList aria-label="Selected work">
          {homeProjects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </WorkList>

        <FloatingPlayground />
      </ContentFrame>
    </Page>
  );
}
