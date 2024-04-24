// import { useDevice } from '@ccom-easy-design-system/hooks.use-device';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { QueryParams } from '@components/organisms/Order';
import Order from '@components/organisms/Order/Order';
import PlpQueryParams from '@entities/plp-query-params';
import useQueryParams from '@hooks/use-query-params';
import PLPContext from '@presentation/context/plp-context';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  setLayout,
  setOpenFacetsMobile,
  setOpenOrderMobile,
  setSort,
} from '@store/slices/products';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import OrderSkeleton from './components/skeleton';

const OrderCMS = () => {
  const { query } = useRouter();
  const { category, sort, layout } = query as PlpQueryParams;
  const { recordsFiltered, isLoadingProducts } = useContext(PLPContext);
  const { isOpenOrderMobile } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { updateQueryParams } = useQueryParams();

  const getTitle = (): string => {
    if (!category) return '';

    const regex = /-/g;
    return category.replace(regex, ' ');
  };

  const onFilterChange = (order: OrderOptions) => {
    dispatch(setSort(order));
    updateQueryParams({ sort: order });
  };

  const onDisplayChange = (layout: LayoutOptions) => {
    dispatch(setLayout(layout));
    updateQueryParams({ layout });
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

  if (isLoadingProducts) return <OrderSkeleton />;

  return (
    <div>
      <Order
        onChange={onChange}
        queryParams={{
          order: sort || 'orders:desc',
          layout: layout || 'grid',
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
