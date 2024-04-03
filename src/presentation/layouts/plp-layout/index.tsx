import ThemeProvider from '@components/atoms/theme-provider';
import DeviceProvider from '@presentation/providers/device';
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
          <DeviceProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </DeviceProvider>
        </PlpProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPLayout;
