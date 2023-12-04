import Order from '@components/organisms/Order/Order';
import styles from '../../styles.module.css';
import React from 'react';

const OrderCMS = () => {
  return (
    <div className={styles.order}>
      <Order onChange={() => {}}></Order>
    </div>
  );
};

export default OrderCMS;
