// import { useDevice } from '@ccom-easy-design-system/hooks.use-device';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { QueryParams } from '@components/organisms/Order';
import Order from '@components/organisms/Order/Order';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  setLayout,
  setOpenFacetsMobile,
  setOpenOrderMobile,
  setSort,
} from '@store/slices/products';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import styles from '../../styles.module.css';
import { useDevice } from '@cencosud-ds/easy-design-system';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const OrderCMS = () => {
  const { device } = useDevice();
  const { query } = useRouter();
  const { category } = query as PageUrlQuery;
  const { sort, layout, recordsFiltered, isOpenOrderMobile } = useAppSelector(
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
    if (event === 'order') dispatch(setOpenOrderMobile(!isOpenOrderMobile));
  };

  const onBlur = () => {
    setTimeout(() => {
      dispatch(setOpenOrderMobile(false));
    }, 300);
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
        onBlur={onBlur}
      />
    </div>
  );
};

export default OrderCMS;
