// import { useDevice } from '@ccom-easy-design-system/hooks.use-device';
import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';
import { QueryParams } from '@components/organisms/Order';
import Order from '@components/organisms/Order/Order';
import PLPContext from '@presentation/context/plp-context';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  setLayout,
  setOpenFacetsMobile,
  setOpenOrderMobile,
  setSort,
} from '@store/slices/products';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useContext } from 'react';
import OrderSkeleton from './components/skeleton';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const OrderCMS = () => {
  const { query } = useRouter();
  const { category } = query as PageUrlQuery;
  const { recordsFiltered, isLoadingProducts } = useContext(PLPContext);
  const { sort, layout, isOpenOrderMobile } = useAppSelector(
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

  if (isLoadingProducts) return <OrderSkeleton />;

  return (
    <div>
      <Order
        onChange={onChange}
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
