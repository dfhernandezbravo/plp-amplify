import { Facets } from '../facets.entity';
import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';

export type SearchByCategoriesRequest = {
  count?: number;
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
