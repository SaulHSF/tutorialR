// Libs
import React, { useState } from 'react';

// Molecules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Props
type HookUseStateProps = {
  title?: string;
};

const HookUseState = ({ title }: HookUseStateProps) => {
  const [clicks, setClicks] = useState(0);
  const [iValue, setIValue] = useState('');

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIValue(e.target.value);
  };

  return (
    <HeaderPartModule {...{ title }}>
      <h4>{iValue}</h4>
      <input type='text' onChange={handleInput} />
      <button onClick={handleClick}>clicks ({clicks})</button>
    </HeaderPartModule>
  );
};

export default HookUseState;
