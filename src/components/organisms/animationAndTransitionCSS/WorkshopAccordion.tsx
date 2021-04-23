// Libs
import React from 'react';

// Component
import HeaderPartModule from '../../molecules/header/headerPartModule';
import Accordion from './Accordion';

// Props
type WorkshopAccordionProps = {
  title?: string;
};

const WorkshopAccordion = ({ title }: WorkshopAccordionProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <div>
        <Accordion title='React Native' content='Decription' colorHeader='blue' />
        <Accordion
          title='React Native 2'
          content='loresm fwef23f fewfjoj ofqjewofj qpefjewqo jfqewfjwqeofj oewj foqwejfp wjef:w'
          colorHeader='blue'
        />
        <Accordion title='React Native 3' content='Decription' colorHeader='green' />
      </div>
    </HeaderPartModule>
  );
};

export default WorkshopAccordion;
