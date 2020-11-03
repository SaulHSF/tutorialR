// Libs
import React from 'react';

// Components
import GreatGrandsonComponents from './GreatGrandsonComponents';

// Styles
import Styles from './index.module.css';

const GrandchildComponent = () => {
  return (
    <div className={Styles.container}>
      Grandchild
      <GreatGrandsonComponents />
    </div>
  );
};

export default GrandchildComponent;
