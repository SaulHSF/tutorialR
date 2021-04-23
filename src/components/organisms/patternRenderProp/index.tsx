// Libs
import React from 'react';

// Components
import SizeComponent from './Size';

const PatterRenderProp = () => {
  return (
    <SizeComponent
      render={({ width, height }: { width: number; height: number }) => {
        return (
          <div>
            Width: {width}
            Height: {height}
          </div>
        );
      }}
    />
  );
};

export default PatterRenderProp;
