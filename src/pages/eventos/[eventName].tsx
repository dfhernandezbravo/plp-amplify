import { Content } from '@entities/cms';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import getByClusterId from '@use-cases/product/get-cluster-id';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

interface Props {
  contentCMS: Content[] | null;
}
interface PlpQueryParams extends ParsedUrlQuery {
  eventName: string;
}

const PLPContent: React.FC<Props> = ({ contentCMS }) => {
  const { count, page, sort } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const cluster = useMemo(
    () => contentCMS?.filter((item) => item.component === 'input-cluster-id'),
    [contentCMS],
  );
  const clusterId = contentCMS?.filter(
    (item) => item.component === 'input-cluster-id',
  );

  const { data: searchResponse, isLoading: isLoadingProducts } = useQuery(
    ['get-search-by-cluster', cluster, count, page, sort],
    () =>
      getByClusterId({
        clusterId: clusterId ? clusterId[0].clusterId : '',
        count,
        page,
        sort,
      }),
    {
      enabled: !!cluster && !!count && !!page && !!sort,
    },
  );

  if (searchResponse) dispatch(setSearchState(searchResponse));
  if (isLoadingProducts) return <SearchSkeleton />;

  if (contentCMS) return <PLPCMS contentCMS={contentCMS} />;

  return <PLPDefault />;
};

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { eventName } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(eventName);

  return {
    props: {
      contentCMS,
    },
  };
}) satisfies GetServerSideProps<Props>;

const EventsPLPPage = ({
  contentCMS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PLPLayout>
      <PLPContent contentCMS={contentCMS} />
    </PLPLayout>
  );
};

export default EventsPLPPage;
