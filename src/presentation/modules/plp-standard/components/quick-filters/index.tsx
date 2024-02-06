import { Content, Item } from '@entities/cms';
import React from 'react';
import styles from '../../styles.module.css';
import QuickFilters from '@components/organisms/QuickFilters/QuickFilters';
import { useRouter } from 'next/router';

const QuickFiltersCMS = ({ items }: Content) => {
  const router = useRouter();

  const handleOnClick = (value: Item) => {
    const { redirectTo } = value;

    router.push(redirectTo);
  };

  return (
    <div className={styles.quickfilters}>
      <QuickFilters
        filters={items || []}
        ring
        onClick={handleOnClick}
        currentUrl={router.asPath}
      />
    </div>
  );
};

export default QuickFiltersCMS;
