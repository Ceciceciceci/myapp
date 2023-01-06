import React, {useState} from 'react';
import me3 from '../../images/me3.png';
import Footer from '../Footer';
import { welcomestyle, homepstyle, creationStyle, leftHome, rightHome, homeHome, preText, homeImage, navHome } from '../../styles/homestyles';

export default function ArtHomepage ({navigation}){

  return (
      <div style={homeHome}>
        <div style={leftHome}>
          <img className="imgMe" src={me3} style={homeImage} />
        </div>
        <div style={rightHome}>
            <h1 style={welcomestyle}>welcome </h1> 
            <p style={homepstyle}>to Cecilia's </p>
            <p style={homepstyle}>cafe of <span style={creationStyle}> creations</span></p>
          <div style={{backgroundColor: '#78C9E6', height: '2px', width: '100%', borderRadius: '25px', margin: '20px 0px'}} > </div>
          <div style={preText}> 
            <p>
              Cecilia is a bay-area artist located in Hayward. 
              She loves to draw all things food, anime, and game related.  
              Cecilia's other alias online is Ichi.
            </p>
          </div>
          <div className="homeNav" style={navHome}>
            <div>
              <li><a href="/fanart">fanart</a></li>
              <li><a href="/original">original</a></li>
              <li><a href="/other">other</a></li>
            </div>
            <div>
              <li><a href="/foodart">foodart</a></li>
              <li><a href="/contact">contact</a></li>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}