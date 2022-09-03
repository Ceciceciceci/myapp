/** Fanart */
import kburger from '../images/fanart/kburger.png';
import kcake from '../images/fanart/kcake.png';
import img4 from '../images/fanart/img4.png';
import img5 from '../images/fanart/img5.png';
import img6 from '../images/fanart/img6.png';
import img7 from '../images/fanart/img7.png';
import img8 from '../images/fanart/img8.png';
import img9 from '../images/fanart/img9.png';
import img10 from '../images/fanart/img10.png';
import img11 from '../images/fanart/img11.png';
import img12 from '../images/fanart/img12.png';
import img13 from '../images/fanart/img13.png';
import img14 from '../images/fanart/img14.png';
import img15 from '../images/fanart/img15.png';
import img16 from '../images/fanart/img16.png';
import img17 from '../images/fanart/img17.png';
import img18 from '../images/fanart/img18.png';
import img19 from '../images/fanart/img19.jpg';
import img20 from '../images/fanart/img20.png';
import img21 from '../images/fanart/img21.png';
import img22 from '../images/fanart/img22.png';
import img23 from '../images/fanart/img23.png';
import img24 from '../images/fanart/img24.png';
import img25 from '../images/fanart/img25.jpg';


/** Originals */
import sunny from '../images/fanart/sunny.png';

/** Food art */


const fanartPhotosList = [
  {id: 'kcake', url: kcake, width: '600', height: ''},
  {id: 'kburger', url: kburger, width: '600', height: ''},
  {id: 'img4', url: img4, width: '400', height: ''},
  {id: 'img5', url: img5, width: '400', height: ''},
  {id: 'img6', url: img6, width: '600', height: ''},
  {id: 'img7', url: img7, width: '600', height: ''},
  {id: 'img8', url: img8, width: '600', height: ''},
  {id: 'img9', url: img9, width: '600', height: ''},
  {id: 'img10', url: img10, width: '600', height: ''},
  {id: 'img11', url: img11, width: '600', height: ''},
  {id: 'img12', url: img12, width: '600', height: ''},
  {id: 'img13', url: img13, width: '600', height: ''},
  {id: 'img14', url: img14, width: '600', height: ''},
  {id: 'img15', url: img15, width: '600', height: ''},
  {id: 'img16', url: img16, width: '600', height: ''},
  {id: 'img17', url: img17, width: '600', height: ''},
  {id: 'img18', url: img18, width: '600', height: ''},
  {id: 'img19', url: img19, width: '600', height: ''},
  {id: 'img20', url: img20, width: '600', height: ''},
  {id: 'img21', url: img21, width: '600', height: ''},
  {id: 'img22', url: img22, width: '1200', height: ''},
  {id: 'img23', url: img23, width: '600', height: ''},
  {id: 'img24', url: img24, width: '600', height: ''},
  {id: 'img25', url: img25, width: '600', height: ''}
  
]

const originalPhotosList = [
  {id: 'sunny', url: sunny, width: '600', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''}
]

const foodartPhotosList = [
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''},
  {id: '', url: '', width: '', height: ''}
]

export const fanartPhotos = fanartPhotosList.map((photo) => { 
  return {
    src: photo.url,
    width: photo.width,
    height: photo.height
  };
});

export const originalPhotos = originalPhotosList.map((photo) => { 
  return {
    src: photo.url,
    width: photo.width,
    height: photo.height
  };
});

export const foodartPhotos = foodartPhotosList.map((photo) => { 
  return {
    src: photo.url,
    width: photo.width,
    height: photo.height
  };
});
