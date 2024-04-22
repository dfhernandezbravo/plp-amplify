import { Layout } from '@components/atoms/layout';
import Skeleton from '@components/atoms/skeleton';
import {
  ContainerDesktop,
  FacetSkeleton,
  OrderSkeleton,
  ProductsSkeleton,
  SearchSkeletonContainer,
} from './styles';

const SearchSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <ContainerDesktop>
          <SearchSkeletonContainer>
            <FacetSkeleton>
              <Skeleton height={'100%'} />
            </FacetSkeleton>
            <OrderSkeleton>
              <Skeleton height={'100%'} />
            </OrderSkeleton>
            <ProductsSkeleton>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </ProductsSkeleton>
          </SearchSkeletonContainer>
        </ContainerDesktop>
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <OrderSkeleton>
          <Skeleton height={'100%'} />
        </OrderSkeleton>
        <ProductsSkeleton>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </ProductsSkeleton>
      </Layout>
    </>
  );
};

export default SearchSkeleton;
