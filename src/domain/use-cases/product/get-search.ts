import PlpQueryParams from '@entities/plp-query-params';
import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import productRespository from '@repositories/products';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import { useDispatchProductEvent } from './dispatch-product-event';
import { useMutation } from 'react-query';

export default async function getSearch(request: SearchByCategoriesRequest) {
  try {
    const { data } = await productRespository().getSearch(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}

export const useGetSearch = () => {
  const { query } = useRouter();
  const { filter, page } = query as PlpQueryParams;
  const { count, sort } = useAppSelector((state) => state.products);

  const { dispatchViewItemListEvent } = useDispatchProductEvent();

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((query: string) =>
    getSearch({
      query,
      count,
      page: page || '1',
      sort,
      filter,
    }),
  );

  if (products && products.recordsFiltered > 0) {
    dispatchViewItemListEvent(products.productList);
  }

  const getProductsBySearch = (search: string) => mutate(search);

  return {
    products,
    isErrorProducts,
    isLoadingProducts,
    getProductsBySearch,
  };
};
