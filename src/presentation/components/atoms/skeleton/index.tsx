import dynamic from 'next/dynamic';
import React from 'react';
import { SkeletonProps } from '@ccom-easy-design-system/atoms.skeleton/dist/types';

const SkeletonBit = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <SkeletonBit {...props} />;
};

export default Skeleton;
