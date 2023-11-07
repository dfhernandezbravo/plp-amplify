// TODO: Agregar variables de dominio para estos casos
export type QueryParams = {
  layout?: 'grid' | 'list';
  order?:
    | 'OrderByPriceASC'
    | 'OrderByPriceDESC'
    | 'OrderByBestDiscountDESC'
    | 'OrderByReleaseDateDESC';
};

export type Props = {
  mobile?: boolean;
  defaultQueryParams?: QueryParams;
  onChange: (queryParams: QueryParams) => void;
};
