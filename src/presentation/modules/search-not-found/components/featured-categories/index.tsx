import { BreakPoints } from '@components/molecules/Carousel';
import SwiperEasy from '@components/molecules/swiper';
import { Content } from '@entities/cms';
import React from 'react';
import CategoryCard from './components/category-card';
import { FeaturedCategoriesContainer, FeaturedCategoriesTitle } from './styles';
import { useDevice } from '@cencosud-ds/easy-design-system';

const FeaturedCategories: React.FC<Content> = ({
  items,
  shape,
  itemsPerRow,
}) => {
  const { device } = useDevice();
  if (!items) return null;

  const breakpoints: BreakPoints = {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: itemsPerRow + 0.5,
      slidesPerGroup: itemsPerRow,
    },
  };

  return (
    <FeaturedCategoriesContainer>
      <FeaturedCategoriesTitle>
        Descubre nuestras categorías destacadas
      </FeaturedCategoriesTitle>

      <SwiperEasy
        items={items}
        renderItem={(item) => <CategoryCard item={item} shape={shape} />}
        isPositionAbsoluteButtons={false}
        hasPagination
        paginationStyle={'bullet'}
        breakpoints={breakpoints}
        rowsGrid={device === 'Desktop' ? 1 : 2}
        fillGrid="row"
      />
    </FeaturedCategoriesContainer>
  );
};

export default FeaturedCategories;
