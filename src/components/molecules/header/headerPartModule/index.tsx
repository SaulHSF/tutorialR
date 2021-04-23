// Libs
import React, { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

// Props
type HeaderPartModuleProps = {
  title?: string;
  children?: ReactNode;
  isLoading?: boolean;
};

const HeaderPartModule = ({ title, isLoading, children }: HeaderPartModuleProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {isLoading && <h4>Cargando....</h4>}
      {children}
    </div>
  );
};

export default HeaderPartModule;
