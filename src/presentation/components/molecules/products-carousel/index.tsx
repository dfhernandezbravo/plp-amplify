import { ProductCard } from '@cencosud-ds/easy-design-system';
import { CarouselContainer } from './styles';
import { ProductPLP } from '@store/slices/products';
import { useRouter } from 'next/router';
import Swiper, { BreakPoints } from '../swiper';

interface Props {
  items: ProductPLP[];
}

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

const ProductsCarousel = ({ items }: Props) => {
  const router = useRouter();

  const handleClickCard = (product: ProductPLP) => {
    router.push(product.link || '/');
  };

  const renderItem = (item: ProductPLP) => (
    <ProductCard
      product={item}
      onClickCard={() => handleClickCard(item)}
      layout="grid"
    />
  );

  return (
    <CarouselContainer>
      <Swiper
        items={items}
        renderItem={renderItem}
        breakpoints={breakpoints}
        hasActionButton
        isPositionAbsoluteButtons={false}
        hasPagination
        paginationStyle="bullet"
      />
    </CarouselContainer>
  );
};

export default ProductsCarousel;
