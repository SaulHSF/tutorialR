// Libs
import React from 'react';

// Props
type TitleProps = {
  title?: string;
};

const Title = React.memo(({ title }: TitleProps) => {
  console.log('<Title />');
  return <div>{title}</div>;
});

export default Title;
