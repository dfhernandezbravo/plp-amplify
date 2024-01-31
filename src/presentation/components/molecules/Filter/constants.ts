import { OptionsSelect } from '@ccom-easy-design-system/atoms.select/dist/types';

// TODO: Agregar esto a variables de dominio
export const options: OptionsSelect[] = [
  { label: 'Destacados', value: 'orders:desc' },
  { label: 'Precios más bajos', value: 'price:asc' },
  { label: 'Precios más altos', value: 'price:desc' },
  { label: 'Mejor descuento', value: 'discount:desc' },
  { label: 'Nuevos productos', value: 'release:desc' },
];
