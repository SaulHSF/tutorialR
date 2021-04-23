// Libs
import React, { useState, ReactType, useEffect } from 'react';

// Props
type HocProps = {
  Comp: ReactType;
};

export type ConfigHoc = {
  initialNum?: number;
  saltCount?: number;
};

const whitHocCount = ({ Comp }: HocProps, { initialNum = 0, saltCount = 1 }: ConfigHoc) => {
  return () => {
    const [count, setCount] = useState(initialNum);

    const add = () => {
      setCount(count + saltCount);
    };

    return <Comp count={count} add={add} />;
  };
};

export const whitSizeWindows = (Comp: ReactType) => {
  return () => {
    const [sizeWindows, setSizeWindows] = useState({ width: window.innerWidth, height: window.innerHeight });

    const handleSize = () => {
      setSizeWindows({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    useEffect(() => {
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }, []);

    return <Comp height={sizeWindows.height} width={sizeWindows.width} />;
  };
};

export default whitHocCount;
