import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useRouter } from 'next/router';
import React from 'react';
import useFilters from '../../../hooks/use-filters';
import { FaceItemButton, FacetItemContainer } from './style';
import Checkbox from '@components/atoms/Checkbox';

interface Props {
  facet: Facets;
}

const FacetItemDesktop: React.FC<Props> = ({ facet }) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');

  const handleOnClick = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  return (
    <FacetItemContainer>
      {facet.values
        .toSorted((a, b) => b.quantity - a.quantity)
        .map((value, index) => (
          <FaceItemButton
            key={`${value.id}-${index}`}
            onClick={() => handleOnClick(value)}
          >
            <Checkbox
              checked={value.selected}
              label={`${value.name} (${value.quantity})`}
            />
          </FaceItemButton>
        ))}
    </FacetItemContainer>
  );
};

export default FacetItemDesktop;
