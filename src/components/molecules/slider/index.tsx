// Libs
import React, { useState, useEffect } from 'react';

// Styles
import './index.css';

export interface ImageSlider {
  src: string;
  title: string;
}

// Props
type SliderProps = {
  images?: ImageSlider[];
  interval?: number;
};

const Slider = ({ images, interval = 5000 }: SliderProps) => {
  const [indexCurrent, setIndexCurrent] = useState(0);

  useEffect(() => {
    const initInterval = setInterval(() => {
      if (images) {
        if (indexCurrent < images?.length - 1) {
          setIndexCurrent(indexCurrent + 1);
        } else {
          setIndexCurrent(0);
        }
      }
    }, interval);
    return () => clearInterval(initInterval);
  }, [images, indexCurrent, interval]);
  return (
    <div className='slider'>
      <div className='slider-container'>
        {images &&
          images.map((image, index) => (
            <img
              className={`slider-container-img ${indexCurrent === index ? 'slider-container-img-show' : 'slider-container-img-hide'}`}
              key={image.title}
              src={image.src}
              alt={image.title}
            />
          ))}
        <div className='slider-container-title'>{images ? images[indexCurrent].title : ''}</div>
      </div>
    </div>
  );
};

export default Slider;
