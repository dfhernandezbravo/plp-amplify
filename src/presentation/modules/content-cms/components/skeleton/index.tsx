import React from 'react';
import { ButtonsSkeleton, CMSSkeletonContainer } from './styles';
import Skeleton from '@components/atoms/skeleton';

const CMSSkeleton = () => {
  return (
    <CMSSkeletonContainer>
      <Skeleton height="80px" width="100%" animationtype="pulse" radius="8px" />
      <Skeleton
        height="200px"
        width="100%"
        animationtype="pulse"
        radius="8px"
      />
      <ButtonsSkeleton>
        {new Array(4).fill(null).map((_, index) => (
          <Skeleton
            key={index}
            height="120px"
            width="120px"
            animationtype="pulse"
            radius="50%"
          />
        ))}
      </ButtonsSkeleton>
    </CMSSkeletonContainer>
  );
};

export default CMSSkeleton;
