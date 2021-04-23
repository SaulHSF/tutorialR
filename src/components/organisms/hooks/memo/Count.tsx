// Libs
import React from 'react';

// Props
type CountProps = {
  count?: number;
};

const Count = React.memo(({ count }: CountProps) => {
  console.log('<Count />');
  return <div>{count}</div>;
});

export default Count;
