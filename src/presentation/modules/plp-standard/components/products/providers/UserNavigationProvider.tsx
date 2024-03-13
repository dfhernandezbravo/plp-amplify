import React, { useState } from 'react';
import UserNavigationContext from '../context/userNavigationContext';

export const UserNavigationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [routesNavigated, setRoutesNavigated] = useState<string[]>([]);

  return (
    <UserNavigationContext.Provider
      value={{ routesNavigated, setRoutesNavigated }}
    >
      {children}
    </UserNavigationContext.Provider>
  );
};

export default UserNavigationProvider;
