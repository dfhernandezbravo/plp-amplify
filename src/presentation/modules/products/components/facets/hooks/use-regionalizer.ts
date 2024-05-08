import { useEffect, useState } from 'react';
import { useEvents } from '@hooks/use-events';
import { WindowsEvents } from '@presentation/events';

type RegionEvent = {
  location: string;
  origin: string;
};

export const useRegionalizer = () => {
  const { dispatchEvent, consumeEvent, removeEventListener } = useEvents();
  const [location, setLocation] = useState<string>();

  const openRegionalizer = () => {
    dispatchEvent({ name: WindowsEvents.OPEN_LOCATION_MODAL, detail: {} });
  };

  useEffect(() => {
    consumeEvent<RegionEvent>(WindowsEvents.UPDATE_SHIPPING_CART, (event) => {
      const eventLocation = event?.location;
      setLocation(eventLocation);
      if (eventLocation) localStorage?.setItem('location', eventLocation);
    });

    return () => removeEventListener(WindowsEvents.UPDATE_SHIPPING_CART);
  }, []);

  useEffect(() => {
    const storedLocation = localStorage.getItem('location');
    if (storedLocation) setLocation(storedLocation);
  }, []);

  return { openRegionalizer, location };
};
