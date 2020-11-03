// Libs
import React, { useState } from 'react';

// Providers
import OMBDProvider from 'services/api/OMBD';

// Styles
import styles from 'components/organisms/SearchFilms/index.module.css';

const SearchFilms = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const onSearch = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    if (event.target) {
      const value: string = event.target[0].value;
      try {
        const { data, status } = await OMBDProvider.searchFilms(value);
        console.log({ data, status });
        if (status === 200) {
          setResult(data);
        }
        setLoading(false);
      } catch (error) {
        console.log({ error });
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>buscador de Películas</h1>
      <form onSubmit={onSearch}>
        <input type='text' />
        <button>buscar</button>
      </form>
      {result && (
        <div className={styles.images}>
          <div className={styles.card}>
            <img src={result.Poster} alt='Card' className={styles.image} />
            <div className={styles.footer}>
              <div>{result.Title}</div>
              <div>{result.Plot}</div>
            </div>
          </div>
        </div>
      )}
      {!result && <div>No hay resultados</div>}
      {loading && <div>Cargando...</div>}
    </div>
  );
};

export default SearchFilms;
