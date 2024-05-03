import { OptionsSelect } from '@ccom-easy-design-system/atoms.select/dist/types';
import { CSSProperties } from 'react';
import { ActionMeta } from 'react-select';

export type OnChangeReactSelect = (
  option: OptionsSelect | null,
  actionMeta: ActionMeta<OptionsSelect>,
) => void;

export type Props = {
  id: string;
  name: string;
  label?: string;
  prefix?: string;
  options: OptionsSelect[];
  className?: string;
  required?: boolean;
  defaultValue?: OptionsSelect;
  style?: CSSProperties;
  clearable?: boolean;
  searchable?: boolean;
  isMobile?: boolean;
  onChange?: (option: OptionsSelect) => void;
  onBlur?: () => void;
};
