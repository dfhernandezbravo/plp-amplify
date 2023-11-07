import { Option } from '@components/atoms/Select';

// TODO: Agregar esto a variables de dominio
export const options: Option[] = [
  { label: 'Destacados', value: '' },
  { label: 'Precios más bajos', value: 'OrderByPriceASC' },
  { label: 'Precios más altos', value: 'OrderByPriceDESC' },
  { label: 'Mejor descuento', value: 'OrderByBestDiscountDESC' },
  { label: 'Nuevos productos', value: 'OrderByReleaseDateDESC' },
];
