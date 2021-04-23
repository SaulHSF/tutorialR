// Libs
import React from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';
import Slider, { ImageSlider } from '../../molecules/slider';

// Props
type WorkshopSliderProps = {
  title?: string;
};

const images: ImageSlider[] = [
  {
    src: 'https://images.pexels.com/photos/5763092/pexels-photo-5763092.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Ryan Pilato'
  },
  {
    src: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Avinash Patel'
  },
  {
    src: 'https://images.pexels.com/photos/258393/pexels-photo-258393.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Pixabay'
  }
];

const WorkshopSlider = ({ title }: WorkshopSliderProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <Slider {...{ images }} />
    </HeaderPartModule>
  );
};

export default WorkshopSlider;
