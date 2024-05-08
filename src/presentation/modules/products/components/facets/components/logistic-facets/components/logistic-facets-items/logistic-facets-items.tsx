import React from 'react';
import {
  Facets as FacetType,
  ValueFacets,
} from '@entities/product/facets.entity';
import { FacetWrapper } from './styles';
import { Toggle } from '@components/atoms/toggle/toggle';
import { useRegionalizer } from '@modules/products/components/facets/hooks/use-regionalizer';
import useDevice from '@hooks/use-device';
import { useSlugify } from '@hooks/use-slugify';
import { useAppDispatch } from '@store/hooks';
import { setOpenFacetsMobile } from '@store/slices/products';
import Icon from '@components/atoms/Icon';
import useFilters from '@modules/products/components/facets/hooks/use-filters';
import { useRouter } from 'next/router';
import PlpQueryParams from '@entities/plp-query-params';

type IconType = 'retiro-en-tienda' | 'envio-express' | 'envio-gratis';

export const LogisticFacetsItems = ({ facets }: { facets: FacetType }) => {
  const { openRegionalizer } = useRegionalizer();
  const { device } = useDevice();
  const dispatch = useAppDispatch();
  const { slugify } = useSlugify();
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');

  const handleFilter = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  const handleOpenRegionalizer = () => {
    if (device === 'Phone' || device === 'Tablet')
      dispatch(setOpenFacetsMobile(false));

    openRegionalizer();
  };

  if (!facets)
    return (
      <FacetWrapper onClick={handleOpenRegionalizer}>
        <Icon id="envio-express" name="envio-express" />
        <Toggle className="logistic-facet-switch" disabled name="Envío express">
          <span>Envío express</span>
        </Toggle>
      </FacetWrapper>
    );

  return facets.values.map((facet) => (
    <FacetWrapper key={facet.key}>
      <Icon id={facet?.name} name={slugify(facet?.name) as IconType} />
      <Toggle
        className="logistic-facet-switch"
        name={facet.name}
        defaultValue={facet.selected}
        onChange={() => handleFilter(facet)}
      >
        {facet.name}
      </Toggle>
    </FacetWrapper>
  ));
};
