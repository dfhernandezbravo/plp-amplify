import ThemeProvider from '@components/atoms/theme-provider';
import QueryProvider from '@presentation/providers/query-provider';
import PlpProvider from '@store/plp-provider';
import StoreProvider from '@store/provider';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const PLPLayout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.addEventListener('GET_DEVICE_AND_DIMENSIONS', (event) => {
      event.stopPropagation();
      console.log('PLP:', { event });
    });

    return () => {};
  }, []);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('DISPATCH_GET_DEVICE_AND_DIMENSIONS', { detail: {} }),
    );
    window.dispatchEvent(
      new CustomEvent('DISPATCH_GET_DEVICE_AND_DIMENSIONS', { detail: {} }),
    );
  }, []);

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
