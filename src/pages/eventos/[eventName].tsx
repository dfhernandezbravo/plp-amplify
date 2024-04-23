import PlpQueryParams from '@entities/plp-query-params';
import ContentCMS from '@modules/content-cms';
import Products from '@modules/products';
import SearchNotFound from '@modules/search-not-found';
import PLPContext from '@presentation/context/plp-context';
import AnalyticsEventsLayout from '@presentation/layouts/analytics-events-layout';
import PLPLayout from '@presentation/layouts/plp-layout';
import { PageContainer } from '@presentation/layouts/plp-layout/styles';
import ShoppingCartEventLayout from '@presentation/layouts/shopping-cart-events-layout';
import { useGetContentViewCms } from '@use-cases/cms/get-content-view';
import { useGetByCluster } from '@use-cases/product/get-cluster-id';
import { getConfigBase } from '@use-cases/product/get-config-base';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { eventName, sort, filter, page, count } = query as PlpQueryParams;
  const [clusterId, setClusterId] = useState<string | undefined>();

  const { isLoadingProducts, isErrorProducts, products, getProductsByCluster } =
    useGetByCluster();

  const { isLoadingCMS, contentCMS, isErrorCMS } = useGetContentViewCms({
    viewName: eventName,
  });

  useEffect(() => {
    if (contentCMS) {
      const configBase = getConfigBase(contentCMS);

      if (configBase) {
        setClusterId(configBase.clusterId);
      }
    }
  }, [contentCMS]);

  useEffect(() => {
    if (clusterId)
      getProductsByCluster({ clusterId, sort, filter, page, count });
  }, [clusterId, sort, filter, page, count]);

  if (isErrorCMS || isErrorProducts) {
    return <SearchNotFound view="plp-not-found" type="cluster" />;
  }

  return (
    <PLPContext.Provider
      value={{
        isLoadingProducts,
        facets: products?.facets || [],
        products: products?.productList || [],
        recordsFiltered: products?.recordsFiltered || 0,
        isLoadingCMS,
        contentCMS,
        getProductsByCluster,
      }}
    >
      <AnalyticsEventsLayout>
        <ShoppingCartEventLayout
          refreshProducts={() =>
            getProductsByCluster({ clusterId, sort, filter, page, count })
          }
        >
          <PageContainer>
            <ContentCMS />
            <Products />
          </PageContainer>
        </ShoppingCartEventLayout>
      </AnalyticsEventsLayout>
    </PLPContext.Provider>
  );
};

const EventsPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default EventsPLPPage;
