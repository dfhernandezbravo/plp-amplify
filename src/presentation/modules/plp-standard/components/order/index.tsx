import Order from '@components/organisms/Order/Order';
import styles from '../../styles.module.css';
import React from 'react';
import { useDevice } from '@cencosud-ds/easy-design-system';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const OrderCMS = () => {
  const { device } = useDevice();
  const { query } = useRouter();

  const { category } = query as PageUrlQuery;

  const getTitle = (): string => {
    if (!category) return '';

    const regex = /-/g;
    return category.replace(regex, ' ');
  };

  return (
    <div className={styles.order}>
      <Order
        onChange={() => {}}
        isMobile={device === 'Phone'}
        title={getTitle()}
      ></Order>
    </div>
  );
};

export default OrderCMS;
