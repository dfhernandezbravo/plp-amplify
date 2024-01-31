import { Content } from '@entities/cms';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import getSearchByCategories from '@use-cases/product/get-search-by-categories';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

interface Props {
  contentCMS: Content[] | null;
}

const PLPContent: React.FC<Props> = ({ contentCMS }) => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { query } = useRouter();
  const { category, department, filter, product } = query as PlpQueryParams;
  const urlBase = `${department}/${category}/${product}`;

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-search-by-product', urlBase, count, page, sort, filter],
    () =>
      getSearchByCategories({
        categories: urlBase,
        count,
        page,
        sort,
        filter,
      }),
    {
      enabled: !!department && !!category && !!product,
      cacheTime: 0,
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (!searchResponse || searchResponse.recordsFiltered === 0) {
    return <SearchNotFound view="plp-not-found" />;
  }

  dispatch(setSearchState(searchResponse));

  if (contentCMS) return <PLPCMS contentCMS={contentCMS} />;

  return <PLPDefault />;
};

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { category } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(category);
  return {
    props: {
      contentCMS,
    },
  };
}) satisfies GetServerSideProps<{ contentCMS: Content[] | null }>;

const ProductPLPPage = ({
  contentCMS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PLPLayout>
      <PLPContent contentCMS={contentCMS} />
    </PLPLayout>
  );
};

export default ProductPLPPage;
