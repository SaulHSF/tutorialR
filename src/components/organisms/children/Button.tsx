// Libs
import React from 'react';

// Props
type ButtonProps = {
  increment?: () => void;
  decrement?: () => void;
  type?: 'increment' | 'decrement';
};

const Button = ({ increment, decrement, type = 'increment' }: ButtonProps) => {
  return <button onClick={type === 'increment' ? increment : decrement}>{type === 'increment' ? 'increment' : 'decrement'}</button>;
};

export default Button;
