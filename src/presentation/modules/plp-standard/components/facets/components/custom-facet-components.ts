import { Facets } from '@entities/product/facets.entity';
import FacetPrice from './facet-price';
import FacetColor from './facet-color';

type R<P = Record<string, never>> = React.FC<P>;

export interface CustomFacetComponent {
  [key: string]: R<{ facet: Facets }>;
}

const CustomFacetComponents: CustomFacetComponent = {
  price: FacetPrice,
  color: FacetColor,
};

export default CustomFacetComponents;
