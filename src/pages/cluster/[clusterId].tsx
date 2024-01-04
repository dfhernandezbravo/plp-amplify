import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getByClusterId from '@use-cases/product/get-cluster-id';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useQuery } from 'react-query';

interface SearchQueryParams extends ParsedUrlQuery {
  clusterId: string;
  filter: string;
}

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { clusterId, filter } = query as SearchQueryParams;
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
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
      enabled: !!clusterId,
    },
  );

  if (searchResponse) dispatch(setSearchState(searchResponse));

  if (isLoadingProducts) return <SearchSkeleton />;

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
