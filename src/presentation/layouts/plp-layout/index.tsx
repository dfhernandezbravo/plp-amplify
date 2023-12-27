import { ThemeProvider } from '@cencosud-ds/easy-design-system';
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
        <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPLayout;