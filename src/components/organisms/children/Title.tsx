// Libs
import React from 'react';

// Props
type TitleProps = {
  clicks?: number;
  children?: any;
};

const Title = ({ clicks, children }: TitleProps) => {
  console.log(typeof children);
  return typeof children === 'function' ? children(clicks) : <h4>{clicks}</h4>;
};

export default Title;
