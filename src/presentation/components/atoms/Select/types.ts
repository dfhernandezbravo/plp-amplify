import { CSSProperties } from 'react';
import { ActionMeta } from 'react-select';

export type Option = {
  value: string;
  label: string;
};

export type OnChangeReactSelect = (
  option: Option | null,
  actionMeta: ActionMeta<Option>,
) => void;

export type Props = {
  id: string;
  name: string;
  label?: string;
  options: Option[];
  className?: string;
  required?: boolean;
  defaultValue?: Option;
  style?: CSSProperties;
  onChange?: (option: Option) => void;
};
