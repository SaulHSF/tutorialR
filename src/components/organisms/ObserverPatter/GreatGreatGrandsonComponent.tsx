// Libs
import React, { useEffect } from 'react';
import PubSub from 'pubsub-js';

// Styles
import Styles from './index.module.css';

const GreatGreatGrandsonComponent = () => {
  const handleClick = () => {
    alert('lanzado desde el hijo');
  };

  useEffect(() => {
    PubSub.subscribe('father', (e: any, data: any) => {
      console.log(e, data);
    });
    // return () => {
    // }
  }, []);

  return (
    <div className={Styles.container}>
      Great-Great-Grandson <button onClick={handleClick}>Send Son</button>
    </div>
  );
};

export default GreatGreatGrandsonComponent;
