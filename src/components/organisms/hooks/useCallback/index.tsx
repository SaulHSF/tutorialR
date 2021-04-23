// Libs
import React, { useState, useCallback } from 'react';

// Component
import HeaderPartModule from '../../../molecules/header/headerPartModule';
import Button from './Button';

// Props
type HookUseCallbackProps = {
  title?: string;
};

const HookUseCallback = ({ title }: HookUseCallbackProps) => {
  const [clicks, setClicks] = useState(0);
  const [clicksB, setClicksB] = useState(0);

  const handleA = useCallback(() => {
    setClicks(clicksPrev => clicksPrev + 1);
    // en el array se pasan las dependencias que fuerzan la actualizacion del
    // hook
  }, []);

  const handleB = useCallback(() => {
    setClicksB(clicksPrev => clicksPrev + clicks);
    // en el array se pasan las dependencias que fuerzan la actualizacion del
    // hook
  }, [clicks]);

  return (
    <HeaderPartModule {...{ title }}>
      <p>
        Se puede usar el useCallback con el React.memo() para mejorar el rendimiento de la APP teniendo.usar de forma precavida (usar solo
        en compoentes que presente problemas de rendimiento)
      </p>
      <Button callback={handleA}>Increment</Button>
      <Button callback={handleB}>Increment</Button>
      <h4>
        a: {clicks} b: {clicksB}
      </h4>
    </HeaderPartModule>
  );
};

export default HookUseCallback;
