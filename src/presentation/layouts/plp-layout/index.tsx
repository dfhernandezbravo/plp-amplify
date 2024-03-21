import ThemeProvider from '@components/atoms/theme-provider';
import QueryProvider from '@presentation/providers/query-provider';
import PlpProvider from '@store/plp-provider';
import StoreProvider from '@store/provider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PLPLayout: React.FC<Props> = ({ children }) => {
  return (
    <QueryProvider>
      <StoreProvider>
        <PlpProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PlpProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPLayout;
