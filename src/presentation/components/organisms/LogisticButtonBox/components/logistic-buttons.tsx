import { Facets, ValueFacets } from '@entities/product/facets.entity';
import { Toggle } from '@components/atoms/toggle/toggle';
import { FacetWrapper } from './styles';
import useFilters from '@modules/products/components/facets/hooks/use-filters';
import { useRouter } from 'next/router';
import PlpQueryParams from '@entities/plp-query-params';

export const LogisticButtons = ({
  logisticFacets,
}: {
  logisticFacets: Facets;
}) => {
  const { query } = useRouter();
  const { filter } = query as PlpQueryParams;
  const { addFilter, removeFilter } = useFilters(filter || '');

  if (!logisticFacets) return null;

  const handleFilter = (value: ValueFacets) => {
    const newFilter = `${value.key}/${value.value}`;
    if (value.selected) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  };

  return logisticFacets?.values?.map((facet, index) => {
    if (index <= 1) {
      return (
        <FacetWrapper
          key={`${facet?.name}-button-box`}
          onClick={() => handleFilter(facet)}
        >
          <Toggle
            className="logistic-facet-switch"
            name={facet?.name}
            defaultValue={facet.selected}
          >
            {facet?.name}
          </Toggle>
        </FacetWrapper>
      );
    }
    return <>+</>;
  });
};
