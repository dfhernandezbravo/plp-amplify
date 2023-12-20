import { Facets } from '@entities/product/facets.entity';
import React from 'react';

interface Props {
  facet: Facets;
}

const FacetPrice: React.FC<Props> = () => {
  return <div>FacetPrice</div>;
};

export default FacetPrice;
