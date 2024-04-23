import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';
import { useMutation } from 'react-query';
import { useDispatchProductEvent } from './dispatch-product-event';

export default async function getSearch(request: SearchByCategoriesRequest) {
  try {
    const { data } = await productRespository().getSearch(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}

export const useGetSearch = () => {
  const { dispatchViewItemListEvent } = useDispatchProductEvent();

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((request: SearchByCategoriesRequest) => getSearch(request));

  if (products && products.recordsFiltered > 0) {
    dispatchViewItemListEvent(products.productList);
  }

  const getProductsBySearch = (request: SearchByCategoriesRequest) =>
    mutate(request);

  return {
    products,
    isErrorProducts,
    isLoadingProducts,
    getProductsBySearch,
  };
};
