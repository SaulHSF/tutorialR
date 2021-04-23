// Libs
import React, { useLayoutEffect, useState } from 'react';

// Models
import User, { UserModel } from '../../../../models/User';

// Molecules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Services
import JsonPlaceHolderProvider from '../../../../services/api/jsonPlaceHolder';

// Props
type HookUseLayoutEffectProps = {
  title?: string;
};

const HookUseLayoutEffect = ({ title }: HookUseLayoutEffectProps) => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const { status, data } = await JsonPlaceHolderProvider.getUsers();
    console.log('data useLayoutEffect', data);
    if (status === 200) {
      setUsers(data.map((userData: UserModel) => new User(userData)));
    }
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    loadData();
  }, []);

  return (
    <HeaderPartModule {...{ title, isLoading }}>
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

export default HookUseLayoutEffect;
