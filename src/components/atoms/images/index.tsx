// Libs
import React from 'react';

// Config
import { DataPhoto } from '../../../config';

// Styles
import styles from '../images/index.module.css';

// Props
interface ImageProps {
  data?: DataPhoto;
}

const Image = (props: ImageProps) => {
  const { data } = props;

  if (data) {
    const { photo, nameAuthor } = data;
    return (
      <div className={styles.card}>
        <img src={photo} alt='Card' className={styles.image} />
        <div className={styles.footer}>
          <div>{nameAuthor}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Image;
