// Libs
import React, { useState } from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';

// Styles
import styles from './TransitionCSSWithClass.module.css';
//import './TransitionCSS.module.css';

interface TransitionCSSWithClassProps {
  title: string;
}

const TransitionCSSWithClass = ({ title }: TransitionCSSWithClassProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderPartModule {...{ title }}>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? 'inactivo' : 'active'}</button>
      <div className={isActive ? `${styles.defaultTestCSS} ${styles.activeTestCSS}` : `${styles.defaultTestCSS} ${styles.hideTestCSS}`}>
        <h1>
          Transiciones CSS en Clase
          <span role='img' aria-label='fire'>
            fire
          </span>
        </h1>
      </div>
    </HeaderPartModule>
  );
};

export default TransitionCSSWithClass;
