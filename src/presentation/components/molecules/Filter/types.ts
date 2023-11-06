export type Order =
  | 'OrderByPriceASC'
  | 'OrderByPriceDESC'
  | 'OrderByBestDiscountDESC'
  | 'OrderByReleaseDateDESC';

export type Props = {
  defaultValue?: Order;
  onChange?: (order: Order) => void;
};
