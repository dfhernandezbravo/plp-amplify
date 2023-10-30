import { ReactNode } from 'react';

export type Target = '_blank' | '_self' | '_parent' | '_top';

// Definitions
export type Props = {
  url: string;
  target?: Target;
  children: ReactNode;
};
