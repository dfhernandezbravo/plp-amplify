import { ReactNode, CSSProperties } from 'react';

export type Props = {
  name: string;
  id: string;
  value: string;
  label?: string;
  checked?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
  children?: ReactNode;
  style?: CSSProperties;
};
