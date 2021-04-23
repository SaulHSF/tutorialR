// Libs
import React, { ReactNode } from 'react';

// Props
type ButtonProps = {
  callback?: () => void;
  children?: ReactNode;
};

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ callback, children }: ButtonProps) => {
  const styles = {
    padding: '1em',
    fontSize: '20px',
    backgroundColor: getRandomColor()
  };

  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

export default Button;
