import { themeEasy } from '@cencosud-ds/easy-design-system';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useRouter } from 'next/router';
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import useFilters from '../../../hooks/use-filters';
import { FaceItemButton, FacetItemContainer } from './style';

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
            {value.selected ? (
              <MdCheckBox color={themeEasy.colors.success.main} size={24} />
            ) : (
              <MdCheckBoxOutlineBlank size={24} />
            )}

            <span>
              {value.name} ({value.quantity})
            </span>
          </FaceItemButton>
        ))}
    </FacetItemContainer>
  );
};

export default FacetItemDesktop;
