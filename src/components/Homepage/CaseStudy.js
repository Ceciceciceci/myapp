import React from 'react';
import bookletter from '../../images/bookletter.png';
import stampbg from '../../images/stampbg.png';
import stampflower from '../../images/stampflower.png';
import stampstar from '../../images/stampstar.png';
import sdzoodesktopmain from '../../images/sdzoodesktopmain.png';

import styled from 'styled-components';

const CasestudySection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url('${bookletter}');
  width: 80%;
  margin: 0 auto;
  padding: 50px 100px;
`;

export default function CaseStudy(props) {
  const {theme} = props;
  return(
    <CasestudySection>
      <div className="stamp">
        <img src={stampbg} />
        <img src={stampflower} />
      </div>
      <div className="casestudy intro">
          <h1>San Diego Zoo Site Redesign</h1>
          <img src={sdzoodesktopmain} width='100%'/>
          <div>
            <p>COVID has impacted their normal user traffic, and many people are not able 
              to visit the zoo ( live cams ).  Bring to front what the San Diego Zoo is doing 
              to conserve the animals and what the zoo is doing to help spread the knowledge 
              about wildlife and where the donations go to and why it is important to donate 
              and get a membership.</p>
            <p>My Role: UI Designer, UX Researcher</p>
            <p>Date: Feb. 04, 2021</p>
          </div>
      </div>

      <div className="casestudy research">
        <h1>01. Research</h1>
        <div className="survey">
            <h3>Surveys ( 41 people )</h3>
            <div>
              <p>People donate because of tax breaks(10%) and/or know where the money goes (80%).</p>
              <p>82% haven't donated to animal causes and would like to in the future</p>
              <p>People would be willing to buy a membership if it would go towards zoom conservation
                quality and fun activites, or teaching programs about animals for children.
              </p>
            </div>
        </div>
        <div className="interview">
            <h3>Interviews ( 5 people )</h3>
            <p>“Donated to places because her kids enjoyed them and they were educational programs”</p>
            <p>“Wants to see a tangible way of how money is spent or testimonials”</p>
            <p>“Donates to support a cause, not really looking for personal benefits”</p>
            <p>“Will join membership if interested and lived close to the zoo”</p>
            <p>“Would like to help animals from far away, especially endangered species”</p>
        </div>
        <div className="insights">

        </div>
      </div>
      <div className="casestudy aboutt">
        <h1>02. About</h1>
        <div className="problem-statement">

        </div>
        <div className="solution">

        </div>
      </div>
      <div className="casestudy define">
        <h1>03. Define</h1>
        <img src="" className="userpersona" />
        <img src="" className="storyboard" />
      </div>
      <div className="casestudy ideate">
        <h1>04. Ideate</h1>
        <div className="userflow">
          <p>User Flow</p>
          <img />
          <p></p>
        </div>
        <div className="howmightwe">
          <p><b>How Might We:</b></p>
          <p></p>
        </div>
        <div className="ia">
          <p><b>Info Architecture</b></p>
          <img />
        </div>
      </div>
      <div className="casestudy prototypes">
        <h1>05. Prototypes</h1>
      </div>
      <div className="casestudy styleguide">
        <h1>07. Style Guide</h1>
      </div>
      <div className="casestudy testing">
        <h1>07. Testing</h1>
      </div>
      <div className="casestudy future">
        <h1>08. Future Steps</h1>
        <p>What might we do better in the future?</p>
        <p></p>
      </div>
    </CasestudySection>
  )
}