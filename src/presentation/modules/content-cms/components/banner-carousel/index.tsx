import Banner from '@components/organisms/Banner/Banner';
import { Content } from '@entities/cms';
import React from 'react';
import { BannerCarouselContainer } from './styles';

const BannerCarousel = (content: Content) => {
  const { items } = content;

  if (!items) return null;

  return (
    <BannerCarouselContainer>
      <Banner items={items} />
    </BannerCarouselContainer>
  );
};

export default BannerCarousel;
