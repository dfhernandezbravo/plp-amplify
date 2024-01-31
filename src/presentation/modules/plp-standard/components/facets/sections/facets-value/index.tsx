import { Facets } from '@entities/product/facets.entity';
import CustomFacetComponents from '@modules/plp-standard/components/facets/components/custom-facet-components';
import FacetItem from '@modules/plp-standard/components/facets/components/facet-item';
import FacetMobileContext from '@modules/plp-standard/components/facets/context/facets-context-mobile';
import React, { useContext } from 'react';

const FacetsValue = () => {
  const { facet } = useContext(FacetMobileContext);

  const ComponentRender = ({ facet }: { facet: Facets }) => {
    const Component = CustomFacetComponents[facet.key];
    if (!Component) return <FacetItem facet={facet} />;
    return Element && <Component facet={facet} />;
  };

  if (!facet) return null;

  return (
    <div>
      <ComponentRender facet={facet} />
    </div>
  );
};

export default FacetsValue;
