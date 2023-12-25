import { Layout } from '@cencosud-ds/easy-design-system';
import { Facets } from '@entities/product/facets.entity';
import React from 'react';
import FacetItemDesktop from './facet-item-desktop';
import FacetItemMobile from './facet-item-mobile';

interface Props {
  facet: Facets;
}

const FacetItem: React.FC<Props> = ({ facet }) => {
  return (
    <>
      <Layout is={['Desktop']}>
        <FacetItemDesktop facet={facet} />
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <FacetItemMobile facet={facet} />
      </Layout>
    </>
  );
};

export default FacetItem;
