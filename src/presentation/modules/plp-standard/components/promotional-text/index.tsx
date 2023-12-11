import React from 'react';
import styles from '../../styles.module.css';
import PromotionalText from '@components/molecules/PromotionalText';
import { Content } from '@entities/cms';
import { useDevice } from '@cencosud-ds/easy-design-system';

const PromotionalTextCMS = (content: Content) => {
  const { description, title } = content;
  const { device } = useDevice();

  if (!description) return null;

  return (
    <div className={styles['promotional-text']}>
      <PromotionalText
        title={title}
        description={description}
        isMobile={device === 'Phone'}
      />
    </div>
  );
};

export default PromotionalTextCMS;
