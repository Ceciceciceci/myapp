import React from 'react';
import PhotoAlbum from "react-photo-album";
import { foodartPhotos } from './Photos';
import { pagesHeaderStyle, subtext } from '../styles/homestyles';

export default function Original (){

  return (
      <div>
        <div>
          <p style={pagesHeaderStyle}>foodart art</p>
          <p style={subtext}>please give some time for drawings to load, thanks!</p>
        </div>
        <PhotoAlbum 
          layout="masonry"
          columns={(containerWidth) => {
              if (containerWidth < 500) return 1;
              if (containerWidth < 800) return 2;
              return 3;
          }}
          padding="5"
          photos={foodartPhotos} 
        />
      </div>
  )
}