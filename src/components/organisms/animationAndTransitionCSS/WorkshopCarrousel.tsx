// Libs
import React from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';
import Carrousel from '../../molecules/carrousel';

// Props
type WorkshopCarrouselProps = {
  title?: string;
};

const IMAGES = [
  'https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
];

const WorkshopCarrousel = ({ title }: WorkshopCarrouselProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <Carrousel items={IMAGES} />
    </HeaderPartModule>
  );
};

export default WorkshopCarrousel;
