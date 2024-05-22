import React, { useContext } from 'react';
import {
  LogisticFacetsContainer,
  TitleHeader,
  FacetsContainer,
} from './styles';
import FacetsRegionalizer from './components/facets-regionalizer/facets-regionalizer';
import PLPContext from '@presentation/context/plp-context';
import { LogisticFacetsItems } from './components/logistic-facets-items/logistic-facets-items';

const LogisticFacets = () => {
  const { facets, isLoadingProducts } = useContext(PLPContext);

  if (isLoadingProducts) return null;

  const filteredLogisticFacets = facets?.filter(
    (f) => !f.hidden && f.key === 'logistic-facet',
  )?.[0];

  return (
    <LogisticFacetsContainer>
      <TitleHeader>Entrega</TitleHeader>
      <FacetsContainer>
        <FacetsRegionalizer />
        <LogisticFacetsItems facets={filteredLogisticFacets} />
      </FacetsContainer>
    </LogisticFacetsContainer>
  );
};

export default LogisticFacets;
