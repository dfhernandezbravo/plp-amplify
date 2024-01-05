import Accordion from '@components/atoms/accordion';
import { Facets } from '@entities/product/facets.entity';
import { useAppSelector } from '@store/hooks';
import styles from '../../../../styles.module.css';
import CustomFacetComponents from '../../components/custom-facet-components';
import FacetItem from '../../components/facet-item';
import FacetsHeader from '../../sections/facets-header';
import { FacetsContainer } from './styles';

const FacetsDesktop = () => {
  const { facets } = useAppSelector((state) => state.products);

  const ComponentRender = ({ facet }: { facet: Facets }) => {
    const Component = CustomFacetComponents[facet.key];
    if (!Component) return <FacetItem facet={facet} />;
    return Element && <Component facet={facet} />;
  };

  const handleRenderFacets = (facet: Facets) => {
    /*
     * Utilizar esta funcion para filtrados remotos desde el CMS por reglas de negocio
     **/
    if (!facet) return null;
    return facet;
  };

  return (
    <div className={styles.facets}>
      <FacetsContainer>
        <FacetsHeader />
        {facets?.length > 0 &&
          facets
            ?.filter((f) => !f.hidden)
            ?.map((facet) => {
              const filterFacet = handleRenderFacets(facet);
              return (
                <div key={facet.key}>
                  {filterFacet && (
                    <Accordion title={facet.name} isBeginOpen>
                      <ComponentRender facet={facet} />
                    </Accordion>
                  )}
                </div>
              );
            })}
      </FacetsContainer>
    </div>
  );
};

export default FacetsDesktop;
