// Libs
import React from 'react';

// Components
import GreatGreatGrandsonComponent from './GreatGreatGrandsonComponent';

// Styles
import Styles from './index.module.css';

const GreatGrandsonComponents = () => {
  return (
    <div className={Styles.container}>
      Great-Grandson
      <GreatGreatGrandsonComponent />
    </div>
  );
};

export default GreatGrandsonComponents;
