import { Content } from '@entities/cms';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
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
  const { category, department, filter } = query as PlpQueryParams;
  const urlBase = `${department}/${category}`;

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-search-by-category', urlBase, count, page, sort, filter],
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

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { category } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(category);
  return {
    props: {
      contentCMS,
    },
  };
}) satisfies GetServerSideProps<Props>;

const CategoryPLPPage = ({
  contentCMS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PLPLayout>
      <PLPContent contentCMS={contentCMS} />
    </PLPLayout>
  );
};

export default CategoryPLPPage;
