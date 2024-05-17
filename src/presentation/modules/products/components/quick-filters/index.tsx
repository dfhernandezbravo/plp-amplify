import { Item } from '@entities/cms';
import React, { useContext } from 'react';
import QuickFilters from '@components/organisms/QuickFilters/QuickFilters';
import { useRouter } from 'next/router';
import PLPContext from '@presentation/context/plp-context';

const QUICK_FILTER_COMPONENT = 'quick-filter-plp';

const QuickFiltersCMS = () => {
  const router = useRouter();
  const { contentCMS, isLoadingCMS } = useContext(PLPContext);

  if (isLoadingCMS) return null;

  const quickFilterComponent = contentCMS?.find(
    (content) => content.component === QUICK_FILTER_COMPONENT,
  );

  if (!quickFilterComponent) return null;

  const handleOnClick = (value: Item) => {
    const { redirectTo } = value;

    router.push(redirectTo);
  };

  return (
    <div>
      <QuickFilters
        filters={quickFilterComponent.items || []}
        ring
        onClick={handleOnClick}
        currentUrl={router.asPath}
      />
    </div>
  );
};

export default QuickFiltersCMS;
