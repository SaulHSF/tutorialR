// Libs
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Styles
import './index.css';

// Props
type CarrouselProps = {
  items?: string[];
};

const Carrousel = ({ items }: CarrouselProps) => {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const beforeItem = () => {
    if (indexCurrent > 0) {
      setIndexCurrent(indexCurrent - 1);
    }
  };

  const laterItem = () => {
    if (items) {
      if (indexCurrent < items.length - 1) {
        setIndexCurrent(indexCurrent + 1);
      }
    }
  };

  return (
    <div className='carousel'>
      <div className='carousel-buttons'>
        <div onClick={beforeItem}>-</div>
        <div onClick={laterItem}>+</div>
      </div>
      <TransitionGroup>
        <CSSTransition timeout={1000} classNames='slide' key={indexCurrent}>
          {items && items.length > 0 && <img src={items[indexCurrent]} alt='image-carrousel' className='carousel-img' />}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Carrousel;
