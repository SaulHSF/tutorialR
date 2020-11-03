// Libs
import React, { useContext } from 'react';
// Context
import { ExampleUseContext } from './index';
// Props
interface GrandChildContextProps {
  title?: string;
  type?: number;
}

const GrandChildContext = ({ title, type = 1 }: GrandChildContextProps) => {
  const { click, onClick } = useContext(ExampleUseContext);
  switch (type) {
    case 1: {
      return (
        <div>
          <h1>
            New Component {title} : {click || 0}
          </h1>
          <button onClick={onClick}>onClick</button>
        </div>
      );
    }
    default: {
      return (
        <ExampleUseContext.Consumer>
          {value => (
            <div>
              <h1>
                New Component {title} {value.click}
              </h1>
              <button onClick={value.onClick}>onClick</button>
            </div>
          )}
        </ExampleUseContext.Consumer>
      );
    }
  }
};

export default GrandChildContext;
