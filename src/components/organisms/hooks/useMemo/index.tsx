// Libs
import React, { useMemo, useState } from 'react';

// Component
import HeaderPartModule from '../../../molecules/header/headerPartModule';
// Props
type HookUseMemoProps = {
  title?: string;
};

const ListElement = ({ list, log }: { list: Array<number | string>; log: string }) => {
  console.log('%crender <ListElement /> ' + log, 'color: blue');

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const HookUseMemo = ({ title }: HookUseMemoProps) => {
  const [clicks, setClicks] = useState(0);

  const memoList = useMemo(() => {
    return <ListElement list={['husky', 'dog wolf', 'pincher']} log='memory' />;
  }, []);

  return (
    <HeaderPartModule {...{ title }}>
      <p>
        el use memo se usa con el fin de memorizar algun tipo se valor que pueda afectar el rendimiento de la app, pero debe ser usado con
        mesura si no se quiere tener resultados inisperados
      </p>
      <button onClick={() => setClicks(clicks + 1)}>clicks ({clicks})</button>
      <ListElement list={[1, 2, 3, 4, 5]} log='normal' />
      {memoList}
    </HeaderPartModule>
  );
};

export default HookUseMemo;
