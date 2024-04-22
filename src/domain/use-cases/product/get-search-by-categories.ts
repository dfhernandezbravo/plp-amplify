import { SearchByCategoriesRequest } from '@entities/product/repository/product-repository.types';
import PlpQueryParams from '@entities/plp-query-params';
import productRespository from '@repositories/products';
import { useAppSelector } from '@store/hooks';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

type QuerySearch = {
  query: string;
};

async function getSearchByCategories(request: SearchByCategoriesRequest) {
  try {
    const { data } = await productRespository().getSearchByCategories(request);
    return data;
  } catch (error) {
    throw new Error('Error');
  }
}

export const useGetProductsByCategories = () => {
  const { count, sort } = useAppSelector((state) => state.products);
  const { query } = useRouter();
  const { filter, page } = query as PlpQueryParams;

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    mutate,
  } = useMutation((categories: string) =>
    getSearchByCategories({
      categories,
      count,
      page: page || '1',
      sort,
      filter,
    }),
  );

  const getProductsByCategories = ({ query }: QuerySearch) => mutate(query);

  return {
    products,
    isLoadingProducts,
    isErrorProducts,
    getProductsByCategories,
  };
};
