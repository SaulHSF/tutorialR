// Libs
import React, { CSSProperties } from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';

// Styles

// Props
type TransitionCssProps = {
  title?: string;
};

const TransitionCss = ({ title }: TransitionCssProps) => {
  const styles: CSSProperties = {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: 'red',
    /**
     * el primer valor es la propiedad que tiene el cambio o las transformación
     * el segundo valor es en segundos o milésimas de segundo (1.5s o 1500ms),
     * el  tercer valor es la función de aceleración y desaceleración.
     * el cuarto valor es el tiempo o delay antes de iniciar el cambio.
     */
    //transition: 'all 1.5s ease 1s',
    /**
     * las propiedades que serán escuchadas
     */
    transitionProperty: 'all',
    /**
     * tiempo de duración de de la transición
     */
    transitionDuration: '2s',
    /**
     * retraso de la animación
     */
    transitionDelay: '1s',
    /**
     * función de aceleración y desaceleración
     */
    transitionTimingFunction: 'ease'
  };

  return (
    <HeaderPartModule {...{ title }}>
      <div style={styles}></div>
    </HeaderPartModule>
  );
};

export default TransitionCss;
