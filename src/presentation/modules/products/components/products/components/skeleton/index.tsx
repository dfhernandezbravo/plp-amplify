import Skeleton from '@components/atoms/skeleton';
import { LayoutOptions } from '@components/molecules/Display';
import { ProductsContainer } from '../../styles';

interface Props {
  layout: LayoutOptions;
}

const ProductsSkeleton = ({ layout }: Props) => {
  return (
    <ProductsContainer $layout={layout}>
      {new Array(12).fill(null).map((_, index) => (
        <Skeleton
          height={layout === 'grid' ? '488px' : '200px'}
          width={layout === 'grid' ? '220px' : '100%'}
          radius="8px"
          animationtype="pulse"
          key={index}
        />
      ))}
    </ProductsContainer>
  );
};

export default ProductsSkeleton;
