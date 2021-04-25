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

const SearchImage = () => {
  const [photos, setPhotos] = useState<Array<DataPhoto>>([]);
  const [setTimeOut, setSetTimeOut] = useState();

  const searchPhotos = async (data: React.ChangeEvent<HTMLInputElement>) => {
    const value = data.currentTarget.value;
    if (value.length > 3) {
      clearTimeout(setTimeOut);
      setSetTimeOut(
        setTimeout(async () => {
          const { data, status } = await PexelsProvider.searchPhoto(value);
          if (status === 200) {
            if (data.photos.length > 0) {
              setPhotos(
                data.photos.map((element: { id: number; photographer: string; src: { medium: string } }) => ({
                  photo: element.src.medium,
                  nameAuthor: element.photographer,
                  id: element.id
                }))
              );
            } else {
              setPhotos([]);
            }
          }
          // console.log(data, status);
        }, 500)
      );
    }
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
