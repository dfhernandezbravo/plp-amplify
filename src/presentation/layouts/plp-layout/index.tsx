import ThemeProvider from '@components/atoms/theme-provider';
import { useEvents } from '@hooks/use-events';
import DeviceProvider from '@presentation/providers/device';
import QueryProvider from '@presentation/providers/query-provider';
import PlpProvider from '@store/plp-provider';
import StoreProvider from '@store/provider';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ANALYTICS_EVENTS } from 'src/application/infra/events/analytics.';

interface Props {
  children: React.ReactNode;
}

const PLPLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { dispatchEvent } = useEvents();

  useEffect(() => {
    const details = {
      event: 'page_view',
      pageTitle: 'PLP Category',
      page: router.asPath,
      pageLocation: window.location.href,
    };

    const plpType = router.asPath.split('/')[1] || '';

    switch (plpType) {
      case 'search':
        details.pageTitle = 'PLP Search';
        break;
      case 'cluster':
        details.pageTitle = 'PLP Coleccion';
        break;

      case 'eventos':
        details.pageTitle = 'PLP Eventos';
        break;
      default:
        break;
    }

    dispatchEvent({
      name: ANALYTICS_EVENTS.Analytics,
      detail: { ...details },
    });
  }, []);

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
