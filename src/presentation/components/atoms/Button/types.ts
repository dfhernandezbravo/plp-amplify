import { ReactNode, CSSProperties } from 'react';

export type Props = {
  name: string;
  label?: string;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
};
