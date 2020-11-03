// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import styles from './index.module.css';

const Modal = () => {
  const elemModalRoot = document.getElementById('modal-root');
  if (elemModalRoot) {
    return ReactDOM.createPortal(
      <div className={styles['container-modal']}>
        <div style={{ alignSelf: 'center', backgroundColor: 'blue' }}>
          <p style={{ alignSelf: 'center' }}>Portal</p>
        </div>
      </div>,
      elemModalRoot
    );
  } else {
    return null;
  }
};

export default Modal;
