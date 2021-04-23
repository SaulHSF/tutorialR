// Libs
import React, { useState } from 'react';

// Contexts
import { ExampleUseContext } from './Contexts';

// Molecules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Components
import Son from './Son';

// Props
type HookUseContextProps = {
  title?: string;
};

const HookUseContext = ({ title }: HookUseContextProps) => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <ExampleUseContext.Provider value={{ clicks, handleClicks }}>
      <HeaderPartModule {...{ title }}>
        <h3>{clicks}</h3>
        <button onClick={() => setClicks(0)}>reset clicks</button>
        <Son />
      </HeaderPartModule>
    </ExampleUseContext.Provider>
  );
};

export default HookUseContext;
