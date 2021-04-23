// Libs
import React from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';
import ComponentSyntax from './ComponentSyntax';

// Props
type ComponentStylesProps = {
  title?: string;
};

const ComponentStyles = ({ title }: ComponentStylesProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <ComponentSyntax title='Sintaxis' />
    </HeaderPartModule>
  );
};

export default ComponentStyles;
