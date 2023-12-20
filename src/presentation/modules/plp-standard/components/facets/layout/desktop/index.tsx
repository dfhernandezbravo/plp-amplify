import Accordion from '@components/atoms/accordion';
import { Facets } from '@entities/product/facets.entity';
import { useAppSelector } from '@store/hooks';
import styles from '../../../../styles.module.css';
import CustomFacetComponents from '../../components/custom-facet-components';
import FacetItem from '../../components/facet-item';
import FacetsHeader from '../../sections/header';
import { FacetsContainer } from './styles';

const FacetsDesktop = () => {
  const { facets } = useAppSelector((state) => state.products);

  const ComponentRender = ({ facet }: { facet: Facets }) => {
    const Component = CustomFacetComponents[facet.key];
    if (!Component) return <FacetItem facet={facet} />;
    return Element && <Component facet={facet} />;
  };

  return (
    <div className={styles.facets}>
      <FacetsContainer>
        <FacetsHeader />

        {facets.map((facet) => (
          <div key={facet.key}>
            {!facet.key.includes('category') && (
              <Accordion title={facet.name} isBeginOpen>
                <ComponentRender facet={facet} />
              </Accordion>
            )}
          </div>
        ))}
      </FacetsContainer>
    </div>
  );
};

export default FacetsDesktop;
