import { Content } from '@entities/cms';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getSearchByCategories from '@use-cases/product/get-search-by-categories';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import PlpQueryParams from './types/plp-query-params';
import PLPCMS from './variants/plp-cms';
import PLPDefault from './variants/plp-default';
import SearchSkeleton from './components/search-skeleton';

interface Props {
  contentCMS: Content[] | null;
}

const PLPStandardContainer: React.FC<Props> = ({ contentCMS }) => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { query } = useRouter();
  const { category, department, product, filter } = query as PlpQueryParams;
  const urlBase = `${department}/${category}${product ? `/${product}` : ''}`;

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

  if (isLoadingProducts) return <SearchSkeleton />;

  if (contentCMS) return <PLPCMS contentCMS={contentCMS} />;

  return <PLPDefault />;
};

export default PLPStandardContainer;
