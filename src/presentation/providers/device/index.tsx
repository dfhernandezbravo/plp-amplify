import { useAppDispatch } from '@store/hooks';
import { setDevice } from '@store/slices/device';
import React, { useEffect } from 'react';
import { EVENTS } from 'src/application/infra/events';
import { DEVICE_EVENTS } from 'src/application/infra/events/device';
interface Props {
  children: React.ReactNode;
}
const DeviceProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const reciveMessage = (event: Event) => {
    const customEvent = event as CustomEvent;
    dispatch(setDevice(customEvent.detail));
    event.stopPropagation();
  };
  useEffect(() => {
    document.addEventListener(DEVICE_EVENTS.GetDevice, reciveMessage);

    return () => {
      document.removeEventListener(DEVICE_EVENTS.GetDevice, reciveMessage);
    };
  }, []);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent(DEVICE_EVENTS.DispatchGetDevice, {
        detail: { origin: EVENTS.MicroName },
      }),
    );
    window.dispatchEvent(
      new CustomEvent(DEVICE_EVENTS.DispatchGetDevice, {
        detail: { origin: EVENTS.MicroName },
      }),
    );
  }, []);

  return <>{children}</>;
};

export default DeviceProvider;
