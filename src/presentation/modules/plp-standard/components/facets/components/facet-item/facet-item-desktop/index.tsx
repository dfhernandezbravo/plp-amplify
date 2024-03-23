import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useRouter } from 'next/router';
import React from 'react';
import useFilters from '../../../hooks/use-filters';
import { FaceItemButton, FacetItemContainer, ShowMoreButton } from './style';
import Checkbox from '@components/atoms/Checkbox';

interface Props {
  facet: Facets;
}

const FacetItemDesktop: React.FC<Props> = ({ facet }) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');
  const [showMore, setShowMore] = React.useState(true);

  const handleOnClick = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  const handleShowMoreBtn = () => {
    setShowMore(!showMore);
  };

  const sliceName = (name: string): string => {
    if (name.length > 25) {
      return `${name.slice(0, 25)}...`;
    }
    return name;
  };

  return (
    <>
      <FacetItemContainer>
        {facet.values
          .toSorted((a, b) => b.quantity - a.quantity)
          .slice(0, 5)
          .map((value, index) => (
            <FaceItemButton
              data-id={`facet-item-${value.name
                .toLowerCase()
                .replace(' ', '-')}`}
              key={`${value.id}-${index}`}
              onClick={() => handleOnClick(value)}
            >
              <Checkbox
                checked={value.selected}
                label={`${sliceName(value.name)} (${value.quantity})`}
              />
            </FaceItemButton>
          ))}
      </FacetItemContainer>
      {facet.values.length > 5 && (
        <ShowMoreButton onClick={handleShowMoreBtn}>
          {showMore ? 'Mostrar más' : 'Mostrar menos'}
        </ShowMoreButton>
      )}
    </>
  );
};

export default FacetItemDesktop;
