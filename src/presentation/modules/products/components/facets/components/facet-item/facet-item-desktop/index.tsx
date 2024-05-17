import Checkbox from '@components/atoms/checkbox';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@entities/plp-query-params';
import { useRouter } from 'next/router';
import React from 'react';
import useFilters from '../../../hooks/use-filters';
import { FaceItemButton, FacetItemContainer, ShowMoreButton } from './style';

interface Props {
  facet: Facets;
}

const FacetItemDesktop: React.FC<Props> = ({ facet }) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');
  const [showMore, setShowMore] = React.useState(false);
  const [facetList, setFacetList] = React.useState<ValueFacets[]>(
    facet.values?.slice(0, 5) || [],
  );

  const handleOnClick = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  const handleShowMoreBtn = (value: boolean) => {
    setShowMore(value);
    if (value) {
      setFacetList(facet.values);
    } else {
      setFacetList(facet.values.slice(0, 5));
    }
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
        {facetList
          .toSorted((a, b) => b.quantity - a.quantity)
          .map((value, index) => (
            <FaceItemButton
              data-id={`facet-item-${value.name
                .toLowerCase()
                .replace(' ', '-')}`}
              key={`${value.id}-${index}`}
              onClick={() => handleOnClick(value)}
            >
              <Checkbox
                style={{ marginTop: 3, marginBottom: 3 }}
                checked={value.selected}
                label={`${sliceName(value.name)} (${value.quantity})`}
              />
            </FaceItemButton>
          ))}
      </FacetItemContainer>
      {facet.values.length > 5 && (
        <ShowMoreButton onClick={() => handleShowMoreBtn(!showMore)}>
          {!showMore ? 'Mostrar más' : 'Mostrar menos'}
        </ShowMoreButton>
      )}
    </>
  );
};

export default FacetItemDesktop;
