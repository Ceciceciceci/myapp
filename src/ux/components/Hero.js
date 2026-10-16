import React from 'react';
import styled, { keyframes } from 'styled-components';
import { displayFont } from '../styles';
import dogBread from '../../images/dog-bread-2.png';
import sunIcon from '../../images/svgs/sun.svg';

const SUN_MS = 1300;
const DOG_DELAY_MS = 1100;

/*
  Linear between keyframes (no per-step ease stutter).
  Percents are ease-out weighted: most travel early, soft settle at the end.
*/
const sunRise = keyframes`
  0% {
    left: 50%;
    bottom: -20%;
    transform: translateX(-50%) scale(1) rotate(-8deg);
  }
  18% {
    left: 38%;
    bottom: 18%;
    transform: translateX(-50%) scale(1.3) rotate(-4deg);
  }
  36% {
    left: 26%;
    bottom: 38%;
    transform: translateX(-50%) scale(1.55) rotate(0deg);
  }
  55% {
    left: 18%;
    bottom: 52%;
    transform: translateX(-50%) scale(1.75) rotate(3deg);
  }
  72% {
    left: 13%;
    bottom: 62%;
    transform: translateX(-50%) scale(1.9) rotate(5deg);
  }
  88% {
    left: 10%;
    bottom: 68%;
    transform: translateX(-50%) scale(1.97) rotate(6deg);
  }
  100% {
    left: 8%;
    bottom: 72%;
    transform: translateX(-50%) scale(2) rotate(8deg);
  }
`;

/* From bottom-right → true center, low gentle arc */
const dogJump = keyframes`
  0% {
    left: 92%;
    bottom: -25%;
    transform: translate(-50%, 0) rotate(10deg);
  }
  18% {
    left: 82%;
    bottom: 12%;
    transform: translate(-50%, 20%) rotate(6deg);
  }
  36% {
    left: 70%;
    bottom: 28%;
    transform: translate(-50%, 35%) rotate(2deg);
  }
  55% {
    left: 60%;
    bottom: 38%;
    transform: translate(-50%, 42%) rotate(-1deg);
  }
  72% {
    left: 54%;
    bottom: 45%;
    transform: translate(-50%, 47%) rotate(-3deg);
  }
  88% {
    left: 51%;
    bottom: 48%;
    transform: translate(-50%, 49%) rotate(-4deg);
  }
  100% {
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%) rotate(-4deg);
  }
`;

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
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme, $bg }) => $bg || theme.colors.accentBlue};
  overflow: hidden;
`;

const HeroMediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Sun = styled.img`
  position: absolute;
  left: 50%;
  bottom: -20%;
  z-index: 1;
  width: clamp(72px, 28%, 140px);
  height: auto;
  display: block;
  pointer-events: none;
  user-select: none;
  transform-origin: center center;
  transform: translateX(-50%) scale(1) rotate(-8deg);
  animation: ${sunRise} ${SUN_MS}ms linear 1 forwards;
`;

const DogBread = styled.img`
  position: absolute;
  left: 92%;
  bottom: -25%;
  z-index: 2;
  width: clamp(96px, 42%, 220px);
  height: auto;
  display: block;
  pointer-events: none;
  user-select: none;
  transform-origin: center center;
  transform: translate(-50%, 0) rotate(10deg);
  animation: ${dogJump} 1.5s linear ${DOG_DELAY_MS}ms 1 forwards;
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
  showDog = true,
  showSun = true,
}) {
  return (
    <HeroGrid>
      <HeroMedia $bg={mediaBg}>
        {mediaSrc ? <HeroMediaImage src={mediaSrc} alt={mediaAlt} /> : null}
        {showSun ? <Sun src={sunIcon} alt="" aria-hidden="true" /> : null}
        {showDog ? <DogBread src={dogBread} alt="" aria-hidden="true" /> : null}
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
