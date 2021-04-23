// Libs
import React, { useRef } from 'react';

// Components
import HeaderPartModule from '../../../molecules/header/headerPartModule';
import FancyInput from './FancyInput';

// Props
type HookUseImperativeHandleProps = {
  title?: string;
};

const HookUseImperativeHandle = ({ title }: HookUseImperativeHandleProps) => {
  const refFancyInput = useRef<any | undefined>();

  const handleClick = () => {
    if (refFancyInput && refFancyInput.current) {
      refFancyInput.current.setParragraph('hola mundo inperativo');
      refFancyInput.current.dispatchAler();
      refFancyInput.current.focusInput();
    }
  };

  return (
    <HeaderPartModule {...{ title }}>
      <p>Se usa para cambiar el estado de un componente desde el elemento padre</p>
      <FancyInput ref={refFancyInput} />
      <button onClick={handleClick}>dispatch</button>
    </HeaderPartModule>
  );
};

export default HookUseImperativeHandle;
