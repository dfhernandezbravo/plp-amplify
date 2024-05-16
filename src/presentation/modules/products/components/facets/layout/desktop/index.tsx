import Accordion from '@components/atoms/accordion';
import { Facets } from '@entities/product/facets.entity';
import PLPContext from '@presentation/context/plp-context';
import { useContext } from 'react';
import CustomFacetComponents from '../../components/custom-facet-components';
import FacetItem from '../../components/facet-item';
import FacetSkeleton from '../../components/skeleton';
import FacetsHeader from '../../sections/facets-header';
import { FacetsContainer } from './styles';

const FacetsDesktop = () => {
  const { facets, isLoadingProducts } = useContext(PLPContext);

  const ComponentRender = ({ facet }: { facet: Facets }) => {
    const Component = CustomFacetComponents[facet.key];
    if (!Component) return <FacetItem facet={facet} />;
    return Element && <Component facet={facet} />;
  };

  const handleRenderFacets = (facet: Facets) => {
    /*
     * Utilizar esta funcion para filtrados remotos desde el CMS por reglas de negocio
     */
    if (!facet) return null;
    const key = facet.key;
    switch (key) {
      case 'category-2':
      case 'category-1':
        return null;
      default:
        return facet;
    }
  };

  if (isLoadingProducts) {
    return <FacetSkeleton />;
  }

  return (
    <FacetsContainer className="fade-in">
      <FacetsHeader />
      {facets?.length > 0 &&
        facets
          ?.filter((f) => !f.hidden)
          ?.map((facet) => {
            const filteredFacet = handleRenderFacets(facet);
            return (
              <div key={facet.key}>
                {filteredFacet && (
                  <Accordion title={facet.name} isBeginOpen>
                    <ComponentRender facet={facet} />
                  </Accordion>
                )}
              </div>
            );
          })}
    </FacetsContainer>
  );
};

export default FacetsDesktop;
