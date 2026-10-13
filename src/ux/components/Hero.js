import React from 'react';
import styled from 'styled-components';
import { displayFont } from '../styles';

const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: start;
  padding: 2.5rem 0 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    padding: 1.75rem 0 1rem;
  }
`;

const HeroMedia = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme, $bg }) => $bg || theme.colors.accentBlue};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
`;

const HeroLead = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.heroSize};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
`;

const Hello = styled.span`
  ${displayFont}
  font-size: inherit;
  font-weight: 400;
`;

const FunFact = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.baseSize};
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 36rem;
`;

export default function Hero({
  mediaSrc,
  mediaAlt = '',
  mediaBg,
  greeting = 'Hello!',
  lead,
  funFact,
}) {
  return (
    <HeroGrid>
      <HeroMedia $bg={mediaBg} aria-hidden={!mediaSrc}>
        {mediaSrc ? <img src={mediaSrc} alt={mediaAlt} /> : null}
      </HeroMedia>

      <HeroCopy>
        <HeroLead>
          <Hello>{greeting}</Hello> {lead}
        </HeroLead>
        {funFact ? <FunFact>{funFact}</FunFact> : null}
      </HeroCopy>
    </HeroGrid>
  );
}
