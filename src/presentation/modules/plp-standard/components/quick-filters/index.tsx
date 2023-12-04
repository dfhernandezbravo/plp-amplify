import { Content } from '@entities/cms';
import React from 'react';
import styles from '../../styles.module.css';
import QuickFilters from '@components/organisms/QuickFilters/QuickFilters';

const QuickFiltersCMS = ({ items }: Content) => {
  return (
    <div className={styles.quickfilters}>
      <QuickFilters filters={items || []} ring onClick={() => {}} />
    </div>
  );
};

export default QuickFiltersCMS;
