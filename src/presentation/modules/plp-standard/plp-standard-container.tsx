import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import getSearchByCategories from '@use-cases/product/get-search-by-categories';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';
import PLPCMS from './variants/plp-cms';
import PLPDefault from './variants/plp-default';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const PLPStandardContainer = () => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { query, asPath } = useRouter();
  const { category } = query as PageUrlQuery;

  const { data: contentCMS, isLoading: isLoadingPage } = useQuery(
    ['get-content-cms', category],
    () => getContentViewCms(category),
    {
      enabled: !!category,
      retry: 2,
    },
  );

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-content-cms', asPath, count, page, sort],
    () =>
      getSearchByCategories({
        categories: asPath.replace('/', ''),
        count,
        page,
        sort,
      }),
    {
      enabled: !!asPath,
    },
  );

  if (searchResponse) dispatch(setSearchState(searchResponse));

  if (isLoadingPage || isLoadingProducts) return <div>Loading</div>;

  if (!contentCMS) return <PLPDefault />;

  return <PLPCMS contentCMS={contentCMS} />;
};

export default PLPStandardContainer;
