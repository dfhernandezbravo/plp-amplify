import React from 'react';
import { SelectProps } from '@ccom-easy-design-system/atoms.select/dist/types';
import dynamic from 'next/dynamic';

const SelectBit = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.select').then(
      (module) => module.Select,
    ),
  { ssr: false },
);

const Select: React.FC<SelectProps> = (props) => {
  return <SelectBit {...props} />;
};

export default Select;
