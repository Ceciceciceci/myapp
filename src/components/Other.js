import React from 'react';
import PhotoAlbum from "react-photo-album";
import { otherPhotos } from './Photos';
import { pagesHeaderStyle, subtext } from '../styles/homestyles';

export default function Original (){

  return (
      <div>
        <div>
          <p style={pagesHeaderStyle}>crafts & merch</p>
          <p style={subtext}>please give some time for the photos to load, thanks!</p>
        </div>
        <PhotoAlbum 
          layout="masonry"
          columns={(containerWidth) => {
              if (containerWidth < 500) return 1;
              if (containerWidth < 800) return 2;
              return 2;
          }}
          padding="5"
          photos={otherPhotos}
        />
      </div>
  )
}