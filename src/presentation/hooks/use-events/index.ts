import { useCallback } from 'react';

export const useEvents = () => {
  const dispatchEvent = <T>(data: { name: string; detail: T }) => {
    const { name, detail } = data;
    const event = new CustomEvent(name, { detail });
    typeof window !== 'undefined' && document.dispatchEvent(event);
  };

  const consumeEvent = useCallback(
    <T>(name: string, callback: (detail: T) => void) => {
      // @ts-ignore
      document.addEventListener(name, (event: CustomEvent<T>) => {
        callback(event.detail);
      });
    },
    [],
  );
  const removeEventListener = useCallback((name: string) => {
    // @ts-ignore
    document.removeEventListener(name, undefined);
  }, []);

  return { dispatchEvent, consumeEvent, removeEventListener };
};
