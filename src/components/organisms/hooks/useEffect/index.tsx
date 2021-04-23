// Libs
import React, { useState, useEffect } from 'react';

// Models
import User, { UserModel } from '../../../../models/User';

// Molecules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Services
import JsonPlaceHolderProvider from '../../../../services/api/jsonPlaceHolder';

// Props
type HookUseEffectProps = {
  title?: string;
};

const HookUseEffect = ({ title }: HookUseEffectProps) => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const { status, data } = await JsonPlaceHolderProvider.getUsers();
      console.log('data', data);
      if (status === 200) {
        setUsers(data.map((userData: UserModel) => new User(userData)));
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log('useLayoutEffect', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <HeaderPartModule {...{ title, isLoading }}>
      {!isLoading && !users && <button onClick={loadData}>reload</button>}
      {users && (
        <ul>
          {users.map((user: User) => (
            <li key={user.data.name}>{user.data.name}</li>
          ))}
        </ul>
      )}
    </HeaderPartModule>
  );
};

export default HookUseEffect;
