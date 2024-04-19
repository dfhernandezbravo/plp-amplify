import { Content } from '@entities/cms';
import { Facets } from '@entities/product/facets.entity';
import { Product } from '@entities/product/product.entity';
import { createContext } from 'react';

interface PLPContextProps {
  isLoadingProducts: boolean;
  isLoadingCMS?: boolean;
  products: Product[];
  facets: Facets[];
  recordsFiltered: number;
  contentCMS?: Content[] | null;
  getProductsByCluster?: ({ clusterId }: { clusterId: string }) => void;
}

const PLPContext = createContext<PLPContextProps>({
  isLoadingCMS: true,
  isLoadingProducts: true,
  products: [],
  facets: [],
  recordsFiltered: 0,
  contentCMS: [],
});

export default PLPContext;
