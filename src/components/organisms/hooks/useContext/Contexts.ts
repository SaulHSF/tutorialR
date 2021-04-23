import React from 'react';

type ExampleUseContextType = {
  clicks?: number;
  handleClicks?: () => void;
};

const defaultContext: ExampleUseContextType = {
  clicks: 0
};

export const ExampleUseContext = React.createContext(defaultContext);
