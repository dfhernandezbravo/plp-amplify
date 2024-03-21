import { Content } from '@entities/cms';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setSearchState } from '@store/slices/products';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import getByClusterId from '@use-cases/product/get-cluster-id';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getDevice } from '@hooks/use-device';

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

  const {
    data: searchResponse,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery(
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
      enabled: !!clusterId || !!contentCMS.length,
      cacheTime: 0,
    },
  );

  if (isLoadingProducts) return <SearchSkeleton />;

  if (isError) return <SearchNotFound view="plp-not-found" />;

  if (searchResponse) {
    if (searchResponse.recordsFiltered === 0) {
      return <SearchNotFound view="plp-not-found" />;
    }

    dispatch(setSearchState(searchResponse));
  }

  return contentCMS.length ? (
    <PLPCMS contentCMS={contentCMS} />
  ) : (
    <SearchNotFound view="plp-not-found" />
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
  const { dispatchViewPromotionEvent } = useDispatchProductEvent();
  useEffect(() => {
    if (!contentCMS?.length) return;
    const bannerCarousel = contentCMS?.find(
      (content) => content.component === 'banner-carousel',
    );
    if (bannerCarousel?.items) {
      for (const item of bannerCarousel.items) {
        dispatchViewPromotionEvent(item, getDevice());
      }
    }
  }, [contentCMS]);
  return (
    <PLPLayout>
      <PLPContent contentCMS={contentCMS} />
    </PLPLayout>
  );
};

export default EventsPLPPage;
