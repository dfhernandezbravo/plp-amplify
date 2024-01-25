import { Product, ProductCard } from '@cencosud-ds/easy-design-system';
import SwiperEasy, { BreakPoints } from '../swiper';
import { CarouselContainer } from './styles';

interface Props {
  items: Product[];
}

const ProductsCarousel = ({ items }: Props) => {
  const breakpoints: BreakPoints = {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 5.2,
      slidesPerGroup: 1,
    },
  };

  const renderItem = (item: Product) => (
    <ProductCard product={item} onClickCard={() => {}} layout="grid" />
  );

  return (
    <CarouselContainer>
      <SwiperEasy
        items={items}
        renderItem={renderItem}
        breakpoints={breakpoints}
        hasActionButton
        isPositionAbsoluteButtons={false}
        hasPagination
        paginationStyle={'bullet'}
      />
    </CarouselContainer>
  );
};

export default ProductsCarousel;
