import { Content, Item } from '@entities/cms';
import React from 'react';
import styles from '../../styles.module.css';
import QuickFilters from '@components/organisms/QuickFilters/QuickFilters';
import { useRouter } from 'next/router';

const QuickFiltersCMS = ({ items }: Content) => {
  const router = useRouter();

  const handleOnClick = (value: Item) => {
    const { query } = router;
    const { department, category, filter } = query;
    const currentPath = `/${department}/${category}/${value.key}`;
    router.push({
      pathname: currentPath,
      query: { filter },
    });
  };

  return (
    <div className={styles.quickfilters}>
      <QuickFilters
        filters={items || []}
        ring
        onClick={handleOnClick}
        currentUrl={router?.query?.product as string}
      />
    </div>
  );
};

export default QuickFiltersCMS;
