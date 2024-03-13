import React, { createContext } from 'react';

interface UserNavigationContextProps {
  routesNavigated: string[];
  setRoutesNavigated: React.Dispatch<React.SetStateAction<string[]>>;
}

const UserNavigationContext = createContext<UserNavigationContextProps>({
  routesNavigated: [],
  setRoutesNavigated: () => {},
});

export default UserNavigationContext;
