import { ProductPLP } from '@store/slices/products';
import { useRouter } from 'next/router';
import ProductCard from '../product-card';
import Swiper, { BreakPoints } from '../swiper';
import { CarouselContainer } from './styles';
import Image from 'next/image';

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

  const handleClickCard = (product: ProductPLP, id: string | null) => {
    let url = `/${product.linkText}/p`;
    if (id) url += `?skuId=${id}`;
    router.push(url);
  };

  const renderImage = (imageUrl: string, product: ProductPLP) => {
    return (
      <Image
        src={imageUrl}
        width={718}
        height={575}
        alt={product.productName}
      />
    );
  };

  const renderItem = (item: ProductPLP) => (
    <ProductCard
      product={item}
      onClickCard={(variantId: string | null) =>
        handleClickCard(item, variantId)
      }
      layout="grid"
      renderImage={(imageUrl: string) => renderImage(imageUrl, item)}
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
