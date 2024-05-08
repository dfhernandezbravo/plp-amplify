import PLPContext from '@presentation/context/plp-context';
import { useContext } from 'react';
import { LogisticButtons } from './components/logistic-buttons';
import { LogisticButtonBoxWrapper } from './styles';
import { DefaultButton } from './components/default-button';

export const LogisticButtonBox = () => {
  const { facets } = useContext(PLPContext);

  // Props
  if (!facets) return;

  const filteredLogisticFacets = facets?.filter(
    (f) => !f.hidden && f.key === 'logistic-facet',
  );

  return (
    <LogisticButtonBoxWrapper
      $onlyOne={filteredLogisticFacets?.[0]?.values?.length === 1 || true}
    >
      {filteredLogisticFacets?.length === 0 ? (
        <DefaultButton />
      ) : (
        <LogisticButtons logisticFacets={filteredLogisticFacets?.[0]} />
      )}
    </LogisticButtonBoxWrapper>
  );
};
