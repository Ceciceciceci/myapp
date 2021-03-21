import React from 'react';
import book from '../../images/book.png';
import bookpage2 from '../../images/bookpage2.png';
import bookpage3 from '../../images/bookpage3.png';
import bookpage4 from '../../images/bookpage4.png';
import bookpage5 from '../../images/bookpage5.png';
import speechbubblestemstraight from '../../images/svgs/speechbubblestemstraight.svg';

export default function Book(){
  return (
    <section className="book-section">
        <div className="book">
          <img src={book} height={'300px'}/>
        </div>
        <div className="pages">
          <img className="page one" src={bookpage4} height={'275px'}/>
          <img className="page two" src={bookpage2} height={'275px'}/>
          <img className="page three" src={bookpage3} height={'275px'}/>
          <img className="page four" src={bookpage5} height={'325px'}/>
        </div>
    </section>
  )
}