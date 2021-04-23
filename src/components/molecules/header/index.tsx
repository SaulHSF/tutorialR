// Libs
import React, { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

// Props
type HeaderModuleProps = {
  title?: string;
  children?: ReactNode;
};

const HeaderModule = ({ title, children }: HeaderModuleProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default HeaderModule;
