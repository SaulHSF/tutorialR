// Libs
import React from 'react';
// Organisms
import GrandChildContext from './GrandChildContext';

// Props
interface SonContextProps {
  title?: string;
}

const SonContext = (props: SonContextProps) => {
  const { title } = props;
  return (
    <div>
      <h1>New Component {title}</h1>
      <GrandChildContext title='GrandChild' />
    </div>
  );
};

export default SonContext;
