import { Button, themeEasy } from '@cencosud-ds/easy-design-system';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import useFilters from '../../../hooks/use-filters';
import {
  FaceItemButton,
  FacetItemContainer,
} from '../../facet-item/facet-item-desktop/style';
import { PriceInputContainer, TextfieldPrice } from './styles';
const { format } = require('number-currency-format-2');

interface Props {
  facet: Facets;
}

const FacetPriceDesktop: React.FC<Props> = ({ facet }) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const onClickPriceRangeItem = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.range.from}:${value.range.to}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  const onClickPriceRangeUser = () => {
    let from = minValue;
    let to = maxValue;

    if (minValue === '') {
      from = facet.values[0].range.from.toString();
    }

    if (maxValue === '') {
      to = facet.values.at(-1)?.range.to.toString() || '';
    }

    if (parseInt(minValue) > parseInt(maxValue)) {
      from = maxValue;
      to = minValue;
    }

    const newFilter = `price/${from}:${to}`;
    addFilter(newFilter);
  };

  const formatPrice = (price: number) => {
    return format(price, {
      thousandSeparator: '.',
      decimalSeparator: ',',
      showDecimals: 'IF_NEEDED',
    });
  };

  return (
    <FacetItemContainer>
      <PriceInputContainer>
        <TextfieldPrice
          placeholder="Mínimo"
          onChange={(e) => setMinValue(e.target.value)}
          type="number"
        />
        <TextfieldPrice
          placeholder="Máximo"
          type="number"
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <Button
          variant="link"
          label="Aplicar"
          size="compact"
          fullwidth={false}
          onClick={onClickPriceRangeUser}
        />
      </PriceInputContainer>

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
            ${formatPrice(value.range.from)} - ${formatPrice(value.range.to)} (
            {value.quantity})
          </span>
        </FaceItemButton>
      ))}
    </FacetItemContainer>
  );
};

export default FacetPriceDesktop;
