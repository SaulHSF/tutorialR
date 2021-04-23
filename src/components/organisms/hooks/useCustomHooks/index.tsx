// Libs
import React, { useState } from 'react';

// Components
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Hooks
import useSize from './useSize';
import useFetch from './UseFetch';

// Constanst
import { URL_JSONPLACEHOLDER } from '../../../../config';
// Props
type HookUseCustomProps = {
  title?: string;
};

const HookUseCustom = ({ title }: HookUseCustomProps) => {
  const [clicks, setClicks] = useState(1);

  const { width, heigth } = useSize();
  const [users, isLoading] = useFetch({ url: URL_JSONPLACEHOLDER + 'users' });
  const [user, isLoadingUser] = useFetch({ url: `${URL_JSONPLACEHOLDER}users/${clicks}` });

  return (
    <HeaderPartModule {...{ title }}>
      <p>En este componente vera las diferentes posibilidades de los hook custom</p>
      <h4>useSize</h4>
      height: {heigth} width: {width}
      <h4>useFetch</h4>
      {isLoading && <h5>Cargando...</h5>}
      {users && (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setClicks(clicks + 1)}>clicks({clicks})</button>
      {isLoadingUser && <h5>Cargando...</h5>}
      {user && (
        <p>
          {user.name} - {user.phone}
        </p>
      )}
    </HeaderPartModule>
  );
};

export default HookUseCustom;
