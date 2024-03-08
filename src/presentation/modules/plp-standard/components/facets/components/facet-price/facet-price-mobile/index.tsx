import { Button, themeEasy } from '@cencosud-ds/easy-design-system';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import React, { useContext, useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import {
  FaceItemButton,
  FacetItemContainer,
} from '../../facet-item/facet-item-desktop/style';
import { PriceInputContainer, TextfieldPrice } from './styles';
import FacetMobileContext from '../../../context/facets-context-mobile';
import { setOpenFacetsMobile } from '@store/slices/products';
import { useAppDispatch } from '@store/hooks';
import useQueryParams from '@hooks/use-query-params';
const { format } = require('number-currency-format-2');

interface Props {
  facet: Facets;
}

const FacetPriceMobile: React.FC<Props> = ({ facet }) => {
  const { setFilters } = useContext(FacetMobileContext);

  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const dispatch = useAppDispatch();
  const { updateQueryParams } = useQueryParams();

  const handleOnClick = (value: ValueFacets) => {
    const newFilter: ValueFacets = {
      ...value,
      value: `${value.range.from}:${value.range.to}`,
    };

    dispatch(setOpenFacetsMobile(false));

    let filter = `${newFilter.key}/${newFilter.value}/`;
    updateQueryParams({ filter: filter });
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

    const value: ValueFacets = {
      quantity: 1,
      name: '',
      key: 'price',
      value: `${from}:${to}`,
      selected: true,
      id: '',
      href: '',
      range: {
        from: from ? parseInt(from) : 0,
        to: to ? parseInt(to) : 0,
      },
    };
    setFilters((prevState) => [...prevState, value]);
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
          onClick={() => handleOnClick(value)}
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

export default FacetPriceMobile;
