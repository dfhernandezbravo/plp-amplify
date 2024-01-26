import { useDevice } from '@cencosud-ds/easy-design-system';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import Order from '@components/organisms/Order/Order';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import styles from '../../styles.module.css';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  setLayout,
  setOpenFacetsMobile,
  setOpenOrderMobile,
  setSort,
} from '@store/slices/products';
import { QueryParams } from '@components/organisms/Order';
interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const OrderCMS = () => {
  const { device } = useDevice();
  const { query } = useRouter();
  const { category } = query as PageUrlQuery;
  const { sort, layout, recordsFiltered } = useAppSelector(
    (state) => state.products,
  );
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

  const onChange = (queryParams: QueryParams) => {
    const { event } = queryParams;
    if (event === 'filter') dispatch(setOpenFacetsMobile(true));
    if (event === 'order') dispatch(setOpenOrderMobile(true));
  };

  return (
    <div className={styles.order}>
      <Order
        onChange={onChange}
        isMobile={device === 'Phone'}
        queryParams={{
          order: sort,
          layout,
        }}
        title={getTitle()}
        onDisplayChange={onDisplayChange}
        onFilterChange={onFilterChange}
        count={recordsFiltered}
      />
    </div>
  );
};

export default OrderCMS;
