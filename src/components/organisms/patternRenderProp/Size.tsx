// Libs
import React, { useState, useEffect, ReactNode } from 'react';

// Props
type SizeComponentProps = {
  render: (data: { width: number; height: number }) => ReactNode;
};

const SizeComponent = ({ render }: SizeComponentProps) => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleSize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // console.log('componentUnmount');
    window.addEventListener('resize', handleSize);
    return () => {
      // console.log('componentWillMount');
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return <div>{render({ width: size.width, height: size.height })}</div>;
};

export default SizeComponent;
