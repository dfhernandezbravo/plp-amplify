import Textfield from '@components/atoms/textfield';
import { Facets, ValueFacets } from '@entities/product/facets.entity';
import React, { useContext, useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import FacetMobileContext from '../../../context/facets-context-mobile';
import { FacetValueButtonMobile } from './styles';

interface Props {
  facet: Facets;
}

const FacetItemMobile: React.FC<Props> = ({ facet }) => {
  const { filters, setFilters } = useContext(FacetMobileContext);
  const [valuesFacets, setValuesFacets] = useState<ValueFacets[]>(facet.values);

  const isSelected = (value: ValueFacets) =>
    Boolean(filters.find((filter) => filter.value === value.value));

  const handleOnClick = (value: ValueFacets) => {
    if (isSelected(value)) {
      setFilters(filters.filter((filter) => filter.value !== value.value));
    } else {
      setFilters((prevState) => [...prevState, value]);
    }
  };

  const handleOnChangeTextField = (filterText: string) => {
    if (filterText === '') setValuesFacets(facet.values);

    const valuesFiltered = facet.values.filter((filter) =>
      filter.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    setValuesFacets(valuesFiltered);
  };

  return (
    <div>
      <Textfield
        label={`Buscar ${facet.name}`}
        placeholder=""
        onChange={(e) => handleOnChangeTextField(e.target.value)}
        fullwidth
      />
      {valuesFacets
        .toSorted((a, b) => b.quantity - a.quantity)
        .map((value, index) => (
          <FacetValueButtonMobile
            key={`${value.id}-${index}`}
            onClick={() => handleOnClick(value)}
          >
            {isSelected(value) ? (
              <MdCheckBox color="#14B870" size={24} />
            ) : (
              <MdCheckBoxOutlineBlank size={24} />
            )}

            <span>
              {value.name} ({value.quantity})
            </span>
          </FacetValueButtonMobile>
        ))}
    </div>
  );
};

export default FacetItemMobile;
