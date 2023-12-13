import { Option } from '@components/atoms/Select';

// TODO: Agregar esto a variables de dominio
export const options: Option[] = [
  { label: 'Destacados', value: 'orders:desc' },
  { label: 'Precios más bajos', value: 'price:asc' },
  { label: 'Precios más altos', value: 'price:desc' },
  { label: 'Mejor descuento', value: 'discount:desc' },
  { label: 'Nuevos productos', value: 'release:desc' },
];
