// Libs
import React from 'react';

// Component
import HeaderPartModule from '../../molecules/header/headerPartModule';
import Counter from './counter';
import Title from './Title';
import Button from './Button';

// Props
type ChildrenProps = {
  title?: string;
};

const Children = ({ title }: ChildrenProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <p>uso del children de forma avanzada, y uso del patron con composicion implicita</p>
      <Counter>
        <Title />
        <Title>
          {(clicks: number) => {
            return (
              <div>
                <span>{clicks}</span>
              </div>
            );
          }}
        </Title>
        <Button />
        <Button type='decrement' />
      </Counter>
    </HeaderPartModule>
  );
};

export default Children;
