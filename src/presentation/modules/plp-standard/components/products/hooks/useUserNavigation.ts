import { useContext } from 'react';
import UserNavigationContext from '../context/userNavigationContext';

export const useUserNavigation = () => {
  const context = useContext(UserNavigationContext);
  if (context === undefined) {
    throw new Error(
      'useUserNavigation must be used within a UserNavigationProvider',
    );
  }
  return context;
};
