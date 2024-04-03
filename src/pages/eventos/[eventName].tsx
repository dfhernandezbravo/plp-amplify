import { useEffect, useState } from 'react';
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
import AnalyticsEventsLayout from '@presentation/layouts/analytics-events-layout';

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
  const [base, setBase] = useState<Content>();
  const [existCluster, setExistCluster] = useState(false);
  const componentBaseName = 'config-base-plp';

  useEffect(() => {
    if (contentCMS) {
      const baseConfig = contentCMS?.find(
        (e) => e?.component === componentBaseName,
      );
      baseConfig && setBase(baseConfig);
      if (base?.clusterId !== '') setExistCluster(true);
      else setExistCluster(false);
    }
  }, [contentCMS?.length > 0]);

  const {
    data: searchResponse,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery(
    [
      'get-search-by-cluster',
      { clusterId: base?.clusterId },
      count,
      page,
      sort,
      filter,
    ],
    () =>
      getByClusterId({
        clusterId: base?.clusterId,
        count,
        page,
        sort,
        filter,
      }),
    {
      enabled: existCluster && !!count,
      cacheTime: 0,
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (isError) return <SearchNotFound view="plp-not-found" type="events" />;

  if (searchResponse) {
    if (searchResponse.recordsFiltered === 0) {
      return <SearchNotFound view="plp-not-found" type="events" />;
    }

    dispatch(setSearchState(searchResponse));
  }

  return contentCMS?.length ? (
    <PLPCMS contentCMS={contentCMS} />
  ) : (
    <SearchNotFound view="plp-not-found" type="events" />
  );
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
      <AnalyticsEventsLayout contentCMS={contentCMS}>
        <PLPContent contentCMS={contentCMS} />
      </AnalyticsEventsLayout>
    </PLPLayout>
  );
};

export default EventsPLPPage;
