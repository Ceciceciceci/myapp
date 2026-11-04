import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import heroArt from '../images/artist/ichee-cafe-hero.png';
import displayLeft from '../images/artist/display-left.png';
import displayRight from '../images/artist/display-right.png';

const pop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const bob = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }
  50% {
    transform: translateY(-12px) rotate(1.5deg);
  }
`;

const wave = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const Page = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
  min-height: 100dvh;
  padding: 48px clamp(20px, 5vw, 80px);
  overflow: visible;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 720px) {
    gap: 28px;
    padding-top: 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const Art = styled.div`
  position: relative;
  flex: 0 1 420px;
  max-width: 100%;
  animation: ${pop} 0.8s ease both;

  @media (max-width: 720px) {
    flex: 1 1 100%;
    width: 100%;
    max-width: 100%;
  }
`;

const Portrait = styled.img`
  display: block;
  width: 100%;
  height: auto;
  animation: ${bob} 5s ease-in-out infinite;
`;

const Copy = styled.div`
  flex: 1 1 360px;
  max-width: 640px;
  min-width: 0;

  @media (max-width: 720px) {
    text-align: left;
  }
`;

const Welcome = styled.h1`
  margin: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: clamp(48px, 11vw, 96px);
  line-height: 1;
  color: #ffb81f;
  letter-spacing: 0.12em;
  display: flex;
  flex-wrap: wrap;
`;

const WelcomeLetter = styled.span`
  display: inline-block;
  animation: ${wave} 2.4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;

const Sub = styled.p`
  margin: 20px 0 0;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(20px, 4.5vw, 28px);
  line-height: 1.5;
  color: #1e2a4a;
  animation: ${pop} 0.8s 0.5s ease both;
`;

const Brand = styled.b`
  font-family: 'Space Mono', 'Sometype Mono', monospace;
  color: #e8472f;
  font-size: 1.3em;
  display: inline-block;
`;

const Rule = styled.div`
  height: 3px;
  background: #2f8fe0;
  margin: 24px 0;
  transform-origin: left;
  animation: ${grow} 1s 0.8s ease both;
`;

const Bio = styled.p`
  margin: 0;
  padding: 24px clamp(18px, 4vw, 36px);
  background: #ffe48f;
  color: #1e2a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  border-radius: 14px;
  animation: ${pop} 0.8s 1s ease both;
  transition: transform 0.25s;

  &:hover {
    transform: rotate(-0.6deg) scale(1.01);
  }
`;

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  animation: ${pop} 0.8s 1.2s ease both;
  position: relative;
  z-index: 2;
`;

const GalleryLink = styled(Link)`
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: ${({ $tone }) => ($tone === 'y' ? '#1e2a4a' : '#fff')};
  background: ${({ $tone }) =>
    $tone === 'r' ? '#d63a22' : $tone === 'y' ? '#ffb81f' : '#1f6fbf'};
  padding: 12px 28px;
  min-height: 44px;
  border-radius: 999px;
  border: 2.5px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  z-index: 1;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px) rotate(-2deg);
    box-shadow: 0 6px 0 #1e2a4a;
  }
`;

const DisplayWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  &:hover,
  &:focus-within {
    z-index: 5;
  }
`;

const DisplayShot = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(110px, 22vw, 168px);
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 14px;
  border: 2.5px solid #ffb81f;
  box-shadow: 0 10px 24px rgba(30, 42, 74, 0.22);
  pointer-events: none;
  opacity: 0;
  z-index: 0;
  transform-origin: center center;
  transition:
    opacity 0.28s ease,
    transform 0.5s cubic-bezier(0.2, 1.15, 0.3, 1);

  &.left {
    transform: translate(-50%, -50%) rotate(-6deg) scale(0.4);
  }

  &.right {
    transform: translate(-50%, -50%) rotate(6deg) scale(0.4);
  }

  ${DisplayWrap}:hover &,
  ${DisplayWrap}:focus-within & {
    opacity: 1;
  }

  ${DisplayWrap}:hover &.left,
  ${DisplayWrap}:focus-within &.left {
    transform: translate(calc(-50% - 108px), calc(-50% - 92px)) rotate(-22deg)
      scale(1);
  }

  ${DisplayWrap}:hover &.right,
  ${DisplayWrap}:focus-within &.right {
    transform: translate(calc(-50% + 108px), calc(-50% - 92px)) rotate(20deg)
      scale(1);
  }

  @media (max-width: 720px) {
    width: clamp(96px, 34vw, 140px);

    ${DisplayWrap}:hover &.left,
    ${DisplayWrap}:focus-within &.left {
      transform: translate(calc(-50% - 78px), calc(-50% - 78px)) rotate(-18deg)
        scale(1);
    }

    ${DisplayWrap}:hover &.right,
    ${DisplayWrap}:focus-within &.right {
      transform: translate(calc(-50% + 78px), calc(-50% - 78px)) rotate(16deg)
        scale(1);
    }
  }
`;

const DisplayPill = styled.button`
  appearance: none;
  cursor: pointer;
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  color: #1e2a4a;
  background: #fffdf7;
  padding: 12px 28px;
  min-height: 44px;
  border-radius: 999px;
  border: 2.5px solid #ffb81f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px) rotate(-2deg);
    box-shadow: 0 6px 0 #1e2a4a;
    background: #fff6d6;
    outline: none;
  }
`;

const WELCOME = ['w', 'e', 'l', 'c', 'o', 'm', 'e'];

export default function ArtistHome() {
  return (
    <Page>
      <Art>
        <Portrait src={heroArt} alt="Illustration of Cecilia holding a pencil" />
      </Art>
      <Copy>
        <Welcome aria-label="welcome">
          {WELCOME.map((letter, i) => (
            <WelcomeLetter
              key={`${letter}-${i}`}
              aria-hidden="true"
              $delay={`${i * 0.1}s`}
            >
              {letter}
            </WelcomeLetter>
          ))}
        </Welcome>
        <Sub>
          to
          <br />
          <Brand>Ichee Cafe</Brand>
        </Sub>
        <Rule />
        <Bio>
          Cecilia is a bay-area artist located in Hayward. She loves to draw all
          things food, anime, and game related. Cecilia&apos;s other alias online
          is Ichi.
        </Bio>
        <Links aria-label="Galleries">
          <GalleryLink $tone="r" to="/artist/fanart">
            fanart
          </GalleryLink>
          <GalleryLink $tone="y" to="/artist/foodart">
            foodart
          </GalleryLink>
          <GalleryLink $tone="b" to="/artist/original">
            original
          </GalleryLink>
          <DisplayWrap>
            <DisplayShot
              className="left"
              src={displayLeft}
              alt=""
              aria-hidden="true"
            />
            <DisplayShot
              className="right"
              src={displayRight}
              alt=""
              aria-hidden="true"
            />
            <DisplayPill type="button" aria-label="Display booth photos">
              display
            </DisplayPill>
          </DisplayWrap>
        </Links>
      </Copy>
    </Page>
  );
}
