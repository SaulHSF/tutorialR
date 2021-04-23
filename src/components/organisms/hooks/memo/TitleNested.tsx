// Libs
import React from 'react';

// Props
type TitleNestedProps = {
  info?: { title: string };
};

const TitleNested = React.memo(
  ({ info }: TitleNestedProps) => {
    console.log('<TitleNested />');
    return <div>{info ? info.title : null}</div>;
  },
  (prevProps, nextProps) => {
    // si retorna true no se renderiza
    // si retorna false si se renderiza
    return prevProps.info?.title === nextProps.info?.title;
  }
);

export default TitleNested;
