import ThemeProvider from '@components/atoms/theme-provider';
import UserNavigationProvider from '@modules/plp-standard/components/products/providers/UserNavigationProvider';
import QueryProvider from '@presentation/providers/query-provider';
import StoreProvider from '@store/provider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PLPLayout: React.FC<Props> = ({ children }) => {
  return (
    <QueryProvider>
      <StoreProvider>
        <UserNavigationProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </UserNavigationProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPLayout;
