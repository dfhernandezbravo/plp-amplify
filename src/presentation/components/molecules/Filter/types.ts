export type OrderOptions =
  | 'price:asc'
  | 'price:desc'
  | 'discount:desc'
  | 'release:desc'
  | 'orders:desc';

export type Props = {
  defaultValue?: OrderOptions;
  onChange?: (order: OrderOptions) => void;
};
