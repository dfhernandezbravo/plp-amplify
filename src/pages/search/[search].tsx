import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getSearch from '@use-cases/product/get-search';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useQuery } from 'react-query';

interface SearchQueryParams extends ParsedUrlQuery {
  search: string;
  filter: string;
  page: string;
}

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { search, filter, page } = query as SearchQueryParams;
  const { count, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
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
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (!searchResponse || searchResponse.recordsFiltered === 0) {
    return <SearchNotFound searchTerm={search} />;
  }

  if (searchResponse) {
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
