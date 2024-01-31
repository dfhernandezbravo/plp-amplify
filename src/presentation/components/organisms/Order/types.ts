import { LayoutOptions } from '@components/molecules/Display/types';
import { OrderOptions } from '@components/molecules/Filter/types';

// TODO: Agregar variables de dominio para estos casos
export type QueryParams = {
  layout?: LayoutOptions;
  event?: 'order' | 'filter';
  order?: OrderOptions;
};

export type Props = {
  count?: number;
  title?: string;
  isMobile?: boolean;
  queryParams?: QueryParams;
  isShowButtonBox?: boolean;
  onChange: (queryParams: QueryParams) => void;
  onFilterChange: (order: OrderOptions) => void;
  onDisplayChange: (layout: LayoutOptions) => void;
};
