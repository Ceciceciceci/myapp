import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import me3 from '../images/me3.png';

const Page = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: row;
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1.25rem 3rem;
  }
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 320px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  display: block;
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Welcome = styled.h1`
  color: #ffb700;
  font-size: clamp(64px, 15vw, 120px);
  line-height: 0.9;
  font-family: var(--dongle);
  letter-spacing: 0.12em;
  margin: 0;
  font-weight: 400;
`;

const Sub = styled.p`
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 300;
  margin: 0;
  font-family: var(--openSans);
  color: var(--dark-blue);
`;

const Accent = styled.span`
  font-family: var(--anonPro);
  font-weight: 700;
  color: #f16a4c;
  font-size: clamp(34px, 5vw, 50px);
  margin-left: 15px;
`;

const Divider = styled.div`
  background-color: #78c9e6;
  height: 2px;
  width: 100%;
  border-radius: 25px;
  margin: 20px 0;
`;

const Intro = styled.div`
  background-color: #ffe894;
  color: var(--dark-blue);
  padding: 35px;
  font-family: var(--openSans);
  font-size: 16px;
  line-height: 1.55;
  width: 100%;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  margin-top: 1.75rem;
  font-family: var(--openSans);

  @media (max-width: 600px) {
    gap: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  a {
    color: var(--dark-blue);
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0.02em;

    &:hover {
      color: #f16a4c;
    }
  }
`;

export default function ArtistHome() {
  return (
    <Page>
      <Left>
        <Portrait src={me3} alt="Cecilia" />
      </Left>
      <Right>
        <Welcome>welcome</Welcome>
        <Sub>to Cecilia&apos;s</Sub>
        <Sub>
          cafe of <Accent>creations</Accent>
        </Sub>
        <Divider />
        <Intro>
          <p style={{ margin: 0 }}>
            Cecilia is a bay-area artist located in Hayward. She loves to draw all
            things food, anime, and game related. Cecilia&apos;s other alias online
            is Ichi.
          </p>
        </Intro>
        <Nav aria-label="Art galleries">
          <ul>
            <li>
              <Link to="/artist/fanart">fanart</Link>
            </li>
            <li>
              <Link to="/artist/original">original</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/artist/foodart">foodart</Link>
            </li>
          </ul>
        </Nav>
      </Right>
    </Page>
  );
}
