// Libs
import React from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';

// Children
import TransitionCSS from './TransitionCSS';
import TransitionCSSWithClass from './TransitionCSSWithClass';
import WorkshopAccordion from './WorkshopAccordion';
import WorkshopSlider from './WorkshopSlider';
import WorkshopCarrousel from './WorkshopCarrousel';

// Props
type AnimationsAndTransitionCSSProps = {
  title?: string;
};

const AnimationsAndTransitionCSS = ({ title }: AnimationsAndTransitionCSSProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <TransitionCSS title='Que son las fuciones CSS' />
      <TransitionCSSWithClass title='Transiciones usando clases' />
      <WorkshopAccordion title='Workshop Accordion' />
      <WorkshopSlider title='Workshop Slider' />
      <WorkshopCarrousel title='Workshop Carrousel' />
    </HeaderPartModule>
  );
};

export default AnimationsAndTransitionCSS;
