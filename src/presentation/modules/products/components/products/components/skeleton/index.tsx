import Skeleton from '@components/atoms/skeleton';
import { useAppSelector } from '@store/hooks';
import { ProductsContainer } from '../../styles';

const ProductsSkeleton = () => {
  const { layout } = useAppSelector((state) => state.products);

  return (
    <ProductsContainer $layout={layout}>
      {new Array(12).fill(null).map((_, index) => (
        <Skeleton
          height="488px"
          width="220px"
          radius="8px"
          animationtype="pulse"
          key={index}
        />
      ))}
    </ProductsContainer>
  );
};

export default ProductsSkeleton;
