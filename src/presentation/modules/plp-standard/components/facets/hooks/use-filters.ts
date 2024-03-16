import useQueryParams from '@hooks/use-query-params';

function removeSpecificBlock(filter: string, payload: string) {
  const escapedBlock = payload.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`/?${escapedBlock}`);
  return filter.replace(regex, '');
}

export default function useFilters(currentFilter: string) {
  const { updateQueryParams } = useQueryParams();

  const addFilter = (newFilter: string, evaluateDuplicate?: boolean) => {
    let currentFilterPath = currentFilter;
    if (evaluateDuplicate) {
      const keyFilter = newFilter.split('/')?.[0];
      if (currentFilter?.includes(keyFilter)) {
        const filterToRemove =
          keyFilter + currentFilter.match(/\/\d+:\d+/)?.[0] || '';
        currentFilterPath = removeSpecificBlock(
          currentFilterPath,
          filterToRemove,
        );
      }
    }
    const newCurrentFilter = currentFilterPath
      ? `${currentFilterPath}/${newFilter}`
      : newFilter;
    updateQueryParams({ filter: newCurrentFilter, page: '1' });
  };

  const removeFilter = (oldFilter: string) => {
    const newCurrentFilter = removeSpecificBlock(currentFilter, oldFilter);
    updateQueryParams({ filter: newCurrentFilter, page: '1' });
  };

  return {
    addFilter,
    removeFilter,
  };
}
