import { Content } from '@entities/cms';
import { Facets } from '@entities/product/facets.entity';
import { Product } from '@entities/product/product.entity';
import { createContext } from 'react';

interface PLPContextProps {
  isLoadingProducts: boolean;
  isLoadingCMS: boolean;
  products: Product[];
  facets: Facets[];
  contentCMS: Content[] | null;
  refreshProducts: () => void;
}

const PLPContext = createContext<PLPContextProps>({
  isLoadingCMS: false,
  isLoadingProducts: false,
  products: [],
  facets: [],
  contentCMS: [],
  refreshProducts: () => {},
});

export default PLPContext;
