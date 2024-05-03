import { Facets } from '@entities/product/facets.entity';
import React from 'react';
import FacetPriceDesktop from './facet-price-desktop';
import FacetPriceMobile from './facet-price-mobile';
import { Layout } from '@components/atoms/layout';

interface Props {
  facet: Facets;
}

const FacetPrice: React.FC<Props> = ({ facet }) => {
  return (
    <>
      <Layout is={['Desktop']}>
        <FacetPriceDesktop facet={facet} />
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <FacetPriceMobile facet={facet} />
      </Layout>
    </>
  );
};

export default FacetPrice;
