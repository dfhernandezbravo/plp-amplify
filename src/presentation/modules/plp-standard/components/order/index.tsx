import { useDevice } from '@cencosud-ds/easy-design-system';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import Order from '@components/organisms/Order/Order';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import styles from '../../styles.module.css';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setLayout, setSort } from '@store/slices/products';
interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const OrderCMS = () => {
  const { device } = useDevice();
  const { query } = useRouter();
  const { category } = query as PageUrlQuery;
  const { sort, layout } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const getTitle = (): string => {
    if (!category) return '';

    const regex = /-/g;
    return category.replace(regex, ' ');
  };

  const onFilterChange = (order: OrderOptions) => {
    dispatch(setSort(order));
  };

  const onDisplayChange = (layout: LayoutOptions) => {
    dispatch(setLayout(layout));
  };

  return (
    <div className={styles.order}>
      <Order
        onChange={() => {}}
        isMobile={device === 'Phone'}
        queryParams={{
          order: sort,
          layout,
        }}
        title={getTitle()}
        onDisplayChange={onDisplayChange}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default OrderCMS;
