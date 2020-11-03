// Libs
import React, { useEffect } from 'react';
import PubSub from 'pubsub-js';

// Components
import SonComponent from './SonComponent';

// Styles
import Styles from './index.module.css';

const FatherComponent = () => {
  const handleClick = () => {
    alert('lanzado desde el padre');
  };

  useEffect(() => {
    PubSub.publish('father', { message: 'estoy ejecutándose desde el padre de tu padre de tu padre' });
    // return () => {
    // }
  }, []);

  return (
    <div className={Styles.container}>
      Father <button onClick={handleClick}>Send</button>
      <SonComponent />
    </div>
  );
};

export default FatherComponent;
