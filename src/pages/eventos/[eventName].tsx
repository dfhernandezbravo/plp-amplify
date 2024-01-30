import { Content } from '@entities/cms';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import getByClusterId from '@use-cases/product/get-cluster-id';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';

interface Props {
  contentCMS: Content[];
}
interface PlpQueryParams extends ParsedUrlQuery {
  eventName: string;
  page: string;
  filter: string;
}

const PLPContent: React.FC<Props> = ({ contentCMS }) => {
  const { count, sort } = useAppSelector((state) => state.products);
  const { query } = useRouter();
  const { filter, page } = query as PlpQueryParams;
  const dispatch = useAppDispatch();

  const cluster = contentCMS?.find(
    (item) => item.component === 'input-cluster-id',
  );

  const clusterId = cluster?.clusterId;

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

  if (isLoadingProducts) return <SearchSkeleton />;

  if (!searchResponse || searchResponse.recordsFiltered === 0) {
    return <SearchNotFound view="plp-not-found" />;
  }

  dispatch(setSearchState(searchResponse));

  return <PLPCMS contentCMS={contentCMS} />;
};

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { eventName } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(eventName);

  if (!contentCMS) {
    return {
      props: {
        contentCMS: [],
      },
    };
  }

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
