import { Facets } from '@entities/product/facets.entity';
import React from 'react';

interface Props {
  facet: Facets;
}

const FacetColor = ({ facet }: Props) => {
  return <div>FacetColor</div>;
};

export default FacetColor;
