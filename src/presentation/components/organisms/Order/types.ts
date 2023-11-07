// TODO: Agregar variables de dominio para estos casos
export type QueryParams = {
  layout?: 'grid' | 'list';
  event?: 'order' | 'filter';
  order?:
    | 'OrderByPriceASC'
    | 'OrderByPriceDESC'
    | 'OrderByBestDiscountDESC'
    | 'OrderByReleaseDateDESC';
};

export type Props = {
  count?: number;
  title?: string;
  isMobile?: boolean;
  isShowButtonBox?: boolean;
  defaultQueryParams?: QueryParams;
  onChange: (queryParams: QueryParams) => void;
};
