import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';
import { useMutation } from 'react-query';

async function getSearchByCategories(request: SearchByCategoriesRequest) {
  try {
    const { data } = await productRespository().getSearchByCategories(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}

export const useGetProductsByCategories = () => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((request: SearchByCategoriesRequest) =>
    getSearchByCategories(request),
  );

  const getProductsByCategories = (request: SearchByCategoriesRequest) =>
    mutate(request);

  return {
    products,
    isLoadingProducts,
    isErrorProducts,
    getProductsByCategories,
  };
};
