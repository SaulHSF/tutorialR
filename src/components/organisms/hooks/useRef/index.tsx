// Libs
import React, { useRef } from 'react';

// Modules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Props
type HookUseRefProps = {
  title?: string;
};

const HookUseRef = ({ title }: HookUseRefProps) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    if (refInput && refInput.current) {
      refInput.current.focus();
    }
  };

  const blur = () => {
    if (refInput && refInput.current) {
      refInput.current.blur();
    }
  };

  return (
    <HeaderPartModule {...{ title }}>
      <input ref={refInput} />
      <button onClick={() => focus()}>focus</button>
      <button onClick={() => blur()}>blur</button>
    </HeaderPartModule>
  );
};

export default HookUseRef;
