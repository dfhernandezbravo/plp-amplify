import { Facets, ValueFacets } from '@entities/product/facets.entity';
import React, { Dispatch, SetStateAction } from 'react';

interface FacetsContextProps {
  facet: Facets | null;
  setFacet: Dispatch<SetStateAction<Facets | null>>;
  filters: ValueFacets[];
  setFilters: Dispatch<SetStateAction<ValueFacets[]>>;
}

const FacetMobileContext = React.createContext<FacetsContextProps>({
  facet: null,
  setFacet: () => {},
  filters: [],
  setFilters: () => {},
});

export default FacetMobileContext;
