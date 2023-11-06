import { CSSProperties } from 'react';

// Icons list
import Icons from '../../../assets/icons/list.json';

export type Icon = keyof typeof Icons;

export type Props = {
  name: Icon;
  id: string;
  color?: string;
  size?: string;
  style?: CSSProperties;
};
