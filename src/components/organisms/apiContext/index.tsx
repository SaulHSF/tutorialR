// Libs
import React, { createContext, useState } from 'react';
// Organisms
import SonContext from './SonContext';

export interface ExampleUseContextCtx {
  click: number;
  onClick: () => void;
}

export const ExampleUseContext = createContext({} as ExampleUseContextCtx);

const FatherContextComponent = () => {
  const [click, setClick] = useState(0);
  const updateClick = () => {
    setClick(click + 1);
  };

  return (
    <ExampleUseContext.Provider value={{ click, onClick: updateClick }}>
      <div>
        <h1>Father</h1>
        <SonContext title='Son' />
      </div>
    </ExampleUseContext.Provider>
  );
};

export default FatherContextComponent;
