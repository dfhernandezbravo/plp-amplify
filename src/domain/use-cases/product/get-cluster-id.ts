import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import PlpQueryParams from '@entities/plp-query-params';
import productRespository from '@repositories/products';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

export default async function getByClusterId(
  request: SearchByCategoriesRequest,
) {
  try {
    const { data } = await productRespository().getByClusterId(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}

export const useGetByCluster = () => {
  const { count, sort } = useAppSelector((state) => state.products);
  const { query } = useRouter();
  const { filter, page } = query as PlpQueryParams;

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((clusterId: string) =>
    getByClusterId({ clusterId, count, sort, filter, page: page || '1' }),
  );

  const getProductsByCluster = ({ clusterId }: { clusterId: string }) =>
    mutate(clusterId);

  return {
    products,
    isLoadingProducts,
    isErrorProducts,
    getProductsByCluster,
  };
};
