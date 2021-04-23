// Libs
import React, { CSSProperties, useState } from 'react';

// Component
import Title from './Title';
import Button from './Button';

// Props
type CounterProps = {
  children?: any;
};

const Counter = ({ children }: CounterProps) => {
  const [clicks, setClicks] = useState(0);

  const increment = () => setClicks(clicks + 1);
  const decrement = () => setClicks(clicks - 1);

  if (!children) {
    const styles: CSSProperties = {
      background: 'tomato',
      borderRadius: '0.2em',
      padding: '0.3em 1em',
      color: '#fff'
    };
    return <div style={styles}>No hay un hijo porfavor pase alguna cosa {'<Button />'}</div>;
  }

  const _children = React.Children.map(children, child => {
    const props: { clicks?: number; increment?: () => void; decrement?: () => void } = {};

    if (child.type === Title) {
      props.clicks = clicks;
    } else if (child.type === Button) {
      console.log('gge' + child.type);
      props.decrement = decrement;
      props.increment = increment;
    }
    return React.cloneElement(child, props);
  });

  return <div>{_children}</div>;
};

export default Counter;
