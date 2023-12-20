import useQueryParams from '@hooks/use-query-params';

function removeSpecificBlock(filter: string, payload: string) {
  const escapedBlock = payload.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`/?${escapedBlock}`);
  return filter.replace(regex, '');
}

export default function useFilters(currentFilter: string) {
  const { updateQueryParams } = useQueryParams();

  const addFilter = (newFilter: string) => {
    const newCurrentFilter = currentFilter
      ? `${currentFilter}/${newFilter}`
      : newFilter;
    updateQueryParams({ filter: newCurrentFilter });
  };

  const removeFilter = (oldFilter: string) => {
    const newCurrentFilter = removeSpecificBlock(currentFilter, oldFilter);
    updateQueryParams({ filter: newCurrentFilter });
  };

  return {
    addFilter,
    removeFilter,
  };
}
