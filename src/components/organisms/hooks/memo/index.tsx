// Libs
import React, { ChangeEvent, useState } from 'react';

// Component
import HeaderPartModule from '../../../molecules/header/headerPartModule';
import Count from './Count';
import Title from './Title';
import TitleNested from './TitleNested';

// Props
type MemoProps = {
  title?: string;
};

const Memo = ({ title }: MemoProps) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <HeaderPartModule {...{ title }}>
      <p>
        es usado para memorizar un componente y si este mismo no cambian sus props no se renderiza de nuevo Apartir de la version{' '}
        <strong>16.6</strong>
        por defecto solo busca y compara los cambios en el primer nivel, ya que si se pasan objetos a las props siempre se va a actualizar
        pero se puede programar el algoritmo que diferencia los estados previos y siguientes.
      </p>
      <input type='text' onChange={handleInput} />
      <button onClick={handleClick}>clicks</button>
      <Count {...{ count }} />
      <Title title={text} />
      <TitleNested info={{ title: text }} />
    </HeaderPartModule>
  );
};

export default Memo;
