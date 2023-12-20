import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import getSearchByCategories from '@use-cases/product/get-search-by-categories';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import PlpQueryParams from './types/plp-query-params';
import PLPCMS from './variants/plp-cms';
import PLPDefault from './variants/plp-default';

const PLPStandardContainer = () => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { query } = useRouter();
  const { category, department, product, filter } = query as PlpQueryParams;
  const urlBase = `${department}/${category}${product ? `/${product}` : ''}`;

  const { data: contentCMS, isLoading: isLoadingPage } = useQuery(
    ['get-content-cms', category],
    () => getContentViewCms(category),
    {
      enabled: !!category,
      retry: 2,
    },
  );

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-content-cms', urlBase, count, page, sort, filter],
    () =>
      getSearchByCategories({
        categories: urlBase,
        count,
        page,
        sort,
        filter,
      }),
    {
      enabled: !!department && !!category,
    },
  );

  if (searchResponse) dispatch(setSearchState(searchResponse));

  if (isLoadingPage || isLoadingProducts) return <div>Loading</div>;

  if (!contentCMS) return <PLPDefault />;

  return <PLPCMS contentCMS={contentCMS} />;
};

export default PLPStandardContainer;
