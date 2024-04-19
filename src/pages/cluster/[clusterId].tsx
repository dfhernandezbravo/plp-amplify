import PlpQueryParams from '@entities/plp-query-params';
import Products from '@modules/products';
import SearchNotFound from '@modules/search-not-found';
import PLPContext from '@presentation/context/plp-context';
import PLPLayout from '@presentation/layouts/plp-layout';
import { PageContainer } from '@presentation/layouts/plp-layout/styles';
import { useGetByCluster } from '@use-cases/product/get-cluster-id';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const PLPContent: React.FC = () => {
  const { query } = useRouter();
  const { clusterId } = query as PlpQueryParams;
  const { isLoadingProducts, isErrorProducts, products, getProductsByCluster } =
    useGetByCluster();

  useEffect(() => {
    if (clusterId) getProductsByCluster({ clusterId });
  }, [clusterId]);

  if ((products && products.recordsFiltered === 0) || isErrorProducts) {
    return <SearchNotFound view="plp-not-found" type="cluster" />;
  }

  return (
    <PLPContext.Provider
      value={{
        isLoadingProducts,
        facets: products?.facets || [],
        products: products?.productList || [],
        recordsFiltered: products?.recordsFiltered || 0,
      }}
    >
      <PageContainer>
        <Products />
      </PageContainer>
    </PLPContext.Provider>
  );
};

const ClusterPLPPage = () => {
  return (
    <PLPLayout>
      <PLPContent />
    </PLPLayout>
  );
};

export default ClusterPLPPage;
