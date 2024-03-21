import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import getSearch from '@use-cases/product/get-search';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

interface SearchQueryParams extends ParsedUrlQuery {
  search: string;
  filter: string;
  page: string;
}

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { search, filter, page } = query as SearchQueryParams;
  const { count, sort, products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { dispatchViewItemListEvent } = useDispatchProductEvent();

  useEffect(() => {
    if (products.length > 0) {
      dispatchViewItemListEvent(products);
    }
  }, [products]);

  const {
    data: searchResponse,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery(
    ['get-search', search, count, page, sort, filter],
    () =>
      getSearch({
        query: search,
        count,
        page,
        sort,
        filter,
      }),
    {
      enabled: !!search,
      cacheTime: 0,
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (isError) {
    return (
      <SearchNotFound
        title={`Sin resultados de búsqueda para "${search}"`}
        view="search-not-found"
      />
    );
  }

  if (searchResponse) {
    if (searchResponse.recordsFiltered === 0) {
      return (
        <SearchNotFound
          title={`Sin resultados de búsqueda para "${search}"`}
          view="search-not-found"
        />
      );
    }
    dispatch(setSearchState(searchResponse));
  }

  return <PLPDefault />;
};

const SearchPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default SearchPLPPage;
