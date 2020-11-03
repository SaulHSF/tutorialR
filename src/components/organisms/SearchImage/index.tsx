// libs
import React, { useState } from 'react';

// componentes
import Image from 'components/atoms/images';

// Config
import { DataPhoto } from '../../../config';

// Styles
import styles from '../../atoms/images/index.module.css';

// Services
import PexelsProvider from '../../../services/api/Pexels';

const photosDefault: Array<DataPhoto> = [];

const SearchImage = () => {
  const [photos, setPhotos] = useState(photosDefault);
  const [setTimeOut, setSetTimeOut] = useState();

  const searchPhotos = async (data: any) => {
    const value = data.currentTarget.value;
    const result: Array<DataPhoto> = [];
    clearTimeout(setTimeOut);
    setSetTimeOut(
      setTimeout(async () => {
        const { data, status } = await PexelsProvider.searchPhoto(value);
        if (status === 200) {
          if (data.photos.length > 0) {
            data.photos.forEach((element: { id: number; photographer: string; src: { medium: string } }) => {
              result.push({ photo: element.src.medium, nameAuthor: element.photographer, id: element.id });
            });
            // console.log('result', result);
            setPhotos(result);
          } else {
            setPhotos([]);
          }
        }
        // console.log(data, status);
      }, 500)
    );
  };

  return (
    <div>
      <div>
        <input onChange={searchPhotos} /> search
      </div>
      <div className={styles.images}>
        {photos.length > 0 && photos.map(photo => <Image key={photo.id} data={photo} />)}
        {photos.length === 0 && <div>No hay resultados</div>}
      </div>
    </div>
  );
};

export default SearchImage;
