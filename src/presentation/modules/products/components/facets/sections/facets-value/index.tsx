import { Facets } from '@entities/product/facets.entity';
import CustomFacetComponents from '@modules/products/components/facets/components/custom-facet-components';
import FacetItem from '@modules/products/components/facets/components/facet-item';
import FacetMobileContext from '@modules/products/components/facets/context/facets-context-mobile';
import { useContext } from 'react';

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
