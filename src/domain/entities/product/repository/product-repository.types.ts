import { Product } from '@cencosud-ds/easy-design-system';
import { Facets } from '../facets.entity';

export type SearchByCategoriesRequest = {
  count: number;
  page: number;
  categories: string;
  sort?: string;
};

export type SearchByCategoriesResponse = {
  recordsFiltered: number;
  productList: Product[];
  facets: Facets[];
};
