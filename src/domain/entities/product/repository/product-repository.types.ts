import { Product } from '@cencosud-ds/easy-design-system';
import { Facets } from '../facets.entity';

export type SearchByCategoriesRequest = {
  count: number;
  page: string;
  categories?: string;
  sort?: string;
  filter?: string;
  query?: string;
  clusterId?: string;
};

export type SearchByCategoriesResponse = {
  recordsFiltered: number;
  productList: Product[];
  facets: Facets[];
};
