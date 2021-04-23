// Libs
import { useState, useEffect, useDebugValue } from 'react';

const useSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [heigth, setHeigth] = useState(window.innerHeight);

  useDebugValue('Controla el cambio de en las dimensiones del dispositivo');

  const handleSize = () => {
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return {
    width,
    heigth
  };
};

export default useSize;
