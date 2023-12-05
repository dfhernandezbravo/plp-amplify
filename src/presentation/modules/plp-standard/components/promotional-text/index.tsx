import React from 'react';
import styles from '../../styles.module.css';
import PromotionalText from '@components/molecules/PromotionalText';
import { Content } from '@entities/cms';

const PromotionalTextCMS = (content: Content) => {
  const { description, title } = content;

  if (!description) return null;

  return (
    <div className={styles['promotional-text']}>
      <PromotionalText title={title} description={description} />
    </div>
  );
};

export default PromotionalTextCMS;
