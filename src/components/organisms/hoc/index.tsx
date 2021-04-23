// Libs
import React from 'react';

// Type
import whitHocCount, { whitSizeWindows } from './HocCounter';

type EncProps = {
  count: number;
  add: () => void;
};

type EncSizeWindowProps = {
  width: number;
  height: number;
};

const EncapsulatedS = ({ count, add }: EncProps) => {
  return (
    <div>
      Number: {count}
      <button onClick={add}>click</button>
    </div>
  );
};

const EncapsulatedSizeWindows = ({ width, height }: EncSizeWindowProps) => {
  return (
    <div>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};

export const WHC = whitHocCount({ Comp: EncapsulatedS }, { initialNum: 500, saltCount: 10 });
export default whitSizeWindows(EncapsulatedSizeWindows);
