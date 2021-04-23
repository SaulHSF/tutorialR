// Libs
import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';

// Props
type FancyInputProps = {
  name?: string;
};

const FancyInput = forwardRef(({ name }: FancyInputProps, ref) => {
  const [text, setText] = useState('***');
  const entrada = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    dispatchAler: () => {
      alert('!!! Hey !!!!');
    },
    setParragraph: (message: string) => {
      setText(message);
    },
    focusInput: () => {
      if (entrada && entrada.current) {
        entrada.current.focus();
      }
    }
  }));

  return (
    <div>
      <p>{name}</p>
      <p>{text}</p>
      <input type='text' ref={entrada} />
    </div>
  );
});

export default FancyInput;
