import { Content } from '@entities/cms';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getByClusterId from '@use-cases/product/get-cluster-id';
import React from 'react';
import { useQuery } from 'react-query';
import SearchSkeleton from '../search-skeleton';

const InputClusterIdCMS = ({ clusterId }: Content) => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-search-by-cluster', clusterId, count, page, sort],
    () =>
      getByClusterId({
        clusterId,
        count,
        page,
        sort,
      }),
    {
      enabled: !!clusterId,
    },
  );

  if (searchResponse) dispatch(setSearchState(searchResponse));
  if (isLoadingProducts) return <SearchSkeleton />;
  return null;
};

export default InputClusterIdCMS;
