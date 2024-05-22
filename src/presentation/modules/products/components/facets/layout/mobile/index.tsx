import { Facets, ValueFacets } from '@entities/product/facets.entity';
//import { useLockBodyScroll } from '@uidotdev/usehooks'; -> TODO: no existe la funcion
import PLPContext from '@presentation/context/plp-context';
import { useContext, useEffect, useState } from 'react';
import FacetMobileContext from '../../context/facets-context-mobile';
import FacetButtons from '../../sections/facets-buttons';
import FacetsHeader from '../../sections/facets-header';
import FacetListMobile from '../../sections/facets-list';
import FacetsValue from '../../sections/facets-value';
import {
  ButtonSection,
  ContentSection,
  FacetsContainerMobile,
  HeaderSection,
} from './styles';
import LogisticFacets from '../../components/logistic-facets/logistic-facets';

const FacetsMobile = () => {
  const { facets } = useContext(PLPContext);
  const [facet, setFacet] = useState<Facets | null>(null);
  const [filters, setFilters] = useState<ValueFacets[]>([]);
  //useLockBodyScroll();

  useEffect(() => {
    facets.forEach((facet) => {
      if (!facet.key.includes('category')) {
        const filterSelecteds = facet.values.filter((value) => value.selected);
        setFilters((prevState) => [...prevState, ...filterSelecteds]);
      }
    });
  }, [facets]);

  return (
    <FacetMobileContext.Provider
      value={{ facet, filters, setFacet, setFilters }}
    >
      <FacetsContainerMobile className="fade-in">
        <HeaderSection>
          <FacetsHeader />
        </HeaderSection>

        <ContentSection>
          <LogisticFacets />
          {facet ? <FacetsValue /> : <FacetListMobile />}
        </ContentSection>

        <ButtonSection>
          <FacetButtons />
        </ButtonSection>
      </FacetsContainerMobile>
    </FacetMobileContext.Provider>
  );
};

export default FacetsMobile;
