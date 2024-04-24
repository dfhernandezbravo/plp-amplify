import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';
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
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((request: SearchByCategoriesRequest) =>
    getByClusterId(request),
  );

  const getProductsByCluster = (request: SearchByCategoriesRequest) =>
    mutate(request);

  return {
    products,
    isLoadingProducts,
    isErrorProducts,
    getProductsByCluster,
  };
};
