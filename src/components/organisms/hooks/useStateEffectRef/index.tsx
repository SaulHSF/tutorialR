// Libs
import React, { useEffect, useRef, useState, ChangeEvent } from 'react';

// Modules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Constants
import { URL_API_PEXELS, KEY_PEXELS } from '../../../../config';

// Props
type HookUseStateEffectRefProps = {
  title?: string;
};

const HookUseStateEffectRef = ({ title }: HookUseStateEffectRefProps) => {
  const entrada = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (entrada.current) {
        if (name === entrada.current.value) {
          fetch(`${URL_API_PEXELS}search?query="${name}"&per_page=5&page=1&locale='es-ES'`, { headers: { Authorization: KEY_PEXELS } })
            .then(res => res.json())
            .then(data => setProducts(data.photos));
        }
      }
    }, 600);
  }, [name]);

  return (
    <HeaderPartModule {...{ title }}>
      <input onChange={handleName} ref={entrada} />
      {products && (
        <ul>
          {products.map((producto: any) => (
            <li key={producto.id}>{producto.photographer}</li>
          ))}
        </ul>
      )}
    </HeaderPartModule>
  );
};

export default HookUseStateEffectRef;
