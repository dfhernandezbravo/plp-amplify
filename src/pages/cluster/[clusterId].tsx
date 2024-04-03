import React from 'react';
import { useRouter } from 'next/router';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getByClusterId from '@use-cases/product/get-cluster-id';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';

interface SearchQueryParams extends ParsedUrlQuery {
  clusterId: string;
  filter: string;
  page: string;
}

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { clusterId, filter, page } = query as SearchQueryParams;
  const { count, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const {
    data: searchResponse,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery(
    ['get-search-by-cluster', clusterId, count, page, sort, filter],
    () =>
      getByClusterId({
        clusterId,
        count,
        page,
        sort,
        filter,
      }),
    {
      enabled: !!clusterId && !!count,
      cacheTime: 0,
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (isError) {
    return <SearchNotFound view="plp-not-found" type="cluster" />;
  }

  if (searchResponse) {
    if (searchResponse.recordsFiltered === 0) {
      return <SearchNotFound view="plp-not-found" type="cluster" />;
    }

    dispatch(setSearchState(searchResponse!));
  }

  return <PLPDefault />;
};

const ClusterPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default ClusterPLPPage;
