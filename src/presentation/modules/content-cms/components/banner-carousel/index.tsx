import Banner from '@components/organisms/Banner/Banner';
import { Content } from '@entities/cms';
import React from 'react';
import styles from '../../styles.module.css';

const BannerCarousel = (content: Content) => {
  const { items } = content;

  if (!items) return null;

  return (
    <div className={styles['banner-carousel']}>
      <Banner items={items} />
    </div>
  );
};

export default BannerCarousel;
