// Libs
import React from 'react';

// Components
import GrandchildComponent from './GrandchildComponent';

// Styles
import Styles from './index.module.css';

const SonComponent = () => {
  return (
    <div className={Styles.container}>
      Son
      <GrandchildComponent />
    </div>
  );
};

export default SonComponent;
