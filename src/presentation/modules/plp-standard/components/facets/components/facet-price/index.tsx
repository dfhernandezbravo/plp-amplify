import { Button, themeEasy } from '@cencosud-ds/easy-design-system';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useRouter } from 'next/router';
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import useFilters from '../../hooks/use-filters';
import {
  FaceItemButton,
  FacetItemContainer,
} from '../facet-item/facet-item-desktop/style';
import { TextfieldPrice } from './styles';

interface Props {
  facet: Facets;
}

const FacetPrice: React.FC<Props> = ({ facet }) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');

  const onClickPriceRangeItem = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.range.from}:${value.range.to}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  return (
    <FacetItemContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'red',
        }}
      >
        <TextfieldPrice label="" placeholder="Mínimo" />
        <TextfieldPrice label="" placeholder="Máximo" />
        <Button variant="link" label="Aplicar" />
      </div>
      {facet.values.map((value, index) => (
        <FaceItemButton
          key={`${value.id}-${index}`}
          onClick={() => onClickPriceRangeItem(value)}
        >
          {value.selected ? (
            <MdCheckBox color={themeEasy.colors.success.main} size={24} />
          ) : (
            <MdCheckBoxOutlineBlank size={24} />
          )}

          <span>
            ${value.range.from} - ${value.range.to} ({value.quantity})
          </span>
        </FaceItemButton>
      ))}
    </FacetItemContainer>
  );
};

export default FacetPrice;
